import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import '../styles/GptArena.css';

import button from '../assets/button.svg';

const modelMapping = {
  model1: "gpt-3.5-turbo",
  model2: "gpt-4-1106-preview",
  huggingFaceModel: {
    name: "Hugging Face Model",
    endpoint: "https://api-inference.huggingface.co/models/microsoft/Phi-3-mini-4k-instruct",
    authorizationToken: "Bearer {Api token} "
  }
};

const allModels = [
  { id: 'model1', name: 'GPT 3.5 Turbo' },
  { id: 'model2', name: 'GPT 4' },
  { id: 'huggingFaceModel', name: 'Hugging Face Model' }
];

const GptArena = () => {
  const [input, setInput] = useState('');
  const [selectedModels, setSelectedModels] = useState(['model1', 'model2']);
  const [outputGpt, setOutputGpt] = useState({
    model1: '',
    model2: '',
    huggingFaceModel: ''
  });
  const [comparisonMode, setComparisonMode] = useState(false);

  const handleInputChange = e => {
    setInput(e.target.value);
  }

  const handleSubmitGpt = async (model, modelId) => {
    try {
      const response = await fetch(modelId.endpoint, {
        headers: { 
          Authorization: modelId.authorizationToken,
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ inputs: input })
      });
      const result = await response.json();
      const generatedText = result[0]?.generated_text || '';
      setOutputGpt(prevOutput => ({
        ...prevOutput,
        [model]: generatedText
      }));
    } catch (error) {
      console.error("Error fetching from Hugging Face:", error);
    }
  }

  const handleModelChange = (e, index) => {
    const updatedModels = [...selectedModels];
    updatedModels[index] = e.target.value;
    setSelectedModels(updatedModels);
  }

  const handleToggleMode = () => {
  if (!comparisonMode) {
    setSelectedModels(['model1', 'model2']);
    setOutputGpt({ model1: '', model2: '', huggingFaceModel: '' });
  } else {
    setSelectedModels(['model1']);
    setOutputGpt({ model1: '', model2: '', huggingFaceModel: '' });
  }
  setComparisonMode(!comparisonMode);
}


  const handleCombinedSubmit = () => {
    selectedModels.forEach((model, index) => {
      handleSubmitGpt(model, modelMapping[model]);
    });
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCombinedSubmit();
    }
  };

  return (
    <div className='main-page'>
      <header>GPT Arena</header>
      <div className='model-selection'>
        <label htmlFor="models">Select Models:</label>
        {comparisonMode ? (
          selectedModels.map((modelId, index) => (
            <select key={index} id={modelId} value={modelId} onChange={(e) => handleModelChange(e, index)}>
              {allModels.map((model) => (
                <option key={model.id} value={model.id}>{model.name}</option>
              ))}
            </select>
          ))
        ) : (
          <select id="models" value={selectedModels[0]} onChange={(e) => setSelectedModels([e.target.value])}>
            {allModels.map((model) => (
              <option key={model.id} value={model.id}>{model.name}</option>
            ))}
          </select>
        )}
      </div>
      <div className='toggle'>
        <label htmlFor="comparisonToggle">Comparison Mode:</label>
        <input type="checkbox" id="comparisonToggle" checked={comparisonMode} onChange={handleToggleMode} />
      </div>
      <div className='gpt-container'>
        {comparisonMode ? (
          selectedModels.map((modelId) => (
            <div key={modelId} className='container'>
              <h2>{allModels.find(model => model.id === modelId).name}</h2>
              <div className="markdown-content">
                <ReactMarkdown>{outputGpt[modelId]}</ReactMarkdown>
              </div>
            </div>
          ))
        ) : (
          <div className='container'>
            <h2>{allModels.find(model => model.id === selectedModels[0]).name}</h2>
            <div className="markdown-content">
              <ReactMarkdown>{outputGpt[selectedModels[0]]}</ReactMarkdown>
            </div>
          </div>
        )}
      </div>
      <div>
        <div className='message-chat-gpt'>
          <input type='text' value={input} onChange={handleInputChange} onKeyDown={handleKeyPress} placeholder='Message ChatGPT...' />
          <img src={button} onClick={handleCombinedSubmit} className='send' alt='send' />
        </div>
      </div>
    </div>
  )
}

export default GptArena;
