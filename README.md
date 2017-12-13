# Murphy's User Experience

What can the so-called Murphy's Law teach us about UX design?  A lot actually!  Murphy's Law is generally tied to mistakes or errors that can happen.  Part of designing a good user experience is about minimizing errors and making the user less likely to make those errors in the first place.  But first, a quick history lesson is in order.

## History and Misconceptions

Everyone has heard the phrase "if something can go wrong, it will" and knows it to be "Murphy's Law".  This is actually a commonly held misconception of sorts.  The man this is attributed to is Edward Murphy who, among other things, developed a device for measuring the stress effects of g-forces for the US Air Force.  At this point, people disagree on who said what and how things actually happened, but what is agreed upon is that a "law" was born and attached to Murphy's name - either because he uttered it or because it was mockingly attributed to him depending on who you ask.  The original Murphy's Law, before time changed it like a child's game of telephone, was paraphrased as "if you give someone a wrong way to do something, they will eventually do it that way".  Now the impact on our User Experience design becomes much more clear!  

You can see this in practice in your daily life.  Several of your ungrounded power cords at home will have one prong with a larger end than the other.  This is not some physical necessity of electricity but a way to force the user into inserting the plug in the correct way.  The power switch on your lamp is designed to switch off the "hot" wire.  If the plug is the wrong way around in the outlet, the power switch will actually switch off the neutral wire instead, leaving you with a potentially unsafe situation where you think there is no power to the lamp but in fact there is.  By making a small modification to the user interface (the plug prongs), a manufacturer is able to provide a more error free (and less potentially harmful) user experience.

## Every Day Use

Ok, great, you say.  This is like form validation right?  Yes, that is one possible example of creating a user experience that prevents misuse.  However, in form validation, we are checking the user's work and informing them that they have made a mistake.  But let's look at the electric plug example again using the lens of Form Validation. 

HTML Forms do not prevent me (without correct planning) from putting bad data in, they simply tell me that I did so.  In other words, they don't "prevent" a mistake, but instead alert me to the presence of one.  In our previous example, HTML Form Validation is more analogous to getting shocked when trying to change a light-bulb because I put the plug in the wrong way around.  While less dangerous, form validation is still jarring to the user and disrupts the expectations of the experience.

## So What Then?

To make a really great user experience takes attention to details and the elimination of path proliferation.  Let's look at two concepts we see every day in UX design and UI creation that lead to Murphy's Law run amok.

### 1. Too Many Roads

One of the problems with charting courses over greater and greater distances is that there are more possibilities that have to be evaluated to find the best route.  This is the same when you offer too many ways of getting to the same functionality.  Offering the user multiple ways to access the same resource or perform the same action may seem like it increases convenience, but, in fact, can lead to a host of misunderstandings and errors.  Here are just a few ways that providing too many paths to the same thing can be problematic in UX design.

#### New Users

Most likely, new users of your application will be trained to use the path to the resource or action that is most familiar to the trainer.  If you have multiple trainers, all with their own personal favorite way of doing things, then you have a profileration of ideas through the group that there is a "best" way to achieve a result which differs from some others.  In this case, you now have a user base whose experience and knowledge with your application is not compatible.  What if later on, one trainer leaves and is replaced by another who comes from the opposing camp in terms of how to do certain things.  This becomes very confusing for the new user as they have to unlearn and then relearn how to do something.  This is easily avoidable by giving the user a single way of achieving a goal.  The exception to this would be in a large system where you can provide "Quick Links" as convenience functions.  Ensure that these are clearly maked as "out of band" navigation items.  Also only use navigation, do not embed the usable components within a "Quick Links" section.

#### Embed With The Enemy

It seems like such a boon to the user to simply embed functionality they may need.  For example, if the user is viewing an Order which lists the Items that were ordered, it is possible that the user would notice a misspelling of an Item name and want to edit it.  In some systems, the user may even find that the ability to do so is embedded right there inline with the other data.  This, again, seems like a convenient feature for the user but lays open a whole other resource in the context of an existing resource.  What if the user doesn't understand that their change will affect the entire system which could be a valid misunderstanding depending on the presentation context of the embedded functionality.  Editing an Item's information should be explicitly presented as editing the Item and not mingled with data about an Order that happened to include said Item.

#### Navigating a Maze

Is your navigation story a labyrinth of twists and turns to find a resource or action in your application?  This can happen quite often in the name of convenience or compressing applications into smaller screens.  Screen size is trending down as computer mobility is more and more valued.  This trend tends to create a situation where many UX designers try to stuff as much navigation into the screen as possible.  Not only does this make for a confusing navigation story for the user, but eliminates usable screen real estate in the process.  What do I mean by all this?  Let's look at a pretty common example - the sidebar.

