import keyMirror from 'keymirror'

export const actionTypes = keyMirror({
  LOAD_LATEST_PHOTOS: null,
  SAVE_LATEST_PHOTOS: null,
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
    case actionTypes.SAVE_LATEST_PHOTOS:
      return {
        ...state,
        ...{ latest: action.photos },
      }
    default:
      return state
  }
}

export default photos
