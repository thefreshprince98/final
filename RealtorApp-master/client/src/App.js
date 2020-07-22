import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button } from 'react-bulma-components';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Search from "./components/Search";



export default class App extends Component {
  // constructor(props){
  //   super(props)

  // }


  render(){
  return (
<Router>
    <Switch>

    <Route exact path="/" component={Signup}/> 
    <Route exact path="/login" component={Login}/>
    {/* <Route exact path="/dashboard" component={Dashboard}/> */}
    <Route exact path="/search" component={Search}/>

  </Switch>

</Router>
  

  )}
}