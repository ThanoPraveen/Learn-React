import React, { Component } from "react";

// Message Child Component
// button click after behave to the condition
function Message(props) {
  if (props.isLoggedIn) return <h2>Welcome user</h2>;
  else return <h2>Please Login</h2>;
}

// Login child component
function LogIn(props) {
  return <button onClick={props.clickFunc}>Login</button>;
}

// Logout child component
function LogOut(props) {
  return <button onClick={props.clickFunc}>Logout</button>;
}

// Parent Component
class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = { isLoggedIn: false };
    this.ifLogInClicked = this.ifLogInClicked.bind(this);
    this.ifLogOutClicked = this.ifLogOutClicked.bind(this);
  }

  ifLogInClicked() {
    this.setState({ isLoggedIn: true });
  }

  ifLogOutClicked() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    return (
      <div>
        {/* Start point of condition */}
        <Message isLoggedIn={this.state.isLoggedIn} />
        {/* Condition if statement */}
        {this.state.isLoggedIn ? (
          <LogOut clickFunc={this.ifLogOutClicked} />
        ) : (
          // condition else statement
          <LogIn clickFunc={this.ifLogInClicked} />
        )}
      </div>
    );
  }
}

export default HomePage;
export { Message };
export { LogIn };
export { LogOut };
