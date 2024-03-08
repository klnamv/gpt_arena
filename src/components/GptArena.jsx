import React, { useState } from 'react';
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
  const [output, setOutput] = useState('');

  const handleInputChange = e => {
    setInput(e.target.value);
  }

  const handleSubmit = async () => {
    try {
      const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: input }],
        model: "gpt-3.5-turbo",
      });
      setOutput(completion.choices[0].message.content);
    } catch (error) {
      console.error("Error fetching from OpenAI:", error);
    }
  }

  return (
    <div className='main-page'>
      <header>GPT Arena</header>
      <div className='gpt-container'>
        <div className='container'>
          <h2>GPT 3.5 Turbo</h2>
          <p>{output}</p>
        </div>
        <div className='container'>
          <h2>GPT 4</h2>
          <p>Hey!</p>
        </div>
    </div>
      <div>
        <div className='message-chat-gpt'>
          <input type='text' value={input} onChange={handleInputChange} placeholder='Message ChatGPT...' />
          <img src={button} onClick={handleSubmit} className='send' alt='send'/>
        </div>
      </div>
    </div>
  )
}

export default GptArena;
