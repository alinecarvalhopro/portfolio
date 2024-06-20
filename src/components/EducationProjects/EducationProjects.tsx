import "./styles.scss";
import { ListProjects } from "../ListProjects/ListProjects";
import Button from "../ButtonLink/Button";

export const EducationProjects = () => {
  return (
    <section className="containerEducationProjects">
      <div className="boxEducation">
        <div className="graduation">
          <h3 className="titleDark">Formação</h3>
          <p>Graduação em Design Gráfico</p>
          <p>Anhembi Morumbi</p>
          <p className="textSmall">fev/24 a dez/25 "previsto"</p> <br />
          <p>Desenvolvimento Full Stack</p>
          <p>Kenzie Academy Brasil</p>
          <p className="textSmall">nov/22 a nov/23</p> <br />
          <p>Técnico em Publicidade</p>
          <p>Liceu Camilo Castelo Branco</p>
          <p className="textSmall">jan/05 a dez/07</p> <br />
        </div>
        <div className="courses">
          <h3 className="titleDark">Cursos</h3>
          <p>React Native | Criando Aplicativos</p>
          <p>Udemy</p>
          <p className="textSmall">set/23 a nov/23</p> <br />
          <p>React Native na Prática</p>
          <p>Udemy</p>
          <p className="textSmall">jun/23 a ago/23</p> <br />
          <p>Nano Course User Experience</p>
          <p>FIAP</p>
          <p className="textSmall">jun/23 a jul/23</p> <br />
        </div>
        <div className="languages">
          <h3 className="titleDark">Idiomas</h3>
          <p>Inglês - Básico a intermediário</p>
          <p>Espanhol - Básico</p>
          <p>Português - Nativo</p>
        </div>
      </div>
      <div className="boxProjects">
        <div className="alignItems">
          <h3 className="titleLigth titleProjects">Principais projetos</h3>
          <ListProjects />
          <div className="boxButtonsTo">
            <Button
              variant="secondary"
              width="130px"
              margin="0 20px 0 0"
              link="mailto:alinecarvalho.pro@gmail.com"
            >
              E-mail
            </Button>
            <Button
              variant="secondary"
              width="130px"
              link="https://www.linkedin.com/in/aline-carvalho-dev"
            >
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
