import React, { Component } from 'react';
import BarreDeRecherche from '../BarreDeRecherche/index';

import './index.css';

//import searchBarre


class PageIngredient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredientList: []
        }
    }

    getIngredientsList(list) {
        this.setState(
            { ingredientList: list }
        )
    }

    render() {
        const ingredients = this.state.ingredientList.map((elem, index) => (
            <li className="ingredient" key={index}>
                <div className="ingredient-container">
                    <p className="image-container">
                        <img className="image" border="0" src={'https://www.thecocktaildb.com/images/ingredients/' + elem.strIngredient1 + '.png'} alt="" />
                    </p>
                    <div className="ingredient-content">
                        <p className="ingredient-name">{elem.strIngredient1}</p>
                        <button className="cta">Cocktails</button>
                    </div>
                </div>

            </li>
        ))
        return (
            <div className="wraper">
                <div className="page">
                    <h1 className="page-title">SEARCH YOUR INGREDIENT HERE</h1>
                    <BarreDeRecherche callback={(list) => this.getIngredientsList(list)} type="ingredient" />
                    <ul className="ingredient-list">
                        {ingredients}
                    </ul>
                </div>
            </div>
        )

        //<SearchBarre callback={()=> this.getIngredientsList} /> -->
    }
}
export default PageIngredient