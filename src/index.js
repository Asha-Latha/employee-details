import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import RootComponent from './components/RootComponent';
import {HashRouter} from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <RootComponent></RootComponent>
  </HashRouter>,
  
  document.getElementById('root')
);

