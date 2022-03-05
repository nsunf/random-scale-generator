import { combineReducers } from "redux";

import popupReducer from "./Popup";
import optionReducer from "./Option";
import generateReducer from "./Generator";

const rootReduer = combineReducers({
  popupReducer,
  optionReducer,
  generateReducer
});

export default rootReduer;