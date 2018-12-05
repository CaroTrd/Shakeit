import React, { Component } from "react";
import "./index.css";

class BarreDeRcherche extends Component {
  constructor(props) {
    super(props);
    this.state = {
     dataList: [],
     item:"",
     
    }
    this.getDataList = this.getDataList.bind(this);
  }
  

 
    
    componentDidMount(){
      const url='https://www.thecocktaildb.com/api/json/v1/1/';
      let param = this.props.type === "ingredient" ? "list.php?i=list" : "filter.php?c=Cocktail" ;
      fetch (url + param)
      .then(response => response.json())
      .then(data => {
        this.setState({
         dataList : data.drinks
        })      
      })
  }
    componentDidUpdate(prevProps, prevState){
     let filteredList = []
     let propsName = this.props.type === "ingredient" ? 'strIngredient1' :  'strDrink' ;
     if(prevState.item !== this.state.item){
        filteredList = this.state.dataList.filter(elem =>{
          return elem[propsName].toLowerCase().includes(this.state.item.toLowerCase())
        })

        this.props.callback(filteredList);
      }
    }
      
   getDataList(ev){
     this.setState({
        item : ev.target.value
     })
   } 

 

  render() {

    return (
      
    <div className="search-container" >
        <input
          type="text"
          className="search-bar"
          value={this.state.item}
          onChange={ev => this.getDataList(ev)}
          placeholder="What can I serve you ?"
        />
        <img
          className="search-icon"
          src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
          alt=""
        />
  </div>

    
    );
  }
}

export default BarreDeRcherche;