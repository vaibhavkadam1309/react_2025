import { useState } from "react"

const Header = () => {
    const [btnLogin,setbtnLogin] = useState('Login')
    return(
    <div className="header">
    <div className="logo-container">
    <img className="logo" src="url" />
    </div>
    <div className="nav-items">
    <ul>
    <li>Home</li>
    <li>About Us</li>
    <li>Contact Us</li>
    <li>Cart</li>
    </ul>
    </div>
    <button onClick = {()=>{btnLogin == 'Login' ? setbtnLogin('Logout') : setbtnLogin('Login')}}>{btnLogin}</button>
    </div>
    )
    } 

    export default Header

