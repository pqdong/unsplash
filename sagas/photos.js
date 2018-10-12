import queryString from 'query-string'
import { put, takeLatest } from 'redux-saga/effects'
import { actionTypes, saveLatestPhotos } from '../reducers/photos'
import { fetchPublic } from '../api'

function* loadLatestPhotos(params = {}) {
  try {
    const res = yield fetchPublic(`/photos${queryString(params)}`)
    const payload = yield res.json()

    yield put(saveLatestPhotos(payload))
  } catch (err) {
    console.log(err)
  }
}

export const 