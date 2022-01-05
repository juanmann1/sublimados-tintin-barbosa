import logo from './logo.svg';
import './App.css';
import Nav from './components/navBar'
function App() {
  return (
    <div className="App">
      <Nav/>
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Proyecto Sublimados Tin Tin.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
