/*
 
| Feature         | Global CSS (`appStyle.css`) | CSS Modules (`appStyle.module.css`) |
| --------------- | --------------------------- | ----------------------------------- |
| Naming Conflict | ❌ High Risk                 | ✅ Safe                              |
| Scalability     | ❌ Difficult                 | ✅ Easy to manage                    |
| Industry Use    | 😐 Less in large apps       | ✅ Mostly used                       |
| Best For        | Small apps, global styles   | Component-specific styling          |
    
*/

import React from "react";
import styles from "./Greeting.module.css"; // ⬅️ CSS Module import

function Greeting() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Hello Prince 👋</h1>
      <p className={styles.para}>Welcome to the CSS Module world!</p>
    </div>
  );
}

export default Greeting;
