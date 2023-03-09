// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />, <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// import React from 'react';
// import ReactDOM from 'react-dom/client';

// program 1

// const myElement = React.createElement("h1", {style:{color: 'blue'}, className:'myClass'}, "hello");
// root.render(myElement);

// const lpu = React.createElement('h1', {}, 'LPU');
// const trI = React.createElement('h2', {style:{paddingBottom:'3rem'}}, 'Transforming Education Transforming India');
// const toDisplay = React.createElement('div', {style: {backgroundColor: 'yellow', display:'inline-block', color: 'red'}}, lpu, trI);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(toDisplay);


// Program 2

// let l1 = React.createElement('li', {}, '1 lb Salmon');
// let l2 = React.createElement('li', {}, '1 cup Pine Nuts');
// let l3 = React.createElement('li', {}, '2 cups Butter Lettuce');
// let l4 = React.createElement('li', {}, '1 Yellow Squash');
// let l5 = React.createElement('li', {}, '1/2 cup Olive Oil');
// let l6 = React.createElement('li', {}, '3 cloves of Garlic');
// let items = React.createElement('ul', {}, l1, l2, l3, l4, l5, l6);

// Program 2 (way 2)
// let elements = ['1 lb Salmon', '1 cup Pine Nuts', '2 cups Butter Lettuce', '1 Yellow Squash', '1/2 cup Olive Oil', '3 cloves of Garlic'];
// for(let e = 0; e < elements.length; ++e) {
//   elements[e] = React.createElement('li', {}, elements[e]);
// }
// let items = React.createElement('ul', {}, elements);


// root.render(items);
// const root = ReactDOM.createRoot(document.getElementById('root'));



// Problem 3
// const seeMyTag = <h1><u>See my H1 Tag</u></h1>;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(seeMyTag);


// let myList = <ul>
//   <li>1 lb Salmon</li>
//   <li>1 cup Pine Nuts</li>
//   <li>2 cups Butter Lettuce</li>
//   <li>1 Yellow Squash</li>
//   <li>1/2 cup Olive Oil</li>
//   <li>3 cloves of Garlic</li>
// </ul>;

// let listOfElems = ['element1', 'element2', 'element X']
// let myList = listOfElems.map((item)  => {
//   // return React.createElement('li', {}, item);
//   return <li>{item}</li>
// });

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myList);



// * Creating class components
// class Book extends React.Component {
//     render() {
//         return <h2>Hello, I am a Book</h2>
//     }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Book />)



// * Creating functional Components
// function Book() {
//   return <>
//     <h2>Hello, I am a Book Book</h2>
//   </>
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Book/>)


// ----------------- code2
// class Book1 extends React.Component {
//   render() {
//     return (
//       <>
//         <h2>Do you have ReactJs Book?</h2>
//         <Book/>
//       </>
//     )
//   }
// }

// class Book extends React.Component {
//   render() {
//     return (
//       <>
//       <h3>
//         The React Book</h3>
//       </>
//     )
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Book1/>)

// --------------------------------------------

// import './index.css';

// function MyProfess(props) {
//   return <p style={{color: 'white', backgroundColor: 'orange', float: 'right', padding: '2vw', borderRadius: '0.3em', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}>My Profession is {props.prof}</p>
// }
// function MyIntro() {
//   return <h3 style={{padding: '2vw', backgroundColor: 'lightskyblue', boxShadow: '10px 5px 5px lightblue', borderRadius: '4px'}}>My name is Anurag! <MyProfess prof="student"/></h3>
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyIntro/>)


// CSS modules
// to avoid name conflicts, to avoid css to get applied to all components
// css modules are local to the comoponent for which they are defined

// import React from  'react';
// import ReactDOM from 'react-dom/client';
// import Demo from './css_modules_example/Demo.js';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Demo />);

/*
 * To install bootstrap: npm i bootstrap@latest --save
 * import 'bootstrap/dist/css/bootstrap.min.css';
*/



// event handling in React
// import React from 'react';
// import ReactDOM from 'react-dom/client';

// function Form() {
//     function handleSubmit(e) {
//         e.preventDefault();
//         console.log('You clicked submit');
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//             <button type="submit">Submit</button>
//         </form>
//     );
// }

// class Form extends React.Component {
//     handleSubmit(e) {
//         e.preventDefault();
//         console.log('You clicked submit');
//         alert('How dare you to click that submit button !')
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <button type="submit">Submit</button>
//             </form>
//         )
//     }
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Form />);






// States in React

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// class Book extends React.Component {
//     constructor() {
//         super();
//         this.updateName = this.updateName.bind(this);
//         this.state = {
//             name: 'Fundaments of ReactJS'
//         }
//     }
//     updateName() {
//         // this.setState({name: 'ReactJS Essentials'});
//         let data = document.getElementById('name');
//         if(data && data.value !== '')
//             this.setState({name: data.value});
//     }

//     render() {
//         return (
//             <>
//                 <h1>{this.state.name}</h1>
//                 <label htmlFor="name">
//                     New Book Name:
//                     <input type="text" id="name" />
//                 </label>
//                 <button onClick={this.updateName}>Change Name</button>
//             </>
//         )
//     }
// }


// states using functional components
// import {useState} from 'react';     // will use this useState hook  

// const Book = () => {
//     // let state = {
//     //     name: 'Fundamentals of React'
//     // }
//     const [name, setName] = useState('Java CP');        // utilizing the useState hook 

