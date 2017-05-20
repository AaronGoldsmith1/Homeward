import React, { Component } from 'react'
import { render } from 'react-dom'
import Login from './login.jsx'
import Preferences from './preferences.jsx'
import Profile from './profile.jsx'
const axios = require('axios');

class App extends Component {
  constructor() {
    super();
    this.state = function () {
      let obj = {
        page:"login",
        loggedIn: false,
        number:null,
      };
      return obj;
    }();
    this.letterChange = this.letterChange.bind(this)
  }

  render() {
    let pageToRender;
    if (this.state.loggedIn && this.state.page==="prof") { console.log('1');pageToRender = <Profile /> }
    else if (this.state.loggedIn && this.state.page==="pref") { console.log('2'); pageToRender = <Preferences /> }
    else{ console.log(this.state) ;pageToRender = <Login /> }
    return (
      <div id="App">
        {pageToRender}
      </div>
    )
  }
}
//app constructor ends


render(<App />, document.getElementById('content'));

