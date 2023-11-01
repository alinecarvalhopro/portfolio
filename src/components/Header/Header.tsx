"use client";

import React, { useState } from "react";
import "../../Styles/text.styles.scss";
import "./styles.scss";
import ME from "../../assets/me.svg";
import Menu from "../../assets/menu.svg";
import CloseMenu from "../../assets/close.svg";
import LinkedIn from "../../assets/in.svg";
import GitHub from "../../assets/github.svg";
import Image from "next/image";
import Link from "../ButtonLink/Link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav>
        <div className="boxPersonalPresentation">
          <Image src={ME} alt="Foto Aline" className="me" />
          <p className="textBodyLigth">Olá, eu sou a Aline!</p>
        </div>
        <Image
          src={isMenuOpen ? CloseMenu : Menu}
          alt="Menu"
          onClick={toggleMenu}
          className="burgerMenu"
        />
        <div className="boxButtonsWeb">
          <Link
            variant="primary"
            width="83px"
            margin="16px"
            to="https://www.linkedin.com/in/aline-carvalho-dev"
          >
            <Image src={LinkedIn} alt="github" />
          </Link>
          <Link
            variant="primary"
            width="83px"
            to="https://github.com/alinecarvalhopro"
          >
            <Image src={GitHub} alt="github" />
          </Link>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="boxButtonsMobile">
          <Link
            variant="primary"
            width="83px"
            margin="16px"
            to="https://www.linkedin.com/in/aline-carvalho-dev"
          >
            <Image src={LinkedIn} alt="github" />
          </Link>
          <Link
            variant="primary"
            width="83px"
            margin="0 16px 0 0"
            to="https://github.com/alinecarvalhopro"
          >
            <Image src={GitHub} alt="github" />
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
