import React, { Component } from "react";
import Controls from "../components/name-tag/Controls";
import Display from "../components/name-tag/Display";

export default class NameTag extends Component {
  state = { greetingInput: "", nameInput: "" };

  handleGreetingInputChange = (event) => {
    this.setState({
      greetingInput: event.target.value,
    });
  };

  handleNameInputChange = (event) => {
    this.setState({
      nameInput: event.target.value,
    });
  };

  render() {
    const { greetingInput, nameInput } = this.state;

    return (
      <>
        <Controls
          greetingControl={this.handleGreetingInputChange}
          nameControl={this.handleNameInputChange}
        />

        <Display greetingDisplay={greetingInput} nameDisplay={nameInput} />
      </>
    );
  }
}
