import React from 'react';
import ControlCart from './ControlCart'

const initialState = { 
    name: '',
    calories: '',
    quantity: ''
  }
class FoodBox extends React.Component {
    state ={ initialState,
    }

    handleChange = (event) => {
        let value = event.target.value

        this.setState({
            name: this.props.food.name,
            calories: this.props.food.calories* value,
            quantity: value
        })
    }
    handleFormSubmit = (event) => {
        event.preventDefault() // 

        this.props.cart(this.state)

        this.setState(initialState)
    }
    render() {
        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={this.props.food.image} alt=''/>
                    </figure>
                    </div>
                    <div className="media-content">
                    <div className="content">
                        <p>
                        <strong>{this.props.food.name}</strong> <br />
                        <small>{this.props.food.calories} cal</small>
                        </p>
                    </div>
                    </div>
                    <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                        <input className="input" 
                            type="number" 
                            value={this.state.quantity}  
                            onChange={this.handleChange}/>
                        </div>
                        <ControlCart newCart={this.handleFormSubmit} />
                    </div>
                    </div>
                </article>
            </div>
        )
    }

}

export default FoodBox