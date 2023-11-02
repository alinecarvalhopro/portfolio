import React, { ReactNode } from "react";
import "./styles.scss";

interface IButtonProps {
  children: ReactNode;
  variant: string;
  width?: string;
  margin?: string;
  link: string;
  className?: string;
}

const Button = ({ children, variant, width, margin, link }: IButtonProps) => {
  const buttonStyle = {
    width: width ? width : "auto",
    margin: margin ? margin : "0px",
  };

  const handleButtonClick = () => {
    window.open(link, "_blank");
  };

  return (
    <button
      className={`custom-button ${variant}`}
      style={buttonStyle}
      onClick={handleButtonClick}
    >
      {children}
    </button>
  );
};

export default Button;
