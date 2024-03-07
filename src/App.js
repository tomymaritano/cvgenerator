import "./App.css";

import { ChakraProvider } from "@chakra-ui/react";
import NavbarMenu from "./components/Navbar/Navbar";
import MainSide from "./components/Main/MainSide";
import CVForm from "./components/CVForm/CVform";
import Footer from "./components/Footer/Footer";
import ParticlesJS from "./components/Particles/Particles";
import Test from "./components/test";
function App() {
  return (
    <>
      <ChakraProvider>
        <ParticlesJS />
        <NavbarMenu />
        <MainSide />
        <CVForm />
        <Footer />
        <Test />
      </ChakraProvider>
    </>
  );
}

export default App;
