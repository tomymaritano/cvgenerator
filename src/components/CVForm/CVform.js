import React, { useState } from 'react'
import {
  Box,
  Button,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  IconButton,
  Container,
} from '@chakra-ui/react'
import { AddIcon, DeleteIcon } from '@chakra-ui/icons'

const CVForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    experiencias: [{ empresa: '', rol: '', descripcion: '', periodo: '' }],
  })

  const { experiencias } = formData // Add this line

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target
    const updatedExperiencias = experiencias.map((exp, i) =>
      i === index ? { ...exp, [name]: value } : exp
    )
    setFormData((prevFormData) => ({
      ...prevFormData,
      experiencias: updatedExperiencias,
    }))
  }

  const addExperience = () => {
    const newExperience = { empresa: '', rol: '', descripcion: '', periodo: '' }
    setFormData((prevFormData) => ({
      ...prevFormData,
      experiencias: [...prevFormData.experiencias, newExperience],
    }))
  }

  const handleEmailChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      email: e.target.value,
    }))
  }

  const deleteExperience = (index) => {
    const filteredExperiences = experiencias.filter((_, i) => i !== index)
    setFormData((prevFormData) => ({
      ...prevFormData,
      experiencias: filteredExperiences,
    }))
  }

  return (
    <Box p={5} bgColor={'#212121'}>
      <Container>
        <VStack spacing={4} align="stretch">
          <FormControl isRequired>
            <FormLabel>Nombre</FormLabel>
            <Input
              size={'sm'}
              name="nombre"
              value={formData.nombre}
              onChange={(e) =>
                setFormData({ ...formData, nombre: e.target.value })
              }
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Apellido</FormLabel>
            <Input
              size={'sm'}
              name="apellido"
              value={formData.apellido}
              onChange={(e) =>
                setFormData({ ...formData, apellido: e.target.value })
              }
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              size={'sm'}
              name="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Teléfono</FormLabel>
            <Input
              size={'sm'}
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

        <VStack pt={3} spacing={4} align="stretch">
          {experiencias.map((exp, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="lg">
              <VStack spacing={3}>
                <FormControl>
                  <FormLabel>Empresa</FormLabel>
                  <Input
                    size={'sm'}
                    name="empresa"
                    value={exp.empresa}
                    onChange={(e) => handleExperienceChange(index, e)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Rol</FormLabel>
                  <Input
                    size={'sm'}
                    name="rol"
                    value={exp.rol}
                    onChange={(e) => handleExperienceChange(index, e)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Descripción</FormLabel>
                  <Textarea
                    name="descripcion"
                    value={exp.descripcion}
                    onChange={(e) => handleExperienceChange(index, e)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Período</FormLabel>
                  <Input
                    size={'sm'}
                    name="periodo"
                    value={exp.periodo}
                    onChange={(e) => handleExperienceChange(index, e)}
                  />
                </FormControl>
                <IconButton
                  size={'sm'}
                  aria-label="Eliminar experiencia"
                  icon={<DeleteIcon />}
                  onClick={() => deleteExperience(index)}
                />
              </VStack>
            </Box>
          ))}
          <Button
            size={'sm'}
            leftIcon={<AddIcon />}
            onClick={addExperience}
            colorScheme="yellow"
          >
            Añadir Experiencia
          </Button>
        </VStack>
        <Button mt={3} size={'sm'}>
          Generar
        </Button>
      </Container>
    </Box>
  )
}

export default CVForm
