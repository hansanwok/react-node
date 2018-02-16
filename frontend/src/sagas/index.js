import { fork, all } from 'redux-saga/effects';

import sagaA from './sagaA';

const sagas = [
  sagaA,
  // NOTE: put other app sagas here
];

function* globalSagas() {
  const globalSagasForks = sagas.map((saga) => fork(saga));

  yield all([...globalSagasForks]);
}

export default globalSagas;