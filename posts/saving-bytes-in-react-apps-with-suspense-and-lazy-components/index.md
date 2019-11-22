
# Saving Bytes in React Apps with Suspense and Lazy Components

## A staggered waterfall graph of the downloading of a code-split React app.

I’ve recently been building a client-side router for [React](https://www.yld.io/speciality/react-js/) that also abstracts the [Suspense API](https://reactjs.org/docs/code-splitting.html#suspense); that is, the router will provide particular components for the current path (i.e. `window.location.pathname`), but will also support Suspenseful components out-of-the-box. Unfortunately, it turns out that such an abstraction is not ideal due to its inflexibility, but I would nonetheless like to demonstrate how one can defer the loading of React components using this new feature.

## The App

![](1*A2iTe7siTJ6W8vbWCilREw.gif)

Ipsum.io is a React app that renders variations of the [Lorem Ipsum](https://en.wikipedia.org/wiki/Lorem_ipsum) placeholder text commonly used in design and publishing. Each “page” is a React component:

```tsx
import * as React from 'react';

export default () => (
  <section>
    <h2>Bacon</h2>

    <p>
      Bacon ipsum dolor amet kielbasa swine jerky, beef ribs sausage turducken
      short ribs strip steak venison buffalo meatball tongue. T-bone short loin
      frankfurter capicola buffalo. Kevin ham hock chuck tail kielbasa short
      loin pig beef ribs rump. Ham hock short loin tri-tip rump. Hamburger tail
      drumstick t-bone boudin ham, pork loin cow shankle. Meatball capicola
      burgdoggen jerky, frankfurter andouille corned beef.
    </p>
    {/* etc... */}
  </section>
);

```

These page components are mapped to particular paths via a `[Router`](https://github.com/jamesseanwright/react-lazy-routes/blob/7f4d8a8af0574f4af6881129fc0dffb91945c9c4/src/routing.tsx#L75) component, which provides its consumer with the page for the current path, accessible via a child [render prop](https://reactjs.org/docs/render-props.html):

```tsx
import { Router } from './routing';
import Nav from './Nav.jsx';
import * as pages from './pages';

const routes = new Map<string, React.ComponentType>([
  ['/', () => <p>Pick an Ipsum!</p>],
  ['/lorem', pages.Lorem],
  ['/bacon', pages.Bacon],
  ['/hipster', pages.Hipster],
  ['/office', pages.Office],
]);

const paths = [...routes.keys(), '/missing'].slice(1);

const App = () => (
  <Router routes={routes} initialPath="/" notFound={<p>Route not found</p>}>
    {Page => (
      <>
        <Nav paths={paths} />
        <Page />
      </>
    )}
  </Router>
);

```

For example: if the current path is `'/office'`, then the `Page` parameter passed to the child render prop will be `pages.Office`. If said path has no associated component, then the element passed via the `notFound` prop will be rendered.

The user can navigate between routes using the `Link` component; this renders a regular anchor element (i.e. `&lt;a /&gt;`), but also updates the `Router`‘s current page; it’s analogous to the `[Link` component provided by React Router](https://github.com/ReactTraining/react-router/blob/7ccbd7eb7ca603ba164ad75181a48038dd5f4321/packages/react-router-dom/docs/api/Link.md):

```tsx
import { Link } from './routing';

interface NavProps {
  paths: string[];
}

const getLinkText = (path: string) =>
  `${path[1].toUpperCase()}${path.slice(2)}`;

const Nav: React.FC<NavProps> = ({ paths }) => (
  <nav>
    <ul>
      {paths.map(path => (
        <li key={path}>
          <Link href={path}>{getLinkText(path)}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;

```

Note that I won’t be covering my router implementation in this article. It’s your standard [Context](https://reactjs.org/docs/context.html) and `[setState`](https://reactjs.org/docs/hooks-state.html) affair, which is already covered by many [excellent](https://tylermcginnis.com/build-your-own-react-router-v4/) [resources](https://medium.com/@stevenkoch/how-to-build-your-own-react-router-with-new-react-context-api-1647406b9b93). However, you are more than welcome to peruse [my approach](https://github.com/jamesseanwright/react-lazy-routes/blob/7f4d8a8af0574f4af6881129fc0dffb91945c9c4/src/routing.tsx) over at the [GitHub repository](https://github.com/jamesseanwright/react-lazy-routes).

## The Problem

![](1*3_GukAU3yO2rMpurBgC7nA.gif)

With this unified bundle, we’re forcing the client to download content that may never be rendered. Being able to defer the downloading of these various lipsums until the user navigates to their associated route would reduce initial JavaScript parse times and thus the time it takes for the app [to become interactive](https://developers.google.com/web/tools/lighthouse/audits/time-to-interactive). What if we could therefore split our app into respective chunks for each path?

![](1*QCtUUBbSOdz4Lksb2_FkVg.gif)

Code splitting in this fashion is nothing new; [Webpack](https://webpack.js.org/guides/code-splitting/#dynamic-imports) and [Rollup](https://rollupjs.org/guide/en/) have provided this out of the box for a while, and there are already various [component-based strategies for consuming these bundles with React](https://tylermcginnis.com/react-router-code-splitting/). However, React now provides first-class primitives to defer the loading of components until they’re absolutely needed.

## What is Suspense?

Given the context of this article, it may be tempting to view [Suspense](https://reactjs.org/docs/code-splitting.html#suspense) as a lazy loading mechanism, but this is inaccurate. Rather, it provides a means of… well… *suspending* the rendering of an element subtree until a particular operation completes, allowing React to render other parts of your app in the meantime; a fallback will be shown until said operation is fulfilled.

```tsx
import * as React from 'react';

const App = () => (
  <main>
    <h1>My App</h1>
    <React.Suspense fallback={<p>Loading...</p>}>
      <SomeSuspensefulComponent />
    </React.Suspense>
  </main>
);

```

In this example, whenever `SomeSuspensefulComponent` is suspended, the `fallback` *node *(this prop supports both React elements and JavaScript primitives such as strings) is rendered within that Suspense [*boundary](https://twitter.com/dan_abramov/status/1150842009403482113)* (i.e. `&lt;React.Suspense /&gt;`).

It’s even possible to nest Suspense boundaries:

```tsx
import * as React from 'react';

const App = () => (
  <main>
    <h1>My App</h1>
    <React.Suspense fallback={<LoadingSpinner />}>
      <Page />
      <React.Suspense fallback={<MiniSpinner />}>
        <PageMetadata />
      </React.Suspense>
    </React.Suspense>
  </main>
);

```

With Suspense, we can declaratively determine *what *to show in lieu of a particular component when it needs to be deferred.

## *How* can we Suspend Rendering?

It’s all well and good discussing the concept, but *how* can we trigger this? Looking into the implementation (as of July 2019) of one of the first-party components that supports Suspense is extremely telling:

```javascript
switch (status) {
  case Resolved: {
    const Component: T = result;
    return Component;
  }
  case Rejected: {
    const error: mixed = result;
    throw error;
  }
  case Pending: {
    const thenable: Thenable<T, mixed> = result;
    throw thenable;
  }
  default: {
    // ...
  }
}
```

Much like an [error boundary](https://reactjs.org/docs/error-boundaries.html) catching an error, Suspense will catch the `Promise` (`thenable`) thrown in the pending state and render the fallback until it’s resolved; React handles this by unwinding its internal render stack to the nearest Suspense boundary and then continuing to render the subsequent elements in the tree. Charles Stover’s [fetch-suspense](https://github.com/CharlesStover/fetch-suspense) Hook [throws a `Promise` returned by the fetch API in the same way](https://github.com/CharlesStover/fetch-suspense/blob/master/src/fetch-suspense.ts#L63) to inform Suspense that it should render the fallback.

## Lazy Loading Components with `React.lazy`

As of the original publication date of this article (July 2019), there is actually only a single component provided by the React team that supports Suspense: `[React.lazy`](https://reactjs.org/docs/code-splitting.html#reactlazy).

`React.lazy` takes a function that returns a `Promise`, which should resolve with a React component. Prior to resolving or rejecting, Suspense can tap into this `Promise` as demonstrated above to render a fallback:

```tsx
import * as React from 'react';

const Lorem = React.lazy(() => import('./pages/Lorem'));

const App = () => (
  <React.Suspense fallback={<div className="loading-spinner" />}>
    <Lorem />
  </React.Suspense>
);
```

Given that [dynamic imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#Dynamic_Imports) return `Promise`s, we can take advantage of the aforementioned, configuration-free code splitting provided by the likes of Webpack and Rollup *and* load these respective ES Module-compliant bundles only when required.

Following this approach, we can update Ipsum.io to take advantage of lazy routing:

```tsx
import * as React from 'react';
import Nav from './Nav.jsx';
import { Router } from './routing';

const routes = new Map<string, React.ComponentType>([
  ['/', () => <p>Pick an Ipsum!</p>],
  ['/lorem', React.lazy(() => import('./pages/Lorem'))],
  ['/bacon', React.lazy(() => import('./pages/Bacon'))],
  ['/hipster', React.lazy(() => import('./pages/Hipster'))],
  ['/office', React.lazy(() => import('./pages/Office'))],
]);

const paths = [...routes.keys(), '/missing'].slice(1);

const App = () => (
  <Router routes={routes} initialPath="/" notFound={<p>Route not found</p>}>
    {Page => (
      <>
        <Nav paths={paths} />
        <React.Suspense fallback={<div className="loading-spinner" />}>
          <Page />
        </React.Suspense>
      </>
    )}
  </Router>
);
```

Notice how we can also render non-Suspenseful components (the initial page rendered via the `/` path) within a Suspense boundary.

As a result of lazy loading, we’re able to reduce the initial bundle size, avoiding the downloading of unused bytes and reducing our [initial time to interactive](https://developers.google.com/web/tools/lighthouse/audits/time-to-interactive).

![](1*QCtUUBbSOdz4Lksb2_FkVg.gif)

Given the simplicity of the app, I’ve opted to exclude any metrics, but I hope that you can see the potential benefits this will introduce to much larger and feature-rich single-page apps.

## Summary

Suspending the rendering of various React subtrees is a big win for building slick user experiences, allowing the rest of the parent tree to be processed until certain prerequisite tasks are fulfilled. As Suspense rises in popularity, I’m certain we’ll witness all sorts of exciting and pragmatic usages of this feature, but for now, first-class lazy loading is a strong start.