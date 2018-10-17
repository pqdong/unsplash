import keyMirror from 'keymirror'

export const actionTypes = keyMirror({
  LOAD_LATEST_PHOTOS: null,
  SAVE_LATEST_PHOTOS: null,
  LOAD_TRENDING_PHOTOS: null,
  SAVE_TRENDING_PHOTOS: null,
})

export const loadLatestPhotos = params => ({
  type: actionTypes.LOAD_LATEST_PHOTOS,
  params,
})

export const saveLatestPhotos = photos => {
  return {
    type: actionTypes.SAVE_LATEST_PHOTOS,
    photos,
  }
}

export const loadTrendingPhotos = params => ({
  type: actionTypes.LOAD_TRENDING_PHOTOS,
  params,
})

export const saveTrendingPhotos = photos => {
  return {
    type: actionTypes.SAVE_TRENDING_PHOTOS,
    photos,
  }
}

const photos = (
  state = {
    loading: false,
    latest: [],
    trending: [],
  },
  action,
) => {
  switch (action.type) {
    case actionTypes.LOAD_LATEST_PHOTOS:
    case actionTypes.LOAD_TRENDING_PHOTOS:
      return {
        ...state,
        ...{ loading: true },
      }
    case actionTypes.SAVE_LATEST_PHOTOS:
      return {
        ...state,
        ...{ loading: false, latest: action.photos },
      }
    case actionTypes.SAVE_TRENDING_PHOTOS:
      return {
        ...state,
        ...{ loading: false, trending: action.photos },
      }
    default:
      return state
  }
}

export default photos
