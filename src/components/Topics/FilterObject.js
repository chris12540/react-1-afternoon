import React, { Component } from "react";

class FilterObject extends Component {
	constructor() {
		super();
		this.state = {
			unfilteredArray: [
				{ color: "red" },
				{ color: "blue" },
				{ color: "green" }
			],
			userInput: "",
			filteredArray: []
		};
	}

	render() {
		return (
			<div className="puzzleBox filterObjectPB">
				<h4 className="">Filter Object</h4>
				<span className="puzzleText" />
				<input
					type="text"
					className="inputLine"
					onChange={e => {
						this.setState({ userInput: e.target.value });
					}}
				/>
				<button className="confirmationButton" />
				<span className="resultsBob filterObjectRB" />
			</div>
		);
	}
}

export default FilterObject;
