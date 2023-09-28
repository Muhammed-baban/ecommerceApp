import React from 'react';
import './index.css';

interface InputProps {
  label?: string;
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
  variant?: 'white' | 'black';
  width?: number;
  maxWidth?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  setValue,
  placeholder,
  variant,
  width,
  maxWidth,
}) => {
  return (
    <div style={{ width: maxWidth ? '100%' : width }} className="styled-input">
      {label && <label className="styled-input-label">{label}</label>}
      <input
        className={`styled-input-form ${variant}`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)} 
      />
    </div>
  );
};

export default Input;
