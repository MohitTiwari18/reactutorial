//STATE MANAGEMENT IN CLASS COMP0NENT
import React, { Component } from "react";
class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitors ",
    };
  }
  changeMessage() {
    this.setState({
      message: "Thank You For Subscribing!",
    });
  }
  render() {
    return (
      <div>
        <h1> {this.state.message} </h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
  s;
}
export default Message;
