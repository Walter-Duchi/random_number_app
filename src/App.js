import "./App.css";
import Card from "./Card";

const randNum = () => Math.ceil(Math.random() * 100);

function App() {
  return (
    <div>
      <h1>Task: Add three Card elements</h1>
      <Card num={randNum()} />
      <Card num={randNum()} />
      <Card num={randNum()} />
      <h1>{}</h1>
    </div>
  );
}

export default App;
