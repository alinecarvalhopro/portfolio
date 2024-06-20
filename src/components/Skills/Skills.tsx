import './styles.scss';
import imagePage from '../../assets/imageLogo.svg';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export const Skills = () => {
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
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="containerSkills">
      <div className="boxImage">
        <Image src={imagePage} alt="Desenvolvedora Mobile" />
      </div>
      <div className="boxText">
        <h3 className={isBigSize ? 'titleDark' : 'textBodySemiBold'}>
          Experiência em desenvolvimento Mobile
        </h3>{' '}
        <br />
        <p>
          Atualmente, trabalho com o desenvolvimento de aplicativos mobile,
          utilizando a tecnologia React Native, oferecendo a solução completa
          para o cliente, desde o aplicativo em si até o desenvolvimento do
          painel administrativo, em React.js.
        </p>{' '}
        <br />
        <p>
          Como desenvolvedora full-stack, também sou responsável pela construção
          da api, em Node.js, Sequelize e Banco de dados MySQL.
        </p>{' '}
        <br />
        <p>
          Porém minha especialidade é em front-end, desenvolvendo a aplicação da
          forma mais fiel possível ao protótipo “pixel perfect” e trazendo
          soluções também que melhorem a experiência do usuário.
        </p>{' '}
        <br />
        <h3 className={isBigSize ? 'titleDark' : 'textBodySemiBold'}>
          UX/UI Design
        </h3>{' '}
        <br />
        <p>
          Estou estudando Design Gráfico pois acredito que isso ampliará minha
          visão como desenvolvedora, trazendo melhor compreensão do usuário.
        </p>{' '}
        <br />
        <p>
          Com conhecimentos em UX/UI design e habilidades em elaboração de
          protótipos no Figma, busco constantemente aprimorar minhas
          capacidades.{' '}
        </p>{' '}
        <br />
        <p>
          Acredito que essa combinação de habilidades e conhecimentos me
          permitirá criar produtos digitais mais intuitivos, atraentes e mais
          funcionais, elevando cada vez mais a qualidade do meu trabalho.
        </p>
        <br />
      </div>
    </section>
  );
};
