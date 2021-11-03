import { combineReducers } from "redux";
import { CounterReducer } from "./CounterReducer";

const RootReducer = combineReducers({ CounterReducer });
export default RootReducer;

export type RootReducerType = ReturnType<typeof RootReducer>;
