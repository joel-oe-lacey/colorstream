import React from 'react';
import './App.scss';
import ColorForm from '../ColorForm/ColorForm';
import ColorBox from '../../components/ColorBox/ColorBox';

function App() {
  return (
    <section className="App">
      <ColorForm />
      <section className="App-ColorDisp">
        <ColorBox />
        <ColorBox />
        <ColorBox />
        <ColorBox />
      </section>
    </section>
  );
}

export default App;
