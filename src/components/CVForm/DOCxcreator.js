
import { Packer, Document, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';

const generateDoc = (formData) => {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            children: [
              new TextRun("Curriculum Vitae"),
              new TextRun({
                text: `Nombre: ${formData.nombre} ${formData.apellido}`,
                break: 1,
              }),
              new TextRun(`Email: ${formData.email}`),
              new TextRun({
                text: `Teléfono: ${formData.telefono}`,
                break: 1,
              }),
              // Aquí puedes seguir agregando más TextRuns con la información de experiencias
            ],
          }),
        ],
      },
    ],
  });

  // Generar el documento de Word
  Packer.toBlob(doc).then((blob) => {
    // Guardar el documento
    saveAs(blob, "cv.docx");
  });
};


export default generateDoc