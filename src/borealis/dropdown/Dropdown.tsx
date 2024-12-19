import { useState } from 'react'
import './Dropdown.css'

export default function Dropdown() {

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
      <button id="dropdown-button">Menu</button>
      <nav id="dropdown-nav">
        <ul>
          <li>
            About Me
          </li>
          <li>
            Music
          </li>
          <li>
            Videos
          </li>
          <li>
            Events
          </li>
          <li>
            Blog
          </li>
          <li>
            Contact
          </li>
        </ul>
      </nav>
    </div>
  )
}