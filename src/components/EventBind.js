import React, { Component } from "react";

// 01. binding in render
// 02. arrow function render
// 03. binding in the class constructor
// 04. class property as arrow function

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
    //   3rd binding of class constructor bind()
    this.clickHandler = this.clickHandler.bind(this);
  }

  //   clickHandler() {
  // Uncaught TypeError: Cannot read properties of undefined (reading 'setState') --> without use bind() function
  // with use bind(this) function
  //     this.setState({
  //       message: "GoodBye",
  //     });
  //     console.log(this); // before undefined
  //   }

  clickHandler = () => {
    this.setState({
      message: "godBye!",
    });
  };
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        {/* normal use undefined reading setState 👇 */}
        {/* <button onClick={this.clickHandler}>click</button> */}
        {/*01. 👇 use to bind(this) built in function ignore the error*/}
        {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}
        {/* 02.👇 arrow function but this time function calling */}
        {/* <button onClick={() => this.clickHandler()}>click</button> */}
        {/* 03.this time initialize declared to bind() by this.clickHandler.bind(this) binding fo class constructor*/}
        <button onClick={this.clickHandler}>click</button>
      </div>
    );
  }
}

export default EventBind;
