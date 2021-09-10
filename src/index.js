import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index.scss';
import './mygtukas.scss';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// import element from './Elements/element';
import Component from './Components/Component';
import App from './Components/App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// elemtas turi buti viename tage
// tagu viduje gali buti aprasyta kiek norima
// const element = (
//   <>
//     <h1>Hello, bebras!</h1>
//     <small>labas</small>
//   </>
// )
// perkeltas i Elements/element.jsx

ReactDOM.render(
  // <Component name = {"Petras "} surname = {"Petraitis"}/>,
  // <App per = {' griovi'}/>,
  <App/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
