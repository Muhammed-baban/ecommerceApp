import React from "react";
import "./index.css";

interface IconLabelProps {
  label:string;
  icon: string;
  size?: number;
  onClick?: () => void;
}

function IconLabel({ icon, size = 50, onClick,label }: IconLabelProps) {
  return (
    <button className="styled-icon-label">
      <img className="styled-icon-label-image" style={{ width: size }} src={icon} alt="icon" />
      {label}
    </button>
  );
}

export default IconLabel;
