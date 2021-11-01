import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import RootReducer from "./modules/reducers/RootReducer";

const store = createStore(RootReducer);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
