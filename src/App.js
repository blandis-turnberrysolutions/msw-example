import logo from "./logo.svg";
import "./App.css";
import * as React from "react";

function App() {
  const [data, setData] = React.useState();

  React.useEffect(() => {
    (async () => {
      fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        .then((json) => setData(json));
    })();
  }, []);

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
          {data && <h1>{data.title}</h1>}
        </a>
      </header>
    </div>
  );
}

export default App;
