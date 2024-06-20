"use client";

import "./styles.scss";
import { CardProject } from "../CardProject/CardProject";
import { database } from "@/database/database";
import Image from "next/image";
import ToLeft from "../../assets/arrowLeft.svg";
import ToRigth from "../../assets/arrowRigth.svg";
import React, { useRef, useState, useEffect } from "react";

export const ListProjects = () => {
  const scrollRef = useRef<HTMLUListElement>(null);
  const [isScreenLarge, setIsScreenLarge] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setIsScreenLarge(true);
    } else {
      setIsScreenLarge(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 270;
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 270;
    }
  };

  return (
    <>
      {isScreenLarge && (
        <div className="boxScrollButtons">
          <button className="scrollLeftButton" onClick={scrollLeft}>
            <Image src={ToLeft} alt="←" width={40} height={40} priority />
          </button>

          <ul ref={scrollRef} className="listProject scrollable">
            {database.map((project) => (
              <CardProject key={project.id} project={project} />
            ))}
          </ul>
          <button className="scrollRightButton" onClick={scrollRight}>
            <Image src={ToRigth} alt="→" width={40} height={40} priority />
          </button>
        </div>
      )}
      {!isScreenLarge && (
        <ul ref={scrollRef} className="listProject scrollable">
          {database.map((project) => (
            <CardProject key={project.id} project={project} />
          ))}
        </ul>
      )}
    </>
  );
};
