import logo from './logo.svg';
import './App.css';
import Nav from './components/navBar'
function App() {
  return (
    <div className="App">
      <Nav/>
      <header className="App-header">
        
        <img src="https://scontent.faep4-2.fna.fbcdn.net/v/t1.6435-9/79093823_101697134668412_8216679535723151360_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=973b4a&_nc_ohc=04md-oU3LQoAX9A3n3V&_nc_ht=scontent.faep4-2.fna&oh=00_AT--NGExIy5349EBjd80oUEmCoAZjkqlcjhj9vP6rlKiIg&oe=61FAB3FB" className="App-logo" alt="logo" />
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
