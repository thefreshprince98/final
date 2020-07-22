import React, { Component } from "react";
import axios from "axios";
import "./style.css"
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { withRouter, Link, useHistory as history } from "react-router-dom";


class Signup extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      email: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('sign-up handleSubmit, username: ')
    //const {email, username, password} = this.state; 
    //console.log(this.state)
    //request to server to add a new username/password
    axios.post('/user/signup', { username: this.state.username, password: this.state.password, email: this.state.email  },
    ).then(response => {
      console.log(response)
      if (!response.data.errmsg) {
        console.log('successful signup')
        this.setState({ //redirect to login page
          redirectTo: '/login'
        })
      } else {
        console.log('username already taken')
      }
    }).catch(error => {
      console.log('signup error: ')
      console.log(error)

    });
  }
  redirectLog = () => {
    this.props.history.push("/login");
  }

  render() {
    return (
      <div>
        {/* home */}
        <div >

          <section className="hero is-info is-fullheight">
            <div className="hero-head">
              <nav className="navbar">
                <div className="container">
                  <div className="navbar-brand">

                    <p className="leadTitle">Neighborhood Realtor</p>

                    <span className="navbar-burger burger" data-target="navbarMenu">
                      <span />
                      <span />
                      <span />
                    </span>
                  </div>
                  <div id="navbarMenu" className="navbar-menu">
                    <div className="navbar-end">

                    </div>
                  </div>
                </div>
              </nav>
            </div>
            <div className="hero-body">
              <div className="container has-text-centered">
                <div className="column is-6 is-offset-3">
                  <h1 className="title">
                    Sign up!
          </h1>
                  <h2 className="subtitle">
                    This is the best place to start when buying a new house.
          </h2>
                  <div className="box">
                    <div className="field is-grouped">
                      <div className="control is-expanded">
                        <input className="input is-danger" type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} />
                        <input className="input is-success" type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
                        <input name="password" className="input is-success" type="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
                        <div className="field">
                          <div className="control">
                            <label className="radio">
                              <input type="radio" name="question" />Looking to Sell
                        </label>
                            <label className="radio">
                              <input type="radio" name="question" />Looking to Buy
                        </label>
                          </div>
                        </div>
                      </div>
                      <div className="control">
                        <button className="button is-link" onClick={(event) => {
                          this.handleSubmit(event);
                          this.redirectLog(event);
                        }}>Submit</button>
                        <div className="control">
                          <Link to="/login">
                            <button className="button is-link is-light" >Click Here if you have already signed up!</button>
                          </Link>
                        </div>

                      </div>
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

export default withRouter(Signup);