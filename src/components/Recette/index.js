import React, { Component } from 'react';
import './index.css';

const margarita = { "idDrink": "13060", "strDrink": "Margarita", "strDrinkES": null, "strDrinkDE": null, "strDrinkFR": null, "strDrinkZH-HANS": null, "strDrinkZH-HANT": null, "strVideo": null, "strCategory": "Ordinary Drink", "strIBA": "Contemporary Classics", "strAlcoholic": "Alcoholic", "strGlass": "Cocktail glass", "strInstructions": "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.", "strInstructionsES": null, "strInstructionsDE": null, "strInstructionsFR": null, "strInstructionsZH-HANS": null, "strInstructionsZH-HANT": null, "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/wpxpvu1439905379.jpg", "strIngredient1": "Tequila", "strIngredient2": "Triple sec", "strIngredient3": "Lime juice", "strIngredient4": "Salt", "strIngredient5": "", "strIngredient6": "", "strIngredient7": "", "strIngredient8": "", "strIngredient9": "", "strIngredient10": "", "strIngredient11": "", "strIngredient12": "", "strIngredient13": "", "strIngredient14": "", "strIngredient15": "", "strMeasure1": "1 1\/2 oz ", "strMeasure2": "1\/2 oz ", "strMeasure3": "1 oz ", "strMeasure4": "", "strMeasure5": "", "strMeasure6": "", "strMeasure7": "", "strMeasure8": "", "strMeasure9": "", "strMeasure10": "", "strMeasure11": "", "strMeasure12": "", "strMeasure13": "", "strMeasure14": "", "strMeasure15": "", "dateModified": "2015-08-18 14:42:59" }
class Recette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cocktailData: {},
            cocktail: {
                name: margarita.strDrink || "",
                isAlcoholic: margarita.strAlcoholic || "",
                glass: margarita.strGlass || "",
                instruction: margarita.strInstructions || "",
                image: margarita.strDrinkThumb || "",
                ingredients: this.generateArray('strIngredient') || [],
                measures: this.generateArray('strMeasure') || []
            }
        }
    }

/*
    componentDidMount() {
        const newCocktail = {};
        this.cocktail.name = margarita.strDrink;
        this.cocktail.isAlcoholic = margarita.strAlcoholic;
        this.cocktail.glass = margarita.strGlass;
        this.cocktail.instruction = margarita.strInstructions;
        this.cocktail.image = margarita.strDrinkThumb;
        this.cocktail.ingredients = this.generateArray('strIngredient');
        this.cocktail.measures = this.generateArray('strMeasure');

        this.setState({
            cocktail: newCocktail
        })
    }

*/
    generateArray(str) {
        let array = []
        for (let i = 1; i <= 15; i++) {
            if (margarita[str + i] !== "") {
                array.push(margarita[str + i])
            }
        }
        return array;
    }


    render() {
        const ingredietsList = this.state.cocktail.ingredients.map((elem, i) => (
            <li className="ingredient" key={i}>
                <dl>
                    <dt>{elem}</dt>
                    <dd>{this.state.cocktail.measures[i]}</dd>
                </dl>
            </li>
        ))
        return (
            <div className="DisplayRecette">
                <div className="container">
                    <div className="imgrecette">
                        <img src={this.state.cocktail.image} alt="picture" />
                    </div>
                    <div className="flex-container">
                        <h2>{this.state.cocktail.name}</h2>
                        <h3>Ingredients</h3>
                        <ul>
                            {ingredietsList}
                        </ul>
                        <h3>Recette</h3>
                        <p>
                            {this.state.cocktail.instruction}
                        </p>

                    </div>
                </div>

            </div>
        );
    }
};

export default Recette;