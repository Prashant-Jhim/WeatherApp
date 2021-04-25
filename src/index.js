import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore,combineReducers} from 'redux'
import {Provider} from 'react-redux'

let Citydata = {type : 'City',city:'Not Found'}
let Inital = {type:'Nothing',pageNo:1}
let CityName = (state = Citydata,action) =>{
  switch(action.type){
    case "City":return{
      ...state,
      city:action.city
    }
    default:return state 
  }

}
let Back = (state = Inital,action)=>{
  switch(action.type){
    case "Back":return{
      ...state,
      pageNo: action.pageNo
    }
    default:return state
  }
}
let MainReducers = combineReducers({
  Top : CityName,
  BackPage:Back
})
let store = createStore(MainReducers)

ReactDOM.render(
  <React.StrictMode>
  <Provider store = {store}> <App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
