import React from "react";

class Form extends React.Component {
  // step 2 / initialize constructor
  constructor(props) {
    super(props);
    //
    this.state = {
      username: "",
      comment: "",
      // select step 2 / Assign the component state to the element value
      topic: "react"
    };
  }

  // step 5 / define the method as a class property equal to an arrow function
  // passed one parameter called event
  HandleUserNameChange = (event) => {
    this.setState({
      username: event.target.value
    });
  };

  HandleCommentChange = (event) => {
    this.setState({
      comment: event.target.value
    });
  };

  // select step 3  / Assign the change handler that updates the state
  HandleTopicChange = (event) => {
    this.setState({
      topic: event.target.value
    });
  };

  // step 9 / submit click after the alert popup visible the data
  handleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`);
    event.preventDefault();
  };

  render() {
    // step 10 / shortend code
    const { username, comment, topic } = this.state;
    return (
      // step 1 / create form tag and inner create div, label and input tags
      // <form>

      // step 8 / Assign to the onSubmit event
      <form onSubmit={this.handleSubmit}>
        {/* Form is regulare HTML it is not a controlled react component */}
        <div>
          <label htmlFor="#">Username</label>
          {/* <input type="text" /> */}
          {/*  */}
          {/* step 3 / assign this.state username property as the value of the input element > output: not reflect enter the value */}
          {/* <input type="text" value={this.state.username} /> */}
          {/*  */}
          {/* step 4 / create an on change event handler and pass the value of HandleUserNameChange property value */}
          <input
            type="text"
            // value={this.state.username}
            value={username}
            onChange={this.HandleUserNameChange}
          />
        </div>

        {/* step 6 / create another div, label but this time textarea same methos for firts value at the comment then initialize to add the comment property in this.state and changes event pass an create constructor property called name by HandleCommentChange one attributes of event */}
        <div>
          <label htmlFor="#">Comment</label>
          <textarea
            // value={this.state.comment}
            value={comment}
            name="#"
            id="#"
            cols="22"
            rows="4"
            onChange={this.HandleCommentChange}
          ></textarea>
        </div>

        {/* select step 1 / add the HTML */}
        <div>
          <label htmlFor="#">Topic</label>
          <select
            // value={this.state.topic}
            value={topic}
            name="#"
            id="#"
            onChange={this.HandleTopicChange}
          >
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>

        {/* step 7 / add submit button */}
        {/* browser clicked in submit button HTML default refresh the page */}
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
