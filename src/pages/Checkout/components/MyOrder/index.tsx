import { useContext } from 'react'
import { Button } from '../../../../components/Button'
import { FlexBox } from '../../../../components/FlexBox'
import { OrdersContext } from '../../../../context/OrderContext'
import { OrderCard } from '../OrderCard'
import { OrderContainer } from './styles'

export const MyOrder: React.FC = () => {
  const { currentOrder, totalPrice, deliveryCost, totalWithDelivery } =
    useContext(OrdersContext)

  const sortedOrder = currentOrder?.items.sort((a, b) =>
    a.id.localeCompare(b.id)
  )

  return (
    <OrderContainer>
      <h5>Meine Bestellung</h5>
      {sortedOrder?.map((item) => (
        <OrderCard item={item} key={item.id} />
      ))}
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
      <Button
        size="lg"
        color="yellow"
        onClick={() => window.alert('Ihre Bestellung wurde versendet')}
      >
        Bestätigen
      </Button>
    </OrderContainer>
  )
}
