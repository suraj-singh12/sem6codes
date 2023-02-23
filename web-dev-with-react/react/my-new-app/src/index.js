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

// const myElement = React.createElement("h1", {style:{color: 'blue'}, className:'myClass'}, "hello");
// root.render(myElement);

const lpu = React.createElement('h1', {}, 'LPU');
const trI = React.createElement('h2', {style:{paddingBottom:'3rem'}}, 'Transforming Education Transforming India');
const toDisplay = React.createElement('div', {style: {backgroundColor: 'yellow', display:'inline-block', color: 'red'}}, lpu, trI);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(toDisplay);