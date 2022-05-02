import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logIn } from "../Redux/actions";
import { store } from "../Redux/store";

export const Login = () => {

  const dispatch = useDispatch()
const log = useSelector(store => (store.log))

  const [data,setData] = useState({})
  
  function handleChange(e){
const {name,value} = e.target;
setData({...data,[name]:value})
  }

  console.log(data)

  return (
    <div>
      <input
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
       onChange={handleChange}
      />
      <input
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={handleChange}
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
     <Link to="/orders"> <button className="submit" onClick={()=>{
    dispatch(logIn(!log))
     }} 
      // onClick={()=>{
        // let a = data.username;
        // let b = data.password;

        // if(a === "admin" && b === "1234"){
        
        // }else{
          
        // }  
      // }
      // }
      >Login</button></Link>
    </div>
  );
};
