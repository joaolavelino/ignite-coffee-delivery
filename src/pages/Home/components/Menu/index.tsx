import React from 'react'
import drinks from '../../../../data-menu.json'
import { DrinkCard, DrinkMenu } from './styles'

export interface MenuProps {}
export const Menu: React.FC<MenuProps> = () => {
  return (
    <>
      <h3>Unsere Getränke</h3>
      <DrinkMenu>
        {drinks.map((drink) => (
          <DrinkCard key={drink.id}>
            <img src={drink.imageUrl} alt="" />
            <h4>{drink.name}</h4>
            <p>{drink.description}</p>
          </DrinkCard>
        ))}
      </DrinkMenu>
    </>
  )
}
