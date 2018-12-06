import React, { Component, Fragment } from "react";
import BarreDeRecherche from '../BarreDeRecherche/index'
import {withRouter} from "react-router";
import { NavLink } from 'react-router-dom';

import './index.css';



class CocktailList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cocktailName: [],
            visible: 6,
        }

    }

    loadMore() {
        this.setState((prev) => {
            return { visible: prev.visible + 6 };
        });
    }


    getCocktailName(cocktail) {

        this.setState(
            { cocktailName: cocktail }
        )
    }
    
    
    componentDidMount() {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.props.match.params.strIngredient1}`;
       if(this.props.match.params.strIngredient1){
        fetch(url)
            .then(response => response.json())
            .then(data =>{
                this.setState({
                    cocktailName: data.drinks
                })
            })
        }
    }
    




    render() {
        const cocktail = this.state.cocktailName.slice(0, this.state.visible).map((elem, index) => (
            <li className="cocktail"
                key={index}>
                <div className="container-cocktail">
                <NavLink to={`/recette/${elem.idDrink}`} >
                    <img src={elem.strDrinkThumb} alt="" />
                    <p className="cocktailDescription">{elem.strDrink}</p>
                </NavLink>
                </div>
            </li>
        ))


        return (
            <Fragment>
                <div className="page">
                    <h1 className="page-title">SEARCH FOR YOUR COCKTAIL HERE</h1>
                    {!this.props.match.params.strIngredient1 &&
                        <BarreDeRecherche callback={(cocktail) => this.getCocktailName(cocktail)} type="cocktail" />
                    }<ul className="cocktail-list">
                        {cocktail}
                    </ul>
                    {this.state.visible < this.state.cocktailName.length &&           
                    <button onClick={() => this.loadMore()} type="button" className="cta load">Load more</button>

                    }
                </div>


            </Fragment>

        );

    }
}

export default withRouter(CocktailList);