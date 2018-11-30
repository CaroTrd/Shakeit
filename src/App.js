import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navbar/Navigation';
/*import Home from './components/Home/index';*/
import Cocktail from './components/cocktailList/index';
import Ingredients from './components/PageIngredient/index';
/*import BarreDeRecherche from './components/BarreDeRecherche/index';
/*import Recette from './components/Recette/index';*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Switch>
          {/*<Route exact path="/" component={Home} />*/}
          <Route path="/cocktail" component={Cocktail} />
          <Route exact path="/ingredients" component={Ingredients} />
          {/*<Route path="/recette" component={Recette} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
