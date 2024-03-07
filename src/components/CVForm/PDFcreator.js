import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Estilos para el documento PDF
// Crea los estilos
const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: '#E4E4E4',
      padding: 10,
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    title: {
      fontSize: 24,
      textAlign: 'center',
    },
    subTitle: {
      fontSize: 18,
      margin: 10,
    },
    text: {
      margin: 10,
      fontSize: 14,
      textAlign: 'justify',
    },
  });

// Componente Documento PDF
const PDFCreator = ({ formData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Nombre: {formData.nombre} {formData.apellido}</Text>
        <Text>Email: {formData.email}</Text>
        <Text>Teléfono: {formData.telefono}</Text>
        {/* Iterar sobre experiencias */}
        {formData.experiencias.map((exp, index) => (
          <View key={index} style={styles.section}>
            <Text>Empresa: {exp.empresa}</Text>
            <Text>Rol: {exp.rol}</Text>
            <Text>Descripción: {exp.descripcion}</Text>
            <Text>Período: {exp.periodo}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default PDFCreator;
