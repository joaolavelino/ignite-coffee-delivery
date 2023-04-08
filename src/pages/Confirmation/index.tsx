import { Clock, MapPin } from '@phosphor-icons/react'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { FlexBox } from '../../components/FlexBox'
import { IconBall } from '../../components/IconBall'
import { OrdersContext } from '../../context/OrderContext'
import {
  ButtonContainer,
  HeaderConfirmation,
  OrderInfoBox,
  RespnsiveContainer,
} from './styles'

export interface ConfirmationProps {}
export const Confirmation: React.FC<ConfirmationProps> = () => {
  const { orders } = useContext(OrdersContext)
  const lastOrder = orders[orders.length - 1]
  const navigate = useNavigate()

  return (
    <section>
      <FlexBox direction="column" gap={2} mt={2} full mb={4}>
        <HeaderConfirmation>
          <h5>UHUL! bestätigte Bestellung!</h5>
          <p>Warte jetzt nur noch, bis der Kaffee bald zu dir kommt</p>
        </HeaderConfirmation>
        <RespnsiveContainer>
          <OrderInfoBox>
            <FlexBox gap={1} alignItems="center">
              <IconBall color="brand" tone={500}>
                <MapPin weight="fill" />
              </IconBall>
              <FlexBox direction="column">
                <p>
                  Anlieferung in{' '}
                  <strong>
                    {lastOrder.address?.street},{lastOrder.address?.number}
                    {lastOrder.address?.complement &&
                      ` - ${lastOrder.address?.complement}`}
                  </strong>
                </p>
                <p>
                  {lastOrder.address?.district}, {lastOrder.address?.city}
                </p>
              </FlexBox>
            </FlexBox>
            <FlexBox gap={1} alignItems="center">
              <IconBall color="yellow" tone={500}>
                <Clock weight="fill" />
              </IconBall>
              <FlexBox direction="column">
                <p>Lieferprognose</p>
                <p>
                  <strong>20 - 25 Minuten</strong>
                </p>
              </FlexBox>
            </FlexBox>
            <FlexBox gap={1} alignItems="center">
              <IconBall color="yellow" tone={700}>
                <Clock weight="fill" />
              </IconBall>
              <FlexBox direction="column">
                <p>Bezahlverfahren</p>
                <p>
                  <strong>
                    {lastOrder.payment == 'cash'
                      ? 'geld'
                      : lastOrder.payment == 'credit'
                      ? 'Kreditkarte'
                      : lastOrder.payment == 'debit' && 'EC-Karte'}
                  </strong>
                </p>
              </FlexBox>
            </FlexBox>
          </OrderInfoBox>
          <img src="/assets/delivery.png" alt="Lieferung mit Motorrad" />
        </RespnsiveContainer>
      </FlexBox>
      <ButtonContainer>
        <Button size="lg" color="yellow" onClick={() => navigate('/')} full>
          Zurück zur Startseite
        </Button>
      </ButtonContainer>
    </section>
  )
}
