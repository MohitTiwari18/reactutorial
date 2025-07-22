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
import LifecycleA from "./components/LifecycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import Column from "./components/Columns";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import PortalDemo from "./components/PortalDemo";

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
        <Form />
         <LifecycleA />
             <FragmentDemo />
             <Table />
        <Column />
          <ParentComp />
           <RefsDemo />
        <FocusInput />
        */}
        <PortalDemo />
      </div>
    );
  }
}

export default App;
