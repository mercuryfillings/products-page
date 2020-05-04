import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <div>
      <nav className='nav'>
        <Link className='logo' to="/">
          <h1 className='logo'>ProductsApp</h1>
        </Link>
      </nav>
    </div>
  )
}
