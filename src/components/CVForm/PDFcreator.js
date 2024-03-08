import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Estilos para el documento PDF
// Crea los estilos
// Estilos actualizados
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF', // Color de fondo más suave
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    borderBottom: '1 solid #EEE', // Línea sutil para separar secciones
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10, // Espacio después del título
    fontFamily: 'Century Gothic', // Fuente más prominente para el título
  },
  subTitle: {
    fontSize: 12,
    marginVertical: 5, // Espaciado vertical para subtítulos
    fontFamily: 'Century Gothic', // Fuente diferente para subtítulos
  },
  text: {
    margin: 10,
    fontSize: 10,
    textAlign: 'justify',
    fontFamily: 'Century Gothic', // Fuente para el texto regular
  },
});

// Componente Documento PDF actualizado
const PDFCreator = ({ formData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Nombre: {formData.nombre} {formData.apellido}</Text>
        <Text style={styles.subTitle}>Información de Contacto</Text> {/* Subtítulo agregado */}
        <Text style={styles.text}>Email: {formData.email}</Text>
        <Text style={styles.text}>Teléfono: {formData.telefono}</Text>
        {/* Secciones de experiencias con estilo */}
        {formData.experiencias.map((exp, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.subTitle}>Experiencia {index + 1}</Text> {/* Subtítulo para cada experiencia */}
            <Text style={styles.text}>Empresa: {exp.empresa}</Text>
            <Text style={styles.text}>Rol: {exp.rol}</Text>
            <Text style={styles.text}>Descripción: {exp.descripcion}</Text>
            <Text style={styles.text}>Período: {exp.periodo}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default PDFCreator;
