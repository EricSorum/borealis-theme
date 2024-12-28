import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li className="dropdown-link">
          <div className="navbar-link"><a href="/">About Me</a></div>
        </li>
        <li className="dropdown-link">
          <div className="navbar-link"><a href="/">Music</a></div>
        </li>
        <li className="dropdown-link">
          <div className="navbar-link"><a href="/">Videos</a></div>
        </li>
        <li className="dropdown-link">
          <div className="navbar-link"><a href="/">Events</a></div>
        </li>
      </ul>
    </nav>
  )
}