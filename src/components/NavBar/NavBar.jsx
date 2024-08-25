import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header>
        <img className="logoHeader" src="../../../public/logo_eterna_joyas.png" alt="Logo Eterna Joyas" />

        <nav>
            <ul>
                <li>Todos</li>
                <li>Cadenas</li>
                <li>Anillos</li>
                <li>Pulseras</li>
                <li>Aros</li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar
