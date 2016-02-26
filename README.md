# Twitter Front-End Programming Exercise

A Github issue viewer written in React. Dependencies were built using Node v5.0.0.

The project was started from [React Hot Boilerplate](https://github.com/gaearon/react-hot-boilerplate).

## Getting Started
To run the app locally, use the following commands:
```shell
$ npm install # install dependencies

$ npm start # start the app
```

Point a browser at http://localhost:3000/.

## Tests
Use the following commands to run linting and tests:
```shell
$ npm run lint # lint files

$ npm test # run tests once
```

## Assumptions, Caveats, etc
### Username + Avatar Links
The requirements state only to link `@user` tags in text content but do not mention linking the user and avatar displays. On Github the avatar links do NOT go to the user profile, rather going to a list of issues opened by that user. As that page does not exist in the app, I have not included the links. This would be one of the first questions I asked in planning the work (and in a real project setting, I would ask well before delivery.)

### Cross-Browser Testing
Browser testing is a deep, deep rabbit hole and an essential part of front-end development. For time, I have only tested this app in Chrome Canary.

### Production Builds
This project does not include a Webpack configuration for production builds. That configuration would produce a minified asset bundle and extract the CSS into an separate file, as well as providing the `NODE_ENV` for stripping dev-only code before publishing. The current dev configuration appends the styles with JavaScript.

### History State
Current implementation loses the page state when going back to the list from an issue. I would love to fix this.

### Text Formatting
I opted not to include a Markdown parser for the issue description and comments; as a result, the text content is a bit ugly. In the case of long URLs without a hyphen to break on, the text may flow out of its container. This would obviously be a problem for a production release.

### Design
I am not a designer; I've made a few adjustments for readability but have otherwise delivered an intentionally plain UI. I've added classname hooks such that it would be very easy to style the app with some direction from a designer.

### Testing and Container Components
I've yet to find what I feel is a great way to test React apps. This is something I would love to be able to discuss with other developers! For time, I tested each component's render method but did not test the API interactions. (I would do this using Sinon's Fake Server.)
