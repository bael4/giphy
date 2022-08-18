export const ADD_GIPHY_RANDOM = ' ADD_GIPHY_RANDOM'
const initialState = {
    giphyRandom:{}
}

export const giphyRandomReducer = (state=initialState,action)=>{
switch(action.type){
    case ADD_GIPHY_RANDOM:
        return {...state,giphyRandom:{...action.payload}}    
    default:
        return state
}
}

export const addGiphyRandom = (payload)=>({type:ADD_GIPHY_RANDOM,payload})
