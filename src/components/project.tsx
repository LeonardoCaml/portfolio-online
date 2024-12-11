import { Container } from "@mui/material";
import Image from "next/image";

export default function Project({ image, title, description, link, id }) {
  return (
    <Container
      maxWidth="lg"
      className="w-[450px] flex flex-col items-center justify-between gap-4"
    >
      <div className="w-full border-solid border-2 h-60 overflow-hidden rounded">
        <Image
          src={image}
          className="duration-300 w-full h-72 object-cover hover:scale-105"
          alt="tela"
        />
      </div>
      <div className="w-full h-4/5 flex flex-col justify-between gap-2">
        <h1 className="font-bold text-2xl">{title}</h1>
        <p className="font-semibold">Tecnologias:</p>
        <div className="flex gap-5">
          {description.map((icon) => (
            <Image key={id} src={icon} alt="icon" width={30} />
          ))}
        </div>
        <div className="w-full flex justify-between gap-2">
          <button className="bg-black border-solid border-2 border-black w-1/2 h-10 rounded-lg">
            <a
              href={link}
              target="_blank"
              className="text-md text-white font-semibold"
            >
              Acessar o projeto
            </a>
          </button>
          <button className="border-solid border-2 border-black w-1/2 h-10 rounded-lg">
            <a href="_blank" target="_blank" className="text-md font-semibold">
              Acessar repositório
            </a>
          </button>
        </div>
      </div>
    </Container>
  );
}