In our example, the application has navigation buttons at the top for traveling to core sections (e.g. "Products", "Orders", "Customers", etc.) each of which uses a sidebar to allow navigation to sub-sections (e.g. "Customer Reports", "Customer List", etc.).  Perhaps each of these is again divided in such a way that visiting the "Customer Reports" sub-section creates a tabbed interface to switch between visible reports.  All these navigation components on the screen at the same time create a maze of points at which the user made a decision to get to where they are, but when presented all at once becomes dizzying.  The first step is to realize that your user most likely doesn't need all options at all times available to them.   So how can we fix this navigation-gone-mad experience that we find ourselves in?

- Use a landing page and allow them to launch into sub-sections as required but without installing new, fixed naviagation components.  
- Make use of breadcrumb navigation is good for applications with a deep nesting of functional sections.  
- Think about launching deeper sections from inline links and buttons rather than fixed navigation points.

### 2. Easy UI

Hey, I get it.  Maybe you are pressed into UX development but are not really a "front-end developer".  Maybe you are more backend focused and thus treating the UI as an afterthought - either by mistake or design.  Maybe you are new to development in general.  As a developer, I understand the desire to make things as easy for _yourself_ as possible.  Trying to take the easy route with the UI development of an application almost certainly results in a bad user experience.

#### Responding in Real Time

The easiest way to create a UI is to lay out static elements, style them, and then let logic on the backend (e.g. server side, API, embedded logical processes, etc.) decide what to do when they are used.  For example, showing a user a form to add a contact to a list and then validating the form fields after submit and returning success or error from the backend.  You probably already know taht moving this validation to the client side not only makes your application more responsive but also helps resource managment in a client/server situation.  But if you are waiting until submit of a form to validate the input, then it's no more user friendly than the first scenario (minus some lag).  Moving your validation logic to a more in the moment event like on change or blur of a form field improves usability.  The rule here is to react as soon as is possible and logical in any given situation.  Be responsive to your user!

#### Security Through Obscurity

Ok, I am not really advocating the old "security through obscurity" adage, but am suggesting that if someone cannot see or use an element due to security then do not show them that element.  So many times, a developer will simply disable a button or mask text in response to a lack of permissions for a given user.  This can be confusing for the user as they struggle to understand why the "Delete" button on this Contact record is grayed out.  User confusion tends to lead to support calls/emails that take time away from the goal of creating useful software.  The best track to take here is to hide any disabled component for which the disabling criteria is unlikely to change in the given session.  

#### Presto!

The inverse of the hiding rule is also true.  If something is likely, through user action, to become enabled, do not hide it but instead opt for disabling it.  If a field is disabled because it is only valid when another field has a specific value, keep the field on the form but disabled.  As a bonus, provide an info icon which displays a tooltip when mouse-over or tapped that explains why the field is disabled.  If a group of fields are enabled or disabled together based on an arbitrary value, consider putting these values together in some sort of grouping container and then heading that container with the actual value switch.  For example, if a Contact's street address is optional but certain fields are required when a street address does exist, consider grouping the street address related fields together and providing a checkbox with a label like "Use Street Address for this Contact" that when checked enables the fields for input (and enables their validation rules as well).

If you find yourself hiding and showing large parts of your UI based on choices that the user is making, that is a good indication that what you are actually creating is a branching workflow and now a simple UI page.  This is especially true if you are using "either or" logic to show and hide parts of the UI.  If you have a drop down that allows to choose whether a contact is "Business" or "Personal" and then make drastic changes to the "Create Contact" form in response, then that selection should probably be treated as a workflow step which forwards the user to another form with only the relevant fields.  Trying to manage a branching workflow in a single page is jarring for the user as UI components just appear out of nowhere in response to seeminly every selection.

## Summing It Up

There are several things to consider when designing a good user experience but if I must simmer it down to a simple rule: Don't confuse your users!  If you aren't sure how intuitive your UX really is (and most developers, including yours truley, generally aren't), leverage other resources like testers and pre-release users to take feedback on the UX.  Get as many opinions as you can and don't be offended when people offer criticism.  See how users are able to discover functionality in the interface with no coaching or training at all.  When big changes are made, bring in fresh eyes and compare their experiences with previous groups to see if you are on the right track.  Very few writers would publish a book without editors and proofreaders, in application UX these tasks are no less important.