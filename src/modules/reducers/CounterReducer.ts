import { INCREASE, DECREASE } from "../actions/CounterAction";

const initialState = 0;

export const CounterReducer = (
  state = initialState,
  action: { type: string }
) => {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
};
