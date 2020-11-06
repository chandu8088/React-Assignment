import axios from 'axios'
import {takeLatest,put, takeEvery} from 'redux-saga/effects'

function* LogoutSync(action){
    const data=action.payload
    console.log(data)
    const status=yield axios.post(action.url,data)
    if(status){
        yield put({type:'LOGIN_ASYNC'})
    }      
    
}
export default function* watchLogout(){
    yield takeLatest("LOGIN",LogoutSync);
}