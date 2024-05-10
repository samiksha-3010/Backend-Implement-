import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./Context/Auth.context";
import toast from "react-hot-toast";
import axios from "axios";


const Login = () => {
      const { state, dispatch } = useContext(AuthContext);
      const [userData, setUserData] = useState({ email: "", password: "" });
      const router = useNavigate();
      console.log(userData, "-userData");
    
      const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
      };
const handleSubmit = async (event) => {
      event.preventDefault();
      if (userData.email && userData.password) {
        const response = await axios.post("http://localhost:8000/login", {
          userData,
        });
  
        // const response = await api.post("/login",{ userData });
        if (response.data.success) {
          dispatch({
            type: "LOGIN",
            payload: response.data.user,
          });
          localStorage.setItem("token", JSON.stringify(response.data.token));
          setUserData({ email: "", password: "" });
          router("/");
          toast.success(response.data.message);
        } else {
          toast.error(response.data.message);
        }
      } else {
        toast.error("All fields are mandtory.");
      }
    };


    return(
        <div id="register-style">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <label>Email</label><br/>
            <input type="name" name='email' onChange={handleChange}/><br/>
            <label>Password</label><br/>
            <input type="password" name='password' onChange={handleChange}/><br/>
           <div id="button-type"><input type='submit' value='Login'/><br/></div>
           <button onClick={() => router("/register")}>Register</button>
          
        </form>
         </div>
    )
}
export default Login;