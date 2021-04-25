import React,{useState} from 'react' 
import Card from './sub(DownTab)/card'
import {useSelector} from 'react-redux'

let DownTab = () =>{
    const Day = new Date().getDay()
    const Days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    const [Arr,After] = useState([])
    const City = useSelector((state)=>{return state.Top.city})
    let Fetching = async () =>{
        console.log(City)
        let Data = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${City}&appid=9574d8202ead67cb6e1b0a9570d13885`)
        return Data.json()
    }
    console.log(Day)
    Fetching().then((result)=>{
        var Arrs = []
        var Numbers = [7,16,22,30] 
        for (let i of Numbers){
            Arrs.push(result.list[i])
        }
        console.log(Arrs)
        After(Arrs)
    })
    const Print = () =>{
        if (Arr.length == 0){
            <h1>Not Found</h1>
        }
        if (Arr.length != 0){
            return(
                <React.Fragment>
                <Card img = {Arr[0].weather[0].icon} day ={Days[Day+1]} temp = {Arr[0].main.temp}/>
                <Card img = {Arr[1].weather[0].icon} day ={Days[Day+2]} temp = {Arr[1].main.temp}/>
                <Card img = {Arr[2].weather[0].icon} day ={Days[Day+3]} temp = {Arr[2].main.temp}/>
                <Card img = {Arr[3].weather[0].icon} day ={Days[Day+4]} temp = {Arr[3].main.temp}/>
                </React.Fragment>
            )
        }
    }

    return(
        <div id = "DownTab">
        {Print()}
        
        </div>
    )
}
export default DownTab