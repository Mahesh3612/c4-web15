import "./App.css"

import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { NewOrder } from "./components/NewOrder";
import { Orders } from "./components/Orders";
// import { ProtectedRoute } from "./components/ProtextedRoute"
import {Link} from "react-router-dom"
import {Routes,Route} from "react-router-dom"

import { useDispatch, useSelector } from "react-redux";
import { logIn } from "./Redux/actions";
function App() {

  const dispatch = useDispatch()
  const log = useSelector(store => (store.log))

  return (
    
    <div className="App">
      <div>
        <Link className="nav-home" to="/">Home</Link>
        {/* Show either login or logout below */}
        {log?<Link className="nav-login" to="/login">Login</Link>:<Link className="nav-logout" to="/logout" onClick={()=>{
dispatch(logIn(!log))
        }}>Logout</Link>}
      </div>

      <Routes>
        {/* Routes are as follows:
        Route      Component
        /           Home
        /login      Login
        /logout     Logout
        /orders     Orders    Protected
        /neworder   NewOrder  Protected
        */}
        <Route path="/" element={<Home/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/neworders" element={<NewOrder/>}/>
      </Routes>
    </div>
  );
}

export default App;
