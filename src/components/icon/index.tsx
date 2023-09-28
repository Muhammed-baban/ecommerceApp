import React from "react";
import "./index.css";

interface IconProps {
  icon: string;
  size?: number;
  variant?: "orange" | "black" | "white";
}

function Icon({ icon, size = 50, variant = "black" }: IconProps) {
  return <img style={{ width: size }} src={icon} alt="icon" />;
}

export default Icon;
