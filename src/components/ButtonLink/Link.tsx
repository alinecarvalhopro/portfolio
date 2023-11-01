import React, { ReactNode } from "react";
import "./styles.scss";

interface ILinkProps {
  children: ReactNode;
  variant: string;
  to: string;
  margin?: string;
  width?: string;
}

const Link = ({ children, variant, to, width, margin }: ILinkProps) => {
  const linkStyle = {
    width: width ? width : "auto",
    margin: margin ? margin : "0px",
  };

  return (
    <a href={to} className={`custom-link ${variant}`} style={linkStyle}>
      <p className={`custom-link ${variant}`}>{children}</p>
    </a>
  );
};

export default Link;
