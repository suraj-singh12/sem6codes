import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FuncComp from './components/funcComp';
import UncontrolledComponent from './components/UncontrolledComponent';
import UsingAxios from './components/usingAxios';
import UsingAxiosPost from './components/UsingAxiosPost';
import GetRequest from './requests/GetRequest';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <FuncComp /> */}
    {/* <UncontrolledComponent /> */}
    {/* <UsingAxios /> */}
    {/* <UsingAxiosPost /> */}
    <GetRequest />
  </React.StrictMode>
);