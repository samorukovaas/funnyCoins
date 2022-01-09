import React from 'react';
import './App.css';
import Bottles from './Components/Bottles/Bottles';
import Coins from './Components/Coins/Coins';
import ButtonClear from './Components/Buttons/ButtonClear';
import ButtonDone from './Components/Buttons/ButtonDone';
import ButtonSubmit from './Components/Buttons/ButtonSubmit';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='flex'>
          <Coins />
          <Bottles />
        </div>
        <div className='buttonsGroup'>
          <ButtonClear />
          <ButtonDone />
        </div>
      </div>
      <ButtonSubmit />
    </div>
  );
}

export default App;
