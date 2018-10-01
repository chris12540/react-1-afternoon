import React, { Component } from "react";

class Sum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      sum: null
    };
  }

  updateNum = (event, prop) => {
    this.setState({
      [prop]: event.target.value
    });
  };

  addNums = () => {
    this.setState({
      sum: +this.state.x + +this.state.y
    });
  };

  render() {
    const { sum } = this.state;

    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input
          type="number"
          className="inputLine"
          onChange={e => {
            this.updateNum(e, "x");
          }}
        />
        <input
          type="number"
          className="inputLine"
          onChange={e => {
            this.updateNum(e, "y");
          }}
        />
        <button className="confirmationButton" onClick={this.addNums}>
          Add
        </button>
        <span className="resultsBox">Sum: {sum}</span>
      </div>
    );
  }
}

export default Sum;
