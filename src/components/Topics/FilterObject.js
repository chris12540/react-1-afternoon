import React, { Component } from "react";

class FilterObject extends Component {
  constructor() {
    super();

    this.state = {
      userInput: "title",
      filteredArray: []
    };

    this.original = [
      { name: "Jimmy Joe", title: "Hack0r", age: 12 },
      { name: "Jeremy Schrader", age: 24, hairColor: "brown" },
      { name: "Carly Armstrong", title: "CEO" }
    ];
  }

  filter = () => {
    let filtered = this.original.filter(obj => {
      return obj[this.state.userInput];
    });

    this.setState({
      userInput: "",
      filteredArray: filtered
    });
  };

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4 className=""> Filter Object </h4>
        <span className="puzzleText">
          Original: {JSON.stringify(this.original, "", " ")}
        </span>
        <input
          type="text"
          className="inputLine"
          value={this.state.userInput}
          onChange={e => {
            this.setState({
              userInput: e.target.value
            });
          }}
        />
        <button className="confirmationButton" onClick={this.filter}>
          Filter
        </button>
        <span className="resultsBox filterObjectRB">
          {JSON.stringify(this.state.filteredArray, "", " ")}
        </span>
      </div>
    );
  }
}

export default FilterObject;
