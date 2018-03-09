import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import reducers from 'reducers';

const configureStore = (browserHistory) => {

  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware, routerMiddleware(browserHistory)];

  const store = createStore(
    reducers,
    compose(applyMiddleware(...middlewares)),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  // then run the saga
  store.runSaga = sagaMiddleware.run;
  // sagaMiddleware.run(globalSagas);

  return store;
}



export default configureStore;