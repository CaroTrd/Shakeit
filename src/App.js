import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navbar/Navigation';
import CocktailList from './components/cocktailList/index';
import Ingredients from './components/PageIngredient/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation />
          <Switch>
            <Route path="/cocktaillist" component={CocktailList} />
            <Route exact path="/ingredients" component={Ingredients} />
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
