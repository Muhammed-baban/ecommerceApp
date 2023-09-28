import "./index.css";

interface TextProps {
  children: JSX.Element | JSX.Element[];
  size?: "xxs" | "xs" | "s" | "sm" | "m" | "ml" | "l" | "lx" | "lxx";
  color?: "primary" | "black" | "white" | "grey";
  bold?: boolean;
}

const Text: React.FC<TextProps> = ({ children, size, color, bold }) => {
  const className = `text ${size} ${color} ${bold ? "bold" : ""}`;

  return <span className={className}>{children}</span>;
};

export default Text;
