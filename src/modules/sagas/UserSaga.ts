import { call, put, takeEvery } from "redux-saga/effects";
import { getUsers, GETUSERS, getUsersFailure, getUsersSuccess } from "../actions/UserAction";
import * as userApi from "../../api/user";

function* getUsersSaga() : Generator {
    try {
        const payload : any = yield call(userApi.getUsers);
        console.log(payload)
        yield put({...getUsersSuccess(), payload : payload.data});
    } catch {
        yield put({...getUsersFailure()});
    }
}

export default function* userSaga() {
    yield takeEvery(GETUSERS, getUsersSaga);
}