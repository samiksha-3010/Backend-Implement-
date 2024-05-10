import React, { useContext } from 'react'
import { AuthContext } from './Context/Auth.context';
import { useNavigate } from 'react-router-dom';

const Home = () => {
      const router = useNavigate ();
      const { state,dispatch  } = useContext(AuthContext);
      console.log(state,"state")
  return (
    <div>
      

<h1> {state.user?.name}</h1>
<p onClick={() => router("/login")}>Login </p>
<div> 
<p onClick={() => dispatch({ type: 'LOGOUT' })}>Logout</p>
</div>
    </div>
  )
}

export default Home