import { useEffect, useLayoutEffect, useRef, useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [popupTop, setPopupTop] = useState(0);
  const buttonRef = useRef(null);

  // useEffect(() => {
  //   if (buttonRef.current === null || !isOpen) return setPopupTop(0);
  //   const { bottom } = buttonRef.current.getBoundingClientRect();
  //   setPopupTop(bottom + 25);
  // }, [isOpen]);

  useLayoutEffect(() => {
    if (buttonRef.current === null || !isOpen) return setPopupTop(0);
    const { bottom } = buttonRef.current.getBoundingClientRect();
    setPopupTop(bottom + 25);
  }, [isOpen]);

  //delay for 100ms
  const now = performance.now();
  while (now > performance.now() - 100) {
    // Do nothing
  }

  return (
    <>
      <button ref={buttonRef} onClick={() => setIsOpen((o) => !o)}>
        show
      </button>
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: `${popupTop}px`,
            border: "1px solid black",
          }}
        >
          Tooltip
        </div>
      )}
    </>
  );
}

export default App;
