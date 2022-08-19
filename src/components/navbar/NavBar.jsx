import React from 'react'
import { Link } from 'react-router-dom'
import st from './NavBar.module.css'

function NavBar() {
  return (
    <nav className={st.navbar}>
      <Link className="link" to="/">
        Trend
      </Link>
      <Link className="link" to="/gg">
        Random
      </Link>
    </nav>
  )
}

export default NavBar
