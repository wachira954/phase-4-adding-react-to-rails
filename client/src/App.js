import logo from './logo.svg';
import './App.css';
// import { useEffect } from "react";

// function App() {
//   useEffect(() => {
//     fetch("/movies")
//       .then((r) => r.json())
//       .then((movies) => console.log(movies));
//   }, []);

//   return <h1>Hello from React!</h1>;
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
