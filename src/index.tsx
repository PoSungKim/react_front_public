import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import RootReducer from "./modules/reducers/RootReducer";
import createSagaMiddleware from "@redux-saga/core";
import RootSaga from "./modules/sagas/RootSaga";

const sagaMW = createSagaMiddleware();
const store = createStore(RootReducer, applyMiddleware(sagaMW));
sagaMW.run(RootSaga);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
