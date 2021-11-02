import {
  decrease,
  increase,
  DECREASE_ASYNC,
  INCREASE_ASYNC,
} from "../actions/CounterAction";
import { delay, put, takeEvery, takeLatest } from "@redux-saga/core/effects";

function* increaseSaga() {
  yield delay(0);
  yield put(increase());
}

function* decreaseSaga() {
  yield delay(0);
  yield put(decrease());
}

export default function* counterSaga() {
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}
