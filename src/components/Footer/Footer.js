// src/components/Footer/Footer.js

import React from 'react';
import { Box, Container, Text, Link, Stack, Icon } from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => (
  <Box bg="#171717" color="white">
    <Container as={Stack} maxW={'6xl'} py={4} spacing={4} justify={'center'} align={'center'}>
      <Stack direction={'row'} spacing={6}>
        <Link href={'#'}>Inicio</Link>
        <Link href={'#'}>Sobre nosotros</Link>
        <Link href={'#'}>Servicios</Link>
        <Link href={'#'}>Contacto</Link>
      </Stack>
      <Text>© 2024 MiApp. Todos los derechos reservados</Text>
      <Stack direction={'row'} spacing={6}>
        <Link href={'#'}><Icon as={FaFacebook} /></Link>
        <Link href={'#'}><Icon as={FaInstagram} /></Link>
        <Link href={'#'}><Icon as={FaTwitter} /></Link>
      </Stack>
    </Container>
  </Box>
);

export default Footer;
