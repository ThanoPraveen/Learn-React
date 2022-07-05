import React from "react";

class UserGreeting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    // short circuit operator
    return this.state.isLoggedIn && <div>Hello this is working</div>;

    // Ternary conditional operator
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Praveen</div>
    // ) : (
    //   <div>Welcome new one</div>
    // );
    // Element variable in if else conditional
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Kishor</div>;
    // } else {
    //   message = <div>Welcome Guest in react Home</div>;
    // }
    // return message = <div>{message}</div>

    // if / else conditional
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Praveen Kumar</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }

    // return (
    //   <div>
    //     <div>Welcome Praveen Kumar</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // );
  }
}

export default UserGreeting;
