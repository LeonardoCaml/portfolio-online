import Image from "next/image";
import logo from "../app/assets/logo.png";

const link = [
  { id: 1, name: "Início" },
  { id: 2, name: "sobre mim" },
  { id: 3, name: "projetos" },
  { id: 4, name: "Serviços" },
  { id: 5, name: "Habilidades" },
];

export default function Navbar() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between h-20 md:h-28">
        <Image src={logo} className="hidden md:block w-20 m-8" alt="logo" />
        <ul className="flex items-center h-20 text-lg md:pr-10">
          {link.map((item) => (
            <li
              className="w-20 md:w-28 text-center text-xs md:text-base cursor-pointer font-semibold"
              key={item.id}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
