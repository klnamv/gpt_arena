import React, { useState, useEffect } from 'react';
import OpenAI from "openai";
import '../styles/GptArena.css';

import button from '../assets/button.svg';

const api_key = process.env.REACT_APP_OPENAI_API_KEY;
const openai = new OpenAI({apiKey: api_key, dangerouslyAllowBrowser: true});

// async function main() {
//   const completion = await openai.chat.completions.create({
//     messages: [{ role: "system", content: "You are a helpful assistant." }],
//     model: "gpt-3.5-turbo",
//   });



//   return(completion.choices[0].message.content);
// }

// main();
// let s = await main()
// console.log(s);

const GptArena = () => {
  const [input, setInput] = useState('');
  const [outputGpt3, setOutputGpt3] = useState('');
  const [outputGpt4, setOutputGpt4] = useState('');
  const [displayedOutput3, setDisplayedOutput3] = useState('');
  const [displayedOutput4, setDisplayedOutput4] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  
  useEffect(() => {
    if (outputGpt3 !== '') {
      const words = outputGpt3.split(' ');
      if (wordIndex < words.length) {
        const newDisplay = words.slice(0, wordIndex + 1).join(' ');
        setDisplayedOutput3(newDisplay);

        const timeoutId = setTimeout(() => {
          setWordIndex(wordIndex + 1);
        }, 100);

        return () => clearTimeout(timeoutId);
      }
    }
  }, [outputGpt3, wordIndex]);

  useEffect(() => {
    if (outputGpt4 !== '') {
      const words = outputGpt4.split(' ');
      if (wordIndex < words.length) {
        const newDisplay = words.slice(0, wordIndex + 1).join(' ');
        setDisplayedOutput4(newDisplay);

        const timeoutId = setTimeout(() => {
          setWordIndex(wordIndex + 1);
        }, 100);

        return () => clearTimeout(timeoutId);
      }
    }
  }, [outputGpt4, wordIndex]);

  const handleInputChange = e => {
    setInput(e.target.value);
  }

  const handleSubmitGpt3 = async () => {
    try {
      const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: input }],
        model: "gpt-3.5-turbo",
      });
      setOutputGpt3(completion.choices[0].message.content);
      setWordIndex(0);
    } catch (error) {
      console.error("Error fetching from OpenAI:", error);
    }
  }

  const handleSubmitGpt4 = async () => {
    try {
      const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: input }],
        model: "gpt-3.5-turbo-1106",
      });
      setOutputGpt4(completion.choices[0].message.content);
      setWordIndex(0);
    } catch (error) {
      console.error("Error fetching from OpenAI:", error);
    }
  }

  const handleCombinedSubmit = () => {
    handleSubmitGpt3();
    handleSubmitGpt4();
  }

  return (
    <div className='main-page'>
      <header>GPT Arena</header>
      <div className='gpt-container'>
        <div className='container'>
          <h2>GPT 3.5 Turbo</h2>
          <p>{displayedOutput3}</p>
        </div>
        <div className='container'>
          <h2>GPT 4</h2>
          <p>{displayedOutput4}</p>
        </div>
    </div>
      <div>
        <div className='message-chat-gpt'>
          <input type='text' value={input} onChange={handleInputChange} placeholder='Message ChatGPT...' />
          <img src={button} onClick={handleCombinedSubmit} className='send' alt='send'/>
        </div>
      </div>
    </div>
  )
}

export default GptArena;
