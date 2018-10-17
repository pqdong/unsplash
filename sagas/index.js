import { all } from 'redux-saga/effects'
import { loadLatestPhotos, loadTrendingPhotos } from './photos'

function* rootSaga() {
  yield all([loadLatestPhotos, loadTrendingPhotos])
}

export default rootSaga
