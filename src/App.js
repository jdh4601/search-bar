import { React, useState } from 'react';
import TextField from './components/TextField';
import List from './components/List';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');

  const inputHandler = event => {
    let lower = event.target.value.toLowerCase();
    setInputText(lower);
    console.log(lower); // 실시간 text 입력값
  };

  return (
    <>
      <div className="main">
        <h1>React Search</h1>
        <div className="search">
          <TextField inputHandler={inputHandler} />
        </div>
        <List inputText={inputText} />
      </div>
    </>
  );
}

export default App;
