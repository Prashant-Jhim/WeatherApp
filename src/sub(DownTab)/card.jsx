import React from 'react' 
let Card = (props) =>{
    var Temp = Math.round(props.temp - 273.15)
    return (
        <div id = 'card'>
        <h4 id = 'cardtext'>{props.day}</h4>
        <img src = {`http://openweathermap.org/img/wn/${props.img}@2x.png`}></img>
        <h2>{Temp}</h2>
        </div>

    )
}
export default Card 