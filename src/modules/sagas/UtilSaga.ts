import { getContext, takeEvery } from "@redux-saga/core/effects";
import { GOHOME } from "../actions/Util.action";

function* goHomeSaga(): Generator {
  const history: any = yield getContext("history");
  history.push("/chatbot");
}

function* utilSaga(): Generator {
  yield takeEvery(GOHOME, goHomeSaga);
}

export default utilSaga;