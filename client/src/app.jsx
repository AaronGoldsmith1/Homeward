import React, { Component } from 'react'
import { render } from 'react-dom'


class App extends Component {
  constructor() {
    super();
    this.state = function () {
      let obj = {
        number: null
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
      <div id="App">
        <Row rowLabel={0} letter={this.state.letters} onClick={this.letterChange} />
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
      <button id={this.props.boxID} style={styles} onClick={this.props.onClick}> {this.props.letter[this.props.boxID]}
      </button>
    )
  }
}

render(<App />, document.getElementById('content'));

