import React from 'react';

const ControlCart= (props)=>{
    return(
<div className="control">
    <button className="button is-info" onClick={props.newCart} >
        +
    </button>
</div>
)}
export default ControlCart