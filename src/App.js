import React, { Component } from "react";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ParentComponent from "./components/ParentComponent";
import Greeting from "./components/Greeting";
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*
        <Greet name="Bruce" heroName="Batman">
          <p>This is children props</p>
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Diana" heroName="Wonder Woman " />
        <Welcome name="Diana" heroName="Wonder Woman " />
        <Welcome name="Diana" heroName="Wonder Woman " />
        <Welcome name="Diana" heroName="Wonder Woman " />
          <Message />
       */}

        {/* 
        <Counter />
        <Welcome name="Mohit" heroName="Software Engineer " /> 
        <FunctionClick /> 
        <ParentComponent />
        <Greeting />
        */}

        <Form />
      </div>
    );
  }
}

export default App;
