import React, { Component } from "react";
import "./index.css";

class BarreDeRcherche extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredient: "",
      ingredientList:[],
      coktailList: [],
     
    };
  }

  getCoktailList(ev) {
    this.setState({
      ingredient: ev.target.value,
      
     
    });
    
  }
    componentDidMount(){
    fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
    ).then(response => response.json())
      .then(data => {
        this.setState({
          ingredientList : data.drinks
        })
      
    } )
  }

 

  render() {
    let displayIngredient = this.state.ingredientList.filter(elem=> 
    elem.strIngredient1.toLowerCase().includes(this.state.ingredient.toLowerCase()))
    .map((elem, i)=> {
        return (
            <li key={i}>{elem.strIngredient1}</li>
        )
    })
    
    return (
      <div>
        <div className="search-container" >
        <input
          type="text"
          className="search-bar"
          value={this.state.ingredient}
          onChange={ev => this.getCoktailList(ev)}
          placeholder="What can I serve you ?"
        />
        <img
          className="search-icon"
          src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
          alt=""
        />
        </div>

      </div>
    );
  }
}

export default BarreDeRcherche;