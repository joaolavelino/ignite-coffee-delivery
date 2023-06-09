import {
  Address,
  Order,
  OrderItem,
  OrdersStateType,
  PaymentMethods,
} from '../../models/coffee'
import { Actions } from './actions'
import drinks from '../../data-menu.json'
import { useContext } from 'react'
import { OrdersContext } from '../../context/OrderContext'

export const reducerFunction = (state: OrdersStateType, action: Actions) => {
  const { type, payload } = action
  switch (type) {
    case 'ADD_ITEM_TO_ORDER':
      {
        const updatedOrder = addItem(
          payload.itemId,
          payload.quantity,
          state.currentOrder
        )
        console.log(updatedOrder)
        return {
          ...state,
          currentOrder: updatedOrder,
          isError: false,
        }
      }
      break
    case 'CHANGE_QUANTITY_OF_ITEM':
      {
        const updatedQuantityOrder = addItem(
          payload.itemId,
          payload.amount,
          state.currentOrder
        )
        console.log(updatedQuantityOrder)

        return {
          ...state,
          currentOrder: updatedQuantityOrder,
          isError: false,
        }
      }
      break
    case 'REMOVE_ITEM_FROM_ORDER':
      {
        const orderWithoutItem = removeItem(payload.itemId, state.currentOrder)
        return {
          ...state,
          currentOrder: orderWithoutItem,
          isError: false,
        }
      }
      break
    case 'ADD_ADDRESS_TO_ORDER':
      {
        const updatedAdress = addAdress(payload.address, state.currentOrder)
        return {
          ...state,
          currentOrder: updatedAdress,
          isError: false,
        }
      }
      break
    case 'CONFIRM_ORDER':
      {
        const updatedState = confirmOrder(state)
        return updatedState
      }
      break
    case 'CHANGE_PAYMENT':
      {
        const updatedPayment = choosePayment(
          payload.payment,
          state.currentOrder
        )
        return {
          ...state,
          currentOrder: updatedPayment,
          isError: false,
        }
      }
      break
    case 'RESET_MESSAGE':
      {
        return {
          ...state,
          isError: false,
          error: '',
        }
      }
      break

    default:
      return { ...state }
  }
}

const emptyOrder: Order = {
  id: String(new Date().getTime()),
  date: null,
  address: null,
  items: [],
  payment: null,
}

function addItem(itemId: string, quantity: number, currentOrder: Order): Order {
  console.log(itemId, quantity)
  const drinkToAdd = drinks.filter((el) => el.id === itemId)[0]

  let updatedItemList: OrderItem[] = currentOrder.items.filter(
    (el) => el.id != itemId
  )

  //check if drink is already on the order
  const addedItemAlreadyInOrder: OrderItem | undefined =
    currentOrder.items.find((el) => el.id === itemId)

  //if it is the
  const currentQuantity = addedItemAlreadyInOrder
    ? addedItemAlreadyInOrder.quantity
    : 0
  const updatedQuantity = quantity + currentQuantity

  const newOrderItemObject: OrderItem = {
    id: itemId,
    item: drinkToAdd,
    quantity: updatedQuantity,
    subTotal: drinkToAdd.price * quantity,
  }

  updatedItemList.push(newOrderItemObject)

  return {
    ...currentOrder,
    items: updatedItemList,
  }
}

function removeItem(itemId: string, currentOrder: Order): Order {
  return {
    ...currentOrder,
    items: currentOrder.items.filter((el) => el.id !== itemId),
  }
}

function addAdress(address: Address, currentOrder: Order): Order {
  return {
    ...currentOrder,
    address,
  }
}

function choosePayment(option: PaymentMethods, currentOrder: Order): Order {
  return {
    ...currentOrder,
    payment: option,
  }
}

const totalPrice = (order: Order): number => {
  let price = 0
  order.items.forEach(
    (item) => (price = price + item.quantity * item.item.price)
  )
  return +price.toFixed(2)
}

function confirmOrder(state: OrdersStateType): OrdersStateType {
  if (state.currentOrder?.address == null)
    return {
      ...state,
      isError: true,
      error: 'Geben Sie bitte eine Adresse ein',
    }
  if (state.currentOrder?.items.length == 0)
    return {
      ...state,
      isError: true,
      error: 'Ihr Warenkorb ist leer!',
    }
  if (state.currentOrder?.payment == null)
    return {
      ...state,
      isError: true,
      error: 'Bitte wáhlen Sie einen Zahlungsart aus!',
    }
  const total = totalPrice(state.currentOrder)

  const orderToBeConfirmed: Order = {
    ...state.currentOrder,
    date: new Date(),
  }

  return {
    currentOrder: emptyOrder,
    isError: false,
    orders: [...state.orders, orderToBeConfirmed],
    error: 'Die Bestellung wurde bestätigt',
  }
}
