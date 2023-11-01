import "./styles.scss";
import Mobile from "../../assets/devWebMobile.svg";
import Web from "../../assets/devWebMobileToWeb.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

const Skills = () => {
  const [isBigSize, setIsBigSize] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 1025) {
      setIsBigSize(true);
    } else {
      setIsBigSize(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section>
      <div className="boxImage">
        <Image
          src={isBigSize ? Web : Mobile}
          alt="Desenvolvedora Web e Mobile"
        />
      </div>
      <div className="boxText">
        <h3 className={isBigSize ? "titleDark" : "textBodySemiBold"}>
          Estudando para aprimorar minhas habilidades e aprender novas
          tecnologias
        </h3>{" "}
        <br />
        <p>
          Tenho habilidade em HTML, Cascading Style Sheets (CSS), JavaScript,
          TypeScript e React.
        </p>{" "}
        <br />
        <p>Desenvolvimento mobile com React Native.</p> <br />
        <p>
          Familiaridade com consumo de APIs (para interação com Back-End),
          consumo de bibliotecas como Styled-Components, React-Hook-Forms,
          React-Router, Zod, Redux, entre outras.
        </p>{" "}
        <br />
        <p>
          Componentização, Hooks, States, Context, Modais e responsividade
          (Mobile-first).
        </p>{" "}
        <br />
        <p>Habilidade em UX, UI Design e Figma.</p> <br />
        <p>
          Prezo pelas boas práticas de desenvolvimento e tenho habilidade em
          versionamento de código com Github.
        </p>{" "}
        <br />
        <p>Metodologias ágeis como SCRUM e uso do Trello (Kanban).</p> <br />
        <p>
          Noções em Node JS, Express, PostgreSQL, TypeORM e Next JS. E uma
          curiosidade legal sobre isso é que este projeto foi desenvolvido em
          Next JS.
        </p>{" "}
        <br />
        <p>*Tenho projetos utilizando todas essas tencologias.</p> <br />
      </div>
    </section>
  );
};

export default Skills;
