import "./styles.scss";
import Image from "next/image";
import Link from "../ButtonLink/Link";
import GitHub from "../../assets/github.svg";
import Google from "../../assets/google.svg";
import Figma from "../../assets/figmapb.svg";
import { IProject } from "@/database/database";

export interface IProjectProps {
  project: IProject;
}

export const CardProject = ({ project }: IProjectProps) => {
  return (
    <li>
      <p className="textBodyLigth">{project.name}</p>
      <div className="tecnologies">
        <p className="textBodyLigth">{project.tecnologies}</p>
        <div className="icons">
          {project.icons?.map((icon, index) => (
            <Image
              key={index}
              className="iconProject"
              src={icon}
              alt={`Icon ${index}`}
              objectFit="cover"
              objectPosition="center"
              width={22}
              height={22}
            />
          ))}
        </div>
      </div>
      <Image
        className="imageProject"
        src={project.img}
        alt={`Imagem do projeto ${project.name}`}
        width={206}
        height={92}
        priority
      />
      <div className="boxButtons">
        {project.gitHub && (
          <Link
            variant="primary"
            width="64px"
            margin="0 8px 0 0"
            to={project.gitHub}
          >
            <Image src={GitHub} alt="github" />
          </Link>
        )}
        {project.googlePlay && (
          <Link
            variant="primary"
            width="64px"
            margin="0 8px 0 0"
            to={project.googlePlay}
          >
            <Image src={Google} alt="github" />
          </Link>
        )}
        {project.figma && (
          <Link
            variant="primary"
            width="64px"
            margin="0 8px 0 0"
            to={project.figma}
          >
            <Image src={Figma} alt="github" />
          </Link>
        )}
      </div>
    </li>
  );
};
