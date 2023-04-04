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
  zipCode: string
  city: string
}

export type Order = {
  id: string
  date: Date | null
  items: OrderItem[]
  address: Address | null
  payment: PaymentMethods | null
}

export interface OrdersContextData {
  orders: Order[]
  currentOrder: Order | null
  addItem: (itemId: string, quantity: number) => void
  changeQuantityOfItem: (itemId: string, amount: number) => void
  removeItem: (itemId: string) => void
  addAddress: (address: Address) => void
  choosePayment: (payment: PaymentMethods) => void
  confirmOrder: () => void
  totalDrinksOnTheOrder: () => number
  totalPrice: () => number
  deliveryCost: number
  totalWithDelivery: number
  isError: boolean
  resetError: () => void
}

export interface OrdersStateType {
  orders: Order[]
  currentOrder: Order
  isError: boolean
}

export type PaymentMethods = 'credit' | 'debit' | 'cash'
export type MessageType = {
  text: string
  status: 'idle' | 'success' | 'error'
}
