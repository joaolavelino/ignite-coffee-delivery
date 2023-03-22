export type Drink = {
  id: string
  name: string
  description: string
  tags: string[]
  price: number
  imageUrl: string
}

export interface OrderItem {
  id: string
  item: Drink
  quantity: number
  subTotal: number
}

export interface Address {
  street: string
  number: string
  complement: string
  district: string
  zip: string
  city: string
}

export type Order = {
  id: string
  date: Date | null
  items: OrderItem[]
  address: Address | null
  payment: 'Debit card' | 'Credit card' | 'Cash' | null
}

export interface OrdersContextData {
  orders: Order[]
  currentOrder: Order | null
  message: string | null
  addItem: (itemId: string, quantity: number) => void
  removeItem: (itemId: string) => void
  addAddress: (address: Address) => void
  confirmOrder: () => void
}

export interface OrdersStateType {
  orders: Order[]
  currentOrder: Order
  message: string | null
}
