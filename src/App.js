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
            open-sourced on GitHub {""}
          </a>
          and {""}
          <a
            href="https://delicate-dieffenbachia-95065b.netlify.app/"
            target="_blank"
            rel=" noreferrer"
          >
            hosted on Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
