import React, { Component } from 'react'
import { render } from 'react-dom'
const axios = require('axios');


export default class Login extends Component {
  constructor(props) {
    super(props);
    // this.props.number= "Phone Number";
    // this.props.password = "Password";
    let number = null;
    let pw = null;
    this.registerUser = this.registerUser.bind(this);
    this.logInUser = this.logInUser.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handlePwChange = this.handlePwChange.bind(this);
  }

  registerUser(e) {
    e.preventDefault();
    console.log('phone', this.number, 'password', this.pw)
    axios
      .post("/register", { phone: this.number, password: this.pw })
      .then(function (result) {
        if (result.data) {
          //update state (loggedIn) and route to preferences
          let newState = Object.assign({},this.state,{loggedIn:"true", number:this.number , page:"pref"})
        }
        else {
          console.log('error')
          //show an error (Error: please retry)
        }
      })
  }

  logInUser(e) {
    e.preventDefault();
    console.log('this',this.number, this.pw)
    axios
    .post("/login", { phone: this.number, password: this.pw })
    .then(function (result) {
        if (result) {
          //set state and route to preferences
        }
        else {
          //show an error (Error: please retry)
        }
      })
   }

  handleNumberChange(event) {
    this.number = event.target.value;
  }
  handlePwChange(event) {
    this.pw = event.target.value;
  }
  render() {
    return (
      <div id="Login">
        <div id="LoginForm">
          <label>
            <input type="tel" name="phone" placeholder="Phone Number" value={this.number} onChange={this.handleNumberChange} minLength="10" maxLength="10" />
          </label>
          <pre />
          <label>
            <input type="password" name="password" placeholder="Password" value={this.props.password} onChange={this.handlePwChange} />
          </label>
          <pre />
          <input className="signInButton" type="submit" value="LogIn" onClick={this.logInUser} />
          <input className="signInButton" type="submit" value="Register" onClick={this.registerUser} />
        </div>
      </div>
    )
  }
}

/*class Box extends Component {
  render() {
    let styles = {
      color: "blue",
      height: 100,
      width: 100,
      fontSize: 30
    }
    return (
      <button id={this.props.boxID} style={styles} onClick={this.props.onClick}> {this.props.letter[this.props.boxID]}
      </button>
    )
  }
}*/