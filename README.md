# React Github Issues

A Github issue viewer for the Rails project, written in React. Dependencies were built using Node v5.0.0.

The project was started from [React Hot Boilerplate](https://github.com/gaearon/react-hot-boilerplate).

## Getting Started
To run the app locally, use the following commands:
```shell
$ npm install # install dependencies

$ npm start # start the app
```

Point a browser at [http://localhost:3000/](http://localhost:3000).

## Tests
Use the following commands to run linting and tests:
```shell
$ npm run lint # lint files

$ npm test # run tests once
```

## Assumptions, Caveats, etc
### Username + Avatar Links
Avatars are not linked to the user. On Github the avatar links do NOT go to the user profile, rather going to a list of issues opened by that user. As that page does not exist in the app, I have not included the links.

### Cross-Browser Testing
Browser testing is a deep, deep rabbit hole and an essential part of front-end development. For time, I have only tested this app in Chrome Canary.

### History State
Current implementation loses the page state when going back to the list from an issue. I would love to fix this.

### Text Formatting
I opted not to include a Markdown parser for the issue description and comments; as a result, the text content is a bit ugly. In the case of long URLs without a hyphen to break on, the text may flow out of its container. This would obviously be a problem for a production release.

### Design
I am not a designer; I've made a few adjustments for readability but have otherwise delivered an intentionally plain UI. I've added classname hooks such that it would be very easy to style the app with some direction from a designer.

### Testing and Container Components
I've yet to find what I feel is a great way to test React apps. This is something I would love to be able to discuss with other developers! For time, I tested each component's render method but did not test the API interactions. (I would do this using Sinon's Fake Server.)
