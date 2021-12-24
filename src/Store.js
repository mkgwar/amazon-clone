import mainReducer from "./Reducers/ReducersIndex";
import { createStore } from "redux";

const store = createStore(mainReducer);

export default store;
