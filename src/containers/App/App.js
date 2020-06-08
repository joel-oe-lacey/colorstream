import React from 'react';
import './App.scss';
import ColorForm from '../ColorForm/ColorForm';
import ColorBox from '../../components/ColorBox/ColorBox';

function App() {
  return (
    <div className="App">
      <ColorForm />
      <ColorBox />
      <ColorBox />
      <ColorBox />
    </div>
  );
}

export default App;
