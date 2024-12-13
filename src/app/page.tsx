import Image from "next/image";
import { Container, Tooltip } from "@mui/material";
import {
  EmailOutlined,
  GitHub,
  Instagram,
  Code,
  Architecture,
  PhoneIphone,
} from "@mui/icons-material";
import { icons } from "@/constant/technologies";
import { images } from "@/constant/photos";
import Navbar from "@/components/Navbar";
import Project from "@/components/project";
import Footer from "@/components/Footer";

const technologies = [
  { id: 1, code: icons.html, name: "Html" },
  { id: 2, code: icons.css, name: "Css" },
  { id: 3, code: icons.javascript, name: "Javascript" },
  { id: 4, code: icons.react, name: "ReactJS" },
  { id: 5, code: icons.next, name: "NextJS" },
  { id: 6, code: icons.tailwind, name: "Tailwind" },
  { id: 7, code: icons.redux, name: "Redux" },
  { id: 8, code: icons.styledComponents, name: "Styled Components" },
  { id: 9, code: icons.materialUI, name: "Material UI" },
];

const projectsActive = [
  {
    id: 1,
    image: images.PittyFinder,
    title: "Pitty Finder",
    description: [icons.javascript, icons.html, icons.css, icons.react],
    link: "https://pitty-finder.vercel.app/",
    github:
      "https://github.com/LeonardoCaml/Pitty-Finder/tree/main/pitty-finder",
  },
  {
    id: 2,
    image: images.CodeLearner,
    title: "CodeLearn",
    description: [
      icons.javascript,
      icons.html,
      icons.css,
      icons.react,
      icons.styledComponents,
    ],
    link: "https://blog-code-learner.vercel.app/",
    github: "https://github.com/LeonardoCaml/blog",
  },
  {
    id: 3,
    image: images.SiteXbox,
    title: "Xbox Series X",
    description: [
      icons.javascript,
      icons.html,
      icons.css,
      icons.next,
      icons.tailwind,
    ],
    link: "https://landing-page-xbox.vercel.app/",
    github: "https://github.com/LeonardoCaml/landing-page-xbox",
  },
];

const contact = [
  {
    id: 1,
    title: "email",
    subtitle: "leonardocamelo20@gmail.com",
    icon: <EmailOutlined />,
  },
  { id: 2, title: "instagram", subtitle: "@leonardo_cml", icon: <Instagram /> },
  { id: 3, title: "github", subtitle: "LeonardoCaml", icon: <GitHub /> },
];

const services = [
  {
    id: 1,
    icon: <Code sx={{ fontSize: "inherit" }} />,
    service: "Criação de sites",
  },
  {
    id: 2,
    icon: <Architecture sx={{ fontSize: "inherit" }} />,
    service: "UI / UX Designer",
  },
  {
    id: 3,
    icon: <PhoneIphone sx={{ fontSize: "inherit" }} />,
    service: "Sites responsivos",
  },
];

export default function Home() {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Navbar />
        <div className="flex items-center justify-center">
          <div className="h-48 flex flex-col justify-between items-start gap-2 my-48">
            <p className="text-2xl">Olá, eu sou</p>
            <h1 className="text-5xl">Leonardo Camelo</h1>
            <p className="text-2xl">Desenvolvedor Frontend</p>
            <div className="w-full flex gap-2 mt-2">
              <a
                href="/curriculo.pdf"
                download="Leonardo_Camelo_Dev.pdf"
                className="flex items-center justify-center border-solid border-2 border-black w-1/2 h-10 rounded-lg font-semibold"
              >
                Baixar currículo
              </a>
              <a
                href="https://github.com/LeonardoCaml"
                target="_blank"
                className="flex items-center justify-center border-solid border-2 border-black bg-black text-white w-1/2 h-10 rounded-lg font-semibold"
              >
                GitHub
              </a>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center overflow-hidden h-[550px]">
              <Image width={600} src={images.Ilustraçao} alt="icon" />
            </div>
          </div>
        </div>
        <Container
          maxWidth="lg"
          className="flex flex-col items-center justify-center"
        >
          <div className="flex flex-col items-center my-20">
            <h1 className="text-4xl text-center font-bold mb-10">Sobre mim</h1>
            <p className="text-xl text-center w-full">
              Meu nome é Leonardo Camelo, sou um entusiasta da tecnologia desde
              muito cedo, e iniciei minha jornada na programação após conhecer
              de perto a estrutura de um site HTML e as tecnologias que rodavam
              por trás de uma aplicação web. Desde então, comecei a investir
              fortemente no meu aprendizado, desenvolvendo minhas skills como
              desenvolvedor Front-end. Atualmente sou freelancer como Frontend
              Developer e UI Designer. Desenvolvo interfaces modernas e de alta
              qualidade, concentrado em performance, responsividade e SEO
            </p>
            <div className="w-full my-20 flex justify-between">
              {contact.map((props) => (
                <div
                  key={props.id}
                  className=" w-1/2 flex flex-col items-center gap-2"
                >
                  <div className="bg-gray-200 p-3 rounded-full">
                    {props.icon}
                  </div>
                  <h1 className="font-semibold text-md">{props.title}</h1>
                  <p>{props.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Container>
      <div className="min-h-svh h-fit flex flex-col items-center justify-evenly">
        <h1 className="text-4xl text-center font-bold mb-10">Projetos</h1>
        <Container
          maxWidth="lg"
          className="grid grid-cols-2 justify-center gap-16 my-10"
        >
          {projectsActive.map((props) => (
            <Project
              key={props.id}
              id={props.id}
              image={props.image}
              title={props.title}
              description={props.description}
              github={props.github}
              link={props.link}
            />
          ))}
        </Container>
      </div>
      <Container
        maxWidth="lg"
        className="h-1/2 flex flex-col items-center justify-center my-10"
      >
        <div className="w-full flex flex-col items-center justify-center my-10">
          <h1 className="text-4xl text-center font-bold my-10">Serviços</h1>
          <div className="w-full flex justify-between mb-10">
            {services.map((props) => (
              <div
                key={props.id}
                className="flex flex-col items-start justify-center border border-b-4 border-black bg-gray-200 w-[370px] h-60 p-10 gap-4"
              >
                <span className="text-5xl font-semibold">{props.icon}</span>
                <h1 className="text-3xl font-semibold w-32">{props.service}</h1>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center my-10">
          <h1 className="text-4xl text-center font-bold my-10">Habilidades</h1>
          <div className="w-full flex justify-between">
            {technologies.map((icon) => (
              <Tooltip title={icon.name} arrow key={icon.id}>
                <Image
                  className="w-20 transition-all hover:scale-[1.2] duration-500"
                  src={icon.code}
                  alt="icon"
                />
              </Tooltip>
            ))}
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
