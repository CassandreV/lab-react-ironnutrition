import React from 'react'

const CartDisplay=(props)=>{
    return(
        <div>
            <li>{props.menue.name} X {props.menue.quantity}</li>
            <p>{props.menue.calories}</p>
        </div>
    )
}


export default CartDisplay