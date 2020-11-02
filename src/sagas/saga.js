
import {takeLatest,put,delay} from 'redux-saga/effects'

function* LogoutSync(){
    yield delay(2000);
    yield put({type:'LOGOUT_ASYNC'})
}
export default function* watchLogout(){
    yield takeLatest("LOGOUT",LogoutSync);
}