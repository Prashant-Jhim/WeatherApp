import React from 'react' 


let Basic = (props) =>{
    return (
        <div id = 'basic'>
        <img src= {props.img} alt = ''></img>
        <div id ='pressure'>
        <h3>Temp : {props.temp}</h3>
        <h3>Pressure : {props.pressure}</h3>
        <h3>Humidity : {props.humidity}</h3>
        <h3>Wind : {props.Wind}</h3>
        </div>
        </div>
        
    )
}
export default Basic