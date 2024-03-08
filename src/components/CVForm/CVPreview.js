import React from 'react';
import {
  Box,
  VStack,
  Text,
  Heading,
} from '@chakra-ui/react';

const CVPreview = ({ formData }) => {
  return (


        <VStack spacing={4} align="stretch">
          <Heading as="h2" size="lg">Vista Previa del CV</Heading>
          <Text><strong>Nombre:</strong> {formData.nombre} {formData.apellido}</Text>
          <Text><strong>Email:</strong> {formData.email}</Text>
          <Text><strong>Teléfono:</strong> {formData.telefono}</Text>
          <Heading as="h3" size="md">Experiencias</Heading>
          {formData.experiencias.map((exp, index) => (
            <Box key={index} marginBottom="10px">
              <Text><strong>Empresa:</strong> {exp.empresa}</Text>
              <Text><strong>Rol:</strong> {exp.rol}</Text>
              <Text><strong>Descripción:</strong> {exp.descripcion}</Text>
              <Text><strong>Período:</strong> {exp.periodo}</Text>
            </Box>
          ))}
        </VStack>

  );
};

export default CVPreview;
