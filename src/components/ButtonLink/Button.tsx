import React from "react";
import "./styles.scss";

interface IButtonProps {
  content: string;
  variant: string;
  width?: string;
  onClick: () => void;
}

const Button = ({ content, variant, width, onClick }: IButtonProps) => {
  const buttonStyle = {
    width: width ? width : "auto",
  };

  return (
    <button
      className={`custom-button ${variant}`}
      style={buttonStyle}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
