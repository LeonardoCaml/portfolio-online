import { Container } from "@mui/material";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import AboutMe from "@/components/AboutMe";
import Drafts from "@/components/Drafts";
import Services from "@/components/Services";
import Skills from "@/components/Skills";

export default function HomePage() {
  return (
    <>
      <Container maxWidth="lg">
        <Navbar />
        <Home />
        <AboutMe />
      </Container>
      <Drafts />
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 10,
        }}
      >
        <Services />
        <Skills />
      </Container>
      <Footer />
    </>
  );
}
