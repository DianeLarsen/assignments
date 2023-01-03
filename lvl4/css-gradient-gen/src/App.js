
import './App.css';
import Display from './Display';
import Options from './Options';

function App() {
  return (
    <div className="App">
      <header>CSS Gradient Code Generator</header>
      <div className="color-picker">
      <Display />
      <Options />
      </div>
    </div>
  );
}

export default App;
