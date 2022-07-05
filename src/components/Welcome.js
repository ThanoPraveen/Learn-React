import { Component } from "react";
import React from "react";

// function Greet() {
//   return <h1>Hello code</h1>;
// }

class Welcome extends Component {
  render() {
    const { name, heroName } = this.props;
    // const {state1, state2} = this.state;
    return (
      <h1>
        {/* used to this method in class components */}
        Welcome {name} continue {heroName}
      </h1>
    );
  }
}

// export default Greet;
export default Welcome;
