import { AnimatePresence } from 'framer-motion'
import React, { useContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { OrdersContext } from '../../context/OrderContext'
import { Header } from '../Header'
import { Toast } from '../Toast'

export const Layout: React.FC = () => {
  const { error, resetError, isError } = useContext(OrdersContext)

  useEffect(() => {
    setTimeout(() => {
      resetError()
    }, 2000)
  }, [error])

  return (
    <>
      <AnimatePresence>
        {isError && <Toast text={error} isError={isError} />}
      </AnimatePresence>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}
