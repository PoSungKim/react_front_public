import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "../../components/counter/Counter";
import {
  increaseAsync,
  decreaseAsync,
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

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;
