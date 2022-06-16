import {turnDark, turnLight, logout, increment, decrement} from './actions'
import { useSelector,useDispatch } from 'react-redux';
import './App.css';
import {Link} from 'react-router-dom'

function App() {
  const theme =useSelector((state)=>state.theme)
  const isLoggedIn =useSelector((state)=>state.isLoggedIn)
  const counter=useSelector((state)=>state.counter)

  const dispatch=useDispatch()

  return (
    <div className={`app ${theme}`}>
    <h1>Hello Redux</h1>
    <h2>Counter: {counter}</h2>
    <button onClick={()=>dispatch(increment(5))}>Increment</button>
    <button onClick={()=>dispatch(reset())}>Reset</button>
    <button onClick={()=>dispatch(decrement())}>Decrement</button>

    <p>Current theme: {theme}</p>

    <button onClick={()=>dispatch(turnDark())}>Dark</button>
    <button onClick={()=>dispatch(turnLight())}>Light</button>

    <hr />
    {!isLoggedIn && <Link to='/login'>Sign up</Link>}
    {isLoggedIn && <button onClick={()=>dispatch(logout())}>Logout</button>}
    </div>
  );
}

export default App;
