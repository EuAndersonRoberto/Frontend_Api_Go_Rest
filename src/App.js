import logo from './logo-MGabriel.png';
import logogo from './logo-MIrineu.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logogo} className="App-logo" alt="logo" />
        <h1>
          Personalidades da Doutrina
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
