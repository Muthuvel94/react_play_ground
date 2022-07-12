# Hooks System

# useState--> Function that lets you use state in a fuctional component

# useEffect --> Function that lets you use something like lifecycle methods in a functional component

# useRef ---> Function that lets you creata a 'ref' in a function component

# Hooks are a way to write reusable code, instead of more classic technicques like inheritance

# Primitive Hooks --> useState, useEffect, useContext, useReducer, useCallback, useMemo, useRef, useImperativeHandle, useLayoutEffect, useDebugValue

# Custom Hook --> useTranslate (reuse of useState,useEffect)

# we will be building a Widget application that will include multiple components. These components will be:

# An Accordion component

# A Wikipedia API search component

# A Dropdown item selection component

# A Google Translate API component

# We will then wrap up the Widgets application by building our own navigation using JS and React without a third-party library like React Router. This will be used to navigate between the different widget components that were built.

# what is React? --> React is a javascript front-end library. it is used to show content to users and handle user events. --> Engineers use React to create reusable components.

# items --> title-what is react? content--React is a javascript ---> title-How do we show? content--To show content ---> title-why is react useful? content--Engineers like React

# const [ activeIndex(piece of state) setActiveIndex(Function to change the process of state)]=useSTate(null(initial value for this piece of state))

# Class Components --> Initialization state={activeindex:0} Reference--> this.state.activeIndex updates-->this.setState({activeIndex:10})

# Function Components --> Initialization useState(0) Reference--> activeIndex updates-->setActiveIndex(10)

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