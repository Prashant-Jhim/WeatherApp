import React from 'react' 


let CityName = (props) =>{
    return (
        <div id = 'CityName'>
        <h2>{props.city}</h2>
        <h3>{props.day}</h3>
        <h4>{props.cond}</h4>
        </div>
    )
}
export default CityName