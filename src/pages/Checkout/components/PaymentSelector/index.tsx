import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'
import { useContext } from 'react'
import { Button } from '../../../../components/Button'
import { FlexBox } from '../../../../components/FlexBox'
import { OrdersContext } from '../../../../context/OrderContext'
import { PaymentMethods } from '../../../../models/coffee'
import { ButtonList, ButtonWrapper, StyledSection } from './styles'

export interface PaymentSelectorProps {}
export const PaymentSelector: React.FC<PaymentSelectorProps> = () => {
  const { choosePayment, currentOrder } = useContext(OrdersContext)

  const paymentOptions: PaymentMethods[] = ['cash', 'credit', 'debit']

  function renderIcon(value: string) {
    switch (value) {
      case 'cash':
        return (
          <>
            <Money size={24} weight="light" />
            Bargeld
          </>
        )
        break
      case 'credit':
        return (
          <>
            <CreditCard size={24} weight="light" /> Kreditkarte
          </>
        )
        break
      case 'debit':
        return (
          <>
            <Bank size={24} weight="light" />
            EC-karte
          </>
        )
        break
      default:
        return
    }
  }

  return (
    <StyledSection>
      <FlexBox gap={1} alignItems="center">
        <CurrencyDollar size={45} weight="light" />
        <FlexBox direction="column">
          <h5>Zahlungsart</h5>
          <p>Wählen Sie eine Zahlungsmethode aus</p>
        </FlexBox>
      </FlexBox>
      <ButtonList>
        {paymentOptions.map((option) => (
          <ButtonWrapper active={currentOrder?.payment == option} key={option}>
            <Button
              type="button"
              variant="gray"
              size="lg"
              full
              onClick={() => choosePayment(option)}
            >
              {renderIcon(option)}
            </Button>
          </ButtonWrapper>
        ))}
      </ButtonList>
    </StyledSection>
  )
}
