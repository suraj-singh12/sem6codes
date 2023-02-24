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


import React from 'react';
import ReactDOM from 'react-dom/client';

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

let listOfElems = ['element1', 'element2', 'element X']
let myList = listOfElems.map((item)  => {
  // return React.createElement('li', {}, item);
  return <li>{item}</li>
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myList);

