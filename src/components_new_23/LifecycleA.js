import React from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends React.Component {
  constructor(props) {
    super(props);

    // Normally run the page
    // step 1 /
    this.state = {
      name: "Praveen Kumar"
    };
    console.log("LifecycleA constructor");
  }

  // step 2
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerievedStateFromProps");
    return null;
  }

  // step 4
  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }

  render() {
    // step 3
    console.log("Lifecycle A Rendering in console");
    return (
      <div>
        <h2>Lifecycle A</h2>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
