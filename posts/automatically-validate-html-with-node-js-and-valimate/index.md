
# Automatically Validate HTML with Node.js and Valimate

## As a web developer, I’m a huge fan of ensuring that my sites serve valid HTML. Unfortunately, this is commonly overlooked nowadays; I’ve met my share of developers who solely focus on implementing slick UIs. Don’t get me wrong; I love a pretty interface, but adhering to the W3C’s standards provides a number of benefits, including:

* Compatibility with newer browsers and user agents

* A stronger foundation for accessibility enhancements (e.g. the [alt attribute](http://webaim.org/techniques/alttext/) on image elements)

* A DOM that is potentially more efficient to parse, as a compliant structure is arguably more predictable

* A perception of professionalism within the software engineering community

I have just released a command line interface, developed in Node.js, called [Valimate](https://github.com/jamesseanwright/valimate). It is entirely configurable, and enables developers to automate validating documents against the [Nu HTML Checker](https://validator.w3.org/nu/). Aside from validating remote websites, Valimate can also test local Node.js HTTP server instances. This approach complements continuous integration and regression testing scenarios.

### Getting Started

In order to use Valimate, you must have Node.js v4 or later running on your machine. Install the CLI globally in your terminal.

```
npm i -g valimate
```


Once this has installed, create and enter a directory called ‘my-website’. Hypothetically, this would house our project’s code base, but to try the tool we’re going to run Valimate against some existing websites. Later on, we’ll write a simple server and run it from this directory, in order to demonstrate Valimate’s local app testing capability.

Once you’re in the directory, create a file called valimate.json. This is read by the CLI to determine which URLs to test, and houses some other configuration options. Insert the following JSON into the file and save it:

```
{
    "urls": [ 
        "http://jamesswright.co.uk/",
        "https://github.com"
    ]
}
```


This will tell Valimate to get the markup for each of these URLs and submit them to the validator. Run Valimate in the terminal:

```
valimate
```


You should see the results as shown in the below screenshot:

![Using Valimate to validate two websites](1*Alo-zyOO0nrjkbVdN4DeDg.png)*Using Valimate to validate two websites*

Interestingly, when validating GitHub (not meaning to target anyone here, it’s just an example that came to mind!), we see that there are 16 validity errors, highlighted in light red. We also have information regarding the parsing process in light blue. Valimate also displays warnings in yellow.

We can easily validate markup served by remote websites, but how about validating local ones?

### Validating Local Node.js HTTP Servers

Here’s a hypothetical: say we have a continuous integration server that runs tests against any code that we push to our repository. Wouldn't it be nice to also validate our HTML on check in, so we can determine that our latest changes haven’t compromised our markup? If your application is written in Node.js, then it’s possible to run it as a child process via Valimate.

“But wait!”, I hear you exclaim. “How can Valimate know that my application has finished initialising and is ready to serve HTML before validating my markup?! My app does some asynchronous operations before listening for connections!”

I have published a complimentary Node module called Valimate Notifier, which allows you to notify Valimate once your app server is up and running. Let’s write a very simple HTTP server and configure Valimate to run and validate its markup.

First of all, in the my-website directory, we should create a package.json file, into which we can store our dependencies. npm has a command to do this:

```
npm init
```


You can answer yes to all of the options. Once the file has been generated, install Valimate Notifier:

```
npm i --save valimate-notifier
```


Then, save the below JavaScript code into a file named app.js.

```
'use strict';

const http = require('http');
const notifyValimate = require('valimate-notifier');

const PORT = 8081;

const HTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>My Website</title>
        </head> 
        <body>
            <section role="main">
                <h1>Valimate Test Server</h1>

                <li>This is some invalid, dummy HTML</li>
            </section>
        </body>
    </html>
`;

http.createServer((req, res) => res.end(HTML, 'utf-8'))
    .listen(PORT, () => notifyValimate(true));
```


**FYI**: if your app server is not started by Valimate, then notifyValimate is still callable, but does nothing; no worries about what will happen in production!

Now we must update our config to run our local server. Open valimate.json and update so it looks like:

```
{
    "localAppServer": {
        "entryPoint": "app.js"
    },

    "urls": [
        "http://localhost:8081"
    ]
}
```


This tells Valimate to run app.js as a child process, and will then validate its served markup once it’s running. Let’s run Valimate again:

You should get the following output:

![](1*2pUjSG8kJoHazGZMMtJYNQ.png)

As you can see, Valimate waits for our app server to send the ready notification before validating our markup. However, you’ll notice that there’s a validity error; a list item is not a valid child of a section element! Let’s make it a paragraph instead:

```
<section role="main">
    <h1>Valimate Test Server</h1>
    
    <p>This is some valid, dummy HTML</p>
</section>
```


Upon running the CLI after making this change, you’ll see that our app now serves valid HTML!

### Final Thoughts

Thank you so much for reading this article and for giving Valimate a go. The project is based upon a similar solution that I implemented for my project at work, so I hope that other developers find it useful.

Do I think invalid HTML is a sin? More or less; if a website has a handful of errors then fixing them might not be such a business priority. My concerns lie within websites that have many errors, especially those that undermine accessibility.

Valimate is a young project, so please let me know if you encounter any issues. Additionally, I’m more than happy to accept pull requests on [GitHub](https://github.com/jamesseanwright/valimate)!