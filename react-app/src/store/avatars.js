/* -----------------------------Actions----------------------------------- */

const GET_AVATARS = 'profiles/GET_AVATARS'

/* ----------------------------Action Creators---------------------------- */

const getAvatars = (avatars) => {
  return {
    type: GET_AVATARS,
    payload: avatars
  }
}

/* --------------------------------Thunks--------------------------------- */

export const getAvatarsThunk = () => async (dispatch) => {
  const response = await fetch(`/api/profiles/avatars`)

  if (response.ok) {
    let data = await response.json();
    dispatch(getAvatars(data))
    return data
  }
}

/* -----------------------Initial State & Reducer------------------------- */

const initialState = {}
export default function avatarsReducer(state = initialState, action) {
  let newState = { ...state }
  switch (action.type) {
    case GET_AVATARS:
      newState = { ...state, ...action.payload }
      return newState
    default:
      return state
  }
}
