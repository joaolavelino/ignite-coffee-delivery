import {
  Address,
  Order,
  OrderItem,
  OrdersStateType,
  PaymentMethods,
} from '../../models/coffee'
import { Actions } from './actions'
import drinks from '../../data-menu.json'

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
          message: 'Artikel hinzugefügt',
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
          message: 'Artikelmenge aktualiziert',
        }
      }
      break
    case 'REMOVE_ITEM_FROM_ORDER':
      {
        const orderWithoutItem = removeItem(payload.itemId, state.currentOrder)
        return {
          ...state,
          currentOrder: orderWithoutItem,
          message: 'Artikel entfernt',
        }
      }
      break
    case 'ADD_ADDRESS_TO_ORDER':
      {
        const updatedAdress = addAdress(payload.address, state.currentOrder)
        return {
          ...state,
          address: updatedAdress,
          message: 'Adresse hinzugefügt',
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

  // console.log(
  //   addedItemAlreadyInOrder
  //     ? 'this item is already on the order'
  //     : 'this item is not in the order'
  // )

  const newOrderItemObject: OrderItem = {
    id: itemId,
    item: drinkToAdd,
    quantity: updatedQuantity,
    subTotal: drinkToAdd.price * quantity,
  }

  updatedItemList.push(newOrderItemObject)

  // console.log(updatedItemList)

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

function confirmOrder(state: OrdersStateType): OrdersStateType {
  if (state.currentOrder?.address == null)
    return { ...state, message: 'Adresse eingeben!' }
  if (state.currentOrder?.items.length == 0)
    return { ...state, message: 'Ihr Warenkorb ist leer!' }
  if (state.currentOrder?.payment == null)
    return { ...state, message: 'Wählen Sie eine Bezahlungsart!' }

  const orderToBeConfirmed: Order = { ...state.currentOrder, date: new Date() }

  return {
    currentOrder: emptyOrder,
    message: 'Ihre Bestellung wurde bestätigt',
    orders: [...state.orders, orderToBeConfirmed],
  }
}
