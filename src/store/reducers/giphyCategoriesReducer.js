export const ADD_GIPHY_CATEGORIES = 'ADD_GIPHY_CATEGORIES'

const initialState = {
  categories: {},
}

// eslint-disable-next-line default-param-last
export const giphyCategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GIPHY_CATEGORIES:
      return { ...state, categories: { ...action.payload } }
    default:
      return state
  }
}

export const addGiphyCategories = (payload) => ({ type: ADD_GIPHY_CATEGORIES, payload })
