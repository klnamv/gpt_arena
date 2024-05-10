import './App.css';
import React, { useState } from 'react';
import MainPage from './components/MainPage';
import GptArena from './components/GptArena';


function App() {
  const [tryIt, setTryIt] = useState(false);

  const startBattle = () => {
    setTryIt(true);
  };

  return (
    <div className="App">
     {!tryIt ? (
        <MainPage onStart={startBattle} />
      ) : (
        <GptArena />
      )}
      <footer>
      <a href='https://github.com/Ravindra2711'>
        Made randomly by @ravi ✨
      </a>
      </footer>
    </div>
  );
}

export default App;
