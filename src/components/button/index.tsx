import "./index.css";
import IconButton from "../icon";
import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "black" | "white" | "primary";
  icon?: string;
  size?: "small" | "medium" | "large";
  width?: number;
  maxWidth?: boolean;
  round?: number;
  iconSize?: number;
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "black",
  size = "medium",
  onClick,
  maxWidth = false,
  icon,
  iconSize,
  width,
}: ButtonProps) => (
  <button
    className={`styled-button ${
      maxWidth ? "maxWidth" : ""
    } color-${variant} size-${size}`}
    onClick={onClick}
    style={{ width: width ? `${width}px` : "auto" }}
  >
    <div className="styled-button-icon">
      {icon && iconSize !== undefined && (
        <IconButton icon={icon} size={iconSize} />
      )}
    </div>
    {label}
  </button>
);

export default Button;
