
# Rolling your own Redux with React Hooks and Context

## A sneak peek of what lies ahead…

For managing shared state in complex JavaScript applications, [Redux](https://redux.js.org/) is undisputedly the most popular choice. At the time of writing, it has trumped the alternatives in the last three [*The State of JavaScript](https://stateofjs.com/)* surveys, has [the most GitHub stars of any JavaScript state container library](https://github.com/search?l=JavaScript&q=state&type=Repositories), and is [installed from npm over 2 million times a week](https://www.npmjs.com/package/redux).

I’ve recently been experimenting with alternative approaches to consuming and updating global state in [React](https://www.yld.io/speciality/react-js/) applications, [namely with RxJS](https://github.com/jamesseanwright/react-observable-state) (an approach on which I’ll be giving a talk at [FrontCon 2019](https://frontcon.lv/)). In order to connect my presentational components to an observable stream, I wrote a [higher-order component](https://reactjs.org/docs/higher-order-components.html) that subscribes to said stream when it mounts, and unsubscribes when it unmounts; I used this as an opportunity to give [Hooks](https://reactjs.org/docs/hooks-overview.html) a try, and sifting through the [built-in hooks](https://reactjs.org/docs/hooks-overview.html) unearthed [this beauty](https://reactjs.org/docs/hooks-reference.html#usereducer):

![useReducer? Reducer?! As in the functional programming and Redux concept with which I’m already familiar?!](1*u__nXhs90AOirXzLBsJ06w.png)*useReducer? Reducer?! As in the functional programming and Redux concept with which I’m already familiar?!*

As I have also been looking for an opportunity to use the latest iteration of the [Context API](https://reactjs.org/docs/context.html), I pondered combining it with `useReducer` to replicate Redux and the [official React Redux binding](https://github.com/reduxjs/react-redux)s. Following the former’s concepts of [actions](https://redux.js.org/basics/actions), [reducers](https://redux.js.org/basics/reducers), and a [single source of truth for state](https://redux.js.org/basics/store), as well as mostly maintaining the same API contracts, I developed a simple app:

![I did say it was simple!](1*oDtXJayA8PP8zV07MEJItg.gif)*I did say it was simple!*

Before I discuss my code, allow me to briefly introduce Hooks and the Context API. I should also add that one should have prior experience with Redux before tackling this post, so if the nomenclature I mentioned in the previous paragraph (actions and reducers) resulted in head-scratching, pop on over to the [official documentation](https://redux.js.org/introduction/getting-started) first.

## What are React Hooks?

Hooks are a React feature which allow one to add stateful or side effect-orientated logic to functional — otherwise stateless — components. Rather than get wordy on y’all, allow me to illustrate this with an example, using the built-in `[useState`](https://reactjs.org/docs/hooks-state.html) hook:

```tsx
const MessageForm: React.FC<Props> = ({ submitMessage }) => {
  const [message, setMessage] = React.useState('');

  return (
    <form onSubmit={e => {
      e.preventDefault();
      submitMessage(message);
    }}>
      <input
        type="text"
        onChange={e => setMessage(e.currentTarget.value)}
      />
      <input
        type="submit"
        value="Add"
      />
    </form>
  );
};

```

Compare this with the instance-backed, class-driven approach:

```tsx
class MessageForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      message: '',
    };
  }

  render() {
    const { submitMessage } = this.props;

    return (
      <form onSubmit={e => {
        e.preventDefault();
        submitMessage(this.state.message);
      }}>
        <input
          type="text"
          onChange={e => this.setState({
            message: e.currentTarget.value,
          })}
        />
        <input
          type="submit"
          value="Add"
        />
      </form>
    );
  }
}
```

To me, the Hook-based implementation is preferable for two key reasons:

* Reduced verbosity: everything is happening within a single function, rather than being described across a constructor and an instance method

* Independent of [function invocation context](https://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/): although static analysis (did you notice my use of TypeScript in the first two gists? 😉) can pinpoint potential issues in this area, Hooks eliminate the need to consider the value of `this` within functions that are responsible for mutating local state

Two additional [advantages provided by the React team](https://reactjs.org/docs/hooks-intro.html#motivation) are:

* allowing the reuse of stateful logic, such as subscriptions to data sources, across components

* avoiding the cognitive juggling of combining lifecycle methods, favouring the composition of complex, stateful logic by combining multiple Hooks

## How About Context?

From the React team themselves:
> Context provides a way to pass data through the component tree without having to pass props down manually at every level.

How so? Let’s say we want to pass the signed-in user’s details down multiple levels of our app’s tree. We can use `[createContext`](https://reactjs.org/docs/context.html#reactcreatecontext) to produce `[Provider`](https://reactjs.org/docs/context.html#contextprovider) and `[Consumer`](https://reactjs.org/docs/context.html#contextconsumer) components which control access to our user:

```tsx
const UserContext = React.createContext(maybe<User>());

const App: React.FC<AppProps> = ({ user }) => (
  <UserContext.Provider value={maybe(user)}>
    <Header />
  </UserContext.Provider>
);
  
const Header = () => (
  <>
    <Logo />
    <Account />
  </>
);
  
const Account = () => (
  <UserContext.Consumer>
    {user =>
      user.isNothing()
        ? <SignInButton />
        : <p>Signed in as {user.value().name}</p>
    }
  </UserContext.Consumer>
);
```

Here, the selling point of Context is that any components rendering `UserContext`'s `Consumer` will be re-rendered whenever the `Provider`’s `value` prop is updated; this, in turn, will be triggered by our root `App` component re-rendering, perhaps because the `user` prop has changed.

We can absolutely achieve this with props, but the need to reintegrate them across the entire depth of the tree, and the resultant verbosity, are unwieldy:

```tsx
const App: React.FC<AppProps> = ({ user }) => (
  <Header user={maybe(user)} />
);

const Header: React.FC<UserProps> = ({ user }) => (
  <>
    <Logo user={user} />
    <Account user={user} />
  </>
);

const Account: React.FC<UserProps> = ({ user }) => (
  user.isNothing()
    ? <SignInButton />
    : <p>Signed in as {user.value().name}</p>
);

```

While the React docs [openly warn that the use of Context *can* impede component reuse](https://reactjs.org/docs/context.html#before-you-use-context), and should be used sparingly, it’s nonetheless a reasonable approach for sharing common data at multiple levels of one’s tree; this is precisely why the official React Redux bindings [make use of it](https://github.com/reduxjs/react-redux/blob/630e1beea0973b99456da549c0f2b9e77ec0b600/src/components/Context.js#L3).

**Note**: Interestingly, React provides a `useContext` hook which serves the same role as the `Consumer` component. For my proof-of-concept, however, I leaned towards the latter.

## Back to the App

Let’s tie our newfound, or at least reinforced, knowledge in with the app I wrote.

I will embed gists to highlight the most important areas of the codebase, but you can also [peruse and clone the entire repository on GitHub](https://github.com/jamesseanwright/roll-your-own-redux).

As a recap, here it is in “action” (pun somewhat intended):

![Your favourite app of all time once more](1*oDtXJayA8PP8zV07MEJItg.gif)*Your favourite app of all time once more*

Here’s the component tree that drives it:

```tsx
export default () => (
  <Provider
    defaultState={defaultState}
    reducer={rootReducer}
  >
    <Status />
    <MessageForm />
    <MessageList />
  </Provider>
);

```

Does this look familiar? Wait until I show you how the `MessageForm` component is connected to our shared state:

```tsx
const mapStateToProps = ({ isFormValid, hasQuoteError, isLoadingQuote }: StateProps) => ({
  isFormValid,
  hasQuoteError,
  isLoadingQuote,
});

const mapDispatchToProps = (dispatch: React.Dispatch<Action>) => ({
  addMessage: (message: string) => dispatch(addMessage(message)),
  addRonSwansonQuote: () => dispatch(addRonSwansonQuote()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessageForm);

```

Our app’s sole reducer conforms to the function signature expected by `useReducer`, as well as Redux’s `createStore` function:

```tsx
const rootReducer: React.Reducer<State, Action> = (state, action) => {
  if (isAddMessage(action)) {
    const { message } = action.payload;

    return {
      ...state,
      isLoadingQuote: false,
      hasQuoteError: false,
      isFormValid: !!message,
      messages: [
        ...(message ? [message] : []),
        ...state.messages,
      ],
    };
  }

  if (isSetQuoteLoading(action)) {
    return {
      ...state,
      isLoadingQuote: true,
      hasQuoteError: false,
    };
  }

  if (isSetQuoteError(action)) {
    return {
      ...state,
      isLoadingQuote: false,
      hasQuoteError: true,
    };
  }

  return state;
};

```

Bonus aside: the functions which determine if an action is of a certain type, such as `isAddMessage`, [serve as type guards](https://github.com/jamesseanwright/roll-your-own-redux/blob/master/src/actions/actions.ts#L15), so we can determine the type of the `payload` property at compile time and inherently rely upon this safety at run time.

Our action creators should also be recognisable to you:

```typescript
export const addMessage = (message: string) => ({
  type: ADD_MESSAGE,
  payload: {
    message,
  },
});

```

## The Ties That Bind

We have an API surface that closely mirrors the React Redux bindings. How does this work under the hood? Foremost, we need to create a single Context:

```tsx
interface Context {
  state: State;
  dispatch: React.Dispatch<Action>;
}
    
const StateContext = React.createContext<Context>({
  state: defaultState,
  dispatch: defaultDispatch,
});

```

We can consequently render `StateContext.Provider` within our own `Provider` component; this will utilise the `useReducer` hook, taking in our app’s reducer and default state, and returning the current state and a dispatch function, which we can forward to `mapDispatchToProps`. Whenever one of these properties invokes `dispatch`, the hook will pass the action into our reducer, compute our new state, and enqueue a re-render of our own `Provider`:

```tsx
export const Provider: React.FC<ProviderProps> = ({
  reducer,
  children,
}) => {
  const [state, dispatch] = React.useReducer(reducer, defaultState);

  return (
    <StateContext.Provider value={{
      state,
      dispatch,
    }}>
      {children}
    </StateContext.Provider>
  );
};

```

Our `connect` higher-order component can now be written as so:

```tsx
export const connect = <TStateProps, TDispatchProps, TOwnProps = {}>(
  mapStateToProps?: (state: State, ownProps: TOwnProps) => TStateProps,
  mapDispatchToProps?: (dispatch: AugmentedDispatch, ownProps: TOwnProps) => TDispatchProps,
) =>
  (Component: React.ComponentType<TStateProps & TDispatchProps & TOwnProps>) => (
    (props: TOwnProps) =>
      <StateContext.Consumer>
        {({ state, dispatch }) => (
          <Component
            {...props}
            {...withDefault(mapStateToProps)(state, props)}
            {...withDefault(mapDispatchToProps)(dispatch, props)}
          />
        )}
      </StateContext.Consumer>
  );

```

Like [the React Redux namesake](https://react-redux.js.org/api#connect), `connect` allows one to map both shared state and calls to `dispatch` to props, which are passed to the inner component. We use the `StateContext`'s `Consumer` to access the current state and the `dispatch` function and pass them to `mapStateToProps` and `mapDispatchToProps` respectively.

In case you’re wonder what `withDefault` does: it’s a higher-order function that takes a prop computation function — i.e. `mapStateToProps` or `mapDispatchToProps`- and defaults to an empty object if said computation function is not provided.

I should note that I’ve taken a few liberties:

* The bindings are built around our own `State` type. Ideally, one would be able to pass this in via a type parameter

* `Provider` doesn't accept a store prop, instead taking a reducer function directly. Given the hook maintains the state, I saw no need to implement a store abstraction

* `connect`'s `mergeProps` and `options` parameters are unavailable

* If `mapStateToProps` is omitted, then the inner component will still be rendered when the state changes

* The [object shorthand form](https://react-redux.js.org/api/connect#object-shorthand-form) of `mapDispatchToProps` cannot be used in place of a function

## Thunky Monks

In revisiting the example app’s functionality (don’t worry, I won’t drop *that* GIF for the third time), you may have noticed the *Add Ron Swanson Quote* button. Who doesn’t appreciate a bit of wisdom from everybody’s favourite patriotic, free market-adoring libertarian?

![Pfft. Salad.](1*_8hgJuhubr61teC-5EzYpQ.gif)*Pfft. Salad.*

As this requires a HTTP request to a JSON API, the asynchronous,`Promise`-orientated [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) is an optimal fit for grabbing this data. From my experience, the most popular approach to describing asynchronous action creators is with [Redux Thunk](https://github.com/reduxjs/redux-thunk); this allows multiple dispatches within one action creator by supporting the return of a function in lieu of a plain action:

```tsx
export const addRonSwansonQuote = () =>
  (dispatch: React.Dispatch<Action>) => {
    dispatch(setQuoteLoading());

    return fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .then(res => res.json())
      .then(([quote]: string[]) =>
        dispatch(addMessage(quote)),
      )
      .catch(() => dispatch(setQuoteError()));
  };

```

While Redux supports middleware, enabling the likes of Thunk, [Redux Saga](https://redux-saga.js.org/) and [Redux Observable](https://redux-observable.js.org/), I ultimately concluded that it would be overkill for my POC, and leant towards a higher-order function that takes the `dispatch` and `state` provided by `useReducer`, and returns a new dispatcher that:

* assumes inputs of type `Function` to be thunks, which are called with the underlying `dispatch` and current state

* treats other inputs as regular actions, and thus dispatches them directly

This augmented dispatch is passed to the provider, always receiving the latest state whenever the root tree is subsequently updated:

```tsx
export type Thunk = (dispatch: React.Dispatch<Action>, state: State) => void;
export type AugmentedDispatch = React.Dispatch<Thunk | Action>;

const augmentDispatch = (dispatch: React.Dispatch<Action>, state: State) =>
  (input: Thunk | Action) =>
    input instanceof Function ? input(dispatch, state) : dispatch(input);
    
export const Provider: React.FC<ProviderProps> = ({
  reducer,
  children,
}) => {
  const [state, dispatch] = React.useReducer(reducer, defaultState);

  return (
    <StateContext.Provider value={{
      state,
      dispatch: augmentDispatch(dispatch, state), // with thunk support based upon latest state
    }}>
      {children}
    </StateContext.Provider>
  );
};

```

Consumers of `connect` who specify a `mapDispatchToProps` parameter will now receive this dispatch with superpowers.

## Next Steps

I did want to implement `[combineReducers`](https://redux.js.org/api/combinereducers), but I had no need for this function given the size of my app. If you’d like to know how this works, then feel free to [take a peek at the source](https://github.com/reduxjs/redux/blob/master/src/combineReducers.js).

## Steady on! Aren’t Hooks Experimental?!

Nope! Hooks are an approved, production-ready feature as of React 16.8! 🍾 Even React’s [official test renderer](https://reactjs.org/docs/test-renderer.html) supports them, so they should land in Enzyme imminently if they aren’t already enabled.

Thanks for reading! I hope you found this post useful. Please add a response if you have any questions or feedback; otherwise, I’d really appreciate some claps!

Written by [James Wright](https://twitter.com/jamesseanwright) — Software developer at [YLD](https://www.yld.io).

### Interested in React? Read more about it:
[**React is just JavaScript**
*Many people starting out get overwhelmed by all the things happening in the React ecosystem. There’s this idea that…*medium.com](https://medium.com/yld-engineering-blog/react-is-just-javascript-88600553269c)
[**Deploy your Create React App with Docker and Nginx**
*First thank you to Simona Cotin and Super Diana for answering the noob docker and nginx questions and reminding me that…*medium.com](https://medium.com/yld-engineering-blog/deploy-your-create-react-app-with-docker-and-ngnix-653e94ffb537)