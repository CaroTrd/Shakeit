import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

import './index.css';



class Home extends Component {
    constructor (props){
        super(props);
        this.state = {
            isClicked : false,
        }

    }



handleClick = () => {
    this.setState({
       isClicked : !this.state.isClicked 
    })
}

  render() {
    return (
    <div className = "general-background"> 

    <header>  
             <h1 className = "Home-title"> WHAT CAN I SUGGEST YOU TONIGHT?</h1>
       
    </header>
    <section className = "home-boutons">
        <NavLink to="/ingredients"  className="home-button">find an ingredient</NavLink>
        <NavLink to="/Cocktails" className="home-button" >find a cocktail</NavLink>
    </section>
    </div>
    );
  }
}

export default Home;