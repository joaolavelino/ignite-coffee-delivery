import { ShoppingCart } from '@phosphor-icons/react'
import React, { useContext, useState } from 'react'
import { Drink } from '../../models/coffee'
import { Button } from '../Button'
import { FlexBox } from '../FlexBox'
import { QuantitySelector } from '../QuantitySelector'
import { CardContainer } from './style'
import { OrdersContext } from '../../context/OrderContext'

export interface DrinkCardProps {
  drink: Drink
}
export const DrinkCard: React.FC<DrinkCardProps> = ({ drink }) => {
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useContext(OrdersContext)

  function addOne() {
    setQuantity((prev) => prev + 1)
  }
  function reduceOne() {
    quantity > 1 && setQuantity((prev) => prev - 1)
  }

  const addToOrder = () => {
    addItem(drink.id, quantity)
    setQuantity(1)
  }

  return (
    <CardContainer>
      <img src={drink.imageUrl} alt="" />
      <FlexBox gap={1.5} direction="column" centralized>
        <h4>{drink.name}</h4>
        <p>{drink.description}</p>
        <FlexBox
          full
          alignItems="center"
          justifyContent="space-between"
          gap={0.5}
        >
          <FlexBox centralized gap={0.25}>
            <p className="currency">R$</p>
            <h5>{drink.price}</h5>
          </FlexBox>
          <FlexBox gap={0.5}>
            <QuantitySelector
              quantity={quantity}
              addOne={addOne}
              reduceOne={reduceOne}
            />
            <Button onClick={addToOrder}>
              <ShoppingCart weight="fill" />
            </Button>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </CardContainer>
  )
}
