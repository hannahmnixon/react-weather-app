import "./App.css";
import "./Weather";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was created by Hannah Nixon and is open-sourced on{" "}
          <a href="https://github.com/hannahmnixon/react-weather-app">Github</a>
        </footer>
      </div>
    </div>
  );
}
