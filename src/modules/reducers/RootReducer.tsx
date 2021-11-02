import { combineReducers } from "redux";
import { CounterReducer } from "./CounterReducer";

const RootReducer = combineReducers({ CounterReducer });

export type RootReducerType = ReturnType<typeof RootReducer>;

export default RootReducer;
