import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Swakopmund" />

        <footer>
          This project was coded by Kim Timke and is
          <a
            href="https://github.com/kimtimke/react-weatheapp"
            target="_blank"
            rel=" noreferrer"
          >
            {" "}
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
