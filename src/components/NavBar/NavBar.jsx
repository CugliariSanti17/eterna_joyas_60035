import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <Link to="/" className="logoLink">
        <img className="logoHeader" src="../../../img/logo_eterna_joyas.png" alt="Logo Eterna Joyas" />
      </Link>

      <button className="menuButton" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <nav className={menuOpen ? "navOpen" : "navClosed"}>
        <ul>
          <li><NavLink to={"/"} className="navLink">Todos</NavLink></li>
          <li><NavLink to={"category/cadenas"} className="navLink">Cadenas</NavLink></li>
          <li><NavLink to={"category/anillos"} className="navLink">Anillos</NavLink></li>
          <li><NavLink to={"category/pulseras"} className="navLink">Pulseras</NavLink></li>
          <li><NavLink to={"category/aros"} className="navLink">Aros</NavLink></li>
        </ul>
      </nav>

      <CartWidget/>
    </header>
  )
}

export default NavBar
