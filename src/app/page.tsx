import Image from "next/image";
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
    description:
      "Uma página de adoção de animais que conecta abrigos e ONGs de todo o brasil. Com ele, você pode encontrar diversos animais para adoção, além de contribuir com o funcionamento dos nossos abrigos afiliados por meio de doações e serviços voluntários",
    link: "https://pitty-finder.vercel.app/",
  },
  {
    id: 2,
    image: code,
    title: "CodeLearn",
    description:
      "Um blog pessoal para aspirantes na programação. Aqui você verá os principais post relacionados a area da programação, desenvolvido por pessoas experientes, afim de direcionar melhor quem está iniciando no ramo",
    link: "https://blog-code-learner.vercel.app/",
  },
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
          <Image src={title} className="w-80 md:w-full" alt="title" />
        </Stack>
        <Stack direction="row" sx={{ marginBottom: 15, gap: 5 }}>
          {icons.map((icon) => (
            <Image
              key={icon.id}
              className="w-10 md:w-20 transition-all hover:-translate-y-4 duration-500"
              src={icon.code}
              alt="icon"
            />
          ))}
        </Stack>
      </Container>
      <div className="h-svh flex flex-col items-center justify-center">
        <Container maxWidth="lg">
          <h1 className="text-4xl font-bold">Sobre mim</h1>
          <p className="text-sm md:text-xl w-full">
            Sempre fui um entusiasta da tecnologia, desde muito cedo tive
            contato com manuntenção de eletrônicos. Porém, nunca encherguei o
            mercado da tecnologia como uma profissão, apenas como um passa
            tempo.
            <br></br>
            <br></br>
            Em 2021, iniciei minha jornada na programação após conhecer de perto
            como funcionava a estrutura de um site HTML e as tecnologias que
            rodavam por trás de uma aplicação web. Desde então, comecei a
            investir fortemente no meu aprendizado, desenvolvendo minhas
            próprias landing pages e aperfeiçoar minhas skills como
            desenvolvedor Front-end.
            <br></br>
            <br></br>
            Estou sempre apto a novas experiências e acolher novos desafios na
            minha carreira, assim poderei crescer e poder liderar meu próprio
            time de desenvolvimento um dia!
          </p>
        </Container>
      </div>
      <div className="min-h-svh h-fit flex flex-col items-center justify-evenly py-10">
        <h1 className="text-4xl md:text-8xl my-10 font-bold">Projetos</h1>
        <Container
          maxWidth="lg"
          className="flex flex-wrap justify-center gap-16 my-10"
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
