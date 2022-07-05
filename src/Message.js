// state video
import React from "react";

class Message extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
    };
  }

  messageChange() {
    this.setState({
      message: "Thank you for subscripe to me",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.messageChange()}>Subscripe</button>
      </div>
    );
  }
}

export default Message;
