import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

import './index.css';
import logo from "./logo.svg"



class Home extends Component {
    constructor (props){
        super(props);
        this.state = {
            isClicked : false,
            working: false
        }
    }



handleClick(){
    this.setState({
       isClicked : !this.state.isClicked 
    })
}

  render() {
    return (
    <div className = "homee"> 

    <header>
        <div>
             <img src={logo} className="logo" className={this.state.working ? '' : 'logos'} alt="logo" />
        </div>  
             <h1 className = "HomeTitle"> WHAT CAN I SUGGEST YOU TONIGHT?</h1>
       
    </header>


    <section className = "homeBouton">

        <div className={this.state.isClicked ? 'Open_page' : 'page'}>
        <NavLink to="/ingredients" />
        <button className = "BoutonIng" isClicked ={this.state.isClicked} onClick={this.handleClick}>Pick an ingredient</button>
        </div>

        <div className={this.state.isClicked ? 'Open_page' : 'page'}>
        <NavLink to="/Cocktails" />
        <button className = "BoutonCock" isClicked ={this.state.isClicked} onClick={this.handleClick}>Pick a cocktail</button>
        </div>
    </section>
    </div>
    );
  }
}

export default Home;