import {useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {loginSuccess,logout} from '../actions';
import {Link} from 'react-router-dom'

function LoginForm() {
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  

  const dispatch=useDispatch()
  const isLoggedIn=useSelector((state)=>state.isLoggedIn)

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(email.length===0 && password.length===0) return 
dispatch(loginSuccess())
  }
  return (
    <div className='app'>
      <p>{isLoggedIn ? 'Welcome! You are logged in' : 'Please, log in'}</p>
      <p>
        {isLoggedIn && <button onClick={()=>dispatch(logout())}>Log out</button>}
      </p>
      <p>
        {isLoggedIn && <Link to='/'>Home</Link>}
      </p>
      {!isLoggedIn && 
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='email'>
                    Email:
                </label>
                <input id='email' type='email' onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor='password'>
                    Password:
                </label>
                <input id='password' type='password' onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div>
              <button>Log in</button>
            </div>

        </form>}
    </div>
  )
}

export default LoginForm