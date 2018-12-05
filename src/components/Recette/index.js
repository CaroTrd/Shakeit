import React, { Component } from 'react';
import Retourbutton from './retourbutton';
import ConnectSpotify from './ConnectSpotify';
import { withRouter } from "react-router";

import './index.css';

class Recette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cocktailData: {
                ingredients: []
            },
            showPopup: false
        }
    }

    componentDidMount(props) {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.idDrink || 13060}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
          
             let item = data.drinks[0]
          
            const newCocktail = {};
            newCocktail.name = item.strDrink;
            newCocktail.isAlcoholic = item.strAlcoholic;
            newCocktail.glass = item.strGlass;
            newCocktail.instruction = item.strInstructions;
            newCocktail.image = item.strDrinkThumb;
            newCocktail.category = item.strCategory;
            newCocktail.ingredients = this.generateArray('strIngredient', item);
            newCocktail.measures = this.generateArray('strMeasure', item);
    
            this.setState({
                cocktailData: newCocktail
            })
    })
}
    generateArray(str, data) {
        let array = []
        for (let i = 1; i <= 15; i++) {
            if (data[str + i] !== "" && data[str + i] !== null) {
                array.push(data[str + i])
            }
        }        
        return array;
    }

    /*popup*/

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }
    /**/
    render() {
        const ingredietsList = this.state.cocktailData.ingredients.map((elem, i) => (
            <li className="ingredient1" key={i}>
                <dl>
                    <dt>{elem}</dt>
                    <dd>{this.state.cocktailData.measures[i]}</dd>
                </dl>
            </li>
        ))
        return (
            <div className="DisplayRecette">
                <div>
                    <Retourbutton />
                </div>
                <ConnectSpotify />
                <div className={"container " + (this.state.showPopup ? '' : 'closed')}>
                    <div className="imgrecette" style={{ backgroundImage: 'url(' + this.state.cocktailData.image + ')' }}>
                    </div>
                    <div className="flex-container">
                        <div className="content">
                            <h2 className="titre">{this.state.cocktailData.name}</h2>
                            <div className="description">
                                <p className="tag categorie">{this.state.cocktailData.category}</p>
                                <p className="tag alcoholic">{this.state.cocktailData.isAlcoholic}</p>
                            </div>
                            <div>
                                <h3 className="sous-titre">Ingredients</h3>
                                <ul>
                                    {ingredietsList}
                                </ul>
                                <h3 className="sous-titre">Recette</h3>
                                <p className="information">
                                    {this.state.cocktailData.instruction}
                                </p>
                            </div>
                            <div className="button-container">
                                <button className="cta" onClick={() => this.togglePopup()}> {this.state.showPopup ? 'Close' : 'See more'} </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default withRouter(Recette);
