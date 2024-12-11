import { Container } from "@mui/material";

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <div className="w-full flex items-center h-20 bg-gray-200">
      <Container maxWidth="lg" className="flex justify-between items-center text-sm">
        <p>@ {year} - Leonardo Camelo</p>
        <p>Todos os direitos reservados</p>
      </Container>
    </div>
  );
}
