import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Message from './components/Message';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Xbox sign out
          
        </p>
        <Button/>
        <Greet name = "Fat" heroName = "Beef"/>
        <Message/>
        <Greet name = "Joe" heroName = "Chicken"/>
        <Greet name = "Mama" heroName = "Shrimp"/>
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
