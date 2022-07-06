# CLASS BASED COMPONENTS

# A component is a function or class that produces HTML to show the user (jsx) and handles feedback from the user(using event handlers)

# Function components --> can produce JSX to show content to the user ---> Hooks system --> Funtion can use Hooks to run code at specific points in time ---> Function can use Hooks to access state system and update content on the screen

# Class components --> can produce jsx to show content to the user --> can use the Lifecycle method system to run code at specific points in time --> can use the 'state' system to update the content on the screen

# App --> has code to determine location + month --> it a winter --> Season Display (shows different text/ixons based on props)

# Time Line ---> JS file loaded by browser --> App component get created --> we call geolocation service --> App return JSX, get rendered to page as HTML .... --> we get result of geolocation! --> Tell the component to rerender itself with this new information

# RULES OF CLASS COMPONENTS

# ---> Must be a Javascript class --> Must extends (subclass) React Component ---> Must define a 'render' method that returns some amount of JSX

# RULES oF STATE

# ---> only usable with class components --> you will confuse props with state :( ---> 'State' is a JS Object that contains data relevent to a component --> Updating 'state' on a component causes the component to (almost) instanly rerender --> State must be initialized when a component is created --->State can only be updated using the function 'setState'

# Time line of process

# 1.JS file loaded by browser ---> 2.Instance of App component is created. ---> 3.App components 'constructor'function get called --> 4.State object is created and assigned to the 'this.state' property --> 5. we call geolocation service. --> 6. React calls the component render method --> 7. App return JSX, gets rendered to page as HTML ... ---> 8. we get result of geolocation!

# COMPONENT LIFECYCLE

# Timeline --> 1. COnstructor (Good place to do one-time setup) ---> 2. render (constant visible on screen) (Avoid doing anything besides returning JSX) ---> 3. componentDidMount (sit and wait for updates) (Good Place to do Data-loading..)---> 4. componentDidUpdate (sit and wait untill this component is no longer shown) (Good place to do more Data-loading when state.props change ) ---> 5. componentWillUnmount (Good place to do cleanup (especially for non-react stuff))

# OTHER LIFE CYCLE METHODS (rarely used)

# ---->1. shouldComponentUpdate ---> 2.getDerivedStateFromProps ---> 3.getSnapshotBeforeUpdate

# BENEFITS OF CLASS COMPONENTS ---> Class Components --> 1. Easier code organisation --> 2.can use 'state' (another react system) --> easier to handle user input --> 3.understands lifecycle events -->Easier to do things when the app starts first

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
