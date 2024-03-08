import React from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import CVPreview from "./CVPreview"; // Asegúrate de que la ruta de importación sea correcta
import { FaEye } from "react-icons/fa";


const CVPreviewModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [setSize] = React.useState("md");

  const handleSizeClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  const sizes = ["md"];
  // Asume que tienes `formData` disponible para pasarlo a CVPreview
  const formData = {
    nombre: "Juan",
    apellido: "Pérez",
    email: "juan.perez@example.com",
    telefono: "1234567890",
    experiencias: [
      {
        empresa: "Empresa 1",
        rol: "Desarrollador Frontend",
        descripcion: "Trabajé desarrollando interfaces con React.",
        periodo: "Enero 2020 - Diciembre 2021",
      },
      {
        empresa: "Empresa 2",
        rol: "Desarrollador Backend",
        descripcion: "Desarrollo de APIs REST con Node.js.",
        periodo: "Enero 2022 - Presente",
      },
    ],
  };

  return (
    <>
      {sizes.map((size) => (
        <Button
        size={'sm'}
          onClick={() => handleSizeClick(size)}
          key={size}
          mt={3}
          ml={2}
          colorScheme="gray"
        ><FaEye /></Button>
      ))}

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Vista Previa del CV</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CVPreview formData={formData} />
          </ModalBody>
          <ModalFooter>
            <Button size={"sm"} colorScheme="yellow" mr={3} onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CVPreviewModal;
