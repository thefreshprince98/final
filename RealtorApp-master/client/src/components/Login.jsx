import React, { Component } from "react";
import axios from 'axios';
import "./style.css"
import 'react-bulma-components/dist/react-bulma-components.min.css';


export default class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleSubimt = async e => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/user/login', this.state);
      this.props.history.push("/search");
    } catch (err) {
      console.log('error during login==>>', err);
    }
  }

  handleInputChange = (event) => this.setState({ [event.target.name]: event.target.value });

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <div>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Login - Free Bulma template</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
          {/* <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet"> */}
          <link href="https://fonts.googleapis.com/css?family=Questrial&display=swap" rel="stylesheet" />

          <link rel="stylesheet" href="https://unpkg.com/bulma@0.8.2/css/bulma.min.css" />
          <link rel="stylesheet" type="text/css" href="../css/login.css" />
          <section className="hero is-success is-fullheight">
            <div className="hero-body">
              <div className="container has-text-centered">
                <div className="column is-4 is-offset-4">
                  <h3 className="title has-text-black">Login</h3>
                  <hr className="login-hr" />

                  <div className="box">
                    <figure className="avatar">
                      {/* img */}
                    </figure>
                    <form onSubmit={this.handleSubimt}>
                      <div className="field">
                        <div className="control">
                          <input className="input is-large" name="username" value={username} onChange={this.handleInputChange} placeholder="Enter Username" autoFocus />
                        </div>
                      </div>
                      <div className="field">
                        <div className="control">
                          <input className="input is-large" name="password" type="password" value={password} onChange={this.handleInputChange} placeholder="Enter Password" />
                        </div>
                      </div>
                      <div className="field">
                        <label className="checkbox">
                          <input type="checkbox" />
                        Remember me
                      </label>
                      </div>
                      <div>
                        <button className="button is-block is-info is-large is-fullwidth">Login <i className="fa fa-sign-in" aria-hidden="true" /></button>
                      </div>
                    </form>
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