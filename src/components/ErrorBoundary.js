/*
🔹 Error Boundaries kya hote hain?
- Error Boundaries React ke class components hote hain jo componentDidCatch(error, info) aur 
getDerivedStateFromError(error) lifecycle methods ka use karte hain.
- Yeh sirf rendering phase, lifecycle methods, aur constructor me hone wale errors ko catch karte hain,
child components ke liye. Yeh event handlers, async code (jaise fetch), ya server errors ko nahi catch karte.

----------------------------------------------------------------------------------------------------------
🔹 Syntax: Basic Example
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Next render me fallback UI show karega
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Error log ya analytics ke liye
    console.log("Error logged: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }

    return this.props.children;
  }
}

// Use it like:
<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>
--------------------------------------------------------------------------------------
🔹 Error Boundaries ka use kyun karte hain?
Problem: Agar ek component me koi bug ho jaye (like undefined.map()), to pura React app crash ho sakta hai.

Solution: Error boundaries use karke aap kisi bhi part of UI me error hone par us part ka fallback UI dikhake baaki app ko functional rakh sakte ho.

------------------------------------------------------------------------------------------
🔹 Real-World Use Cases
Widget-based apps: Jaha har section ek separate module ho, to agar ek widget crash ho jaye, baaki app chalti rahe.

📦 Example: Dashboard me ek chart component crash ho gaya, to ErrorBoundary se use wrap karke fallback message show kara diya.

Third-party components: Jab aap kisi third-party library ka component use karte ho, jisme error ka control aapke haath me nahi hota.

Remote/Heavy Components: Jo lazy-loaded components hote hain ya large API data render karte hain, waha unexpected issues handle karne ke liye.

Logging Tools: ErrorBoundary ke andar aap error logs ko server pe bhej sakte ho (e.g., Sentry, LogRocket).


*/

import React, { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
