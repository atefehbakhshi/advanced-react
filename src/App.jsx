import { useRef } from "react";
import "./App.css";
import { CustomInput } from "./components/CustomInput";

function App() {
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputRef.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <CustomInput ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
