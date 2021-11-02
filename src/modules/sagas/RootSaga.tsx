import { all } from "redux-saga/effects";
import counterSaga from "./CounterSaga";

export default function* RootSaga() {
  yield all([counterSaga()]);
}
