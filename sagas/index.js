import { all } from 'redux-saga/effects'
import { sagaLoadLatestPhotos } from './photos'

function* rootSaga() {
  yield all([sagaLoadLatestPhotos])
}

export default rootSaga
