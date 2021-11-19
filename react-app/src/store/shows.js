/* -----------------------------Actions----------------------------------- */

const GET_SHOWS = 'shows/GET_SHOWS'
const GET_ONE_SHOW = 'shows/GET_ONE_SHOW'

/* ----------------------------Action Creators---------------------------- */

const getShows = (shows) => {
  return {
    type: GET_SHOWS,
    payload: shows
  }
}

const getOneShow = (show) => {
  return {
    type: GET_ONE_SHOW,
    payload: show
  }
}

/* --------------------------------Thunks--------------------------------- */

// this gets all profiles one user has
export const getShowsThunk = () => async (dispatch) => {
  const response = await fetch(`/api/shows`)

  if (response.ok) {
    let data = await response.json();
    dispatch(getShows(data))
    return data
  }
}

export const getOneShowThunk = (id) => async (dispatch) => {
  const response = await fetch(`/api/shows/${id}`)

  if (response.ok) {
    let data = await response.json();
    dispatch(getOneShow(data))
    return data
  }
}

/* -----------------------Initial State & Reducer------------------------- */

const initialState = {}
export default function showsReducer(state = initialState, action) {
  let newState = { ...state }
  switch (action.type) {
    case GET_SHOWS:
      newState = { ...action.payload }
      return newState
    case GET_ONE_SHOW:
      newState = { ...action.payload }
      return newState
    default:
      return state
  }
}
