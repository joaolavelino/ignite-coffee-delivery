import React from 'react'
import { Link } from 'react-router-dom'

export const Header: React.FC = () => {
  return (
    <header>
      <Link to={'/'}>
        <h1>Coffee delivery</h1>
      </Link>
      <span>Curitiba-PR</span>
      <Link to={'/checkout'}>Warenkorb</Link>
      <Link to={'/history'}>Bestellungen</Link>
    </header>
  )
}
