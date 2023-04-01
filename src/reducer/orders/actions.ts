import { Address, PaymentMethods } from '../../models/coffee'

export enum ActionTypes {
  ADD_ITEM_TO_ORDER = 'ADD_ITEM_TO_ORDER',
  REMOVE_ITEM_FROM_ORDER = 'REMOVE_ITEM_FROM_ORDER',
  ADD_ADDRESS_TO_ORDER = 'ADD_ADDRESS_TO_ORDER',
  CONFIRM_ORDER = 'CONFIRM_ORDER',
  CHANGE_QUANTITY_OF_ITEM = 'CHANGE_QUANTITY_OF_ITEM',
  CHANGE_PAYMENT = 'CHANGE_PAYMENT',
}

export type Actions =
  | {
      type: 'ADD_ITEM_TO_ORDER'
      payload: { itemId: string; quantity: number }
    }
  | {
      type: 'REMOVE_ITEM_FROM_ORDER'
      payload: { itemId: string }
    }
  | {
      type: 'ADD_ADDRESS_TO_ORDER'
      payload: { address: Address }
    }
  | {
      type: 'CONFIRM_ORDER'
      payload: {}
    }
  | {
      type: 'CHANGE_QUANTITY_OF_ITEM'
      payload: { itemId: string; amount: number }
    }
  | {
      type: 'CHANGE_PAYMENT'
      payload: { payment: PaymentMethods }
    }
