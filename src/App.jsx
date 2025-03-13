import "./App.css";
import { Login, Counter, Counter2 } from "./pages";

function App() {
  return (
    <div>
      <Login />
      <div className="count-area">
        <div>
          <h1>Counter1</h1>
          <Counter />
        </div>
        <div>
          <h1>Counter2</h1>
          <Counter2 />
        </div>
      </div>
    </div>
  );
}

export default App;
