
/**
    * * React is a JavaScript library for building user interfaces. It allows you to create reusable UI components and manage their state and behavior.
    * * Some key concepts in React include:
 
    * * Components: These are the building blocks of a React application. A component is a function or class that returns a UI element or a set of elements. Components can be nested within each other to create complex UIs.
 
    * * JSX: This is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. JSX makes it easier to create and manage UI components in React.
 
    * * Props: Short for "properties", props are a way to pass data from a parent component to a child component. Props are immutable and can only be passed from parent to child.
 
    * * State: State is a way to manage data that can change over time within a component. When state changes, React automatically updates the component and any child components that depend on that state.
 
    * * Hooks: Introduced in React 16.8, hooks are a way to use state and other React features in function components. They allow you to write stateful logic in function components without needing to write class components.
 
    * * Virtual DOM: React uses a virtual representation of the actual DOM to optimize performance. When state or props change, React compares the virtual DOM to the actual DOM and only updates the parts that need to change.
 
    * * Overall, React provides a declarative and efficient way to build UIs by breaking them down into reusable components with managed state and behavior.

 */



/**
 * * Components:  2 types
 * *             Fuctional Components, Class Components
 */


// * Functional Components : 
//              Are stateless, implemented as functions, simple, efficient, and used when component does not need to manage its state or just need to render some data.

function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
}



// * Class Components :
//              implemented as es6 classes, can manage their own states

