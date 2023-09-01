import { useState } from "react";
import "./App.css";
import { createPortal } from "react-dom";

function App() {
  const [isMessageOpen, setIsMessageOpen] = useState(false);

  return (
    <div onClick={() => console.log("first")}>
      <button onClick={() => setIsMessageOpen(true)}> show message</button>
      {isMessageOpen && (
        <AlertMessage
          onCloseMessage={() => {
            setIsMessageOpen(false);
            console.log("portal");
          }}
        >
          this is message
        </AlertMessage>
      )}
    </div>
  );
}

export default App;

const AlertMessage = ({ onCloseMessage, children }) => {
  return createPortal(
    <div onClick={onCloseMessage}>{children}</div>,
    document.getElementById("portal")
  );
};
