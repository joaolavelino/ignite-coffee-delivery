import { createContext, ReactNode, useEffect, useReducer } from 'react'
import {
  Address,
  OrdersContextData,
  OrdersStateType,
  PaymentMethods,
} from '../models/coffee'
import { reducerFunction } from '../reducer/orders/reducer'

export interface OrderContextModel {}

export const OrdersContext = createContext({} as OrdersContextData)

interface OrdersContextProviderProps {
  children: ReactNode
}

const initialState: OrdersStateType = {
  currentOrder: {
    id: String(new Date().getTime()),
    date: null,
    address: null,
    items: [],
    payment: null,
  },
  orders: [],
  isError: false,
  error: '',
}

export function OrdersContextProvider(props: OrdersContextProviderProps) {
  const [orderState, dispatch] = useReducer(
    reducerFunction,
    initialState,
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@ignite-coffee-delivery:ordersState-1.0.0'
      )
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      } else {
        return initialState
      }
    }
  )
  //update local storage
  useEffect(() => {
    const ordersJson = JSON.stringify(orderState)
    localStorage.setItem(
      '@ignite-coffee-delivery:ordersState-1.0.0',
      ordersJson
    )
  }, [orderState])

  //functions with the dispatches
  function addItem(itemId: string, quantity: number) {
    dispatch({ type: 'ADD_ITEM_TO_ORDER', payload: { itemId, quantity } })
  }
  function removeItem(itemId: string) {
    dispatch({ type: 'REMOVE_ITEM_FROM_ORDER', payload: { itemId } })
  }
  function addAddress(address: Address) {
    dispatch({ type: 'ADD_ADDRESS_TO_ORDER', payload: { address } })
  }
  function confirmOrder() {
    dispatch({ type: 'CONFIRM_ORDER', payload: {} })
  }
  function changeQuantityOfItem(itemId: string, amount: number) {
    dispatch({ type: 'CHANGE_QUANTITY_OF_ITEM', payload: { itemId, amount } })
  }
  function choosePayment(payment: PaymentMethods) {
    dispatch({ type: 'CHANGE_PAYMENT', payload: { payment } })
  }
  function resetError() {
    dispatch({ type: 'RESET_MESSAGE', payload: {} })
  }

  const { currentOrder, orders, isError, error } = orderState

  const totalDrinksOnTheOrder = (): number => {
    let count = 0
    currentOrder.items.forEach((item) => (count = count + item.quantity))
    return count
  }

  const totalPrice = (): number => {
    let price = 0
    currentOrder.items.forEach(
      (item) => (price = price + item.quantity * item.item.price)
    )
    return +price.toFixed(2)
  }

  const deliveryCost = 5.0

  const totalWithDelivery: number = +(deliveryCost + totalPrice()).toFixed(2)

  return (
    <OrdersContext.Provider
      value={{
        totalDrinksOnTheOrder,
        currentOrder,
        orders,
        addItem,
        removeItem,
        addAddress,
        confirmOrder,
        changeQuantityOfItem,
        totalPrice,
        deliveryCost,
        totalWithDelivery,
        choosePayment,
        isError,
        resetError,
        error,
      }}
    >
      {props.children}
    </OrdersContext.Provider>
  )
}
