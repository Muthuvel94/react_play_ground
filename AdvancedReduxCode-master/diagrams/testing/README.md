# Getting Started with Create React App

Introduction to Jest

1. we run 'npm run test' at the terminal
2. Jest Test runner start up
3. Jest find all files ending in test.js and executes test inside of them
4. Jest print out results of tests to the terminal
5. jest waits for a file to change, then runs all test again

what do we Test?

1. Look at each individual part of your system
2. Imagine telling a friend 'heres what this piece of code does'
3. Write a test to verify each part does what you expect

Testing Design - What do we care about?

1. App Component
   i. shows the comment box inside of it
   ii. shows the comment list inside of it
2. CommentBox Component
   i. shows a text area and a button
   ii. Users can enter input into the textarea and submit it
   iii. when the input is submitted, textarea should get emptied
3. CommentList Component
   i. shows the 'li' element per comment
   ii. Text from each comment is visible
4. Comments Reducer
   i. Properly hands action with a type of 'SAVE COMMENT'
   ii. Doesn't throw an error if it gets an action with any other type
5. SaveComments Action
   i. Has a type of 'SAVE COMMENT'
   ii. produces an action that has a payload of the new comment's text

Test Structure:

it--> {Global Function} (description of the test {string description of the test we are running}, function containing our test logic {stuffs to do when this test runs})

Tricking React with JSDOM:

Command Line Environment ---> Jest --> JSDOM (simulates how the browsers behaves)
Instance of App component(HTML produced by App) ----> JSDOM {div}

Test Expectations:

expect(div.innerHTML).toContain ('Comment Box")

expect (Global function) --> (values that we are inspecting{the thing we are want to verify}), matcher statement {Designates how we want to inspect the subject} (values that we expect to see {Expected Value, its what we want our 'subject' to be})
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Limiting Test Knowledge:
App [App's secret internal workings] App.test.js ---> OK ---> Comment List [CL's secret internal working's] commentList.test.js ----> No ---> CommentBox [ CB's secret internal workings] CommentBox.test.js

npm install --save enzyme enzyme-adapter-react-18

Enzyme Renderers:

Enzyme API ---> 1. Static (Render the given component and return plain HTML) --> 2. Shallow (Render 'just' the given component and none of its children --> 3. Full DOM (Render the component and all of its children + lets us modify it afterwards))

Simulating Events:

1. find the textarea element
2. simulates a 'change' event
3. provide a fake event object
4. force the component to update
5. Assert that the textarea's value has changed

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
