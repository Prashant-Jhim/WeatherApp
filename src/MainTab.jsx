import React,{useState} from 'react'
import Basic from './sub(MainTab)/basic'
import CityName from './sub(MainTab)/cityName'
import {useSelector,useDispatch} from 'react-redux'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

let MainTab = () =>{
    const City = useSelector((state)=>{return state.Top.city})
    const ChangePg = useDispatch()
    let ChangeData = () =>{
        let NewD = {type:'Back',pageNo:0}
        ChangePg(NewD)
    }
    const Day = new Date().getDay()
    const Days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    let Properties = {pressure:0,humidity:0,Wind:0,img:'',city:'',day:'',cond:"S",temp:0}
    const [Main,SetNew] = useState(Properties)
    let Data = async () =>{
        console.log(City)
        let Details = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${City}&appid=7e1de6df3e05d8c0640a4bd8cc8c803c`)
        var result = await Details.json()
        const Temp = Math.round(result.main.temp - 273.15)
        var New = {pressure:result.main.pressure,temp:Temp,humidity:result.main.humidity,Wind:result.wind.speed,img:result.weather[0].icon,day:Days[Day],cond:result.weather[0].main,city:result.name}
        SetNew(New)
    }
    Data()
    
    

    return(
        <div id = 'MainTab'>
        <button id = 'BootButton' className = 'btn btn-primary' onClick = {ChangeData}>Back</button>
        <Basic temp={Main.temp} pressure = {Main.pressure} humidity = {Main.humidity} Wind = {Main.Wind} img= {`http://openweathermap.org/img/wn/${Main.img}@2x.png`}/>
        <CityName city = {Main.city} day = {Main.day} cond = {Main.cond} />
        </div>
    )
}
export default MainTab