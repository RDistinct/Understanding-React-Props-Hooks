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

Sometimes you want to set default values for props, for instance when we dont have props data passed in.
We use `defaultProps` property in a component to set default values of our props. We use the component's name then `dot(.)` followed by `defaultProps`. This ensures that props are not without value. When we pass value in the component later, then these default values are overriden.

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

### useState Hook

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

### useEffect Hook

This hook is used to perform side effect on your component. This happens when dealing with external systems or external data eg fetching data,

The `useEffect` takes two arguments, the first one being a function & the second an array of dependencies that tell react when to run your code eg milliseconds in a `setTimeOut` function.

```jsx useEffect
useEffect(() => {}, [prop, state]);
```

### useContext Hook

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
