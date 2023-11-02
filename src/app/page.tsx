"use client";

import React from "react";
import { Skills } from "@/components/Skills/Skills";
import { EducationProjects } from "@/components/EducationProjects/EducationProjects";

const Home = () => {
  return (
    <main>
      <Skills />
      <EducationProjects />
    </main>
  );
};

export default Home;
