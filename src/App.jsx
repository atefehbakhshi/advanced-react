import { useState } from "react";

function App() {
  const [changeDogs, setChangeDogs] = useState(false);
  return (
    <div>
      {changeDogs ? <span>Dogs</span> : <span>Cats</span>}
      <br />
      <input type="text" key={changeDogs ? "dog" : "cat"} />
      <button onClick={() => setChangeDogs((d) => !d)}>Switch</button>
    </div>
  );
}

export default App;
