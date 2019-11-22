
# Some Thoughts on Software Engineering, Learning, Community, and Delivery

## Source: https://www.sydneycommunitycollege.edu.au/course/woodwork.101

On Friday 26th July 2019, I took part in an *Ask Me Anything* (AMA) over on [Venturi](https://www.venturi-group.com/)’s [Slack channel](https://venturisvoice.slack.com/). I received some excellent questions covering software engineering, effective approaches to learning, my work in the engineering community, and efficient delivery, and have transcribed them below along with my answers for your own perusal.

**Liam [10:58 AM]
Welcome to the AMA! James, could you give us a bit of a bio to start the event?**

Certainly Liam! As stated, I’m James and I’m a developer at [YLD](https://www.yld.io/). I spend my time consulting at a variety of clients on JavaScript projects, using the likes of React, Node.js, TypeScript, React Native, RxJS, and other bits and pieces. In tandem, I’m attempting to establish an office and development in Manchester; it’s just me and one amazing colleague right now, but we’re hoping to grow organically as and when needed to allow us to maintain the high level of engineering for which we’re known. As part of this effort, I also co-organise the Manchester Web Meetup with our amazing events and marketing team; you can find us over on Twitter — [@manc_web](https://twitter.com/manc_web).

**Liam [11:10 AM]
I’ll kick off the questions! I’m currently learning about objects in JavaScript and finding them a bit of a struggle (they’re melting my brain more than this weather ha). When you see someone struggling with a concept in JavaScript how do you advise they approach the problem so they can overcome it?**

I think it depends upon how deeply one is trying to master a concept. What tripped me up when I was first learning to program was attempting to understand every single idiosyncrasy of every concept ever, which compounds any existing confusion. I’d therefore encourage anyone learning a particular concept, programming or not, to start extremely small and incremental; get something working and then break it, challenging your pre-existing notions and reinforcing what you know and don’t know. That will help you to then ask the right questions to the community.

**Sam [11:13 AM]
I had a listen to a bit of [your podcast](https://soundcloud.com/user-910706127/teaching-coders-james-wright-1) the other day; it was really good. When you’re talking to someone who’s looking to get into coding where do you tell them to begin. You mentioned [SitePoint](https://www.sitepoint.com/), [freeCodeCamp](https://www.freecodecamp.org/), [Udemy](https://www.udemy.com/) etc. Do you have a personal preference or approach to learning?**

Morning Sam! Glad you enjoyed the podcast. I’ve always branded myself as an engineer first, academic second. I’ll always make an effort to read and study, especially around concepts with a heavily theoretical underpinning such as data structures, functional programming etc., but I personally fail to retain such knowledge unless I can follow up with attempts to build something with it; when it works, my knowledge is reinforced, and when it does, wrestling with my code to overcome the issue will highlight the pitfalls of a certain approach, or perhaps that I’ve misunderstood something.

I’d summarise with: read, but build and break stuff to really burn it into you limbic system!

**Andy [11:16 AM]
I re-listened to our podcast ahead of this event and wanted to expand on a point you made in the show about flat hierarchies. You mentioned the benefits of flat hierarchies but could you go into a bit more detail about how you can create a flat hierarchy within a vertical company?**

Great question! From my experience, the most crucial action is to allow and encourage autonomy across all levels of an organisation. Of course, it would be inappropriate to allow a junior accountant to determine the salaries of the executives, but the polar opposite is a culture in which one is discouraged from thinking for oneself and thus has to seek answers from a higher-up, even for the most trivial concerns.

For example, I’ve worked with a client whose QA process resulted in potentially-broken code being merged into our main source control branch *before* it had been tested, breaking other branches and blocking releases. I thus suggested to test features *within* their feature branches, to which the QA responded that they’d have to ask the Head of Software Engineering! That individual has enough on their plate, so good luck getting an answer from them any time soon! By encouraging the team, and its individual members, to take this decision into their own hands, we were able to objectively smooth out the development process and push fewer defects into production. Once everyone sees the productivity wins of universal autonomy, the vertical hierarchy will begin to fall.

**Steve [11:29 AM]
Do you have any recommended reads for both programming, and also about stuff *beyond* programming (so along the lines of business/technical constraints, and building things that scale and have a long lifecycle)?**

Hey Steve! My programming recommendations are:

* [*Clean Code](https://www.amazon.co.uk/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)* — quite Java and OOP-heavy, but this was a great starting point when I was a junior transitioning into a mid-level role

* [*JavaScript: The Good Parts](https://www.amazon.co.uk/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742) *— ECMAScript 5 orientated, but still covers a lot of useful JS concepts that apply today (e.g. prototypal inheritance, closures etc.)

* [*Mathematics and Physics for Programmers ](https://www.amazon.co.uk/Mathematics-Physics-Programmers-Charles-Development/dp/1584503300)*— as someone who wasn’t subjected to enough maths during my degree, I’ve found this book extremely useful in learning rudimentary linear algebra and calculus. While I certainly don’t want to move into data science any time soon, grasping this has made me a more effective programmer, especially given the overlap between calculus and FP. Plus games programming can be fun

* [*Game Engine Black Book: Doom](https://www.amazon.co.uk/dp/1987418433/ref=pe_3187911_189395841_TE_dp_2)* — this is a really fun one. Again, it’s not a critical tome, but it’s incredibly humbling to read about the revolutionary work that went into this game, as well as thinking about the author’s effort

Now for some non-programming-related works:

* [*Worst to First: Behind the Scenes of Continental’s Remarkable Comeback](https://www.amazon.co.uk/dp/0471356522/ref=pe_3187911_185740111_TE_item)*— chronicles Gordon Bethune’s amazing transformation of Continental Airlines, which was the worst performing in the US when he joined, and was on the verge of bankruptcy. By taking small, achievable actions to demonstrate that change is possible in a rigid environment, as well as encouraging disgruntled employees to get involved with monetary and symbolic rewards, Continental became the best-performing airline, according to the federal government, in just two years

* [*Start With Why* ](https://www.amazon.co.uk/Start-Why-Leaders-Inspire-Everyone/dp/0241958229)— perhaps a little too bloated and repetitive, but otherwise does a stellar job at highlighting the importance of having vision — a purpose — when establishing and running a company. Making money is a result, and never a primary goal

* [*The Structure of Scientific Revolutions ](https://www.amazon.co.uk/dp/0226458083/ref=pe_3187911_189395841_TE_3p_dp_1)*— very dry and philosophical, but an interesting look no less at how revolutions come about, and the impact they have

**Holly [11:29 AM]
How have you successfully grown the [Manchester Web Meetup](https://www.meetup.com/Manchester-Web-Meetup/) in such a short amount of time? And, any tips for making the most of a mentor/mentee relationship?**

We’ve grown the meetup mostly by demonstrating altruistic intentions and our goal of aiding the dev community in Manchester. I’d be a liar if I said that it also hasn’t enabled us to grow awareness of the YLD brand and what we do, but I think that us engineers are sick of attending meetups preceded by a 10-minute recruitment pitch and being pestered by people to become “part of our family”; such efforts are disingenuous and completely transparent. By making this an event *for* the community, as well as building it *with* them, we have intrinsically gained a lot of support.

Also, YLD has an amazing marketing and events team, without whom none of this would have been possible.

As for making the most of a mentor/mentee relationship: I’d primarily suggest that relaying your own experience to them in a way that will directly benefit their current situation is key. If you can do that, everything else will fall into place naturally.

**Squashie [11:31 AM]
I am starting to learn C# and my trouble is finding a project… sort of. What I found is that I am not creative enough to know what the end product is supposed to look like. So when I hit a wall, it really seems impassable. What I guess I’m asking is, what is the best way to learn that probably isn’t project based? Or is that just a stupid idea all together?!**

Well if you’re enjoying it thus far but are struggling to build a product that directly faces the public, perhaps building some sort of API would be a good fit for you. With ASP.NET Core, you could build a REST service that returns JSON for particular pieces of data, which could then be consumed by some frontend project elsewhere. Failing that, you could even write a library (i.e. a non-executable bundle of code) whose functionality and behaviour you could verify with test-driven development.

If that seems to low-level, perhaps you could start by solution C# kata on the likes of [Codewars](https://www.codewars.com/collections/c-number-1) and grow your knowledge incrementally in a fully-interactive environment.

**James [11:43 AM]
I am stuck between the Angular and the React/Redux paths. A lot of companies I’ve interviewed at in recent months have job requirements for Angular with PHP MySQL experience but they regularly express a desire in moving over to developing in React/Redux or Vue.js on the front end and Node.js on the back end. How is it possible in this rapidly evolving job market to deal with both without severely impacting my ability to focus on one development path back to employment?**

I could easily suggest that you study React in your own time, and it would be unreasonable of me to suggest that *wouldn’t* help. However, everyone has different needs and goals outside of work, so I believe that if a company is hiring you for one set of skills but wants to transition to another tech stack, then the onus is on the employer to give its engineers the time, support, and training to learn said stack as part of their job. If you’re doing this in your own time solely to benefit them, then you’re effectively working free overtime.

With that in mind, whenever a transformation project is mentioned in an interview, I recommend ask how the company will support you in up-skilling, and the attitude and resources they have to allow you to do this as part of your regular job.

**Debanshu [11:49 AM]
How are you doing? My questions is, I read an article suggesting that OOP is trillion-dollar disaster and I never understood the reason. It also said that function programming is better then OOP. What’s your view ?**

Hey Debanshu! I’m good thanks! How are you?

I hear a lot of talk of OOP being dated and having no value, but that isn’t true in my opinion; the ability to describe the overall hierarchy of a system via inheritance is clear and conceptually easy to digest. The problem lies where some engineers subsequently abuse this as a means of achieving code reuse across an entire codebase. If a subclass wants to use one of the protected methods of a particular class to which it isn’t conceptually related, then you’ll inherit unrelated methods and open up the wider codebase to all sorts of polymorphic abuse.

There are means of achieving composition with classes by following the [delegation pattern](https://en.wikipedia.org/wiki/Delegation_pattern), but this is extremely verbose and can be much better achieved with function composition; by treating composed functions based upon *what* they do instead of *what* they are, we can free ourselves of inflexible hierarchies.

[I wrote an article covering this which may interest you.](https://www.sitepoint.com/function-composition-in-javascript/)

**JD [11:55 AM]
I’m a JS/.NET developer, A lot of my experience developing in house for large businesses I’ve found the company/managements drive for faster development of new features overshadows attempts to follow solid development principles invariably leading to slower development and more bugs.
However It has seemed near impossible to get the time and resources to tackle such technical debt. Do you have any advice or tips for these situations, or even perhaps a time and tested way of reporting and communicating the extra costs accrued due to said technical debt in a manner that would hold none technical managements attention?**

Hey JD! I unfortunately don’t have a groundbreaking answer for this; I’ve been through this same pain innumerable times as a developer and it’s all too often that the business is unwilling to listen or has to release an interminable stream of new features to appease the private equity firm who’s backing them. All one could do is potentially measure the velocity of releasing work to production, even trivial bug fixes, and suggest that this delivery rate could be even hire if any technical impediments are eliminated.

What I’m tempted by is the opportunity to send an open message to any product owners or executives who may be reading this: please listen to us techies. I understand the need to innovate rapidly, but by allowing us to remove existing technical hurdles (e.g. poorly-written areas of the code base, vertical scaling etc.) and enhance the delivery pipeline (I’m looking at you, continuous integration), we can create new value with even less friction. Give us a chance!

There’s also the argument of determining how existing bugs may impact conversion rates and drop-off, but I appreciate that this is a very small part of this much larger issue. To summarise, I’m still figuring this out myself, and I’m sorry I couldn’t give you a better answer.

**Will [12:21 PM]
Gave your podcast a listen on the commute. You mention in the show that delivering talks can help you critically analyse your own approach to coding. Have you ever found yourself re-examining something you thought you knew after doing a talk?**

Definitely. The first talk I ever gave was on the power of the Proxy API which was introduced in ECMAScript 2015, and someone highlighted that they wouldn’t have used this capabilities for some of the examples I demonstrated. I’ve always been a pragmatic developer to the best of my ability, but this made me scrutinise how I was using this API much further and has made me much more considered in choosing technological approaches.

**Tommy [12:33 PM]
How has running events and mentoring helped you grow as a developer?**

Hey Tommy! My efforts in the community have helped me in all sorts of ways, but the most value aspect has been meeting developers from all sorts of sectors and industries, and how their particular approaches to software engineering have resolved associated problems; this provides me with new knowledge that I can then research and even apply in my own endeavours.

Another benefit worth mentioning is that it’s strengthened my resilience. I’ve faced various challenges in organising the Web Meetup, such as hosts deciding to drop out; as a developer, I’m a natural problem solver but tackling issues in a whole new context has only strengthened these skills. I’ve learned a lot!