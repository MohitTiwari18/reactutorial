/*

🔷 React Portal kya hota hai?
React Portal ek technique hai jisse hum React component ko normal React DOM tree ke bahar render kar sakte hain.

Matlab: Jaise humare saare React components root div ke andar render hote hain, par Portal se hum kisi aur div 
ya DOM element ke andar render kar sakte hain.

📦 Syntax:
ReactDOM.createPortal(child, container)
📌 Yahaan:
child: Jo React element ya component render karna hai.
container: Wo DOM element (jaise ek div) jisme wo component render hoga (root ke bahar ho sakta hai).
-------------------------------------------------------------------------------------------------------------------------
🎯 React Portal ka use kyun karte hain? 
1. CSS Problems se bachne ke liye
Agar kisi parent component pe overflow: hidden, z-index, ya scroll lagaya ho to uske andar koi popup/modal sahi se nahi dikhega.
Portal use karne se wo component root ke bahar render hota hai to ye problems solve ho jaati hain.

2. UI alag, logic React tree mein hi
Component ka logic React ke andar hota hai, but rendering root ke bahar hoti hai. Isse structure clean rehta hai.
-------------------------------------------------------------------------------------------------------------------

✅ Real-Time Use Cases (Real Projects mein kahaan use hota hai)
| 📌 Use Case                | ⚙️ Explanation                                                                                                                                    |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Modal / Dialog Box**     | Login ya alert box jo screen ke center mein aata hai. Isse Portal ke through render karte hain taaki wo kisi bhi parent ke style se affect na ho. |
| **Tooltip**                | Jab mouse kisi element pe hover kare to ek choti info box dikhta hai. Tooltip ko bhi Portal se render karte hain.                                 |
| **Dropdown**               | Dropdown menu scroll hone ya chhup jaane se bachane ke liye Portal use hota hai.                                                                  |
| **Toast / Notification**   | Screen ke corner mein toast messages (like "Item added to cart") Portal se dikhte hain.                                                           |
| **Context Menu / Popover** | Right-click ya kisi special area pe click karne se jo menu khulta hai, usse Portal se render karte hain.                                          |


==================================================================================================================
💻 Example in Real Code
🧩 index.html file:
<body>
  <div id="root"></div>
  <div id="modal-root"></div> <!-- Yeh portal ke liye -->
</body>

🧩 Modal.js (component jo Portal use karta hai)
import ReactDOM from 'react-dom';

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      {children}
    </div>,
    document.getElementById('modal-root') // yeh root ke bahar render hoga
  );
};

export default Modal;

🧩 App.js
import React, { useState } from 'react';
import Modal from './Modal';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      {showModal && (
        <Modal>
          <div className="modal-content">
            <h2>Hello from Modal</h2>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </Modal>
      )}
    </>
  );
}
*/

/*
import React from 'react'
function PortalDemo(){
return(
<h1>
Portals demo
</h1>
)
}
export default PortalDemo
*/
import React from "react";
import ReactDOM from "react-dom";

function PortalDemo() {
  return ReactDOM.createPortal(
    <h1>Portals Demo</h1>,
    document.getElementById("portal-root")
  );
}

export default PortalDemo;
