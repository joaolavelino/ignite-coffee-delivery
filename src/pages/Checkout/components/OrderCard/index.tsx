import { Trash } from '@phosphor-icons/react'
import { useContext } from 'react'
import { Button } from '../../../../components/Button'
import { FlexBox } from '../../../../components/FlexBox'
import { QuantitySelector } from '../../../../components/QuantitySelector'
import { OrdersContext } from '../../../../context/OrderContext'
import { OrderItem } from '../../../../models/coffee'
import { OrderCardContainer } from './styles'

export interface OrderCardProps {
  item: OrderItem
}
export const OrderCard: React.FC<OrderCardProps> = ({ item }) => {
  const { changeQuantityOfItem, removeItem } = useContext(OrdersContext)
  return (
    <OrderCardContainer>
      <FlexBox gap={2} mb={2}>
        <img src={item.item.imageUrl} alt={item.item.name} />
        <FlexBox direction="column" gap={0.5} full>
          <FlexBox justifyContent="space-between" full>
            <p>{item.item.name}</p>
            <h4>CHF {(item.item.price * item.quantity).toFixed(2)}</h4>
          </FlexBox>
          <FlexBox gap={1}>
            <QuantitySelector
              addOne={() => changeQuantityOfItem(item.id, 1)}
              reduceOne={() => changeQuantityOfItem(item.id, -1)}
              quantity={item.quantity}
            />
            <Button onClick={() => removeItem(item.id)} variant="gray">
              <Trash />
              Entfernen
            </Button>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </OrderCardContainer>
  )
}
