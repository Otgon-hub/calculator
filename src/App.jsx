import { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    setResult(Number(num1) + Number(num2));
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Simple Calculator</h1>

      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="First number"
      />
      <br /><br />

      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Second number"
      />
      <br /><br />

      <button onClick={calculate}>Add</button>

      {result !== null && (
        <h2>Result: {result}</h2>
      )}
    </div>
  );
}

export default App;
