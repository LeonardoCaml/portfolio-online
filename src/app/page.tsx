import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Container, Stack } from "@mui/material";
import { assets } from "../constant/technologies";
import Project from "@/components/project";
import pitty from "../app/assets/pitty.png";
import code from "../app/assets/codelearn.jpg";
import xbox from "../app/assets/xbox.png";
import Footer from "@/components/Footer";

const icons = [
  { id: 1, code: assets.javascript },
  { id: 2, code: assets.react },
  { id: 3, code: assets.next },
  { id: 4, code: assets.redux },
  { id: 5, code: assets.tailwind },
  { id: 6, code: assets.styledComponent },
  { id: 7, code: assets.materialUI },
];

const projectsActive = [
  {
    id: 1,
    image: pitty,
    title: "Pitty Finder",
    description: [assets.javascript, assets.react, assets.materialUI],
    link: "https://pitty-finder.vercel.app/",
  },
  {
    id: 2,
    image: code,
    title: "CodeLearn",
    description: [
      assets.javascript,
      assets.react,
      assets.next,
      assets.styledComponent,
    ],
    link: "https://blog-code-learner.vercel.app/",
  },
  {
    id: 3,
    image: xbox,
    title: "Xbox Series X",
    description: [
      assets.javascript,
      assets.next,
      assets.tailwind,
      assets.materialUI,
    ],
    link: "https://landind-page-xbox.vercel.app/",
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
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Navbar />
        <Stack sx={{ display: "flex", justifyContent: "space-between" }}>
          <p>Olá, eu sou</p>
          <h1>Leonardo Camelo</h1>
          <p>Desenvolvedor Frontend</p>
          <button>Baixar currículo</button>
        </Stack>
      </Container>
      <div className="h-svh flex flex-col items-center justify-center">
        <Container maxWidth="lg">
          <h1 className="text-4xl text-center font-bold mb-10">Sobre mim</h1>
          <p className="text-sm md:text-xl text-center w-full">
            Meu nome é Leonardo Camelo, sou um entusiasta da tecnologia desde
            muito cedo, iniciei minha jornada na programação após conhecer de
            perto a estrutura de um site HTML e as tecnologias que rodavam por
            trás de uma aplicação web. Desde então, comecei a investir
            fortemente no meu aprendizado, desenvolvendo minhas próprias landing
            pages e aperfeiçoar minhas skills como desenvolvedor Front-end.
            Atualmente sou freelancer como Frontend Developer e UI Designer.
            Desenvolvo interfaces modernas e de alta qualidade, concentrado em
            performance, responsividade e SEO
          </p>
          <div>
            <h1>email</h1>
            <p>email@gmail.com</p>
          </div>
        </Container>
      </div>
      <div className="min-h-svh h-fit flex flex-col items-center justify-evenly py-10">
        <h1 className="text-4xl md:text-8xl my-10 font-bold">Projetos</h1>
        <Container
          maxWidth="md"
          className="grid grid-cols-2 justify-center gap-16 my-10"
        >
          {projectsActive.map((props) => (
            <Project
              key={props.id}
              id={props.id}
              image={props.image}
              title={props.title}
              description={props.description}
              link={props.link}
            />
          ))}
        </Container>
      </div>
      <div className="h-svh flex flex-col items-center justify-center">
        <div className="flex gap-5">
          {icons.map((icon) => (
            <Image
              key={icon.id}
              className="w-10 md:w-20 transition-all hover:-translate-y-4 duration-500"
              src={icon.code}
              alt="icon"
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
