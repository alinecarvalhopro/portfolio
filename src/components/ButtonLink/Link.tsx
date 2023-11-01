import React from "react";
import "./styles.scss";

interface ILinkProps {
  content: string;
  variant: string;
  to: string;
  width?: string;
}

const Link = ({ content, variant, to, width }: ILinkProps) => {
  const linkStyle = {
    width: width ? width : "auto",
  };

  return (
    <a href={to} className={`custom-link ${variant}`} style={linkStyle}>
      <p className={`custom-link ${variant}`}>{content}</p>
    </a>
  );
};

export default Link;
