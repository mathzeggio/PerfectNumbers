import CheckForm from "./components/CheckForm";
import RangeForm from "./components/RangeForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Perfect Number Calculator
      </header>
      <body>
        <CheckForm />
        <RangeForm />
      </body>
    </div>
  );
}

export default App;
