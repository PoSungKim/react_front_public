export const INCREASE = "counter/INCREASE" as const;
export const DECREASE = "counter/DECREASE" as const;
export const INCREASE_ASYNC = "counter/INCREASE_ASYNC" as const;
export const DECREASE_ASYNC = "counter/DECREASE_ASYNC" as const;
export const PRINT_STATE = "counter/PRINT_STATE" as const;
export const RESET = "counter/RESET" as const;

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

export const printCounterState = () => ({
  type: PRINT_STATE,
});

export const reset = () => ({
  type: RESET,
});
