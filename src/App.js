import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './Components/FoodBox'
import AddNew from './Components/addNew'

class App extends React.Component {
  state = { 
    foods: foods,
    btnClicked: false,
    value: ''
  }

  // showForm =(event)=>{
  //   var newBox = document.querySelector('.newBox')
    

  addFoodHandler = (food) => {
    // TODO

    this.setState({
      foods: [ ...this.state.foods, food]
    })
  }

  /*Fonction HandleChange for value*/
  handleChange = (e) => {
    this.setState({value: e.target.value});
  }

  render() {
    const btnClicked = this.state.btnClicked
    let filteredFood = [];

    return (
      <div className="App">
        <h1>IronNutrition</h1>
        <div className="searchBar">
          <input
              type="text"
              class="input search-bar"
              name="search"
              placeholder="Search"
              value={this.state.value}
              onChange={this.handleChange}
          />
        </div>
        {/* this.setState({}) */}
        <button onClick={() => this.setState({btnClicked: true})}>Add New</button>
        {/*si boutton clicced? && affiche formulaire : */}
        {btnClicked && <AddNew toto={this.addFoodHandler} />}
        
        {/* Si search 
              //si value.length > 0
              condition ? true : false
                alors affiche ce qui correspond au search
                  // convertir le mot en tableau
                  // chercher si le tableau contient la "lettre" recherchée
                sinon affiche tout */}

        {this.state.value.length > 0 
        ?
         /*Si recherche*/
         this.state.foods.map(food => (
          food.name.includes(this.state.value) && <FoodBox name={food.name} calories={food.calories} image={food.image} quantity={food.quantity}></FoodBox>
          ))
         : 
         /*Si pas de recherche*/
         this.state.foods.map(food => (
          <FoodBox name={food.name} calories={food.calories} image={food.image} quantity={food.quantity}></FoodBox>
          ))
        }


        
      </div>
    );
  }

}

export default App;
