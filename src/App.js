import React, { Component } from "react";
import "./App.css";
import Greet from "./components/ReactAdvance/Greet";
import Welcome from "./components/ReactAdvance/Welcome";
import Message from "./components/ReactAdvance/Message";
import Counter from "./components/ReactAdvance/Counter";
import FunctionClick from "./components/ReactAdvance/FunctionClick";
import ParentComponent from "./components/ReactAdvance/ParentComponent";
import Greeting from "./components/ReactAdvance/Greeting";
import Form from "./components/ReactAdvance/Form";
import LifecycleA from "./components/ReactAdvance/LifecycleA";
import FragmentDemo from "./components/ReactAdvance/FragmentDemo";
import Table from "./components/ReactAdvance/Table";
import Column from "./components/ReactAdvance/Columns";
import ParentComp from "./components/ReactAdvance/ParentComp";
import RefsDemo from "./components/ReactAdvance/RefsDemo";
import FocusInput from "./components/ReactAdvance/FocusInput";
import PortalDemo from "./components/ReactAdvance/PortalDemo";
import Hero from "./components/ReactAdvance/Hero";
import ErrorBoundary from "./components/ReactAdvance/ErrorBoundary";
//--------------------- END OF REACT ADVANCE------------------------------------------------
import ClassCounter from "./components/ReactHooks/state-hook/ClassCounter";
import HookCounter from "./components/ReactHooks/state-hook/HookCounter";
import HookCounterTwo from "./components/ReactHooks/state-hook/HookCounterTwo";
import HookCounterThree from "./components/ReactHooks/state-hook/HookCounterThree";
import ClassCounterTwo from "./components/ReactHooks/state-hook/ClassCounterTwo";
import HookCounterFour from "./components/ReactHooks/state-hook/HookCounterFour";
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
        --------------------- React Advance -------------------------------
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
         <PortalDemo />
          <Hero />
        <ErrorBoundary />
        */}
        {/*
        ------------------------------------  React Hook ------------------------------------------
       
				<ClassCounterTwo />
				<HookCounter />
				<HookCounterTwo />
				<HookCounterThree />
        <HookCounterFour />
        */}
        <ClassCounter />
      </div>
    );
  }
}

export default App;
