import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
/*import Home from './components/Home/index';*/
import CocktailList from './components/cocktailList/index';
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
              <Route path="/cocktaillist" component={CocktailList}/>
                <Route exact path="/ingredients" component={Ingredients} />
              {/*<Route exact path="/" component={Home} />
              <Route path="/recette" component={DisplayRecette} /> */}
          </Switch>
      </div>
    );
  }
}

export default App;
