import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "../../components/counter/Counter";
import "../../assets/scss/counter.scss";

import {
  increaseAsync,
  decreaseAsync,
  printCounterState,
} from "../../modules/actions/CounterAction";
import { RootReducerType } from "../../modules/reducers/RootReducer";

const CounterContainer = () => {
  const number = useSelector((state: RootReducerType) => state.CounterReducer);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increaseAsync());
  };

  const onDecrease = () => {
    dispatch(decreaseAsync());
  };

  const onPrint = () => {
    dispatch(printCounterState());
  };

  return (
    <div id="CounterContainer">
      <Counter
        number={number}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onPrint={onPrint}
      />
    </div>
  );
};

export default CounterContainer;
