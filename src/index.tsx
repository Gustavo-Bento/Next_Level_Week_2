import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Link} from 'react-router-dom';

ReactDOM.render(
  /*Metodo injeta um elemento dentro do HTML, através do seletor ID root*/
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);