import queryString from 'query-string'
import { put, takeLatest } from 'redux-saga/effects'
import { actionTypes, saveLatestPhotos } from '../reducers/photos'
import { fetchPublic } from '../api'

function* loadLatestPhotos(data) {
  try {
    const res = yield fetchPublic(
      `/photos?${queryString.stringify(data.params)}`,
    )
    const payload = yield res.json()

    yield put(saveLatestPhotos(payload))
  } catch (err) {
    console.log(err)
  }
}

export const sagaLoadLatestPhotos = takeLatest(
  actionTypes.LOAD_LATEST_PHOTOS,
  loadLatestPhotos,
)
