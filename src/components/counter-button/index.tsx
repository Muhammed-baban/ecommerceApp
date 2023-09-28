import React, { useState } from "react";
import "./index.css";

interface CounterButtonProps {
  count: number;
  setCount: (count: number) => void;
  variant?: "primary" | "grey";
}

const CounterButton: React.FC<CounterButtonProps> = ({
  count,
  setCount,
  variant = "primary",
}) => {
  const [inputValue, setInputValue] = useState("1"); 

  const increment = () => {
    const newValue = Number(inputValue) + 1;
    setCount(newValue);
    setInputValue(newValue.toString()); 
  };

  const decrement = () => {
    const newValue = Number(inputValue) - 1;
    setCount(newValue);
    setInputValue(newValue.toString()); 
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div className={`styled-counter-button ${variant}`}>
      <button className={`styled-counter-button-down ${variant}`} onClick={decrement}>
        -
      </button>
      <input
        value={inputValue}
        onChange={handleInputChange}
        className={`styled-counter-value ${variant}`}
      />
      <button className={`styled-counter-button-up ${variant}`} onClick={increment}>
        +
      </button>
    </div>
  );
};

export default CounterButton;
