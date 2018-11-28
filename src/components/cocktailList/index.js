import React, { Component, Fragment } from "react";
import BarreDeRecherche from '../BarreDeRecherche/index'

import './index.css';



class CocktailList extends Component {
    
    constructor (props){
        super(props);
        this.state = {
            cocktailName : [],
            visible: 6,
        }
        
    }

    loadMore() {
        this.setState((prev) => {
          return {visible: prev.visible + 6};
        });
      }

    getCocktailName(cocktail) {

        this.setState(
            {cocktailName : cocktail}
        )
    }

    
  
    render() {
        const cocktail = this.state.cocktailName.slice(0, this.state.visible).map((elem, index) => (
            <li className = "cocktail"
            key={index}>
                <div className="container-cocktail">
                    <img src={elem.strDrinkThumb} alt="" />
                    <p className = "cocktailDescription">{elem.strDrink}</p>
                </div>
            </li>
        ))

        
    return (
        <Fragment>
            <div className="page">
                <h1 className = "page-title">SEARCH FOR YOUR COCKTAIL HERE</h1> 
                <BarreDeRecherche callback ={(cocktail) => this.getCocktailName(cocktail)} type="cocktail"/>
                    <ul className="cocktail-list"> 
                        {cocktail}
                    </ul>
                    {this.state.visible < this.state.cocktailName.length &&
             <button onClick={() => this.laodMore()} type="button" className="cta">Load more</button>
            }
            </div>
           

        </Fragment>
        
    );
   
  }
}

export default CocktailList;