import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Container } from "@mui/material";
import {
  EmailOutlined,
  GitHub,
  Instagram,
  Code,
  Architecture,
  PhoneIphone,
} from "@mui/icons-material";
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
        <div className="flex flex-col justify-between items-pç my-48">
          <p className="text-2xl">Olá, eu sou</p>
          <h1 className="text-5xl">Leonardo Camelo</h1>
          <p className="text-2xl">Desenvolvedor Frontend</p>
          <button className="bg-red-200 p-2 rounded w-52">
            Baixar currículo
          </button>
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
              link={props.link}
            />
          ))}
        </Container>
      </div>
      <Container
        maxWidth="lg"
        className="flex flex-col items-center justify-center my-20"
      >
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
        <h1 className="text-4xl text-center font-bold my-10">Habilidades</h1>
        <div className="w-full flex justify-between">
          {icons.map((icon) => (
            <Image
              key={icon.id}
              className="w-10 md:w-20 transition-all hover:-translate-y-4 duration-500"
              src={icon.code}
              alt="icon"
            />
          ))}
        </div>
      </Container>
      <Footer />
    </>
  );
}
