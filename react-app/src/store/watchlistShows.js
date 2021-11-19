/* -----------------------------Actions----------------------------------- */

const GET_WATCHLIST_SHOWS = 'shows/GET_WATCHLIST_SHOWS'
const ADD_SHOW = 'watchlistShows/ADD_SHOW'
const REMOVE_SHOW = 'watchlistShows/REMOVE_SHOW'

/* ----------------------------Action Creators---------------------------- */

const getWatchlistShows = (shows) => {
  return {
    type: GET_WATCHLIST_SHOWS,
    payload: shows
  }
}

const addShow = (data) => ({
  type: ADD_SHOW,
  payload: data
})

/* --------------------------------Thunks--------------------------------- */

export const getWatchlistShowsThunk = (watchlistId) => async (dispatch) => {
  const response = await fetch(`/api/watchlists/${watchlistId}/shows`)

  if (response.ok) {
    let data = await response.json();
    dispatch(getWatchlistShows(data))
    return data
  }
}

export const addShowThunk = (data) => async dispatch => {
  const response = await fetch(`/api/watchlists/${data.watchlist_id}/shows`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(addShow(data));
    return (data);
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      const errors = Object.values(data)
      return errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export const removeShowThunk = (data) => async dispatch => {
  const response = await fetch(`/api/watchlists/${data.watchlist_id}/shows`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  if (response.ok) {
    const data = await response.json();
    let shows = []

    for (let show of data.shows) {
      shows.push(show)
    }

    dispatch(getWatchlistShows({ "shows": shows }))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

/* -----------------------Initial State & Reducer------------------------- */

const initialState = {}
export default function watchlistsShowsReducer(state = initialState, action) {
  let newState = { ...state }
  switch (action.type) {
    case GET_WATCHLIST_SHOWS: {
      newState = { ...state, ...action.payload }
      return newState
    }
    case ADD_SHOW:
      newState = { ...state, ...action.payload }
      return newState
    default:
      return state
  }
}
