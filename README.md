# AngularTodo

Yes, I hear you, yet another TODO...
But hey, what better than a good old todo to get your feet wet in a new framework/language?
Also, it's getting late and I just want to enjoy my evening 🌄 🍺

I have avoided Angular for a long time, whilst having tried every other major and minor framework out there.
Which is quite interesting, since I do tend to appreciate opiniated tools...
The time has come, Angular, here I come. Let's see if can make this together 🍻


## API / Backend

We're simply using the [json.placeholder] as a backend (https://jsonplaceholder.typicode.com/todos).
That's enough for what we're doing here.

In terms of schema, we're going to use whatever is provided by the jsonplaceholder directly.
We're focusing on Angular here guys!

## Testing

A complete introduction to a new framework wouldn't be complete with a bit of testing.
I'm using a BDD-ish way of working here, with cypress as and e2e and whatever-come-with-angular (Karma?) for the TDD part.

There are no acceptance test as such, I'm just going to aim for high level e2e tests and then zoom in to TDD my way in there.

Coming from React, there's no way around Jest + React Testing Library, two absolutely great tools.
I'm quite familiar with Cypress - also I don't really do any e2e testing in my current role - I'm more focused on a integration/unit level.

I'm curious to see how Karma behave.

# Journal

## Day 3-ish

I only spend a few minutes here and there on this project.
During the day, I work mostly with React. Using Angular is - refreshing and daunting at the same time.

I knew there was a first cliff to climb to start enjoying, and I certainly enjoy the rigidity of it. But funnily enough, it seems that there is no consensus on the folder architecture. I feel like I'm in the React world all over again.

The thing that attract me to Angular is:
1. Curiosity:
 I always enjoy learning new technologies, methodologies, languages. I found that dabbling in other technologies tend to open your mind and improve the way you work. When I started using Rust in a previous job, it greatly improved my JS/TS game. Anyway, I'm diverging here...
2. Opiniated:
 Coming from React, the lack of structure seems great but it can be painful. Over the past few years, I feel like I'm finally getting to a place where I'm happy with the 'framework' I've built around React.
 But I have always, and will always, enjoy beautiful crafted and opiniated technology. 
 I have come to term with the fact that I actually enjoy having A right way to do things, especially when it comes to getting things done - but it applies to some of other aspects of my life too. Don't give me wrong, I love freedom, more than the next guy. 
 But when it comes to getting stuff done, give me something that will not add decision fatigue - I believe that the decision capital is better used for 'broader' decision rather than 'how to code' a feature. I understand it is a controversial view, but I'd rather spend a day thinking about how to create value for my client rather than trying to find out wether X or Y does the job better.

 I'm rambling here. Coming back to our sheep.

 So far the summary is:
 - Testing is verbose, but 'expectable' (no pun intended). I might be very efficient with React Testing Library though, so maybe time will tell? However except for the whole TestBed 🛌 thingy, it's kind of straightfoward but very implemtation detail-y. Having to manually trigger the state is powerful, but goes against the philosophy I've been following with testing: don't test implementation details, test how the user use your product.
 - Folder structure: so far I haven't find the right folder structure, but I guess my application is trivial so it might be something that you discover when you need it.
 - OOP-ish feel: I think I'm starting to enjoy that OOP'ish feeling that Angular brings back to the table. However working on my 13 inch Macbook here, there are lot of files to navigate - but it brings me back to original trio - HTML/CSS/JS.
 - At this stage, I'm nowhere near as fast with Angular as I am with React, but I've spend a few years on React so I can't draw a conclusion here yet - however, I haven't installed any dependencies yet ...
 - Karma UI sucks so far.
 