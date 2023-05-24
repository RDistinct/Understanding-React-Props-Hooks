# TABLE OF CONTENT

[WHAT IS REACT](#what-is-react)

[UNDERSTANDING PROPS & HOOKS](#understand-props--hooks-in-react)

[PROPS](#props)

- [DEFAULT PROPS](#default-props)

[HOOKS](#hooks)

[Before hooks](#)

[WHAT IS REACT](#what-is-react)

[WHAT IS REACT](#what-is-react)

[WHAT IS REACT](#what-is-react)

# WHAT IS REACT?

A JavaScript library for building user interfaces. But what is a javascript library? How does it work in the DOM?
The DOM is responsible for rendering web pages(HTML,CSS,JS), & can be quite cumbersome to work with. What if there is a way to simplify working with the DOM?

That is where libraries/frameworks(they basically do the same thing in a different way) come in. A library is a set of pre-defined functions that make it easy to work with the DOM. The pre-defined functions abstract some complexity of working with the DOM api. Its a layer between a developer's code & the browser's DOM.

# UNDERSTAND PROPS & HOOKS IN REACT

To understand how **Hooks & Props** work, first you have to understand **State** in react.

State is the application's data that need to be tracked.

So far we know that a component is a piece of UI eg Header, Article, Navbar, Button etc. In React, a component is written using a JS function that can be mixed with HTML.

<hr>

## PROPS

Props is a short form for **PROPERTIES**
They are used to pass data from one `parent component` to another(`child component`). This makes reusability possible because data is being shared between components, & also make a component reusable.

Think of props as a channel of communication between components.

Props are passed from top to bottom(parent to child) in a hierarchy. When you see props, remember `HTML attributes` e.g. `href, src, width, height, alt, etc`

```jsx props
//Parent component
function Parent() {
  const name = "Ben";
  return <Child name={name} />;
}
//Child component
function Child(props) {
  return <p>Hello {props.name}</p>;
}
```

In the above eg we pass a prop named `name` from Parent to Child component.

Props are also read-only meaning they cant be changed but can be consumed & cant modify it. To modify a prop, you have to introduce _STATE_ in react.

#### An Example of Using a Prop

1. Create a functional component. We will call it `MyProduct.jsx`
2. We initialize our props.This is still in the child component. So far, no data value has been assigned to the props yet. We pass props as an argument to our component function. `function MyProduct(props)`
3. In the parent component `App.jsx`, we import the `MyProduct` component and here we pass data values to the props.Remember its the parent component that passes data to the prop, & here we do exactly that. Also the parent component passes data same way as html attributes. `name = "laptop"`

```jsx props
//Parent Component
function App() {
  return (
    <>
      <h1>Props & Hooks</h1>

      <MyProduct
        name="Laptop"
        description="Zen5-powered laptop"
        price={1000}
      />

    </>
    }
export default App;

//Child component
function MyProduct(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p>{props.price}</p>
    </div>
  );
}

export default MyProduct;

```

In short, Initialize props >> props & value they hold >> consume props in parent and assign values to them.

To see the importance of props, we can reuse the `MyProduct` component to create another product.

```jsx props
function App() {
  return (
    <>
      <h1>Props & Hooks</h1>

      <MyProduct
        name="Laptop"
        description="Zen5-powered laptop"
        price={1000}
      />

     <MyProduct
        name="Samsum S23"
        description="Most powerful android phone"
        price={$800}
      />

    </>
    }
export default App;
```

Now we have 2 products a Phone & Laptop but from same component, just different data.We are reusing a component to create different products. **What does this remind you of? OOP creating different objects from same class? Story for another day😏**

#### Destructuring Props

In the above example, we are using `dot notation` to access prop keys `prop.name or prop.description`. There is another easier way to unpack props, and that is by using `ES6 destructuring`.

```jsx prop destructuring
function MyProduct({ name, description, price }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
}
```

#### DEFAULT PROPS

Sometimes you want to set default values for props, for instance when we don't have props data passed in.
We use `defaultProps` property in a component to set default values of our props. We use the component's name then `dot(.)` followed by `defaultProps`. This ensures that props are not without value. When we pass value in the component later, then these default values are overridden.

```jsx default props
function MyProducts({ name, description, price }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
}
Myproducts.defaultProps = {
        name="Laptop",
        description="Zen5-powered laptop",
        price=1000
};

export default MyProducts;
```

## HOOKS

#### Before Hooks

Before React 16.8, react components were _class-based_. Using classes was the only way to access a component's state and its lifecycle.

Now react uses functional components, and we need to access a component's state and other React functions. Enter into **HOOKS**. The same way class components were able to access state, in functional components we can now do that using hooks.

They are called _Hooks_ because they help us "hook into" React's features such as **state and lifecycle methods**

Hooks are functions that help us use React's features (like tracking `state` in a component)

To use hooks you `import` them from `React`

### useState() Hook

Because an application has state, we need a way to track this state and perform some actions once this state changes. To use `useState`, initialize it in the functional component. The `useState` returns 2 values

Think of useState as: current state(state) >> update state(setState)

    1. the current state and
    2. a function that changes the state.

```jsx useState
import {useState} from 'react';

function PickColor(){
const [color, setColor] = useState{""}
    //color is our current state
    //setColor is function that updates state.
return(
    <p>Color is {color}</p>
    <button onClick={()=>setColor('purple')}>Purple</button>
)
}
```

We are first importing useState, declaring the state we want to 'track & update' `const [color, setColor] = useState('');`, initializing the 'state' in our component `<p>Color is {color}</p>`, then we **update state** when button is clicked.

### useEffect() Hook

This hook is used to perform side effect on your component. This happens when dealing with external systems or external data eg fetching data.This hook runs after every render of a component.

External systems refer to the systems not controlled by react but are being used by your react app. Eg network, browser APIs, or 3rd party library.

In short, `useEffect()` lets you synchronize a component with external systems.

The `useEffect` takes two arguments, the first one being a `setup` function that carries the Effect's logic & the second argument is an array of dependencies that tell react when to run your code eg milliseconds in a `setTimeOut` function. React runs the `setup` function once the component is added to the DOM. The `setup` function can return an optional `cleanup` function, which is ran(with old values) after every re-render with change in dependencies, and then run the setup function(with new values). The cleanup function is also run after the component is removed from the DOM.Think of the cleanup code as a way of telling react to "disconnect" from the external system.

Dependencies are optional & it refers to the reactive values referenced inside the setup code. The reactive values include `props, state & variables & functions` declared inside the component.

By default, the useState() returns `undefined`.

```jsx useEffect
//Eg 1
useEffect(setupFn, arrayDependencies);

//Eg 2
useEffect(() => {setupFn(return cleanupFn(optional))}, [prop, state]);
```

Call the `useEffect()` hook at the top level of your component in order to declare an Effect,because this is a hook.

An Example

```jsx fetch with useEffect()
import { useState, useEffect } from "react";
const [quote, setQuote] = useState([]);

useEffect(() => {
  function getQuotes() {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => setQuote(data));
  }
}, []);
```

The fetch takes one argument which is the path to resource URL.This returns a promise that resolves in a `Response` object. The `Response` Object is a representation of the whole http response, and we use `json()` to extract JSON body content from the response object.The `json()` returns a second promise that resolves with the result of parsing the response body text as JSON.

The function `getQuotes` is the setup function that handles the effec's logic.

### useContext() Hook

This hook is used to manage state globally. State should be held by the highest parent component.

To use `useContext` first import it from react then initialize it.

```jsx useContext
import { createContext } from "react";

const UserContext = createContext();
```

Then, wrap the children components in the `Context Provider`

```jsx
<UserContext.Provider></UserContext.Provider>
```

<hr>

### **useRef() Hook**

Before getting into useRef() lets understand some react terms/concepts:

**React elements** - these are the smallest building blocks of a react app.It describes what you want to see on the UI.An example is a header element.

`const headingElem = <h1>Im a Heading</h1>`

React elements are plain objects.

React DOM - package that updates the DOM to match react elements through methods like `render(),findDOMNode(),hydrate()` etc.

Virtual DOM - a lightweight copy of the DOM.Before changes are made to the actual DOM, they are first made in the virtual DOM.

How react renders elements/components - a DOM element is passed to ReactDOM, then passed to the `root.render()` function. If you have noticed, so far we have not used `document.createElement, getElementById,` & such methods in React.These are carried out by react DOM.
On a clean webpage, the DOM is empty coz it has no elements in it. With react, we add elements and every time we update an element, react compares the previous DOM with current and applies the only changes needed.

`render()` updates the virtual DOM, them react compares the virtual DOM to the actual DOM and applies the change. React transpile the JSX to actual HTML & settles the difference between virtual and real DOM.

In simple terms, When a component’s state changes, React updates the virtual DOM first and then compares it with the previous version of the virtual DOM. This process is called **reconciliation**. React then updates only the parts of the actual DOM that have changed based on the changes in the virtual DOM. This approach is much faster than updating the entire DOM every time there is a change in the state of a component.

useRef() hook lets you reference a value that is not needed for rendering.

Question: what values are needed for rendering?
Ans: props and state values. Any time they change, a render is triggered.

When you want to store data that is
not part of a component's state, but still needs to be accessed by other components.

Refs are used to access the value of uncontrolled component such as an input field which is not managed by react(doesnt have state) but the DOM itself.

Its syntax is:

```jsx
const InitialRef = useRef(Initial_Value);
//when you log InitialRef you get an object with current key and initial value
console.log(refVal); //Object
console.log(refVal.current); //Object property
console.log((refVal.current = "React session")); //mutation -> not advisable
```

`useRef()` returns an object with single property, `current`.A ref is a plain JavaScript object.
The `current` value is set to the initial value you passed when declaring & initializing useRef.You can change this value later. You can mutate the `ref.current` property, which is a caveat.
When `ref.current` changes, the component does not re-render. Remember a component rerenders once its state changes.

Since changing ref doesn't cause a re-render, they are perfect for storing info that doesn't affect visual output of a component. So, in short a ref is used to persist data between renders.Therefore, useRef() has the following characteristics:

- stores info between re-renders. Regular variables reset on every render.
- doesnt trigger a re-render . State variables trigger a re-render
- info in useRef() is local.

Dont use `useRef()` on storing info you want to display on the screen. In this case, use `useState()`

Also, dont read/write refs during rendering, in stead read/write refs in event handlers or effects.Ths is because react expects a component to behave like a pure function, same inputs should give same outputs.Eg of reading/writing refs during rendering:

```jsx useRef()

```

#### When To Use Refs

Refs are treated as an "escape hatch" when working with external systems and browser APIs
Refs are useful when you want to step out of react & communicate with external APIs that wont have an impact on a component.So long as a component needs to store some value that wont impact rendering logic. These include:

- Storing timeout IDs
- storing and manipulating DOM elements
- storing objects not necessary to calculate JSX.

#### DOM Manipulation with ref

An example of how `useRef` is similar to `useState`

```jsx useRef example
import { useRef } from "react";
function App() {
  const clickRef = useRef(0);
  console.log(clickRef);

  function handleClick() {
    clickRef.current = clickRef.current + 1;
    console.log(clickRef.current);
  }
  return (
    <>
      {" "}
      <button onClick={handleClick}>Click Here</button>;{" "}
    </>
  );
}
```

Using Ref to focus on an input field.We are going to use the `ref` attribute.

```jsx ref attribute
import { useRef } from "react";
const fieldRef = useRef()
function App() {

function focusInput(){
  fieldRef.current.focus();
}

  return <>
  <input ref={fieldRef}>
  <button onClick={focusInput}>Click</button>
  </>;
}
```
