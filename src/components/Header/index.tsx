import React, { useContext } from 'react'
import { Link, Route, useNavigate } from 'react-router-dom'
import {
  HeaderContainer,
  Navigation,
  NavigationItem,
  OrderItemQuatity,
} from './styles'
import {
  ClockCounterClockwise,
  ShoppingBagOpen,
  ShoppingCart,
} from '@phosphor-icons/react'
import { Button } from '../Button'
import { OrdersContext } from '../../context/OrderContext'

export const Header: React.FC = () => {
  const { totalDrinksOnTheOrder } = useContext(OrdersContext)
  const navigate = useNavigate()

  const quantity = totalDrinksOnTheOrder()

  return (
    <HeaderContainer>
      <Link to={'/'}>
        <h1>Coffee delivery</h1>
        <img src="/assets/logo-sm.png" alt="" />
      </Link>
      <Navigation>
        <ul>
          <Button
            color="yellow"
            variant="light"
            onClick={() => navigate('/checkout')}
            disabled={quantity == 0}
          >
            <ShoppingCart weight="fill" size={22} />
            <OrderItemQuatity>{totalDrinksOnTheOrder()}</OrderItemQuatity>
          </Button>
          <Button variant="light" onClick={() => navigate('/history')}>
            <ClockCounterClockwise size={22} weight="fill" />
          </Button>
        </ul>
      </Navigation>
    </HeaderContainer>
  )
}
