import React from 'react'
import { DrinkCard } from '../../../../components/DrinkCard'
import drinks from '../../../../data-menu.json'
import { DrinkMenu } from './styles'

export interface MenuProps {}
export const Menu: React.FC<MenuProps> = () => {
  return (
    <section>
      <h3>Unsere Getränke</h3>
      <DrinkMenu>
        {drinks.map((drink) => (
          <DrinkCard drink={drink} key={drink.id} />
        ))}
      </DrinkMenu>
    </section>
  )
}
