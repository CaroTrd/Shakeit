import React, { Component } from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navbar/Navigation';
import Home from './components/Home/index';
import CocktailList from './components/cocktailList/index';
import Ingredients from './components/PageIngredient/index';

import Popup from'./components/Popup'

import Recette from './components/Recette/index';

class App extends Component {
  
  
    render() {
       return (
     
      <div className="App">

      <Popup/>
      <Navigation />
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/cocktailList" component={CocktailList}/>
              <Route path="/cocktaillist/:strIngredient1" component={CocktailList}/>
              <Route  path="/ingredients" component={Ingredients} />
              <Route path="/cocktaillist/recette/:idDrink" component={Recette}/>
          </Switch>
      </div>
    );
  }
}

export default App;
