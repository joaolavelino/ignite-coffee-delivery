import { CaretDown, CaretUp } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'
import { Button } from '../../../components/Button'
import { FlexBox } from '../../../components/FlexBox'
import { Order } from '../../../models/coffee'
import { formatDate } from '../../../util/formatDate'
import { totalPrice } from '../../../util/totalPrice'
import { StyledHistoryCard } from './styles'

export interface HistoryCardProps {
  order: Order
  isOpen: boolean
  expand: () => void
  reduce: () => void
}
export const HistoryCard: React.FC<HistoryCardProps> = ({
  order,
  isOpen,
  expand,
  reduce,
}) => {
  const date = new Date(order.date!)
  const { color } = useTheme()

  function handleDisplay() {
    isOpen ? reduce() : expand()
  }
  return (
    <StyledHistoryCard>
      <FlexBox full key={order.id} direction="column">
        <FlexBox
          full
          justifyContent="space-between"
          gap={2}
          alignItems="center"
        >
          <FlexBox full justifyContent="space-between" alignItems="center">
            <h4>{order.date && formatDate(date)}</h4>
            <h4>CHF {totalPrice(order).toFixed(2)}</h4>
          </FlexBox>
          <Button onClick={handleDisplay} variant="gray" size="sm">
            {isOpen ? (
              <CaretUp color={color.brand[500]} weight="bold" size={16} />
            ) : (
              <CaretDown color={color.brand[500]} weight="bold" size={16} />
            )}
          </Button>
        </FlexBox>
        {isOpen && (
          <FlexBox full gap={0.5} direction="column" py={1}>
            <FlexBox full justifyContent="space-between">
              <h4>
                Lieferadresse:{' '}
                <strong>
                  {order.address?.street}, {order.address?.number}
                </strong>
              </h4>

              <p>Auftragsnummer: {order.id}</p>
            </FlexBox>
            <hr />
            {order.items.map((item) => (
              <FlexBox key={item.id} alignItems="center" gap={1}>
                <img src={item.item.imageUrl} alt={item.item.name} />
                <h4>
                  {item.quantity}x - {item.item.name} = CHF{' '}
                  {item.subTotal.toFixed(2)}
                </h4>
              </FlexBox>
            ))}
          </FlexBox>
        )}
      </FlexBox>
    </StyledHistoryCard>
  )
}
