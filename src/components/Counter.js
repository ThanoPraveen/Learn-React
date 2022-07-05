import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment() {
    // this.setState(
    //   {
    //     count: this.state.count + 1
    //   },
    //   () => {
    //     console.log("callback value : ", this.state.count);
    //   }
    // );

    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    // console.log(this.state.count);
  }

  decrement() {
    this.setState(() => ({
      count: 0,
    }));
  }
  // incrementFive() {
  //   this.increment();
  //   this.increment();
  //   this.increment();
  //   this.increment();
  //   this.increment();
  // }
  render() {
    return (
      <div className="top-container">
        <div className="content-container">count - {this.state.count}</div>
        <button
          className="increment-button button-all"
          onClick={() => this.increment()}
        >
          increment
        </button>
        <button
          className="clear-button button-all"
          onClick={() => this.decrement()}
        >
          clear
        </button>
      </div>
    );
  }
}

export default Counter;
