import {
  decrease,
  increase,
  DECREASE_ASYNC,
  INCREASE_ASYNC,
  PRINT_STATE,
  reset,
} from "../actions/CounterAction";
import { delay, put, takeEvery, takeLatest } from "@redux-saga/core/effects";
import { select } from "redux-saga/effects";

function* increaseSaga() {
  yield delay(0);
  yield put(increase());
}

function* decreaseSaga() {
  yield delay(0);
  yield put(decrease());
}

function* printStateSaga(): Generator {
  const state = yield select((state) => state.CounterReducer);
  console.log(state);
  yield put(reset());
}

export default function* counterSaga() {
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
  yield takeEvery(PRINT_STATE, printStateSaga);
}
