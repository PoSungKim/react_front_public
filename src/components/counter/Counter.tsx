import React from "react";

interface CounterProps {
  number: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onPrint: () => void;
}

const Counter: React.FC<CounterProps> = (props: CounterProps) => {
  return (
    <div>
      <h1>{props.number}</h1>
      <button onClick={props.onIncrease}>+1</button>
      <button onClick={props.onDecrease}>-1</button>
      <button onClick={props.onPrint}>Current State</button>
    </div>
  );
};

export default Counter;
