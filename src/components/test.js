import React, { useState } from 'react';

function Test() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = async () => {
    const res = await fetch('/.netlify/functions/tuFuncionServerless', { // Cambia la URL según donde alojes tu función
      method: 'POST',
      body: JSON.stringify({ prompt }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    setResponse(data.choices[0].text);
  };

  return (
    <div>
      <input type="text" value={prompt} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Generar</button>
      <p>Respuesta: {response}</p>
    </div>
  );
}

export default Test;
