import React from "react";
import "./index.css";

interface IconButtonProps {
  icon: string;
  size?: number;
  variant?: "orange" | "black" | "white";
  onClick?: () => void;
}

function IconButton({ icon, size = 50, variant = "black", onClick }: IconButtonProps) {
  return (
    <div>
    <button className={`styled-icon-button ${variant}`} onClick={onClick}>
      <img className="styled-icon-button-image" style={{ width: size }} src={icon} alt="icon" />
    </button>
    </div>
  );
}

export default IconButton;
