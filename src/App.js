import React, { Component } from 'react';
import { withCookies, Cookies } from 'react-cookie';

import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navbar/Navigation';
/*import Home from './components/Home/index';*/
import CocktailList from './components/cocktailList/index';
import Ingredients from './components/PageIngredient/index';
/*import BarreDeRecherche from './components/BarreDeRecherche/index';*/
import Recette from './components/Recette/index';

class App extends Component {
  constructor(props){
    super(props);
    this.cookies = new Cookies();
  
  }

  componentDidMount() {
   /* const config = {
      method :"post",
      header:{
        'Content-Type': "application/x-www-form-urlencoded"
      },
      data:"refresh_token=NgCXRK...MzYjw",

    }
    const trouducul= "https://accounts.spotify.com/api/refresh" ;
    fetch(trouducul,config)
    .then(response => response.json())
    .then(data => {
      console.log('data', data)
     this.cookies.set('access', data)
    })*/
  }

  render() {
  
    return (
      
      <div className="App">
      <Navigation />
          <Switch>
            {/*<Route exact path="/" component={Home} />*/}
              <Route exact path="/cocktaillist" component={CocktailList}/>
                <Route  path="/ingredients" component={Ingredients} />
              <Route path="/cocktaillist/recette/:strId" component={Recette}/>
          </Switch>
         
      </div>
    );
  }
}

export default withCookies(App);
