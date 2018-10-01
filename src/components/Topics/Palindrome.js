import React, { Component } from "react";

class Palindrome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      palindrome: ""
    };
  }

  isPalindrome = () => {
    const textArr = this.state.userInput.split("");
    for (let i = 0; i < textArr.length / 2; i++) {
      if (textArr[i] !== textArr[textArr.length - 1 - i]) {
        this.setState({
          userInput: "",
          palindrome: false
        });
      } else {
        this.setState({
          userInput: "",
          palindrome: true
        });
      }
    }
  };

  render() {
    const { userInput, palindrome } = this.state;
    return (
      <div className="puzzleBox palindromePB">
        <h4>Palindrome</h4>
        <input
          type="text"
          className="inputLine"
          value={userInput}
          onChange={e => {
            this.setState({ userInput: e.target.value });
          }}
        />
        <button className="confirmationButton" onClick={this.isPalindrome}>
          Check
        </button>
        <span className="resultsBox">Palindrome: {palindrome.toString()}</span>
      </div>
    );
  }
}

export default Palindrome;
