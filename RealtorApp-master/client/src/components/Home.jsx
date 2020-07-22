import React, { Component } from "react";
import "./style.css"
import 'react-bulma-components/dist/react-bulma-components.min.css';


export default class Home extends Component{

    render(){

        return(
            <div>         
           
 <div >

  <section className="hero is-info is-fullheight">
    <div className="hero-head">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            
              <p>RelatorApp </p>
            
            <span className="navbar-burger burger" data-target="navbarMenu">
              <span />
              <span />
              <span />
            </span>
          </div>
          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-end">
              <span className="navbar-item">
                <a className="button is-white is-outlined" href="#">
                  <span className="icon">
                    <i className="fa fa-home" />
                  </span>
                  <span>Sign-up</span>
                </a>
              </span>
              <span className="navbar-item">
                <a className="button is-white is-outlined" href="#">
                  <span className="icon">
                    <i className="fa fa-superpowers" />
                  </span>
                  <span>Examples</span>
                </a>
              </span>
              <span className="navbar-item">
                <a className="button is-white is-outlined" href="#">
                  <span className="icon">
                    <i className="fa fa-book" />
                  </span>
                  <span>Documentation</span>
                </a>
              </span>
              
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="column is-6 is-offset-3">
          <h1 className="title">
          Log in!
          </h1>
          <h2 className="subtitle">
            This is the best place to start when buying a new house.
          </h2>
          <div className="box">
            <div className="field is-grouped">
              <p className="control is-expanded">
              
                <input className="input" type="text" placeholder="Enter your username" />
                <input className="input" type="password" placeholder="Enter your Password"></input>
              </p>
              <p className="control">
                <a className="button is-info">
                  Log in 
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>         
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
            </div>
        )

    }

}