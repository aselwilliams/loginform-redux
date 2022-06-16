import themeToggleReducer from "./themeToggleReducer";
import isLoggedInReducer from "./isLoggedInReducer";
import { combineReducers } from "redux";
import CounterReducer from "./CounterReducer";

let allReducers = combineReducers({
  theme: themeToggleReducer,
  isLoggedIn: isLoggedInReducer,
  counter: CounterReducer,
});
export default allReducers;
