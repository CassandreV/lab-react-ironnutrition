import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './Components/FoodBox'

class App extends React.Component {
  state = { foods: foods }

  render() {
    return (
      <div className="App">
        <h1>IronNutrition</h1>
        <div classNam="searchBar"><input
              type="text"
              class="input search-bar"
              name="search"
              placeholder="Search"
              value=""
            />
        </div>
  
        {this.state.foods.map(food => (
          <FoodBox name={food.name} calories={food.calories} image={food.image} quantity={food.quantity}></FoodBox>
        ))}
        
      </div>
    );
  }

}

export default App;
