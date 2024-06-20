"use client";

import Image from "next/image";
import ArrowToTop from "../../assets/ctrl.svg";
import "./styles.scss";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer>
      <p className="textSmallFooter">
        © 2024 - Todos os direitos reservados - Aline Carvalho
      </p>
      <button className="toTopButton" onClick={scrollToTop}>
        <Image src={ArrowToTop} alt="Ir para o topo" />
      </button>
    </footer>
  );
};
