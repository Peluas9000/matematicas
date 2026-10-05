import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Car from './components/Car';
import Contador from './components/Contador.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      {/* Coche Audi A3: marca, modelo, velocidad máxima y aceleración */}
      {/* <Car marca="Audi" modelo="A3" velocidadmaxima="240" aceleracion="25" /> */}
      <Contador inicio="2"/>
      <Contador inicio="15"/>
      {/* Coche BMW X5: marca, modelo, velocidad máxima y aceleración */}
      {/* <Car marca="BMW" modelo="X5" velocidadmaxima="250" aceleracion="20" /> */}
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
