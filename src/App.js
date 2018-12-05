import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
=======
import Recette from './components/Recette/index';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navbar/Navigation';
>>>>>>> fd1be4fef00cb9422e60997315045825a48c8915
/*import Home from './components/Home/index';*/
import CocktailList from './components/cocktailList/index';
import Ingredients from './components/PageIngredient/index';
/*import BarreDeRecherche from './components/BarreDeRecherche/index';
import Recette from './components/Recette/index';*/

class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        {/*<Navigation />*/}
          <Switch>
            {/*<Route exact path="/" component={Home} />*/}
                <Route exact path="/cocktaillist/" component={CocktailList}/>
                <Route path="/cocktaillist/:strIngredient1" component={CocktailList}/>
                <Route path="/ingredients" component={Ingredients} />
              {/*<Route exact path="/" component={Home} />
              <Route path="/recette" component={DisplayRecette} /> */}
=======
      <Navigation />
          <Switch>
            {/*<Route exact path="/" component={Home} />*/}
              <Route exact path="/cocktaillist" component={CocktailList}/>
                <Route  path="/ingredients" component={Ingredients} />
              <Route path="/cocktaillist/recette/:strId" component={Recette}/>
>>>>>>> fd1be4fef00cb9422e60997315045825a48c8915
          </Switch>
         
      </div>
    );
  }
}

export default App;
