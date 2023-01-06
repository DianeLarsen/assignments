import React from "react";
import "./App.css";

function App() {
  const STARTING_TIME = 10;
  const [text, setText] = React.useState("");
  const [wordCount, setWordCount] = React.useState("");
  const [countDown, setCountDown] = React.useState(STARTING_TIME);
  const [start, setStart] = React.useState(false);
  const [readOnly, setReadOnly] = React.useState(true);
  const textBoxRef = React.useRef(null);

  function handleChange(event) {
    setText(event.target.value);
  }
  function handleTimeChange(event) {
    setCountDown(event.target.value);
  }
  function handleClick() {
    setStart(true);
    setReadOnly(false);
    textBoxRef.current.disabled = false
    textBoxRef.current.focus();
  }
  function handleReClick() {
    setCountDown(STARTING_TIME);
    setStart((prev) => !prev);
    setReadOnly(true);
    setText("");
  }
  function handleStop() {
    setReadOnly(true);
    setStart(false);
  }
  React.useEffect(() => {
    if (countDown === 0) {
      setWordCount(getWordCount(text));
      setReadOnly(true);
      return;
    }
    if (start === false) return;

    setTimeout(() => {
      setCountDown((time) => time - 1);
    }, 1000);
  }, [countDown, start]);
  React.useEffect(() => {
    if (countDown === 0 && readOnly === true) {
      setStart(false);
    }
  }, [countDown]);
  function getWordCount(text) {
    let count = text
      .trim()
      .split(" ")
      .filter(function (word) {
        return word !== "";
      }).length;

    return count;
  }

  return (
    <div className="App">
      <h1>How fast do you type?</h1>
      <div className="header-input">
        <h5>Set Time (in seconds)</h5>
        <form>
          <input
            type="number"
            min="0"
            placeholder="10"
            value={countDown}
            onChange={handleTimeChange}
          ></input>
        </form>
      </div>
      <textarea
        ref = {textBoxRef}
        
        disabled={readOnly}
        onChange={handleChange}
        value={text}
      />
      <h4>Time Remaining: {countDown}</h4>
      {countDown === 0 ? (
        <button onClick={handleReClick}>ReSet</button>
      ) : (
        <button disabled={start} onClick={handleClick}>
          Start
        </button>
      )}
      {start === true && readOnly === false && (
        <button className="stop" onClick={handleStop}>
          Pause
        </button>
      )}
      <h1>Word Count: {countDown === 0 ? wordCount : "???"}</h1>
    </div>
  );
}

export default App;
