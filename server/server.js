const { Configuration, OpenAIApi } = require("openai");

exports.handler = async (event) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY, // Asegúrate de configurar esta variable de entorno en tu plataforma serverless
  });
  const openai = new OpenAIApi(configuration);

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003", // Cambia al modelo que desees utilizar
      prompt: "Escribe aquí tu prompt", // Este será el prompt que recibirás del frontend
      max_tokens: 100,
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
