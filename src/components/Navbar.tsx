import Image from "next/image";
import logo from "../app/assets/logo.png";
import { Container } from "@mui/material";

const link = [
  { id: 1, name: "home" },
  { id: 2, name: "sobre mim" },
  { id: 3, name: "projetos" },
  { id: 4, name: "contato" },
];

export default function Navbar() {
  return (
    <Container maxWidth="lg">
      <div className="flex items-center justify-between h-28">
        <Image
          src={logo}
          className="hidden md:block md:w-24 m-8"
          alt="logo"
        />
        <ul className="flex items-center w-fit h-20 text-lg gap-20">
          {link.map((item) => (
            <li
              className="w-30 hidden md:block text-center cursor-pointer"
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
