import { all } from 'redux-saga/effects';

import cartSaga from './cart/sagas';

export default function* rootSaga() {
  return yield all([cartSaga]);
}
