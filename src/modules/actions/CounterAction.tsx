export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";
export const INCREASE_ASYNC = "INCREASE_ASYNC";
export const DECREASE_ASYNC = "DECREASE_ASYNC";

export const increase = () => ({
  type: INCREASE,
});

export const decrease = () => ({
  type: DECREASE,
});

export const increaseAsync = () => ({
  type: INCREASE_ASYNC,
});

export const decreaseAsync = () => ({
  type: DECREASE_ASYNC,
});
