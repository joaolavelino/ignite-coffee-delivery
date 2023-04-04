import { SmileySad } from '@phosphor-icons/react'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { Button } from '../../../../components/Button'
import { FlexBox } from '../../../../components/FlexBox'
import { OrdersContext } from '../../../../context/OrderContext'
import { OrderCard } from '../OrderCard'
import { OrderContainer } from './styles'

export const MyOrder: React.FC = () => {
  const navigate = useNavigate()
  const { color } = useTheme()
  const {
    currentOrder,
    totalPrice,
    deliveryCost,
    totalWithDelivery,
    confirmOrder,
    error,
  } = useContext(OrdersContext)

  const sortedOrder = currentOrder?.items.sort((a, b) =>
    a.id.localeCompare(b.id)
  )

  function handleConfirmOrder() {
    confirmOrder()
  }

  useEffect(() => {
    error == 'Die Bestellung wurde bestätigt' && navigate('/confirmation')
  }, [error])

  return (
    <OrderContainer>
      <h5>Meine Bestellung</h5>
      {sortedOrder?.map((item) => (
        <OrderCard item={item} key={item.id} />
      ))}
      {sortedOrder?.length == 0 && (
        <FlexBox full centralized gap={1} px={5} py={3} direction="column">
          <FlexBox centralized gap={1}>
            <SmileySad size={40} weight="light" color={color.yellow[700]} />
            <h4>Ihr Warenkorb ist noch leer!</h4>
          </FlexBox>
          <Button full color="yellow" onClick={() => navigate('/')}>
            Menu
          </Button>
        </FlexBox>
      )}
      <FlexBox full direction="column" gap={0.75}>
        <FlexBox full justifyContent="space-between">
          <p>Artikel insgesamt</p>
          <p>CHF {totalPrice().toFixed(2)}</p>
        </FlexBox>
        <FlexBox full justifyContent="space-between">
          <p>Versandkosten</p>
          <p>CHF {deliveryCost.toFixed(2)}</p>
        </FlexBox>
        <FlexBox full justifyContent="space-between" mt={0.5}>
          <h4>Gesamt</h4>
          <h4>CHF {totalWithDelivery.toFixed(2)}</h4>
        </FlexBox>
      </FlexBox>
      <Button size="lg" color="yellow" onClick={handleConfirmOrder}>
        Bestätigen
      </Button>
    </OrderContainer>
  )
}
