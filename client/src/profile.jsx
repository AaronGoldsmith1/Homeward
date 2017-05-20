import React, { Component } from 'react'
import { render } from 'react-dom'


export class Profile extends Component {
  constructor() {
    super();
    this.state = function () {
      let obj = {
        number: null,
        user: null,
        loggedIn: false
      };
      return obj;
    }();
    this.letterChange = this.letterChange.bind(this)
  }
  letterChange(e) {
    let obj = Object.assign({}, this.state);
    console.log(obj.winner)
    //if the current space is empty
    if (obj.winner === 'no') {
      if (obj.letters[e.target.id] === '-') {
        //assign the 'current turn' letter to the clicked space
        obj.letters[e.target.id] = obj.turn;
        //check if the marked box completes a win
        if (obj.letters['1'] !== "-" && obj.letters['1'] === obj.letters['2'] && obj.letters['1'] === obj.letters['3']) { obj.winner = obj.letters['1'] }
        if (obj.letters['1'] !== "-" && obj.letters['1'] === obj.letters['4'] && obj.letters['1'] === obj.letters['7']) { obj.winner = obj.letters['1'] }
        if (obj.letters['1'] !== "-" && obj.letters['1'] === obj.letters['5'] && obj.letters['1'] === obj.letters['9']) { obj.winner = obj.letters['1'] }
        if (obj.letters['2'] !== "-" && obj.letters['2'] === obj.letters['5'] && obj.letters['2'] === obj.letters['8']) { obj.winner = obj.letters['2'] }
        if (obj.letters['3'] !== "-" && obj.letters['3'] === obj.letters['6'] && obj.letters['3'] === obj.letters['9']) { obj.winner = obj.letters['3'] }
        if (obj.letters['3'] !== "-" && obj.letters['3'] === obj.letters['5'] && obj.letters['3'] === obj.letters['7']) { obj.winner = obj.letters['3'] }
        if (obj.letters['4'] !== "-" && obj.letters['4'] === obj.letters['5'] && obj.letters['4'] === obj.letters['6']) { obj.winner = obj.letters['4'] }
        if (obj.letters['7'] !== "-" && obj.letters['7'] === obj.letters['8'] && obj.letters['7'] === obj.letters['9']) { obj.winner = obj.letters['7'] }
        //then alternate to the other player's turn
        obj.turn === "X" ? obj.turn = "O" : obj.turn = "X"
      }
    }
    if (obj.winner !== "no") {
      setTimeout(function () { alert(`${obj.winner}` + ' has won the game!') }, 200)
    }
    this.setState(obj)
  }

  render() {
    return (
      <div id="Profile">
        <div id="userID"><h2>{this.props.phone}</h2></div>
        <div class="query">
          <div class="queryInfo">
            [min]-[max] in [city], [zip] for a [search] bedroom
          </div>
          <div class="queryList">
            {/*{queryResults}*/}
            <ul>
              <li> [title] : [url]</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}//app constructor ends

