import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
/*import Home from './components/Home/index';*/
import cocktailList from './components/cocktailList/index';
/*import BarreDeRecherche from './components/BarreDeRecherche/index';
import Navigation from './components/Navbar/Navigation';
import DisplayRecette from './components/Recette/DisplayRecette';*/



class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Navigation />*/}
        {/*<BarreDeRecherche/>*/}
          <Switch>
            {/*<Route exact path="/" component={Home} />*/}
              <Route path="/cocktaillist" component={cocktailList}/>
          </Switch>

      </div>
    );
  }
}

export default App;
