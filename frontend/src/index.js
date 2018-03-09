import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'configureStore';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import globalSagas from 'sagas';


import Routes from 'routes';
import registerServiceWorker from 'registerServiceWorker';
import './assets/scss/theme.css';

const history = createBrowserHistory();
const store = configureStore(history);
store.runSaga(globalSagas);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
