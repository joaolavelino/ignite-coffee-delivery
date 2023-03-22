import { createContext, ReactNode, useReducer } from 'react'
import { Address, OrdersContextData, OrdersStateType } from '../models/coffee'
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
  message: '',
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

  const { currentOrder, message, orders } = orderState

  return (
    <OrdersContext.Provider
      value={{
        currentOrder,
        message,
        orders,
        addItem,
        removeItem,
        addAddress,
        confirmOrder,
      }}
    >
      {props.children}
    </OrdersContext.Provider>
  )
}
