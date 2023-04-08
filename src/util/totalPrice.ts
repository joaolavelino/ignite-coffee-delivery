import { Order } from '../models/coffee'

export const totalPrice = (order: Order): number => {
  let price = 0
  order.items.forEach(
    (item) => (price = price + item.quantity * item.item.price)
  )
  return +price.toFixed(2)
}
