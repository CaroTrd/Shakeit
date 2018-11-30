import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
/*import Home from './components/Home/index';*/
import Cocktail from './components/cocktailList/index';
import Ingredients from './components/PageIngredient/index';
/*import BarreDeRecherche from './components/BarreDeRecherche/index';
import Navigation from './components/Navbar/Navigation';
import DisplayRecette from './components/Recette/DisplayRecette';*/
//import Home from './components/Home/index';

class App extends Component {
  render() {
    return (
      <div className="App">

        {/*<Navigation />*/}
          <Switch>
            {/*<Route exact path="/" component={Home} />*/}
            <Route exact path="/ingredients" component={Ingredients} />
              <Route path="/cocktail" component={Cocktail}/>
              {/*<Route path="/recette" component={DisplayRecette} /> */}
          </Switch>
      </div>
    );
  }
}

export default App;
