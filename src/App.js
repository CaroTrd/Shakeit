import React, { Component } from 'react';
import Recette from './components/Recette/index';
import { withCookies, Cookies } from 'react-cookie';

import './App.css';



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
        <Recette />
      </div>
    );
  }
}

export default withCookies(App);
