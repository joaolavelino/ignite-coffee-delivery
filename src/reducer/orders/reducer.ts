import { Address, Order, OrderItem, OrdersStateType } from '../../models/coffee'
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
        return {
          ...state,
          currentOrder: updatedOrder,
          message: 'Artikel hinzugefügt',
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
  const drinkToAdd = drinks.filter((el) => el.id === itemId)[0]

  const newOrderItemObject: OrderItem = {
    id: itemId,
    item: drinkToAdd,
    quantity,
    subTotal: drinkToAdd.price * quantity,
  }

  let updatedItemList: OrderItem[] = currentOrder.items
  if (currentOrder.items.find((el) => el.id === itemId)) {
    updatedItemList.filter((el) => el.id !== itemId)
    updatedItemList.push(newOrderItemObject)
  } else {
    updatedItemList.push(newOrderItemObject)
  }

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
