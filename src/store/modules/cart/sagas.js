import { call, select, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { formatPrice } from '../../../utils/format';
import { addToCartSuccess, updateAmount } from './actions';

function* addToCart({ id }) {
  // select is to catch a reducer
  const productExists = yield select((state) =>
    state.cart.find((p) => p.id === id)
  );

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;

  const newAmount = currentAmount + 1;

  if (newAmount > stockAmount) {
    console.tron.warn('ERRO');
    return;
  }

  if (productExists) {
    // put is to use a action
    yield put(updateAmount(id, newAmount));
  } else {
    // call is to make a request
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));
  }
}

// All:
// takeLatest: Use only the last action called
export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
