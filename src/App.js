import React, { Component } from "react";
import "./App.css";
// import Practice from "./components/Practice";
// import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
// import Hello from "./components/Hello";
// import Message from "./components/message";
// import Counter from "./components/Counter";
// import FunctionClick from "./components/FunctionClick";
// import ClassClick from "./components/ClassClick";
// import EventBind from "./components/EventBind";
// import ParentComponent from "./components/ParentComponent";
// import UserGreeting from "./components/UserGreeting";
import NameList from "./NameList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NameList />
        {/* <UserGreeting /> */}
        {/* <ParentComponent /> */}
        {/* <EventBind /> */}
        {/* <ClassClick /> */}
        {/* <FunctionClick /> */}
        {/* <Counter /> */}
        {/* <Message /> */}
        {/* <h1>Hello CodeSandbox</h1>
      <h2>iam praveen, created by react</h2> */}
        {/* <Greet name="Bruce" heroName="Batman">
        <p>props used to react and reactJS</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet>
      <Greet name="Tina" heroName="Wonder Woman"></Greet>
      <Welcome name="Tina" heroName="Wonder Woman" />
      <Welcome name="Ramar" heroName="Strong" /> */}
        {/* <Welcome name="Laksh" heroName="Thunder" /> */}
        {/* <Hello /> */}
        {/* <Greet name="Bruce" heroName="Batman"></Greet> */}
        {/* <Practice /> */}
      </div>
    );
  }
}

export default App;
