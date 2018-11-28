import React, { Component } from 'react';
import Recette from './components/Recette/index';

import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Recette />
      </div>
    );
  }
}

export default App;
