import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import Icon from "../icon";

interface SelectProps {
  data: string[];
  onSelect: (selectedValue: string) => void;
  icon?:string;
}

const Select: React.FC<SelectProps> = ({ data, onSelect, icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | undefined>(undefined);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  const handleSelectChange = (item: string) => {
    setSelectedValue(item);
    onSelect(item);
    setIsOpen(false);
  };

  return (
<div className="styled-select">
  <div
    className={`styled-select-value ${isOpen ? "open" : ""}`}
    onClick={() => setIsOpen(!isOpen)}
  >
    {selectedValue || data[0]}
  </div>
  <div className="styled-select-icon" onClick={() => setIsOpen(!isOpen)}>
    {icon && <Icon icon={icon} />}
  </div>
  {isOpen && (
    <div className="styled-select-options">
      {data.map((item, index) => (
        <div
          key={index}
          className="styled-select-label"
          onClick={() => handleSelectChange(item)}
        >
          {item}
        </div>
      ))}
    </div>
  )}
</div>


  );
};

export default Select;
