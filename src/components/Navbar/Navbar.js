import './navbar.css'
import { Link } from "react-router-dom";




function Navbar() {
  return (
   
    <header className="">
        <nav>
            <div className="logo">
                <Link to="/" className="logoStyle">WFD</Link> 
            </div>
            <ul className="navbar-ul">
                <li>
                    <Link to="/" className="headerlink-title">HOME</Link> 
                </li>
                <li>
                    <Link to="/products" className="headerlink-title">PRODUCT</Link> 
                </li>
                <li>
                    <Link to="/about" className="headerlink-title">ABOUT</Link> 
                </li>
                <li>
                    <Link to="/contact" className="headerlink-title">CONTACT</Link> 
                </li>

            </ul>
        </nav>
    </header>
   
  )
}

export default Navbar