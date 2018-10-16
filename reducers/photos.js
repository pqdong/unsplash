import keyMirror from 'keymirror'

export const actionTypes = keyMirror({
  LOAD_LATEST_PHOTOS: null,
  SAVE_LATEST_PHOTOS: null,
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

const photos = (
  state = {
    loading: false,
    latest: [],
  },
  action,
) => {
  switch (action.type) {
    case actionTypes.LOAD_LATEST_PHOTOS:
      return {
        ...state,
        ...{ loading: true },
      }
    case actionTypes.SAVE_LATEST_PHOTOS:
      return {
        ...state,
        ...{ loading: false, latest: action.photos },
      }
    default:
      return state
  }
}

export default photos
