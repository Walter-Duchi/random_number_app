import { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState(0);

  return (
    <>
      <h1>Current number: {num}</h1>
      <button onClick={() => setNum(num + 1)}>Add me</button>
      <button onClick={() => setNum(num - 1)}>Substract 1</button>
    </>
  );
}

export default App;
