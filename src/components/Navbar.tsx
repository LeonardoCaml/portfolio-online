"use client";

import React from "react";
import Image from "next/image";
import logo from "../app/assets/logo.png";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { useState } from "react";
import { Container, Drawer } from "@mui/material";

const link = [
  { id: 1, name: "Início" },
  { id: 2, name: "sobre mim" },
  { id: 3, name: "projetos" },
  { id: 4, name: "Serviços" },
  { id: 5, name: "Habilidades" },
];

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const Sidebar = (
    <div className="w-40 my-8 mr-3" onClick={toggleDrawer(false)}>
      <ul className="flex flex-col items-end h-20 text-lg gap-5">
        {link.map((item) => (
          <li
            className="w-20 md:w-28 text-end text-xs md:text-base cursor-pointer font-semibold"
            key={item.id}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <Container maxWidth="lg">
      <div className="w-full flex items-center justify-between h-20 md:h-28">
        <Image src={logo} className="w-14 md:w-20" alt="logo" />
        <ul className="hidden md:flex items-center h-20 text-lg">
          {link.map((item) => (
            <li
              className="w-20 md:w-28 text-center text-xs md:text-base cursor-pointer font-semibold"
              key={item.id}
            >
              {item.name}
            </li>
          ))}
        </ul>
        <button className="block md:hidden" onClick={toggleDrawer(true)}>
          {<DehazeIcon />}
        </button>
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          {Sidebar}
        </Drawer>
      </div>
    </Container>
  );
}
