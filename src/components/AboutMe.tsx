import { Container } from "@mui/material";
import { EmailOutlined, GitHub, Instagram } from "@mui/icons-material";

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

export default function AboutMe() {
  return (
    <Container
      maxWidth="lg"
      className="flex flex-col items-center justify-center"
    >
      <div className="w-11/12 md:w-full flex flex-col items-center my-6 md:my-20">
        <h1 className="text-2xl md:text-4xl text-center font-bold mb-5 md:mb-10">
          Sobre mim
        </h1>
        <p className="text-base md:text-xl text-center w-full">
          Meu nome é Leonardo Camelo, sou um entusiasta da tecnologia desde
          muito cedo, e iniciei minha jornada na programação após conhecer de
          perto a estrutura de um site HTML e as tecnologias que rodavam por
          trás de uma aplicação web. Desde então, comecei a investir fortemente
          no meu aprendizado, desenvolvendo minhas skills como desenvolvedor
          Frontend. Atualmente sou freelancer como Frontend Developer e UI
          Designer. Desenvolvo interfaces modernas e de alta qualidade,
          concentrado em performance, responsividade e SEO
        </p>
        <div className="w-full my-10 md:my-20 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          {contact.map((props) => (
            <div
              key={props.id}
              className=" w-1/2 flex flex-col items-center gap-2"
            >
              <div className="bg-gray-200 p-3 rounded-full">{props.icon}</div>
              <h1 className="font-semibold text-md">{props.title}</h1>
              <p>{props.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
