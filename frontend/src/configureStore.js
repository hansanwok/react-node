import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from 'reducers';
import globalSagas from 'sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export default createStore(
  reducers,
  applyMiddleware(sagaMiddleware),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// then run the saga
sagaMiddleware.run(globalSagas);
