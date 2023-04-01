import React from 'react'
import { PlusMinusButton, SelectorContainer } from './styles'
export interface QuantitySelectorProps {
  addOne: () => void
  reduceOne: () => void
  quantity: number
}
export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  addOne,
  reduceOne,
  quantity,
}) => {
  return (
    <SelectorContainer>
      <PlusMinusButton onClick={reduceOne} disabled={quantity <= 1}>
        -
      </PlusMinusButton>
      <p>{quantity}</p>
      <PlusMinusButton onClick={addOne}>+</PlusMinusButton>
    </SelectorContainer>
  )
}
