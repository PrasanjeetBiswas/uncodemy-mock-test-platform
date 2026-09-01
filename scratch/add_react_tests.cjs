const fs = require('fs');

const reactTests = [
  {
    "id": "react-test-01",
    "courseId": "mern",
    "seriesId": "react",
    "title": "React Fundamentals & Components",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "react-test-02",
    "courseId": "mern",
    "seriesId": "react",
    "title": "React State, Props & Lifecycle",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  },
  {
    "id": "react-test-03",
    "courseId": "mern",
    "seriesId": "react",
    "title": "React Hooks & Advanced Patterns",
    "durationMinutes": 30,
    "totalQuestions": 30,
    "passingPercentage": 40
  }
];

let testsFile = fs.readFileSync('src/data/tests.js', 'utf8');
const testsEndIndex = testsFile.lastIndexOf('];');

if (testsEndIndex !== -1 && !testsFile.includes('"react-test-01"')) {
  const injectionString = ',\n' + reactTests.map(t => JSON.stringify(t, null, 2)).join(',\n') + '\n];';
  testsFile = testsFile.substring(0, testsEndIndex) + injectionString;
  fs.writeFileSync('src/data/tests.js', testsFile);
  console.log('Injected React tests into tests.js');
}

const rawQuestions = [
  {
    "testId": "react-test-01",
    "question": "What is React?",
    "options": [
      "A JavaScript library for building user interfaces",
      "A full-stack framework",
      "A database management system",
      "A CSS preprocessor"
    ],
    "correctOption": 0,
    "explanation": "React is a declarative, component-based JavaScript library for building user interfaces, developed by Meta."
  },
  {
    "testId": "react-test-01",
    "question": "Which function is used to create a functional component in React?",
    "options": [
      "function MyComponent() { return <div>Hello</div>; }",
      "const MyComponent = () => <div>Hello</div>;",
      "Both A and B",
      "None"
    ],
    "correctOption": 2,
    "explanation": "Both function declarations and arrow functions can define functional components."
  },
  {
    "testId": "react-test-01",
    "question": "What is JSX in React?",
    "options": [
      "A syntax extension that allows writing HTML-like code in JavaScript",
      "A JavaScript framework",
      "A CSS library",
      "A testing tool"
    ],
    "correctOption": 0,
    "explanation": "JSX is a syntax extension that enables you to write HTML-like code in JavaScript, which is transpiled to React.createElement calls."
  },
  {
    "testId": "react-test-01",
    "question": "How do you pass data from a parent component to a child component?",
    "options": ["Via props", "Via state", "Via context", "Via refs"],
    "correctOption": 0,
    "explanation": "Props (short for properties) are the primary way to pass data down from parent to child components."
  },
  {
    "testId": "react-test-01",
    "question": "What is the purpose of the `key` prop in React lists?",
    "options": [
      "To help React identify which items have changed, are added, or are removed",
      "To style list items",
      "To set the list order",
      "To bind event handlers"
    ],
    "correctOption": 0,
    "explanation": "Keys give elements a stable identity, helping React optimize re-rendering when the list changes."
  },
  {
    "testId": "react-test-01",
    "question": "What is the default behavior of state updates in React?",
    "options": [
      "They are batched and asynchronous",
      "They are synchronous",
      "They happen immediately",
      "They block the UI"
    ],
    "correctOption": 0,
    "explanation": "React batches state updates for performance, and they are asynchronous within event handlers."
  },
  {
    "testId": "react-test-01",
    "question": "What is a React component?",
    "options": [
      "A reusable piece of UI that can have its own state and props",
      "A function that returns HTML",
      "A class that extends React.Component",
      "All of the above"
    ],
    "correctOption": 3,
    "explanation": "Components are the building blocks of React UIs, and can be functional or class-based."
  },
  {
    "testId": "react-test-01",
    "question": "What does `React.Fragment` do?",
    "options": [
      "It groups a list of children without adding extra DOM nodes",
      "It creates a new DOM element",
      "It applies styles to children",
      "It handles routing"
    ],
    "correctOption": 0,
    "explanation": "React.Fragment allows you to return multiple elements without wrapping them in an additional container element."
  },
  {
    "testId": "react-test-01",
    "question": "How do you define props in a functional component?",
    "options": [
      "They are passed as an argument to the component function",
      "They are defined inside the component",
      "They are set using useProps",
      "They are declared globally"
    ],
    "correctOption": 0,
    "explanation": "Props are received as the first argument in the component function."
  },
  {
    "testId": "react-test-01",
    "question": "What is the virtual DOM in React?",
    "options": [
      "A lightweight representation of the actual DOM that React uses to optimize updates",
      "The real DOM",
      "A React component",
      "A state management library"
    ],
    "correctOption": 0,
    "explanation": "React's virtual DOM is a copy of the actual DOM that allows efficient updates by calculating differences (diffing)."
  },
  {
    "testId": "react-test-01",
    "question": "How do you handle events in React?",
    "options": [
      "Using camelCase event names and passing functions as event handlers",
      "Using lowercase event names",
      "Using inline HTML attributes",
      "Using jQuery"
    ],
    "correctOption": 0,
    "explanation": "React uses camelCase event names (e.g., onClick) and expects a function as the handler."
  },
  {
    "testId": "react-test-01",
    "question": "What is the purpose of `React.createElement`?",
    "options": [
      "To create a React element object representing a DOM node or component",
      "To create a new component",
      "To render a component to the DOM",
      "To set up the React environment"
    ],
    "correctOption": 0,
    "explanation": "`React.createElement` creates an object describing the UI element, used behind the scenes in JSX."
  },
  {
    "testId": "react-test-01",
    "question": "What is the difference between a controlled and uncontrolled component?",
    "options": [
      "Controlled components have their value controlled by React state; uncontrolled components keep their own internal state",
      "Uncontrolled components are controlled by React; controlled ones are not",
      "Both are controlled by React",
      "Both keep their own state"
    ],
    "correctOption": 0,
    "explanation": "In controlled components, the input value is driven by React state; in uncontrolled components, the DOM itself manages the state."
  },
  {
    "testId": "react-test-01",
    "question": "Which method is used to prevent default behavior in React event handlers?",
    "options": ["event.preventDefault()", "return false", "event.stopPropagation()", "event.cancelBubble()"],
    "correctOption": 0,
    "explanation": "`event.preventDefault()` stops the default action (e.g., form submission, link navigation)."
  },
  {
    "testId": "react-test-01",
    "question": "What is the role of `ReactDOM.render()` in React 17 and earlier?",
    "options": [
      "To render a React component into the DOM",
      "To render a component on the server",
      "To create a new React application",
      "To update the state"
    ],
    "correctOption": 0,
    "explanation": "`ReactDOM.render()` is used to mount a React component into a DOM container."
  },
  {
    "testId": "react-test-01",
    "question": "What is the difference between `Element` and `Component` in React?",
    "options": [
      "Elements are plain objects describing UI; Components are functions/classes that return elements",
      "Components are plain objects; Elements are functions",
      "Both are the same",
      "Elements are only for JSX"
    ],
    "correctOption": 0,
    "explanation": "Elements are immutable plain objects, while components are reusable and can have state."
  },
  {
    "testId": "react-test-01",
    "question": "What is the purpose of `ReactDOM.createPortal()`?",
    "options": [
      "To render children into a different part of the DOM tree",
      "To create a new portal",
      "To create a new React component",
      "To create a new route"
    ],
    "correctOption": 0,
    "explanation": "Portals allow rendering children into a DOM node outside the parent component's DOM hierarchy."
  },
  {
    "testId": "react-test-01",
    "question": "Which method in React is used to conditionally render JSX?",
    "options": [
      "Using `if` statements or ternary operators",
      "Using `switch` statements only",
      "Using `for` loops",
      "Using `while` loops"
    ],
    "correctOption": 0,
    "explanation": "Conditional rendering in React can be done using `if` statements, ternary operators, or logical `&&` operators."
  },
  {
    "testId": "react-test-01",
    "question": "What is the purpose of `React.StrictMode`?",
    "options": [
      "To highlight potential problems in an application during development",
      "To enforce strict coding standards",
      "To make the application run faster",
      "To disable React features"
    ],
    "correctOption": 0,
    "explanation": "React.StrictMode is a development tool that highlights potential problems in the application."
  },
  {
    "testId": "react-test-01",
    "question": "What is the correct way to style a component in React?",
    "options": [
      "Using inline styles with `style={{ property: value }}`",
      "Using CSS classes with `className`",
      "Using CSS-in-JS libraries",
      "All of the above"
    ],
    "correctOption": 3,
    "explanation": "React supports multiple styling approaches: inline styles, CSS classes (className), and CSS-in-JS libraries."
  },
  {
    "testId": "react-test-01",
    "question": "What is the purpose of `PropTypes` in React?",
    "options": [
      "To validate props passed to a component",
      "To define the state of a component",
      "To define the component's lifecycle",
      "To style the component"
    ],
    "correctOption": 0,
    "explanation": "PropTypes is used to check the types of props passed to a component during development."
  },
  {
    "testId": "react-test-01",
    "question": "Which lifecycle method is invoked after a component is rendered for the first time in a class component?",
    "options": ["componentDidMount", "componentWillMount", "render", "componentDidUpdate"],
    "correctOption": 0,
    "explanation": "`componentDidMount` runs after the component is first mounted to the DOM."
  },
  {
    "testId": "react-test-01",
    "question": "What is the purpose of `defaultProps` in React?",
    "options": [
      "To set default values for props",
      "To set default state values",
      "To define default methods",
      "To define default styles"
    ],
    "correctOption": 0,
    "explanation": "`defaultProps` allows you to define default values for props in case they are not provided."
  },
  {
    "testId": "react-test-02",
    "question": "Which method is used to update state in a React class component?",
    "options": ["setState()", "forceUpdate()", "updateState()", "this.state ="],
    "correctOption": 0,
    "explanation": "`this.setState()` is the proper method to request state updates and trigger re-rendering."
  },
  {
    "testId": "react-test-02",
    "question": "What is the purpose of `componentDidMount()`?",
    "options": [
      "To perform actions after the component has been inserted into the DOM",
      "To update state",
      "To render the component",
      "To handle errors"
    ],
    "correctOption": 0,
    "explanation": "`componentDidMount` is ideal for initiating API calls, subscriptions, or DOM operations."
  },
  {
    "testId": "react-test-02",
    "question": "When is `componentDidUpdate()` invoked?",
    "options": [
      "After the component's props or state have changed and the component re-rendered",
      "Before the component mounts",
      "When the component is unmounting",
      "Only on the first render"
    ],
    "correctOption": 0,
    "explanation": "`componentDidUpdate` is called after every update except the initial render."
  },
  {
    "testId": "react-test-02",
    "question": "What is the role of `shouldComponentUpdate()`?",
    "options": [
      "To optimize performance by allowing the component to decide whether to re-render",
      "To force an update",
      "To handle errors",
      "To initialize state"
    ],
    "correctOption": 0,
    "explanation": "`shouldComponentUpdate` returns a boolean to control re-rendering, helping prevent unnecessary renders."
  },
  {
    "testId": "react-test-02",
    "question": "How do you lift state up in React?",
    "options": [
      "Move the state to the closest common ancestor and pass it down via props",
      "Use global state directly",
      "Use React context",
      "Use a state management library"
    ],
    "correctOption": 0,
    "explanation": "Lifting state up involves moving shared state to the nearest parent component, then passing it down with callbacks."
  },
  {
    "testId": "react-test-02",
    "question": "Which method is called just before a component is unmounted?",
    "options": ["componentWillUnmount", "componentDidUnmount", "componentWillMount", "componentUnmount"],
    "correctOption": 0,
    "explanation": "`componentWillUnmount` is used for cleanup, like canceling network requests or removing event listeners."
  },
  {
    "testId": "react-test-02",
    "question": "What is the purpose of `getDerivedStateFromProps()`?",
    "options": [
      "To update state based on changes in props before the render",
      "To fetch data from an API",
      "To handle errors",
      "To force an update"
    ],
    "correctOption": 0,
    "explanation": "`getDerivedStateFromProps` is a static method used to update state in response to prop changes."
  },
  {
    "testId": "react-test-02",
    "question": "How do you pass a callback to a child component to update parent state?",
    "options": [
      "Pass the callback as a prop, and call it in the child",
      "Use context",
      "Use Redux",
      "Directly modify parent state"
    ],
    "correctOption": 0,
    "explanation": "The parent defines a function that updates its state and passes that function down to the child as a prop."
  },
  {
    "testId": "react-test-02",
    "question": "What is the output of `this.setState({ count: this.state.count + 1 })` when called twice in a row?",
    "options": [
      "It might not update correctly because setState is asynchronous and may batch",
      "It always works correctly",
      "It will cause an error",
      "It will update twice"
    ],
    "correctOption": 0,
    "explanation": "Since setState is asynchronous, consecutive calls may be batched. Use the functional form `setState(prevState => ({ count: prevState.count + 1 }))`."
  },
  {
    "testId": "react-test-02",
    "question": "Which lifecycle method is deprecated in React 17?",
    "options": ["componentWillMount", "componentDidMount", "render", "componentDidUpdate"],
    "correctOption": 0,
    "explanation": "`componentWillMount` was deprecated in favor of using the constructor or `componentDidMount` for side effects."
  },
  {
    "testId": "react-test-02",
    "question": "What is the purpose of `forceUpdate()`?",
    "options": [
      "To force a component to re-render without changing props or state",
      "To force an update to state",
      "To force a child component to update",
      "To force an error"
    ],
    "correctOption": 0,
    "explanation": "`forceUpdate()` triggers a re-render bypassing `shouldComponentUpdate`, rarely used."
  },
  {
    "testId": "react-test-02",
    "question": "How do you handle errors in React components?",
    "options": [
      "Using Error Boundaries (componentDidCatch) for class components",
      "Using try/catch",
      "Using error hooks",
      "All of the above"
    ],
    "correctOption": 0,
    "explanation": "Error Boundaries are React components that catch errors in their child component tree using `componentDidCatch`."
  },
  {
    "testId": "react-test-02",
    "question": "What is the purpose of `static getDerivedStateFromError()`?",
    "options": [
      "To update state when an error is thrown in a child component",
      "To log errors",
      "To render fallback UI",
      "To prevent errors"
    ],
    "correctOption": 0,
    "explanation": "`getDerivedStateFromError` is used with Error Boundaries to update state when an error is caught."
  },
  {
    "testId": "react-test-02",
    "question": "What is the difference between `state` and `props`?",
    "options": [
      "State is mutable and internal; props are immutable and passed from parent",
      "Props are mutable; state is immutable",
      "Both are mutable",
      "Both are immutable"
    ],
    "correctOption": 0,
    "explanation": "State is managed internally and can be updated; props are passed from parent and are read-only."
  },
  {
    "testId": "react-test-02",
    "question": "What is the Context API used for in React?",
    "options": [
      "To pass data deeply through the component tree without prop drilling",
      "To manage local state",
      "To handle side effects",
      "To optimize performance"
    ],
    "correctOption": 0,
    "explanation": "The Context API provides a way to share data across the component tree without passing props manually at every level."
  },
  {
    "testId": "react-test-03",
    "question": "Which hook is used to add state to a functional component?",
    "options": ["useState", "useEffect", "useContext", "useReducer"],
    "correctOption": 0,
    "explanation": "`useState` is the hook that adds local state to functional components."
  },
  {
    "testId": "react-test-03",
    "question": "Which hook is used to perform side effects in functional components?",
    "options": ["useEffect", "useState", "useRef", "useLayoutEffect"],
    "correctOption": 0,
    "explanation": "`useEffect` handles side effects like data fetching, subscriptions, and DOM manipulation."
  },
  {
    "testId": "react-test-03",
    "question": "How do you implement componentDidMount behavior with hooks?",
    "options": [
      "useEffect(() => {}, [])",
      "useEffect(() => {}, [deps])",
      "useEffect(() => {})",
      "useMount(() => {})"
    ],
    "correctOption": 0,
    "explanation": "Passing an empty dependency array to `useEffect` makes it run only once after mount."
  },
  {
    "testId": "react-test-03",
    "question": "What is the purpose of `useContext`?",
    "options": [
      "To access the value of a React context",
      "To create a new context",
      "To manage state globally",
      "To pass props deeply"
    ],
    "correctOption": 0,
    "explanation": "`useContext` is used to read and subscribe to a context value created by `React.createContext()`."
  },
  {
    "testId": "react-test-03",
    "question": "When should you use `useReducer` instead of `useState`?",
    "options": [
      "When the state logic is complex and involves multiple sub-values or next state depends on previous state",
      "When you need global state",
      "When you need to fetch data",
      "Never, useState is always better"
    ],
    "correctOption": 0,
    "explanation": "`useReducer` is preferred for complex state logic, similar to Redux, and is more predictable for large state updates."
  },
  {
    "testId": "react-test-03",
    "question": "What is the purpose of `useCallback`?",
    "options": [
      "To memoize a function so it doesn't get recreated on every render",
      "To memoize a value",
      "To create a new function",
      "To handle side effects"
    ],
    "correctOption": 0,
    "explanation": "`useCallback` returns a memoized version of the function that only changes if its dependencies change."
  },
  {
    "testId": "react-test-03",
    "question": "What is the difference between `useMemo` and `useCallback`?",
    "options": [
      "useMemo memoizes a value; useCallback memoizes a function",
      "useCallback memoizes a value; useMemo memoizes a function",
      "Both memoize values",
      "Both memoize functions"
    ],
    "correctOption": 0,
    "explanation": "`useMemo` caches the result of a computation; `useCallback` caches the function itself."
  },
  {
    "testId": "react-test-03",
    "question": "What is a custom hook?",
    "options": [
      "A function that starts with 'use' and can call other hooks",
      "A built-in hook",
      "A class component",
      "A component that returns JSX"
    ],
    "correctOption": 0,
    "explanation": "Custom hooks are reusable functions that encapsulate stateful logic and can use built-in hooks."
  },
  {
    "testId": "react-test-03",
    "question": "Which hook is used to get a mutable reference to a DOM element?",
    "options": ["useRef", "useState", "useEffect", "useMemo"],
    "correctOption": 0,
    "explanation": "`useRef` returns a mutable object whose `.current` property persists across renders and can hold a DOM element reference."
  },
  {
    "testId": "react-test-03",
    "question": "How do you simulate componentWillUnmount with hooks?",
    "options": [
      "Return a cleanup function from useEffect",
      "Use useUnmount",
      "Use componentWillUnmount",
      "Use useCleanup"
    ],
    "correctOption": 0,
    "explanation": "The function returned from `useEffect` runs on unmount, serving as cleanup."
  },
  {
    "testId": "react-test-03",
    "question": "What is the purpose of `useLayoutEffect`?",
    "options": [
      "To run after DOM mutations but before the browser repaint, for measuring DOM changes",
      "To run after the browser repaint",
      "To run only once",
      "To run on server"
    ],
    "correctOption": 0,
    "explanation": "`useLayoutEffect` fires synchronously after DOM mutations, useful for reading layout and DOM updates."
  },
  {
    "testId": "react-test-03",
    "question": "What is the rule about calling hooks?",
    "options": [
      "Hooks must be called at the top level of a functional component or custom hook, not inside loops or conditions",
      "Hooks can be called anywhere",
      "Hooks must be called in order",
      "Hooks can only be called in class components"
    ],
    "correctOption": 0,
    "explanation": "React relies on the order of hooks, so they must be called unconditionally at the top level."
  },
  {
    "testId": "react-test-03",
    "question": "What is the purpose of `React.memo`?",
    "options": [
      "To memoize a component, preventing re-renders unless props change",
      "To memoize a function",
      "To create a new component",
      "To handle side effects"
    ],
    "correctOption": 0,
    "explanation": "`React.memo` is a higher-order component that skips rendering if the props haven't changed."
  },
  {
    "testId": "react-test-03",
    "question": "What is a higher-order component (HOC)?",
    "options": [
      "A function that takes a component and returns a new component",
      "A component that has higher priority",
      "A component that uses hooks",
      "A component that is exported"
    ],
    "correctOption": 0,
    "explanation": "HOCs are used to reuse component logic by wrapping components with additional functionality."
  },
  {
    "testId": "react-test-03",
    "question": "What is the purpose of `useImperativeHandle`?",
    "options": [
      "To customize the instance value exposed to parent components via ref",
      "To manage state",
      "To handle side effects",
      "To memoize values"
    ],
    "correctOption": 0,
    "explanation": "`useImperativeHandle` is used with `forwardRef` to control the exposed ref."
  },
  {
    "testId": "react-test-03",
    "question": "What is the purpose of `React.lazy` and `Suspense`?",
    "options": [
      "To lazy load components for code splitting",
      "To handle errors",
      "To manage state",
      "To handle side effects"
    ],
    "correctOption": 0,
    "explanation": "`React.lazy` enables dynamic imports; `Suspense` handles the loading state."
  },
  {
    "testId": "react-test-03",
    "question": "What is the purpose of `ErrorBoundary` in React?",
    "options": [
      "To catch JavaScript errors in the component tree and display fallback UI",
      "To catch network errors",
      "To catch rendering errors only",
      "To prevent any errors"
    ],
    "correctOption": 0,
    "explanation": "Error Boundaries catch errors during rendering, lifecycle methods, and constructors in the component tree."
  },
  {
    "testId": "react-test-03",
    "question": "What is `StrictMode` in React?",
    "options": [
      "A development tool that helps identify potential problems",
      "A production mode",
      "A testing mode",
      "A performance optimization tool"
    ],
    "correctOption": 0,
    "explanation": "`StrictMode` is a wrapper that activates additional checks and warnings for potential problems in the application."
  },
  {
    "testId": "react-test-03",
    "question": "What is the purpose of `useDebugValue`?",
    "options": [
      "To display a label for custom hooks in React DevTools",
      "To debug the component",
      "To log errors",
      "To profile performance"
    ],
    "correctOption": 0,
    "explanation": "`useDebugValue` is used to add custom labels to custom hooks for easier debugging in React DevTools."
  }
];

const questions = rawQuestions.map((q, index) => {
  return {
    ...q,
    id: `${q.testId}-q${index + 1}`
  };
});

let questionsFile = fs.readFileSync('src/data/questions.js', 'utf8');
const questionsEndIndex = questionsFile.lastIndexOf('];');

if (questionsEndIndex !== -1 && !questionsFile.includes('"react-test-01-q1"')) {
  const injectionString = ',\n' + questions.map(q => JSON.stringify(q, null, 2)).join(',\n') + '\n];';
  questionsFile = questionsFile.substring(0, questionsEndIndex) + injectionString;
  fs.writeFileSync('src/data/questions.js', questionsFile);
  console.log('Injected React questions into questions.js');
}
