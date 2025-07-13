/*
✅ (A) Mounting Phase
| Method Name                         | Use                                                                           |
| ----------------------------------- | ----------------------------------------------------------------------------- |
| `constructor()`                     | Initialization karne ke liye (state ya binding)                               |
| `static getDerivedStateFromProps()` | Props se state set karne ke liye without this keyword                                              |
| `render()`                          | JSX render karta hai                                                          |
| `componentDidMount()`               | Jab component screen pe aa jata hai (API call ya DOM ka kaam yahaan hota hai) |

✅ (B) Updating Phase
| Method Name                         | Use                                                                |
| ----------------------------------- | ------------------------------------------------------------------ |
| `static getDerivedStateFromProps()` | Props se state update karne ke liye                                |
| `shouldComponentUpdate()`           | Decide karta hai re-render hona chahiye ya nahi                    |
| `render()`                          | UI update karta hai                                                |
| `getSnapshotBeforeUpdate()`         | DOM se data lene ke liye before update                             |
| `componentDidUpdate()`              | Update hone ke baad koi kaam karna ho (API call ya animation etc.) |

✅ (C) Unmounting Phase
| Method Name              | Use                                                 |
| ------------------------ | --------------------------------------------------- |
| `componentWillUnmount()` | Cleanup karne ke liye (timers, subscriptions, etc.) |

---------------------------------------------------------------------------------------------------------------------

🔷 Example Comparison (Same Logic: API Fetching)
=========================================== 🔹 Functional Component  ================================================

import React, { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []); // Mount only

  return (
    <div>
      {products.map(p => <p key={p.id}>{p.title}</p>)}
    </div>
  );
}
======================================== 🔹 Class Component ======================================================

import React, { Component } from "react";

class ProductList extends Component {
  constructor() {
    super();
    this.state = { products: [] };
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => this.setState({ products: data }));
  }

  render() {
    return (
      <div>
        {this.state.products.map(p => <p key={p.id}>{p.title}</p>)}
      </div>
    );
  }
}


*/
import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Vishwas",
    };
    console.log("LifecycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifecycleA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("LifecycleA componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "Codevolution",
    });
  };

  render() {
    console.log("LifecycleA render");
    return (
      <div>
        <button onClick={this.changeState}>Ch ange state</button>
        LifecycleA
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
