import React from "react";
import "../../assets/scss/counter.scss";
interface CounterProps {
  number: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onPrint: () => void;
}

const Counter: React.FC<CounterProps> = (props: CounterProps) => {
  return (
    <div id="Counter">
      <h1>{props.number}</h1>
      <div>
        <button onClick={props.onIncrease}>+1</button>
        <button onClick={props.onDecrease}>-1</button>
        <button onClick={props.onPrint}>Current State</button>
      </div>
    </div>
  );
};

export default Counter;
