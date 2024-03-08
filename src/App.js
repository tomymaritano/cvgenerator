import "./App.css";
import { Box } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import NavbarMenu from "./components/Navbar/Navbar";
import MainSide from "./components/Main/MainSide";
import CVForm from "./components/CVForm/CVform";
import Footer from "./components/Footer/Footer";
import ParticlesJS from "./components/Particles/Particles";
function App() {
  return (
    <>
      <ChakraProvider>
        <Box bgColor="#171717">
          <ParticlesJS />
          <NavbarMenu />
          <MainSide />
          <CVForm />
          <Footer />
        </Box>
      </ChakraProvider>
    </>
  );
}

export default App;
