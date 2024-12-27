import { useState } from 'react'
import './Dropdown.css'

export default function Dropdown() {
  // const listRef = useRef<HTMLElement>();
  const [ menuOpen, toggleMenu ] = useState(false);

  const handleMenu = () => {
    toggleMenu(!menuOpen);
  }

  return (
    <div 
      className="dropdown"
      onMouseEnter={()=> handleMenu()}
      onMouseLeave={()=> handleMenu()}
      onClick={()=> handleMenu()}
    >
      <button id="ropdown-button" className="borealis">Menu</button>
      { menuOpen && (
      <nav id="dropdown-nav">
        <ul>
          <li className="dropdown-link">
            <a href="/">About Me</a>
          </li>
          <li className="dropdown-link">
            <a href="/">Music</a>
          </li>
          <li className="dropdown-link">
            <a href="/">Videos</a>
          </li>
          <li className="dropdown-link">
            <a href="/">Events</a>
          </li>
          <li className="dropdown-link">
            <a href="/">Blog</a>
          </li>
          <li className="dropdown-link">
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
      )}
    </div>
  )
}