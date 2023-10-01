import { useCallback } from "react";
import { useRef } from "react";
import { useState } from "react";

function App() {
  const [showInput, setShowInput] = useState(false);
  const actualInputRef = useRef();

  const inputRef = useCallback((input) => {
    actualInputRef.current = input;
    if (input === null) return;
    input.focus();
  }, []);

  return (
    <>
      <button onClick={() => setShowInput(true)}>Toggle</button>
      {showInput && <input type="text" ref={inputRef} />}
    </>
  );
}

export default App;
