import { SmileySad } from '@phosphor-icons/react'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { Button } from '../../components/Button'
import { FlexBox } from '../../components/FlexBox'
import { OrdersContext } from '../../context/OrderContext'
import { HistoryCard } from './History Card'
import {
  ButtonContainer,
  EmptyMessage,
  HistoryHeader,
  ResposiveEmptyMessage,
} from './styles'
export interface HistoryProps {}
export const History: React.FC<HistoryProps> = () => {
  const { orders } = useContext(OrdersContext)
  const [openOrder, setOpenOrder] = useState<string>('0')
  const navigate = useNavigate()
  const { color } = useTheme()
  return (
    <section>
      <FlexBox direction="column" gap={3} full>
        <HistoryHeader>
          <h3>Deine Bestellungen</h3>
          <p>Hier sind Ihre letzten Bestellungen hier im Coffee Delivery</p>
          <p>
            Klicken Sie auf die Schaltflächen auf der rechten Seite, um weitere
            Informationen zu erhalten
          </p>
        </HistoryHeader>
        <FlexBox direction="column" full gap={0.5}>
          {orders.map((order) => (
            <HistoryCard
              order={order}
              key={order.id}
              isOpen={openOrder === order.id}
              expand={() => setOpenOrder(order.id)}
              reduce={() => setOpenOrder('0')}
            />
          ))}
        </FlexBox>
        {orders.length == 0 && (
          <EmptyMessage>
            <ResposiveEmptyMessage>
              <SmileySad size={72} weight="light" color={color.yellow[700]} />
              <h4>
                Sie haben noch keine Bestellungen bei uns! Kehren Sie zur
                Startseite zurück, um die Getränke für Ihre erste Bestellung
                auszuwählen!
              </h4>
            </ResposiveEmptyMessage>
            <ButtonContainer>
              <Button
                size="lg"
                full
                color="yellow"
                onClick={() => navigate('/')}
              >
                Zur Startseite
              </Button>
            </ButtonContainer>
          </EmptyMessage>
        )}
      </FlexBox>
    </section>
  )
}
