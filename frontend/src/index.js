import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'configureStore';
import { BrowserRouter } from 'react-router-dom';

import Routes from 'routes';
import registerServiceWorker from 'registerServiceWorker';
import './assets/scss/theme.css';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
