export const ADD_GIPHY_TREND = ' ADD_GIPHY_TREND'
const initialState = {
  giphyTrend: [],
}

// eslint-disable-next-line default-param-last
export const giphyTrendReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GIPHY_TREND:
      return { ...state, giphyTrend: { ...action.payload } }
    default:
      return state
  }
}

export const addGiphyTrend = (payload) => ({ type: ADD_GIPHY_TREND, payload })
