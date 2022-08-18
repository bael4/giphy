import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { giphyRandomReducer } from "./reducers/GiphyRandomReducers";
import { giphyTrendReducer } from "./reducers/GiphyTrendReducer";

const rootReducer = combineReducers({
  giphyTrend: giphyTrendReducer,
  giphyRandom: giphyRandomReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
