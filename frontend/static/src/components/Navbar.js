import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'


function Navbar(props) {
  return(
    <nav>
      <ul className="nav-links">
        <li className="navbar-links"><Link to="/" className="nav-link">Home</Link></li>
        <li className="navbar-links">{!Cookies.get('Authorization') && <Link to="/login" className="nav-link">Login</Link>}</li>
        <li className="navbar-links">{!Cookies.get('Authorization') && <Link to="/register" className="nav-link">Register</Link>}</li>
        <li className="navbar-links">{!!Cookies.get('Authorization') && <Link to="/userhomepage" className="nav-link">Collection</Link>}</li>
        <li className="navbar-links">{!!Cookies.get('Authorization') && <Link to="/wishlist" className="nav-link">Wishlist</Link>}</li>
        <li className="navbar-links">{!!Cookies.get('Authorization') && <Link to="/search" className="nav-link">Search</Link>}</li>
        <li className="navbar-links">{!!Cookies.get('Authorization') && <Link to="/profile" className="nav-link">Profile</Link>}</li>
        <li className="navbar-links">{!!Cookies.get('Authorization') && <Link to="/" className="nav-link" onClick={() => props.handleLogout('login')}>Logout</Link>}</li>
      </ul>
    </nav>
  )
}

export default Navbar
