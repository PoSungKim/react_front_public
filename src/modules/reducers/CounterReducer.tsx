const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

export const increase = () => ({
  type: INCREASE,
});

export const decrease = () => ({
  type: DECREASE,
});

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
