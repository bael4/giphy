import axios from "axios"
import { random } from "../../components/api"
import { addGiphyRandom } from "../reducers/GiphyRandomReducers"

export const fetchGiphyRandom = ()=>{
    return function(dispatch){
   return axios.get(random)
   .then((r)=>{
    dispatch(addGiphyRandom(r.data.data))
   })
}}