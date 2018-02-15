import { delay } from 'redux-saga';
import { put, takeEvery, all } from 'redux-saga/effects';
import * as type from 'actions/types';

/** worker saga: 비동기 증가 태스크 수행 */
function* incrementAsync() {
  yield delay(1000);
  yield put({ type: type.INCREMENT });
}

/** watcher saga: 각각의 INCREMENT_ASYNC에 incrementAsync 태스크 생성 */
export function* watchIncrementAsync() {
  yield takeEvery(type.INCREMENT_ASYNC, incrementAsync);
}

function* decrementAsync() {
  yield delay(1000);
  yield put({ type: type.DECREMENT });
}

export function* watchDecrementAsync() {
  yield takeEvery(type.DECREMENT_ASYNC, decrementAsync);
}

export default function* rootSage() {
  yield all([watchIncrementAsync(), watchDecrementAsync()]);
}
