import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './Components/FoodBox'
import AddNew from './Components/addNew'

class App extends React.Component {
  state = { foods: foods ,
            btnClicked: false
  }

  // showForm =(event)=>{
  //   var newBox = document.querySelector('.newBox')
    

  addFoodHandler = (food) => {
    // TODO

    this.setState({
      foods: [ ...this.state.foods, food]
    })
  }

  render() {
    const btnClicked = this.state.btnClicked
    return (
      <div className="App">
        <h1>IronNutrition</h1>
        <div className="searchBar"><input
              type="text"
              class="input search-bar"
              name="search"
              placeholder="Search"
              value=""
            />
        </div>
        {/* this.setState({}) */}
        <button onClick={() => this.setState({btnClicked: true})}>Add New</button>
        {/*si boutton clicced? && affiche formulaire : */}
        {btnClicked && <AddNew toto={this.addFoodHandler} />}
        

        {this.state.foods.map(food => (
          <FoodBox name={food.name} calories={food.calories} image={food.image} quantity={food.quantity}></FoodBox>
        ))}
        
      </div>
    );
  }

}

export default App;
