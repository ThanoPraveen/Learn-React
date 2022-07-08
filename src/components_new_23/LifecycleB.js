import React from "react";

class LifecycleB extends React.Component {
  constructor(props) {
    super(props);

    // step 1 /
    this.state = {
      name: "Praveen Kumar"
    };
    console.log("LifecycleB constructor");
  }

  // step 2
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleB getDerievedStateFromProps");
    return null;
  }

  // step 4
  componentDidMount() {
    console.log("LifecycleB componentDidMount");
  }

  render() {
    // step 3
    console.log("Lifecycle A Rendering in console");
    return (
      <div>
        <h2>Lifecycle B</h2>
      </div>
    );
  }
}

export default LifecycleB;
