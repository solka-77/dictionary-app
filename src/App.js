import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <main>
        <Dictionary defaultKeyword="wine" />
      </main>
      <footer>Coded by Nastaran Karimi</footer>
    </div>
  );
}

export default App;
