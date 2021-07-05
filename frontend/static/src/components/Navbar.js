import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'


function Navbar(props) {
  return(
    <nav>
      <ul className="nav-links">
        <li>{!Cookies.get('Authorization') && <Link to="/" className="nav-link">Login</Link>}</li>
        <li>{!Cookies.get('Authorization') && <Link to="/register" className="nav-link">Register</Link>}</li>
        <li>{!!Cookies.get('Authorization') && <Link to="/userhomepage" className="nav-link">Home Page</Link>}</li>
        <li>{!!Cookies.get('Authorization') && <Link to="/" className="nav-link" onClick={() => props.handleLogout('login')}>Logout</Link>}</li>
      </ul>
    </nav>
  )
}

export default Navbar
