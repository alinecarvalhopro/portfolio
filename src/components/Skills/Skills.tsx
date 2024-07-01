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
          Tenho experiência com o desenvolvimento de aplicativos mobile,
          utilizando a tecnologia React Native, tanto com CLI quanto com EXPO,
          desenvolvendo a aplicação da forma mais fiel possível ao protótipo
          “pixel perfect”.
        </p>{' '}
        <br />
        <p>
          Amplo conhecimento em CSS e estilização com as bibliotecas, como
          Tailwind, Styled Components e Sass.
        </p>{' '}
        <br />
        <p>
          Integração e consumo com APIs. Utilização de React Hooks e de
          bibliotecas para as mais diversas funcionalidades. Desenvolvimento
          baseado em componentes.
        </p>{' '}
        <br />
        <p>
          Além disso, já tive a experiência gerando AAB e APK de aplicativos e
          em deploy / publicação na Google Play. 
        </p>{' '}
        <br />
        <p>
          Também tenho experiência no desenvolvimento web utilizando React.js e
          Next.js*.
        </p>{' '}
        <br />
        <p>
          <small>
            *Inclusive, um detalhe interessante sobre isso é que esse projeto,
            meu portfólio pessoal, foi desenvolvido em Next.js, TypeScript e
            estilizado com a biblioteca Sass. Ele conta com 3 layouts diferentes
            para responsividade, além da versão mobile e tamanhos mais comuns de
            tela, ele conta com layout exclusivo para tamanhos gigantes. Não
            deixe de testar.
          </small>
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
