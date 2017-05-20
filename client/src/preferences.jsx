import React, { Component } from 'react'
import { render } from 'react-dom'


export default class Preferences extends Component {
  constructor() {
    super();
    this.state = function () {
      let obj = {
        number: null,
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
      <div id="Preferences">
        <div id="title">
          <h2> Create a Query: </h2>
        </div>
        <form id="prefForm">
        <div id="cityDiv" className="prefIn">City: <input type="text" name="city" value="losangeles" readOnly required/> </div>
        <div id="catDiv" className="prefIn">Category: <input type="text" name="cat" value="Apartments" readOnly required/> </div>
        <div id="zipDiv" className="prefIn">Zip Code: <input type="number" name="zip" placeholder="Zip Code" required/> </div>
        <div id="minDiv" className="prefIn">Max Price: <input type="number" name="min" placeholder="Min Price" required/> </div>
        <div id="maxDiv" className="prefIn">Min Price: <input type="number" name="max" placeholder="Max Price" required/> </div>
        <div id="bedDiv" className="prefIn">Bedrooms: <input type="number" name="beds" value="2"/> </div>
        </form>
         <input className="queryButton" type="submit" value="Create Query" />
      </div>
    )
  }
}//app constructor ends

class Row extends Component {

  render() {
    return (
      <div className="Row" >
        <Box boxID={(this.props.rowLabel * 3) + 1} letter={this.props.letter} onClick={this.props.onClick} />
      </div>
    )
  }
}

class Box extends Component {
  render() {
    let styles = {
      color: "blue",
      height: 100,
      width: 100,
      fontSize: 30
    }
    return (
      <button id={this.props.boxID} style={styles} onClick={this.props.onClick}> TEST
      </button>
    )
  }
}
