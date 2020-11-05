import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './Components/FoodBox'
import AddNew from './Components/addNew'
import CartDisplay from './Components/cartDisplay'

class App extends React.Component {
  state = { 
    foods: foods,
    btnClicked: false,
    value: '',
    cart:[],
    totalCalories:0
  }   
  

  addFoodHandler = (food) => {
    this.setState({
      foods: [ ...this.state.foods, food]
    })
  }
  addCartHandler =(item)=> {
    const calo= this.state.totalCalories
    this.setState({
      cart:[...this.state.cart, item],
      totalCalories: calo +item.calories
    })
  }

  /*Fonction HandleChange for value*/
  handleChange = (e) => {
    this.setState({value: e.target.value});
  }
  // handleControlChange = (name) => {

  //   const foodsCopy= this.state.foods;
  //   const foodIndex = foodsCopy.findIndex(el => el.name === name)
  //   foodsCopy[foodIndex].quantity= e.target.value
  //   this.setState({foods: foodsCopy});
  // }
  



  render() {
    const btnClicked = this.state.btnClicked
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
        {/*si boutton clicked? && affiche formulaire : */}
        {btnClicked && <AddNew toto={this.addFoodHandler} />}
        <div className='columns'>
          <div className='column'>
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
              food.name.includes(this.state.value) && <FoodBox food={food} cart={this.addCartHandler} ></FoodBox>
              ))
            : 
            /*Si pas de recherche*/
            this.state.foods.map(food => (
              <FoodBox food={food} cart={this.addCartHandler} ></FoodBox >
              ))
            }
          </div>
          <div className="column">
            <h2 className="subtitle">Today's foods</h2>

            <ul>
              {this.state.cart.map(el=> (
                <CartDisplay menue={el} />
              ))}
            </ul>
            <strong>Total: {this.state.totalCalories}</strong>
          </div>

        </div>
        
      </div>
    );
  }

}

export default App;
