import { combineReducers } from "redux";
import testi from "./testi";
import projects from "./projects";

const rootReducers = combineReducers({
  testi,
  projects,
});
export default rootReducers;
