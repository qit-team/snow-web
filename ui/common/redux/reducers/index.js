import { combineReducers } from "redux";
import { appReducer as app } from "./app";

const rootReducer = combineReducers({
  app
});

export default rootReducer;
