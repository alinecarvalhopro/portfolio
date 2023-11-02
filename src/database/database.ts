import { v4 as uuidv4 } from "uuid";
import TS from "../assets/ts.svg";
import Figma from "../assets/figma.svg";
import GooglePlay from "../assets/googlePlay.svg";
import Next from "../assets/next.svg";

interface IProject {
  id: string;
  name: string;
  img: string;
  tecnologies?: string;
  gitHub?: string;
  googlePlay?: string;
  figma?: string;
  icons?: string[];
  more: string;
}

const database: IProject[] = [
  {
    id: uuidv4(),
    name: "Git Search",
    img: "/projects-images/git-search.png",
    gitHub: "https://github.com/alinecarvalhopro/GitSearchAmieApps",
    googlePlay:
      "https://play.google.com/store/apps/details?id=com.gitsearchamieapps&hl=pt",
    tecnologies: "React Native",
    icons: [TS, GooglePlay],
    more: "mobile",
  },
  {
    id: uuidv4(),
    name: "Uma frase por dia",
    img: "/projects-images/uma-frase-por-dia.png",
    gitHub: "https://github.com/alinecarvalhopro/UmaFrasePorDia",
    tecnologies: "React Native",
    icons: [TS],
    more: "mobile",
  },
  {
    id: uuidv4(),
    name: "My Savings",
    img: "/projects-images/my-savings.png",
    gitHub: "https://github.com/alinecarvalhopro/my-savings-react-native",
    tecnologies: "React Native",
    icons: [TS],
    more: "mobile",
  },
  {
    id: uuidv4(),
    name: "Ho'oponopono",
    img: "/projects-images/hooponopono-gp.png",
    googlePlay:
      "https://play.google.com/store/apps/details?id=com.hooponoponoamieapps",
    tecnologies: "React Native",
    icons: [TS, GooglePlay],
    more: "googlePlay",
  },
  {
    id: uuidv4(),
    name: "Pet Shop TagLove 2.0",
    img: "/projects-images/taglove.png",
    gitHub: "https://github.com/alinecarvalhopro/petshop-taglove-next",
    tecnologies: "React",
    icons: [TS, Next],
    more: "web",
  },
  {
    id: uuidv4(),
    name: "Encontre um amigo",
    img: "/projects-images/encontre-um-amigo.png",
    figma:
      "https://www.figma.com/file/dFMAZRyHI7jUUh4NOfUbn5/aline-carvalho?type=design&node-id=0-1&mode=design&t=5PdfbTJtU1ilFFGF-0",
    tecnologies: "UX UI Figma",
    icons: [Figma],
    more: "ui",
  },
  {
    id: uuidv4(),
    name: "Pâtisserie Fraise",
    img: "/projects-images/patisseriefraise.png",
    gitHub: "https://github.com/alinecarvalhopro/patisserie-fraise",
    tecnologies: "React",
    icons: [TS],
    more: "web",
  },
];

export { database };
export type { IProject };
