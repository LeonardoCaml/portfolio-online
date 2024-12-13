import Image from "next/image";
import logo from "../app/assets/logo.png";
import { Container } from "@mui/material";

const link = [
  { id: 1, name: "Início" },
  { id: 2, name: "sobre mim" },
  { id: 3, name: "projetos" },
  { id: 4, name: "Serviços" },
  { id: 5, name: "Habilidades" },
];

export default function Navbar() {
  return (
    <Container maxWidth="lg">
      <div className="flex items-center justify-between h-28">
        <Image src={logo} className="block w-20 m-8" alt="logo" />
        <ul className="flex items-center w-fit h-20 text-lg gap-20 pr-10">
          {link.map((item) => (
            <li
              className="w-30 hidden md:block text-center cursor-pointer font-semibold"
              key={item.id}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
