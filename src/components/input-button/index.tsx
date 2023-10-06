import React from "react";
import "./index.css";
import Button from "../button";

interface InputButtonProps {
  label?: string;
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
  width?: number;
  maxWidth?: boolean;
  icon?: string;
}

const InputButton: React.FC<InputButtonProps> = ({
  icon,
  value,
  setValue,
  placeholder,
  width,
  maxWidth,
  label,
}) => {
  return (
    <div style={{ width: maxWidth ? "100%" : width }} className="styled-input">
      <input
        className="styled-input-form"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <Button
        label={label}
        onClick={() => {}}
        width={150}
        variant="primary"
        icon={icon} 
        iconSize={15}
      ></Button>
    </div>
  );
};

export default InputButton;
