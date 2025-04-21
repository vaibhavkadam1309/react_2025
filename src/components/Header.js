import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
    const [btnLogin,setbtnLogin] = useState('Login')
    return(
    <div className="header">
    <div className="logo-container">
    <img className="logo" src="url" />
    </div>
    <div className="nav-items">
    <ul>
    <li><Link to = "/">Home</Link></li>
    <li><Link to = "/about">About</Link></li>
    <li>Contact Us</li>
    <li>Cart</li>
    </ul>
    </div>
    <button onClick = {()=>{btnLogin == 'Login' ? setbtnLogin('Logout') : setbtnLogin('Login')}}>{btnLogin}</button>
    </div>
    )
    } 

    export default Header

