import { INCREASE, DECREASE, RESET } from "../actions/CounterAction";

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
    case RESET:
      return 0;
    default:
      return state;
  }
};
