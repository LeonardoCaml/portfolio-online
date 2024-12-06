import Image, { StaticImageData } from "next/image";
import title from "./assets/title.png";
import Navbar from "@/components/Navbar";
import { Container, Stack } from "@mui/material";
import technologies from "../constant/technologies";
import Project from "@/components/project";
import tela from "../app/assets/telainicial.png";
import code from "../app/assets/codelearn.jpg";

const icons = [
  { id: 1, code: technologies.javascript },
  { id: 2, code: technologies.react },
  { id: 3, code: technologies.next },
  { id: 4, code: technologies.redux },
  { id: 5, code: technologies.tailwind },
];

type projectActiveProps = {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
};

const projectsActive = [
  {
    id: 1,
    image: tela,
    title: "Pitty Finder",
    description: "Pitty Finder é um projeto de front-end para uma página de adoção de animais que conecta abrigos e ONGs de todo o brasil. Com ele, você pode encontrar diversos animais para adoção, além de contribuir com o funcionamento dos nossos abrigos afiliados por meio de doações e serviços voluntários",
    link: "link: www.site-exemplo.com.br",
  },
  { id: 2, image: code, title: "CodeLearn", description: "", link: "" },
];

export default function Home() {
  return (
    <>
      <Container
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Navbar />
        <Stack sx={{ display: "flex", justifyContent: "space-between" }}>
          <Image src={title} width={550} alt="title" />
        </Stack>
        <Stack direction="row" sx={{ marginBottom: 20, gap: 5 }}>
          {icons.map((icon) => (
            <Image
              key={icon.id}
              className="transition-all hover:-translate-y-4 duration-500"
              src={icon.code}
              width={80}
              alt="icon"
            />
          ))}
        </Stack>
      </Container>
      <div className="h-svh flex flex-col items-center justify-center">
        <div>
          <h1 className="text-4xl">Sobre mim</h1>
          <p className="text-xl w-[60rem]">
            Sempre fui um entusiasta da tecnologia, desde muito cedo tive
            contato com manuntenção de eletrônicos e outros programas de
            computador. Porém, nunca encherguei o mercado da tecnologia como uma
            profissão, apenas como um passa tempo, visão essa que foi mudando ao
            longo dos anos.
            <br></br>
            <br></br>
            Iniciei minha jornada no desenvolvimento web somente em 2021 após
            conhecer de perto como funcionava a estrutura de um site e as
            tecnologias que rodavam por trás de uma aplicação. Desde então,
            comecei a desenvolver minhas próprias landing pages e aperfeiçoar
            minhas skills como desenvolvedor Front-end afim de me tornar um
            excelente profissional.
            <br></br>
            <br></br>
            Em 2022 tive meu primeiro cliente, dono de uma empresa de
            contabilidade que precisava de uma landing page para exibir seus
            serviços e apresentar sua historia para potenciais clientes. Foi uma
            excelente oportunidade de aplicar meus conhecimentos e compreender
            onde precisava melhorar
            <br></br>
            <br></br>
            Hoje, busco atuar como desenvolvedor front-end e, talvez em alguns
            anos, começar a liderar meu proprio time de desenvolvedores
          </p>
        </div>
      </div>
      <div className="h-svh h-fit flex flex-col items-center justify-evenly py-10">
        <h1 className="text-8xl my-10">Projetos</h1>
        <Container
          maxWidth="lg"
          className="flex flex-wrap justify-center gap-14 my-10"
        >
          {projectsActive.map((props) => (
            <Project
              key={props.id}
              image={props.image}
              title={props.title}
              description={props.description}
              link={props.link}
            />
          ))}
        </Container>
      </div>
      <div className="h-svh flex flex-col items-center justify-center">
        <h1>Envie sua mensagem</h1>
      </div>
    </>
  );
}
