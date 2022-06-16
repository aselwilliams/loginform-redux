import {
  turnDark,
  turnLight,
  logout,
  increment,
  decrement,
  reset,
} from "./actions";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  const theme = useSelector((state) => state.theme);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <div className={`app ${theme}`}>
      <h1>Hello Redux</h1>
      <div className="counter">
        <h2>Counter: {counter}</h2>
        <button onClick={() => dispatch(increment(5))}>Increment</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <p>Current theme: {theme}</p>

      <button onClick={() => dispatch(turnDark())}>Dark</button>
      <button onClick={() => dispatch(turnLight())}>Light</button>

      <br />
      <br />
      {isLoggedIn && <button onClick={() => dispatch(logout())}>Logout</button>}
      {!isLoggedIn && <Link to="/login">Sign up</Link>}
    </div>
  );
}

export default App;
