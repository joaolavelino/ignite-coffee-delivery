import React, { useEffect, useState } from 'react'
import { FloatingCartButton } from '../../components/FloatingCartButton'
import { Banner } from './components/Banner'
import { Menu } from './components/Menu'

export interface HomeProps {}
export const Home: React.FC<HomeProps> = () => {
  const [showCart, setShowCart] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleFloatingButton)
    return () => {
      window.removeEventListener('scroll', handleFloatingButton)
    }
  }, [])

  const handleFloatingButton = () => {
    window.scrollY > 100 ? setShowCart(true) : setShowCart(false)
  }

  return (
    <>
      {showCart && <FloatingCartButton />}
      <Banner />
      <Menu />
    </>
  )
}