//     function updateName() {
//         // this.setState({name: 'ReactJS Essentials'});
//         let data = document.getElementById('name');
//         if(data && data.value !== '')
//             setName(data.value);
//     }
//     return (
//         <>
//             <h1>{name}</h1>
//             <label htmlFor="name">
//                 New Book Name:
//                 <input type="text" id="name" />
//             </label>
//             <button onClick={updateName}>Change Name</button>
//         </>
//     )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Book />);



/**
 * React Hooks
 * Overall, hooks provide a simpler and more flexible way to use state and other 
 * React features in functional components, 
 * and have quickly become a popular tool for building React applications.
 * 
 * There are several built-in hooks in React, including:
 * useState, useEffect, useContext, useReducer, useMemo, useCallBack
 */



//  * useEffect : used to perform side effects in components, 
// data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.
// useEffect always has a callback function

// import React from 'react';
// import ReactDOM from 'react-dom/client';


// // useEffect implementation in class Components
// class Book extends React.Component {
//     // constructor() {
//     //     super()
//     //     this.state = {
//     //         count : 0
//     //     }
//     //     this.setCount = this.setCount.bind(this);
//     // }
//     state = {
//         count : 0
//     }
    
//     setCount() {
//         let currentCount = this.state.count;
//         this.setState({count : currentCount + 1});
//     }

//     componentDidMount() {
//         document.title = `You clicked ${this.state.count} times`;
//     }
    
//     // componentDidUpdate() implements useEffect functionality here 
//     componentDidUpdate() {
//         document.title = `You clicked ${this.state.count} times`;
//         const countElement = document.getElementById('count');
//         countElement.textContent = `Counter : ${this.state.count}`;
//     }
//     render() {
//         return (
//             <>
//             <p>You clicked {this.state.count} times</p>
//             <p id="count"></p>
//             <button onClick={this.setCount}>Click Me</button>
//             </>
//         )
//     }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Book />);


// * useEffect implementation in functional components
// import React, {useState, useEffect} from 'react';
// import ReactDOM from 'react-dom/client';

// const Timer = () => {
//     const [value, setValue] = useState(0);
//     // useEffect(() => {
//     //     setTimeout(() => {
//     //         setValue(value + 1);
//     //     }
//     //     , 1000);
//     // });

//     // const updateTime = () => {
//     //     setTimeout(()=> {
//     //         setValue(value + 1);
//     //     }, 1000);
//     // }
//     // updateTime();


//     // without useEffect 
//     setTimeout( () => {
//         setValue(value + 1);
//     }, 1000)
//     return <h1>I have rendered {value} times</h1>
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Timer />);





import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';

const Timer = () => {
    const [value, setValue] = useState(0);
    const [value2, setValue2] = useState(0);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setValue(value + 1);
    //     }
    //     , 1000);
    // });

    // const updateTime = () => {
    //     setTimeout(()=> {
    //         setValue(value + 1);
    //     }, 1000);
    // }
    // updateTime();


    // without useEffect 
    // setTimeout( () => {
    //     setValue(value + 1);
    // }, 1000)

    // will count only once
    useEffect(() => {
        console.log('You clicked')
    }, [value]);


    // will keep on counting :
    // useEffect(() => {
    //     setTimeout(() => {
    //         setValue(value + 1);
    //     }, 1000);
    // }, [value]);

    return (
        <>
            <button onClick={() => setValue(value + 1)}> Number of clicks: {value}</button>
            <button onClick={() => setValue2(value2 + 1)}> Number of clicks: {value}</button>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);


// example : useState
// import React from 'react';
// import ReactDOM from 'react-dom/client';

// class Book extends React.Component {
//     state = {
//         name: 'Fundamentals of React',
//     }
    
//     updateName = () => {
//         let data = document.getElementById('name');
//         if(data && data.value !== '')
//             this.setState({ name: data.value });
//     }

//     render() {
//         return (
//             <>
//                 <h1>{this.state.name}</h1>
//                 <label htmlFor="name">
//                     New Book Name:
//                     <input type="text" id="name" />
//                 </label>
//                 <button onClick={this.updateName}>Change Name</button>
//             </>
//         )
//     }

// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Book />);

// useState hook example 2
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { useState } from 'react';

// const Book = () => {
//     const [name, setName] = useState('Love C++');

//     return (
//         <>
//             <h1>{name}</h1>
//             <label htmlFor="name">
//                 New Book Name:
//                 <input type="text" id="name" />
//             </label>
//             <button onClick={() => setName(document.getElementById('name') ? document.getElementById('name').value : '')}>Change Name</button>
//         </>
//     )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Book />);



// // useEffect hook example2
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { useState } from 'react';


// const Mobile = () => {
//     const [specs, setSpecs] = useState({ 
//         devName: 'Google Pixel 7 Pro',
//         androidVersion: 'Android 11',
//         weight: '212g weight',
//         camera: '50MP Main camera',
//         storage: '128GB storage',
//         ram: '12GB RAM'
//     });

//     const updateRam = () => {
//         setSpecs(prevSpecs => {
//             return {...prevSpecs, ram: '8GB RAM'}
//         });
//     }
//     return (
//         <>
//             <h1>{specs.devName}</h1>
//             <p>{specs.androidVersion}</p>
//             <p>{specs.weight}</p>
//             <p>{specs.camera}</p>
//             <p>{specs.storage}</p>
//             <p>{specs.ram}</p>
//             {/* <button onClick={() => setSpecs({...specs, ram: '8GB RAM'})}>Change RAM to 8 GB</button> */}
//             <button onClick={updateRam}>Change RAM to 8 GB</button>
//         </>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Mobile />);