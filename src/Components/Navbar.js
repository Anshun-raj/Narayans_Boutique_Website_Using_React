import { Link } from "react-router-dom";
import "../Style/Navbar.css";
function Navbar(props)
{
  return(
    <div className="navbar">
       <div className="navLeft">
           <h2>{props.title}</h2>
       </div>
       <div className="navRight">
           <li>
              <Link to="/" className="x">
                Home
              </Link>
           </li>
           <li>
              <Link to="/about" className="x">
                About
              </Link>
           </li>
           <li>
              <Link to="/product" className="x">
                Product
              </Link>
           </li>
           <li>
              <Link to="/review" className="x">
                Review
              </Link>
           </li>
           <li>
              <Link to="/contact" className="x">
                Contact
              </Link>
           </li>
       </div>
    </div>
  )
}
export default Navbar;