import axios from 'axios'
import { trending } from '../../components/api'
import { addGiphyTrend } from '../reducers/GiphyTrendReducer'

export const fetchGiphyTrend = () => function (dispatch) {
    return axios.get(trending).then((r) => {
      dispatch(addGiphyTrend(r.data))
    })
  }
