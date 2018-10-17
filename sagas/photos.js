import queryString from 'query-string'
import { put, takeLatest } from 'redux-saga/effects'
import {
  actionTypes,
  saveLatestPhotos,
  saveTrendingPhotos,
} from '../reducers/photos'
import { fetchPublic } from '../api'

function* fetchLatestPhotos(data) {
  try {
    const res = yield fetchPublic(
      `/photos?order_by=latest&${queryString.stringify(data.params)}`,
    )
    const payload = yield res.json()

    yield put(saveLatestPhotos(payload))
  } catch (err) {
    console.log(err)
  }
}

function* fetchTrendingPhotos(data) {
  try {
    const res = yield fetchPublic(
      `/photos?order_by=popular&${queryString.stringify(data.params)}`,
    )
    const payload = yield res.json()

    yield put(saveTrendingPhotos(payload))
  } catch (err) {
    console.log(err)
  }
}

export const loadLatestPhotos = takeLatest(
  actionTypes.LOAD_LATEST_PHOTOS,
  fetchLatestPhotos,
)
export const loadTrendingPhotos = takeLatest(
  actionTypes.LOAD_TRENDING_PHOTOS,
  fetchTrendingPhotos,
)
