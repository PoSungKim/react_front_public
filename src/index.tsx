import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import RootReducer from "./modules/reducers/RootReducer";
import createSagaMiddleware from "@redux-saga/core";
import RootSaga from "./modules/sagas/RootSaga";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/scss/index.scss";

const customHistory = createBrowserHistory();
const sagaMW = createSagaMiddleware({
  context: {
    history: customHistory,
  },
});

const store = createStore(RootReducer, applyMiddleware(sagaMW));
sagaMW.run(RootSaga);

ReactDom.render(
  <Provider store={store}>
    <Router>
        <App />
    </Router>  
  </Provider>,
  document.querySelector("#root")
);
