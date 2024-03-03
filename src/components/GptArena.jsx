import React from 'react';
import OpenAI from "openai";

const api_key = process.env.REACT_APP_OPENAI_API_KEY;
const openai = new OpenAI({apiKey: api_key, dangerouslyAllowBrowser: true});


async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });



  return(completion.choices[0].message.content);
}

// main();
let s = await main()
console.log(s);

const GptArena = () => {
    return (
        <div>
            {s}
            <div className='message-chat-gpt'></div>
        </div>
    )
}

export default GptArena;
