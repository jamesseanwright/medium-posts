
# Getting Into Software Development

## Image courtesy of http://whatmyfriendsthinkido.net/what-my-friends-think-i-do-computer-programming/

Earlier this month, I received a message on LinkedIn:
> Hi James,
> I’m a frontend developer looking for a junior position in London. Do you have any recommendations for someone looking to get into software development?

Since I’ve been asked this question previously, I thought I’d publish my response as an article for any aspiring developers out there. Rather than provide low-level details on the areas that we’ll cover, my aim is to outline the path I’d recommend, based upon my own experience. I hope to communicate this without trivialising my vocation; **software development is hard!**

## Where do I Begin?

The engineer who sent me that message has some experience in frontend development, but I’ll begin at the point at which no previous knowledge is assumed. I’m doing so to: reiterate to those with some experience what areas they might have missed; and to help those of you who are at the very beginning of your respective journeys.

Given the diversity of software development as a field, knowing which first steps one should take can be overwhelming. Adding to the confusion is that some of the popular courses and tutorials I’ve encountered attempt to parallelise the study of many areas in depth. Although this can make one aware of useful techniques and important topics, I’ve observed, in my teaching capacity, that this can commonly result in information overload; unless we learn an entirely new domain in small, manageable chunks, [our brains won’t be able to store them in long term memory for future application](https://www.td.org/Publications/Blogs/Science-of-Learning-Blog/2017/07/TMI-Cognitive-Overload-and-Learning).

With that in mind, the first, logical step is to choose a language and run with it.

### With Which Language Should I Start?

These are the main criteria I would suggest when choosing your first language:

* Simplicity of installation ([is it already available on my operating system?](https://apple.stackexchange.com/questions/257627/ruby-version-on-macos-sierra) Otherwise, is it easy to install?)

* Level of abstraction (do I have to worry about memory management?)

* Available learning resources (are there sufficient tutorials, articles, and courses?)

* Community (are there forums via which I can communicate with more experienced developers?)

* Adoption (is this widely used in the industry? This isn’t a deal-breaker during the learning process, but assist with the transition into a real role)

I thus recommend, in no particular order, these as first languages:

* Ruby

* JavaScript

* C#

* Java

* Python

The more experienced developer might express annoyance at the mixture of typing paradigms proposed by this list, but surely the most important concern is to start learning a language, in terms of its basic operators, syntax, and constructs, as well as the surrounding tooling, in order to create working programs as early as possible. Computer programming is not easy, but unless one can balance the self-education required with the resultant satisfaction of learning outcomes, then frustration will prevail.

Once you’ve set up your environment, and written your first [Hello World](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program) program, continue to learn the basic, high-level concepts of your language. The code you write at this point will not be elegant, but you’ll create functioning programs while becoming acquainted with transferable fundamentals, such as typing and control flow, hence solving problems without having to simultaneously understand an insurmountable collection of concepts.

Here are some great resources that also demonstrate how to set up one’s programming environment, or can even be undertaken using solely a web browser:

* [*Learn Ruby on Rails for Absolute Beginners](https://www.udemy.com/learn-ruby-on-rails-for-absolute-beginners/)*

* [*C# Fundamentals for Absolute Beginners](https://mva.microsoft.com/en-us/training-courses/c-fundamentals-for-absolute-beginners-16169?l=p90QdGQIC_7106218949)*

* [*Getting started with the Web](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web)* (this resource also covers HTML and CSS, but covers JavaScript very nicely over two parts)

* [*Introduction to Python: Absolute Beginner](https://www.edx.org/course/introduction-python-absolute-beginner-microsoft-dev236x-0#!)*

One you have completed one of these, keep practising by writing small programs. [Write a text-based adventure game](http://programmingisfun.com/learn/c-sharp-adventure-game/). [Develop a website](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs) using a server-side technology and deploy it. [Find a HTTP API](https://www.programmableweb.com/) and process its data. [Implement a UI-driven calculato](https://www.youtube.com/watch?v=SvaUmPeNB6k)r. Find challenges that pique your interest and solve them with your ever-improving coding ability. Learn another language, ideally with a different typing paradigm; compare the differences between this new language and your first language.

### A Note on Frameworks

Frameworks are great. They provide common functionality and abstractions that can save one time and allow one to focus on business logic. However, I’d personally delay learning one until it becomes necessary; focusing on the core features of your chosen language will allow you to understand more clearly what a framework does, and how to debug it when it doesn’t work as expected.

## So I can Write Software. Now What?

At this point, you’re hopefully coding interesting stuff with a chipper grin on your face. It would be ideal if everyone continued with this section, but if you’re confident that you’d like to develop software for a living, this section is undoubtedly for you.

It’s certainly possible to seek employment at this stage, but I’m confident that you won’t be effective, nor will you be able to distinguish yourself from your competition, unless you’re willing to complement your newfound programming skills with some engineering best practices and a touch of computer science.

### The Importance of Clean Code

For a beginner who has, thus far, worked on projects alone, developing software in a group (e.g. open-source projects, organisations) can be dauntingly alien. In the latter setting, one’s code must be understood, extended, and maintained by other people. Software that is powered by duplication of logic, hard coding, and 100-line methods will cause long-term headaches, bugs, and delays, even if such practices allow software to be delivered more quickly in the short-term.

A clichéd, but nonetheless highly-recommend book is [Uncle Bob](http://blog.cleancoder.com/)’s [*Clean Code](https://www.amazon.co.uk/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)*. The examples are Java-based, but otherwise it demonstrates the importance of meaningful names, small methods, and appropriate code boundaries, to barely scratch the surface.

### Structuring Software

There are two particular types of pattern that will assist one when crafting a solution:

* [*Design patterns](https://en.wikipedia.org/wiki/Design_Patterns)* — a reusable, describable solution to a commonly occurring problem, examples of which include:[ *factory method pattern](https://en.wikipedia.org/wiki/Factory_method_pattern)*; [*adapter pattern](https://en.wikipedia.org/wiki/Adapter_pattern)*; [*proxy pattern](https://en.wikipedia.org/wiki/Proxy_pattern)*; *and [observer pattern](https://en.wikipedia.org/wiki/Observer_pattern)*

* [Architectural patterns](https://en.wikipedia.org/wiki/Architectural_pattern) — an extension of design patterns that dictate the overall structure of a project or system. Some examples with which I have experience include: [*Model-view-controller* (MVC)](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller); [*Model-view-ViewModel* (MVVM)](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel); [*Entity-component-system* (ECS)](https://en.wikipedia.org/wiki/Entity%E2%80%93component%E2%80%93system); [*microservices](https://en.wikipedia.org/wiki/Microservices)*; and [*Peer-to-peer* (P2P)](https://en.wikipedia.org/wiki/Peer-to-peer)

While it is beneficial to be aware of the existence of these patterns, and to practise their application, **be certain that you are applying them pragmatically.** If one uses these patterns without a logical use case, then one will naturally write a incomprehensible, over-engineered clump of spaghetti. Consult the satirical [FizzBuzzEntrepriseEdition](https://github.com/EnterpriseQualityCoding/FizzBuzzEnterpriseEdition) project for an example of needlessly complex software.

### Testing Software

Outsiders of software development may imagine the testing of a project to be:

* Entirely manual

* Executed in one large phase upon code completion

Such an approach results in:

* Bugs being caught unnecessarily late in the software development lifecycle

* Wasted hours due to manual reproduction of bugs and delayed communication cycles

Fortunately, any well-supported language and technology can be subjected to *test automation*, which is the application of further code and software to automatically ensure the correctness of your project. Types of automated testing include:

* [*Unit testing](https://en.wikipedia.org/wiki/Unit_testing)* — verifies that individual units of a codebase, such as methods and classes, work as expected. Assertions test that said units deterministically return the expected output for any given inputs

* [*Integration testing](https://en.wikipedia.org/wiki/Integration_testing)* — verifies that *collaborations* between units produce the correct results

* [*End-to-end testing](https://www.tutorialspoint.com/software_testing_dictionary/end_to_end_testing.htm)* — verifies that the flows supported by a system can be executed with the expected results and without impeding bugs

All of these varieties of testing are crucial for maintaining quality in commercial software projects, but unit testing in particular is invaluable to the modern developer. Not only can one assert the behaviour of a unit to ensure that regressions are reported, but techniques such as [*Test-driven development* (TDD)](https://www.sitepoint.com/learning-javascript-test-driven-development-by-example/) allow one to develop units around predefined expectations, saving time and enabling code to be written ahead of integration.

### Source Control

From small, personal projects, to complex corporate beasts, it’s important to be able to manage changes to a codebase. If one’s project has many contributors, then there must exist a manner in which an individual can contribute without destroying one’s changes. Even in projects with a sole developer, the ability to revert changes that have introduced bugs can economise time and sanity.

[*Source control](https://en.wikipedia.org/wiki/Version_control)* allows individuals and teams to track and manage changes to a codebase over time. Typical operations include:

* *Branching* — allows one to contribute code and modify a *repository*’s history without impacting the parent branch, and by extension, other developers

* *Merging* — bringing the changes from one branch into another, adding accepted changes to the parent branch

* *Reverting — *undoing changes introduced by a series of patches or *commits*

My personal recommendation for source control software is [*Git](https://git-scm.com/)*. Its distributed nature makes these fundamental operations lightweight and fast. I also recommend signing up for [*GitHub](https://github.com/)*, a Git repository hosting service with which you can create and contribute to repositories. GitHub provides an [online sandbox](https://try.github.io/levels/1/challenges/1) for becoming acquainted with Git in the comfort of your browser.

### Algorithms

The specification of a set of instructions, also known as an *algorithm*, is fundamental to what software developers do. Although one may be working with abstractions in one’s day-to-day work, understanding and implementing common algorithms will improve one’s logical thought processes and ultimately allow one to understand how common operations in software runtimes might be implemented and optimised.

[Array sorting algorithms](https://brilliant.org/wiki/sorting-algorithms/) are, in my opinion, are reasonable starting point. As a bonus, having a high-level understanding of [*big O notation](https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/)* will allow you to measure the complexity of your procedures.

### Data Structures

*Data structures* provide a means of representing data for a given problem. Their utilisation results in more descriptive and potentially memory-efficient code, the simplest examples being arrays and [*hash maps](https://en.wikipedia.org/wiki/Hash_table)*.

Other suitable introductory data structures include:

* [*Linked lists](https://en.wikipedia.org/wiki/Linked_list)*

* [*Binary trees](https://en.wikipedia.org/wiki/Binary_tree)*

### Programming Paradigms

Given the [sheer quantity of available programming languages](https://dzone.com/articles/big-list-256-programming), it’s inevitable that they can be grouped based upon common features. Key *paradigms* include:

* [*Imperative](https://en.wikipedia.org/wiki/Imperative_programming)* — modifying the state of a program using statements to explicitly describe *how* it should operate

* [*Declarative](https://en.wikipedia.org/wiki/Declarative_programming)* — invoking language-supported features to specify *what* a program must achieve, delegating the imperative logic to the language itself

* [*Object-orientated ](https://en.wikipedia.org/wiki/Object-oriented_programming)*— grouping data and behaviour into common units, known as *objects*, such as classes and prototypes

* [*Functional](https://en.wikipedia.org/wiki/Functional_programming)* — structuring a program as a series of evaluated mathematical functions, discouraging the mutation of state

### Keep Reading!

My favourite aspect of software development is that there are always new concepts to learn. The resource that I have found the most useful is the [/r/programming subreddit](https://www.reddit.com/r/programming/). It’s not always a welcoming environment, but it has introduced me to countless concepts and techniques that have ameliorated my competence.

Otherwise, there’s a vast wealth of blogs and books out there. I’d list some, but I know I wouldn’t be able to stop. Perhaps I’ll provide some in a separate post.

## Specialisation

Perhaps you picked up software development in order to develop mobile apps, or you’ve subsequently encountered a particular area that you wish to pursue further. Regardless, it could be worth specialising in one or two areas, acquiring specific knowledge that will make you invaluable to a team. Possibilities include:

* Frontend web development (HTML, CSS, JS, DOM manipulation, [React](https://reactjs.org/))

* Backend development ([Node.js](http://nodejs.org), ([ASP](https://www.asp.net/core/overview/aspnet-vnext))[.NET](https://www.microsoft.com/net/core), [Java](https://www.java.com/en/), [Go](https://golang.org/), databases)

* Fullstack development (a combination of the two)

* Native software (Android, iOS, Windows)

* Embedded software (development for non-traditional hardware, typically with severe yet rational performance and power constraints)

## Well That was a lot to Digest. How do I get a job?

With proficiency comes potential demand from the market and employers. However, your skills are no good unless you can demonstrate how to exercise them.

### Publish Your own Projects as, and Contribute to, Open Source Software

Have you signed up for GitHub yet? If not, do it now. Create repositories for the projects of which you’re the proudest, and push that code. Not only does GitHub allow for the sharing of code and collaboration across a variety of open-source projects, but it also serves as a portfolio for your work. Publishing a handful of projects will communicate your passion and ability for software development.

### Publish a Web-Based Portfolio

Once you’ve established a technical presence, one might consider publishing a website-delivered portfolio that can be accessed by anyone; this will expose you to those in the non-technical side of our discipline.

[GitHub Pages](https://pages.github.com/) provides a simple means of publishing static websites, with support for TLS and custom domains.

### Volunteer

There are a number of cooperatives that teach programming, some of which even focus upon those who are from disadvantaged backgrounds. By providing your time and skills, you will be able to show your competence in a social setting and simultaneously help others. Such cooperatives include:

* [Code Your Future](https://codeyourfuture.co/) — a web development school for refugees

* [Black Girls Code](http://www.blackgirlscode.com/) — a coding school for young black women

### Network

Get out there and meet other developers. Share your experiences and knowledge with them, and listen to them in order to expand your own ideas. Go to meetups and recruitment fairs, the latter of which will especially assist you in securing your first software development role.

Twitter and LinkedIn are also your friends, even if the latter can eventually resolve to recruiter spam.

### Freelance

If your connections, and admittedly luck, permit this, undertake freelance work. Be sure to respect yourself enough to keep your prices fair but competitive, but bear in mind that fulfilling requirements for an actual client will highlight your ability and render you even more employable.

### Find an Internship

Gaining experience in an established organisation will not only give you an arena in which you can practise your skills, but will empower you to do what you do best in a corporate setting, and witness the challenges associated with large-scale development. If you’re fortunate enough to intern at a company with a strong reputation, this will consequently improve *your* reputation.

### Change Role in your Current Company

If you’re permanently employed, it is worth speaking with your manager to determine if you could move to a software development role. Explain that you have some ability in your new field, thus you’d still be able to make meaningful contributions. If they currently value, and will value, your work, then they should at least display some flexibility.

### Manage Expectations

If you are applying for your first developer role, regardless of how much of the outlined technical matter you have studied, you should be applying for junior roles. It utterly frustrates me to read of coding “bootcamps” that charge prospective developers thousands of pounds with the promise that one will be guaranteed a senior role. Unless you have explicit, adequate experience in a particular field, you are not senior. Working in a junior position leads to the reiteration of one’s knowledge, filling in any potential gaps along the way.

### Don’t Give Up

You may face some rejections along the way. This is, albeit frustrating, a normal occurrence. Don’t allow rejection to deter you from applying for your first role. Eventually, you’ll shine at the right place and someone will hire you.

## This is Exhausting

A final consideration that I’d like to present is that the above outline, while high-level, covers an immense spectrum of information. Combined with a potentially-arduous job search, this can all become tiresome.

Don’t be afraid to take a break if need be. While one shouldn’t lose sight of potentially amazing opportunities, rest is crucial to one’s cognitive functioning. Make sure you have other activities on which you can focus that are external to software development.

I hope that this article has provided you with a sufficient overview of my ideal route to employment as a software developer. I would love you hear your thoughts and experiences.

If you’ve found this useful, I’d greatly appreciate a clap; this will also allow other budding developers to find this post. Thanks for your time!

![](1*i3hPOj27LTt0ZPn5TQuhZg.png)
> ✉️ *Subscribe to *Codeburst’s* once-weekly [**Email Blast](http://bit.ly/codeburst-email), ***🐦 *Follow *Codeburst* on [**Twitter](http://bit.ly/codeburst-twitter)**, and *🕸️ [***Learn Full Stack Web Development](http://bit.ly/learn-web-dev-codeburst)**.*