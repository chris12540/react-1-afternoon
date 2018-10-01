import React, { Component } from "react";

class EvensAndOdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ""
    };

    this.updateUserInput = this.updateUserInput.bind(this);
    this.segregate = this.segregate.bind(this);
  }

  updateUserInput(event) {
    this.setState({ userInput: event.target.value });
  }

  segregate() {
    let arr = this.state.userInput.split(",").map(num => +num);
    const even = [],
      odd = [];

    for (const num of arr) {
      if (num % 2 === 0) {
        even.push(num);
      } else if (num % 2 === 1) {
        odd.push(num);
      }
    }

    this.setState({
      evenArray: even,
      oddArray: odd,
      userInput: ""
    });
  }

  render() {
    const { userInput, evenArray, oddArray } = this.state;

    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input
          type="text"
          className="inputLine"
          value={userInput}
          onChange={this.updateUserInput}
        />
        {userInput}
        <button className="confirmationButton" onClick={this.segregate}>
          Split
        </button>
        <span className="resultsBox">{JSON.stringify(evenArray)}</span>
        <span className="resultsBox">{JSON.stringify(oddArray)}</span>
      </div>
    );
  }
}

export default EvensAndOdd;
