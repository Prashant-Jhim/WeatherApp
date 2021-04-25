import logo from './logo.svg';
import './App.css';
import MainTab from './MainTab';
import DownTab from './DownTab';
import {useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {useDispatch,useSelector} from 'react-redux'
function App() {
  var Page =useSelector(state => state.BackPage.pageNo)
  var dispatch = useDispatch()
  const [No, setNo] = useState(0)
  let Clicked = (event) =>{
    if (event.keyCode === 13){
      event.preventDefault()
      document.getElementById("myBtn").click();
    }
  }
  let Change = () =>{
    var Data = document.getElementById('inputData').value 
    if (Data != ''){
      console.log(Page)
      let NewD = {type:'Back',pageNo:1}
      dispatch(NewD)
      let New = {type:'City',city:Data}
      dispatch(New)
      setNo(1)
    }
  }
  if (No == 0 || Page == 0){
    return(
      <div id = 'Input'>
      <input id = 'inputData' type = 'text' placeholder = 'Enter The City Name' onKeyUp={Clicked}/>
      <button  id = 'myBtn' className = 'btn btn-primary' onClick = {Change}>Search</button>
      </div>
    )
  }
  if (No != 0 ){
    return (
      <div id = 'WeatherApp'>
        <MainTab/>
        <DownTab/>
      </div>
    );
  }
}

export default App;
