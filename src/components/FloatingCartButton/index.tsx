import { ShoppingCart } from '@phosphor-icons/react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../Button'
import { OrderItemQuatity } from '../Header/styles'
import { FloatingContainer } from './styles'
import { OrdersContext } from '../../context/OrderContext'
import { useContext } from 'react'

export interface FloatingCartButtonProps {}
export const FloatingCartButton: React.FC<FloatingCartButtonProps> = () => {
  const { totalDrinksOnTheOrder } = useContext(OrdersContext)
  const navigate = useNavigate()
  return (
    <FloatingContainer>
      <Button
        color="yellow"
        variant="light"
        round
        onClick={() => navigate('/checkout')}
      >
        <ShoppingCart weight="fill" size={22} />
        <OrderItemQuatity>{totalDrinksOnTheOrder()}</OrderItemQuatity>
      </Button>
    </FloatingContainer>
  )
}
