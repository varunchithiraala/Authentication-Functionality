// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header-container">
    <ul className="nav-menu-list">
      <li className="nav-menu-item">
        <Link to="/" className="nav-item-link">
          Home
        </Link>
      </li>
      <li className="nav-menu-item">
        <Link to="/about" className="nav-item-link">
          About
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
