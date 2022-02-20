import { all } from "redux-saga/effects";
import counterSaga from "./CounterSaga";
import userSaga from "./UserSaga";
import utilSaga from "./UtilSaga";

export default function* RootSaga() {
  yield all([counterSaga(), utilSaga(), userSaga()]);
}