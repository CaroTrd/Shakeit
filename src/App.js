import React, { Component } from 'react';
import './App.css';
import Recette from './components/Recette/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Recette />
        </header>
      </div>
    );
  }
}

export default App;
