import {
  decrease,
  increase,
  SAGADECREASE,
  SAGAINCREASE,
} from "../actions/CounterAction";
import { delay, put, takeEvery, takeLatest } from "@redux-saga/core/effects";

function* increaseSaga() {
  yield delay(1000);
  yield put(increase());
}

function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}

export default function* counterSaga() {
  yield takeEvery(SAGAINCREASE, increaseSaga);
  yield takeLatest(SAGADECREASE, decreaseSaga);
}
