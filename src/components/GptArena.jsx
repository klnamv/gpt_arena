import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import OpenAI from "openai";
import '../styles/GptArena.css';

import button from '../assets/button.svg';

const api_key = process.env.REACT_APP_OPENAI_API_KEY;
const openai = new OpenAI({apiKey: api_key, dangerouslyAllowBrowser: true});

const modelMapping = {
  model1: "gpt-3.5-turbo",
  model2: "gpt-4-1106-preview" 
};

const GptArena = () => {
  const [input, setInput] = useState('');
  const [outputGpt, setOutputGpt] = useState({model1: '' , model2: ''})

  const handleInputChange = e => {
    setInput(e.target.value);
  }

  const handleSubmitGpt = async (model) => {
    const actualModelId = modelMapping[model];
    try {
      const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: input }],
        model: actualModelId,
        stream: true,
      });
      for await (const chunk of completion) {
        let content = chunk.choices[0]?.delta?.content;
        console.log(content);
        if (content === undefined) {
          break;
        }
        setOutputGpt(prevOutput => ({
          ...prevOutput,
          [model] : (prevOutput[model] || '') + content
        }));
      }
    } catch (error) {
      console.error("Error fetching from OpenAI:", error);
    }
  }

  const handleCombinedSubmit = () => {
    setOutputGpt({model1: '', model2: ''});
    handleSubmitGpt("model1");
    handleSubmitGpt("model2");
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCombinedSubmit();
    }
  };

  return (
    <div className="main-page">
      <header>GPT Arena</header>
      <div className="gpt-container">
       
       <div className="container">
          
          <h2>GPT 3.5 Turbo</h2>
          <div className="markdown-content">
            <ReactMarkdown>{outputGpt.model1}</ReactMarkdown>
          </div>
  </div>
        
    <div className='container'>
          <h2>GPT 4</h2>
          <div className="markdown-content">
            <ReactMarkdown>{outputGpt.model2}</ReactMarkdown>
          </div>
        </div>
      </div>
      <div>
        <div className="message-chat-gpt">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            placeholder="Message ChatGPT..."
          />
          <img
            src={button}
            onClick={handleCombinedSubmit}
            className="send"
            alt="send"
          />
        </div>
      </div>
    </div>
  );
}

export default GptArena;
