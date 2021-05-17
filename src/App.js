import "./App.css";
import { useState, useEffect } from "react";
import * as math from "mathjs";

function App() {
  const [output, setOutput] = useState("");

  const [display, setDisplay] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setDisplay(display + e.target.value);
  };

  const getAnswer = (e) => {
    e.preventDefault();

    let operator = display.toString().charAt(0);

    if (
      operator === "+" ||
      operator === "-" ||
      operator === "*" ||
      operator === "/"
    ) {
      setOutput(math.evaluate(output + display));
      setDisplay("");
    } else {
      setOutput(math.evaluate(display));
      setDisplay("");
    }
  };

  const handleClear = (e) => {
    e.preventDefault();

    setOutput("");
    setDisplay("");
  };

  return (
    <div className="App">
      <form>
        <div className="screen">
          <div className="output">
            <p id="output">{output}</p>
          </div>
          <div className="display">
            <p id="display">{display}</p>
          </div>
        </div>
        <div className="row">
          <button value="1" onClick={handleClick}>
            1
          </button>
          <button value="2" onClick={handleClick}>
            2
          </button>
          <button value="3" onClick={handleClick}>
            3
          </button>
          <button value="+" onClick={handleClick}>
            +
          </button>
        </div>
        <div className="row">
          <button value="4" onClick={handleClick}>
            4
          </button>
          <button value="5" onClick={handleClick}>
            5
          </button>
          <button value="6" onClick={handleClick}>
            6
          </button>
          <button value="-" onClick={handleClick}>
            -
          </button>
        </div>
        <div className="row">
          <button value="7" onClick={handleClick}>
            7
          </button>
          <button value="8" onClick={handleClick}>
            8
          </button>
          <button value="9" onClick={handleClick}>
            9
          </button>
          <button value="*" onClick={handleClick}>
            X
          </button>
        </div>
        <div className="row">
          <button value="." onClick={handleClick}>
            .
          </button>
          <button value="0" onClick={handleClick}>
            0
          </button>
          <button type="submit" value="=" onClick={getAnswer}>
            =
          </button>
          <button value="/" onClick={handleClick}>
            /
          </button>
        </div>
        <div className="clear">
          <button value="C" onClick={handleClear}>
            C
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
