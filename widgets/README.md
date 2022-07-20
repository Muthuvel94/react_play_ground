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

# what do we search? option 1 --> user types in input --> onchange event handler called --> we take value from input and make request to API ..... ----> get response ---> Update 'results' piece of state --->components rerenders, we show list of results

# option 2 -->User types in input -->Onchanger event handler called --->Update 'term' piece of state --> Component rerenders -->we add code to detect that 'term' has changed! --> Make request to API .... ----> Get response --->update 'results' piece of state --->components rerenders, we show list of results

# Option 1 ---> Search instantly when onchange event triggers -->Tightly couples'onchange' with search

# option 2 --> search when term piece of state changes ---> can easily trigger a search when other parameter change! --> Easier to extract code out into a more reusable function!

# The 'useEffect' hook --> allows function components to use something like lifecycle methods --> we configure the hook to run some code automatically in one of three scenarios ---> 1. when the component is rerendered for firsttime only ---> 2. when the component is rendered for the first time and whenever it rerenders ---> 3. when the component is rerendered for the first time and (whenever it rerenders and some piece of data has changed).

# useEffect Second Argument

# []-->Run as initial render

# ...nothing... ---> Run as initial render --> Run after every rerender

# data --> run at initial render --> Run after every rerender if data has changed since last render

# input change --> set a timer to search in 500 ms --> next input change --> go back and cancel previous timer and set a timer to search in 500 ms ...... ---> No additional changes -->Last timer created executes

# 1. Initial Component Render ---> term === programming deboundedTerm === programming useEffect for deboundedTerm runs -- inital data fetch complete 2. User Types something ---> immediately update Term--> term === programming bo --- set timer to update debounded term 3. User Types something ---> cancel previous Timer ---> immediately update Term--> term === programming books

# The Dropdown needs to be detect a click event on any elements besides on it called --> The DropDown has a hard time setting up event handlers on elements that it does not create ---> Event Bubbling is a thing --->>> The DropDown can set up a manual event listener (without React) on the body element. --> A clict on any element will bubble up to the body

# Scenario #1 --> User clicks on an element that is created by the DropDown Component --> If a user clicks on one of these elements, then we probably don't want the body event listner to do anything

# Scenario #2 --> User clicks on any element besides the ones created by the DropDown --> if a user clicks on any of these elements, we do want the body event listener to close the dropdown

# UseRef (Ref)--> Direct Reference to a DOM Element

# Majority of React apps use React-Router ... However... 1. React Router has frequent breaking changes 2. More important to learn the ideas and theory of navigation 3.we are going to build some navigation stuff from scratch 4.React-Router will be covered later in the course

# Navigation --> showing different sets of components when the URL Changes

# User click on "list" --> Change the URL, but don't do a full page refresh ---> Each Route could detect the URL has changed--->Route could update piece of state tracking the current pathname --> Each Route rerenders, showing/hiding component appropriately

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
