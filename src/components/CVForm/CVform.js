import React, { useState } from "react";
import {
  Box,
  Button,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Text,
  IconButton,
  Container,
  Heading,
} from "@chakra-ui/react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFCreator from "./PDFcreator";
import generateDoc from "./DOCxcreator";
import CVPreviewModal from "./CVPrviewModal";

const CVForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    experiencias: [{ empresa: "", rol: "", descripcion: "", periodo: "" }],
  });

  const [showExperiences, setShowExperiences] = useState(false);

  const { experiencias } = formData; // Add this line

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedExperiencias = experiencias.map((exp, i) =>
      i === index ? { ...exp, [name]: value } : exp
    );
    setFormData((prevFormData) => ({
      ...prevFormData,
      experiencias: updatedExperiencias,
    }));
  };

  const addExperience = () => {
    setShowExperiences(true);
    const newExperience = {
      empresa: "",
      rol: "",
      descripcion: "",
      periodo: "",
    };
    setFormData((prevFormData) => ({
      ...prevFormData,
      experiencias: [...prevFormData.experiencias, newExperience],
    }));
  };

  // const handleEmailChange = (e) => {
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     email: e.target.value,
  //   }));
  // };

  const deleteExperience = (index) => {
    const filteredExperiences = experiencias.filter((_, i) => i !== index);
    setFormData((prevFormData) => ({
      ...prevFormData,
      experiencias: filteredExperiences,
    }));
  };

  return (
    <Box p={5} bgColor={"#212121"}>
      <Container>
        <Heading color={"white"} textAlign={"center"} size={"lg"}>
          Crea tu mentira gratis!
        </Heading>
        <Text color={"white"} textAlign={"center"} pb={6}>
          No te olvides que yo tambien fui uno! 👻
        </Text>
        <VStack spacing={4} align="stretch">
          <FormControl isRequired>
            <FormLabel color={'white'}>Nombre</FormLabel>
            <Input
              color={"white"}
              placeholder='Escribi wachin'
              _placeholder={{ color: 'gray.500' }}
              size={"sm"}
              name="nombre"
              value={formData.nombre}
              onChange={(e) =>
                setFormData({ ...formData, nombre: e.target.value })
              }
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel color={'white'}>Apellido</FormLabel>
            <Input
            color={'white'}
            placeholder='Escribi wachin'
            _placeholder={{ color: 'gray.500' }}
              size={"sm"}
              name="apellido"
              value={formData.apellido}
              onChange={(e) =>
                setFormData({ ...formData, apellido: e.target.value })
              }
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel color={'white'}>Email</FormLabel>
            <Input
              color={"white"}
              placeholder='Escribi wachin'
              _placeholder={{ color: 'gray.500' }}
              size={"sm"}
              name="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel color={'white'}>Teléfono</FormLabel>
            <Input
              color={"white"}
              placeholder='Escribi wachin'
              _placeholder={{ color: 'gray.500' }}
              size={"sm"}
              name="telefono"
              type="tel"
              value={formData.telefono}
              onChange={(e) =>
                setFormData({ ...formData, telefono: e.target.value })
              }
            />
          </FormControl>
          {/* Experiencias y botón de añadir experiencia aquí */}
        </VStack>

        {showExperiences && (
          <VStack color={"white"} pt={3} spacing={4} align="stretch">
            {experiencias.map((exp, index) => (
              <Box key={index} p={4} borderWidth="1px" borderRadius="lg">
                <VStack spacing={3}>
                  <FormControl>
                    <FormLabel>Empresa</FormLabel>
                    <Input
                      size={"sm"}
                      placeholder='Escribi wachin'
                      _placeholder={{ color: 'gray.500' }}
                      name="empresa"
                      value={exp.empresa}
                      onChange={(e) => handleExperienceChange(index, e)}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Rol</FormLabel>
                    <Input
                      size={"sm"}
                      placeholder='Escribi wachin'
                      _placeholder={{ color: 'gray.500' }}
                      name="rol"
                      value={exp.rol}
                      onChange={(e) => handleExperienceChange(index, e)}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel color={'white'}>Descripción</FormLabel>
                    <Textarea
                      name="descripcion"
                      value={exp.descripcion}
                      onChange={(e) => handleExperienceChange(index, e)}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel color={'white'}>Período</FormLabel>
                    <Input
                      size={"sm"}
                      placeholder='Escribi wachin'
                      _placeholder={{ color: 'gray.500' }}
                      name="periodo"
                      value={exp.periodo}
                      onChange={(e) => handleExperienceChange(index, e)}
                    />
                  </FormControl>
                  <IconButton
                    size={"sm"}
                    placeholder='Escribi wachin'
                    _placeholder={{ color: 'gray.500' }}
                    aria-label="Eliminar experiencia"
                    icon={<DeleteIcon />}
                    onClick={() => deleteExperience(index)}
                  />
                </VStack>
              </Box>
            ))}
          </VStack>
        )}
        <Button
          size={"sm"}
          color={'white'}
          mt={3}
          mr={2}
          leftIcon={<AddIcon />}
          onClick={addExperience}
          colorScheme="yellow"
        >
          Añadir Experiencia
        </Button>
        <Box>
          <Button colorScheme="teal" mr={2} mt={3} size={"sm"}>
            <PDFDownloadLink
              document={<PDFCreator formData={formData} />}
              fileName="cv.pdf"
            >
              {({ blob, url, loading, error }) =>
                loading ? "Generando documento..." : "Generar PDF"
              }
            </PDFDownloadLink>
          </Button>
          <Button
            colorScheme="gray"
            onClick={() => generateDoc(formData)}
            mt={3}
            size={"sm"}
          >
            Word
          </Button>
          <CVPreviewModal />
        </Box>
      </Container>
    </Box>
  );
};

export default CVForm;
