import React, { Component } from 'react';
import './App.scss';
import ColorForm from '../ColorForm/ColorForm';
import ColorCont from '../../components/ColorCont/ColorCont';

export default class App extends Component {
  constructor() {
    super()
    this.state = { color: '' }
  }

  render() {
    return (
      <section className="App">
        <ColorForm />
        <ColorCont />
      </section>
    )
  };
}

