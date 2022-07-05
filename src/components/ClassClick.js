import React, { Component } from "react";

class ClassClick extends Component {
  clickHandler() {
    console.log("class button clicked");
  }
  render() {
    return (
      <div>
        <h3>ClassClick</h3>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default ClassClick;
