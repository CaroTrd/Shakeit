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
             <h1 className = "home-title"> WHAT CAN I SUGGEST YOU TONIGHT?</h1>
       
    </header>
    <section className = "home-boutons">
        <NavLink to="/ingredients"  className="home-button cta">find an ingredient</NavLink>
        <NavLink to="/cocktailList" className="home-button cta" >find a cocktail</NavLink>
    </section>
    </div>
    );
  }
}

export default Home;