import axios from 'axios'
import { categories } from '../../components/api'
import { addGiphyCategories } from '../reducers/giphyCategoriesReducer'

// eslint-disable-next-line func-names
export const fetchGiphyCategories = () =>
  // eslint-disable-next-line implicit-arrow-linebreak
  function (dispatch) {
    return axios.get(categories).then((r) => {
      dispatch(addGiphyCategories(r.data.data))
    })
  }
