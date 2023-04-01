import React from 'react'
import { FlexBox } from '../../components/FlexBox'
import { AddressForm } from './components/AddressForm'
import { MyOrder } from './components/MyOrder'
import { PaymentSelector } from './components/PaymentSelector'
import { FormPannel, StyledSection } from './styles'
export interface CheckoutProps {}
export const Checkout: React.FC<CheckoutProps> = () => {
  return (
    <StyledSection>
      <FormPannel>
        <AddressForm />
        <PaymentSelector />
      </FormPannel>

      <MyOrder />
    </StyledSection>
  )
}
