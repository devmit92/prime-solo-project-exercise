import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_SECRETS" actions
function* fetchUsers() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    
    const response = yield axios.get('api/registeredusers', config);
    
    yield put({ type: 'SET_USERS', payload: response.data });
  } catch (error) {
    console.log('Users get request failed', error);
  }
}

function* usersSaga() {
  yield takeLatest('FETCH_USERS', fetchUsers);
}

export default usersSaga;
