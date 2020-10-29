import React from 'react';

const initialState = { 
    name: '',
    image: '',
    calories: '',
    quantity: ''
  }
  
class AddNew extends React.Component {
    state ={ initialState,
            display: 'block'
        }

    handleChange = (event) => {
        let value = event.target.value
        const name = event.target.name

        this.setState({
        [name]: value
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault() // 

        this.props.toto(this.state)

        this.setState(initialState)
    }

    

    render() {
        return (
            <div style={{display:this.state.display}}  className="newBox">
                <form onSubmit={this.handleFormSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
            
                    <label>Calories:</label>
                    <input type="text" name="calories" value={this.state.calories} onChange={this.handleChange} />
            
                    <label>Image:</label>
                    <input type="text" name="image" value={this.state.image} onChange={this.handleChange} />
            
                    <label>Quantity:</label>
                    <input type="text" name="quantity" value={this.state.quantity} onChange={this.handleChange} />
                    
                    <button onClick={() => this.setState({display: 'none'})}>Submit</button>
                </form>
            </div>
        )
    }

}




export default AddNew