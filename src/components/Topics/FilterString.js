import React, { Component } from "react";

class FilterString extends Component {
  constructor() {
    super();

    this.state = {
      userInput: "",
      filteredString: []
    };

    this.unfilteredString = [
      "James",
      "Jessica",
      "Melody",
      "Tyler",
      "Blake",
      "Jennifer",
      "Mark",
      "Maddy"
    ];
  }

  filter = () => {
    const filtered = this.unfilteredString.filter(str => {
      return str === this.state.userInput;
    });

    this.setState({
      userInput: "",
      filteredString: filtered
    });
  };

  render() {
    const { userInput, filteredString } = this.state;
    const unfilteredString = this.unfilteredString;
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">
          Names: {JSON.stringify(unfilteredString, "", " ")}
        </span>
        <input
          type="text"
          className="inputLine"
          value={userInput}
          onChange={e => {
            this.setState({ userInput: e.target.value });
          }}
        />
        <button className="confirmationButton" onClick={this.filter}>
          Filter
        </button>
        <span className="resultsBox filterStringRB">{filteredString}</span>
      </div>
    );
  }
}

export default FilterString;
