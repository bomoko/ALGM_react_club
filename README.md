# ALGM React Club

The first rule of React Club is ... well, you know the drill.

The more important rule of React club is that you _have_ to bring the code weekly, and explain it to the group.

What's super important here is that you understand everything that you've done in a week, including the background theory (as far as possible). Try not to copy/paste code that you don't understand but that seems to do what you want - remember, none of this is rocket science, everything is understandable if you have the right mental model.


## Phase 1 - 4 Weeks long.

We're going to be building a simple TODO application through several iterations.

### Week 1 - Simple TODO MVC

1. Take a look at [TODO MVC](http://todomvc.com/) to get a sense of what we want to build this week. Essentially we want to have a page that allows us to add, check off, and remove TODO items.
2. Work through the official [React tutorial](https://reactjs.org/tutorial/tutorial.html) if you haven't already - this will teach you pretty much all the techniques you need for this first week - you can stop just before the section on "Adding Time Travel".
3. While the React tutorial uses Codepen as a base, we should be writing locally - a good project to use to bootstrap your own project is [Create React App](https://github.com/facebook/create-react-app).
4. If you hit any issues, pop a question in Training and tag Blaize or Mustapha, we'll come a'running.
5. (OPTIONAL) Set up automated testing, drive the dev using TDD (might be useful for those of us who are a little more comfortable with basic React).

### Week 2 - Add a backend

Here we want to start managing TODOs via a backend. That is, saving, updating, and deleting via a remote call. This can be accomplished in a number of ways, from setting up a simple express server through to a Drupal backend.

1. One possible approach is looking at something like [Axios](https://github.com/axios/axios) for the client side.
2. You could also use this as a way of exploring the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
3. Remember that you should be handling error cases as well, what happens to your app if the server suddenly goes away.
4. If you need help in setting up a local dev environment, just shout in #algm-training
5. (OPTIONAL) Try handle the case where there are multiple users of the TODO system (this will come in handy in week 4).

### Week 3 - Add Routing

Here we're going to be adding routing into our existing app.

1. We want to add several pages to the system, such as, an "about" page, perhaps individual pages per-TODO, let's discuss this at the end of Week 2?
2. Let's look at implementing [React Router](https://github.com/ReactTraining/react-router).
3. React Router has _excellent_ documentation, read through at least [its philosophy](https://reacttraining.com/react-router/web/guides/philosophy), the [Basic Components](https://reacttraining.com/react-router/web/guides/basic-components), and the [Quick Start](https://reacttraining.com/react-router/web/guides/quick-start).
4. Read [build your own React Router v4](https://tylermcginnis.com/build-your-own-react-router-v4/)
5. (OPTIONAL) Use what you built in 4 rather than React Router.


### Week 4 - Add authentication

TBD.
