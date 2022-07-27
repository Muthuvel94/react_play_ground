# App Goals --> 1. Absolutely understand the purpose of reducers --> 2. Absolutely understand making API request with Redux ---> 3. Absolutely understand the purpose of 'redux-thunk'

# Our App | Axios ---> <--- JSONPlaceholder API

# npm instal --save redux react-redux axios redux-thunk

# 1. redux -- The Redux Library 2. react-redux---> Integration layer between react and redux 3. axios--> Help us make network requests 4. redux-thunk --> Middleware to helps us make requests in a redux application

# GENERAL DATA LOADING WITH REDUX

# ---> 1. Components get rendered onto the screen ---> 2. Component's 'componentDidMount' lifecycle method gets called --> 3. we call actioncreater from ComponentDidMount (1 to 3 --> Components are responsible for fetching data they need by calling an action creater) --> 4. Actioncreater runs code to make an API request --> 5. API responds with data ---> 6. Actioncreater return an 'action' with an fetched data on the 'payload' property ( 4 to 6 --> Action creater are responsible for making API request)[This is where Redux-Thunk comes into play] --->7. Some Reducers seems the action, returns the data off the 'payload' ---> 8. Because we generated some new state object, redux/react-redux cause our React app to be rerendered. ( 7 and 8 ---> we get fetched data into a component by generating new state in our redux store, then getting that into our component through mapStateToProps)

# what's wrong with 'fetchPost'? --> 1. Action creater must retain plain JS objects with a type property we are not! ---> 2. By the time our action gets to a reducer, we won't have fetched our data.

# Synchronous action creater --> Instantly return an action with data ready to go

# Asynchronous action creater --> Takes some amount of time for it to get its data ready to go

# Middleware in Redux ---> 1. Function that gets called with every action we dispatch --> 2. Has the ability to STOP, MODIFY or otherwise mess around with actions --> 3. Tons of open source middleware exist ---> 4. Most popular use of Middleware is for dealing with async actions ---> 5. we are going to use a middleware called 'Redux-Thunk' to solve our async issues.

# Normal Rules --> 1. Action creater must return action objects ---> 2. Action must have a type property ---> 3. Action can optionally have a 'payload'

# Rules with Reduc-Thunk ---> 1. Action creater can return action objects or Action creater can return functions ---> 2. if an action objects get returned, it must have a type --> 3. if an action object gets returned, it can optionally have a "playload'

# Flow of Redux-Thunk---> are you a function> --> 1. NO object --> Reducers 2. yes --> i am going to call the dispatch and getState function --> function invoked with 'dispatch' --> we wait for our request to finish ---> Request complete dipatch action manually --> new action created ---> disptach

# RULES for REDUCERS: ---> 1. Must return any value besides 'undefined' ---> 2. Produces 'state' or data to be used inside of your app using only previous state and the action (reducers are pure) ---> 3. Must not return reach 'out of itself' to decide what value to return ---> 4. Must not mutate its input 'state' argument

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
