import { ACTION_HAS_ERRORED, ACTION_IS_PROCESSING, ACTION_IS_SUCCESS } from '../constants/actionTypes'

export function itemsHasErrored (state = false, action) {
  switch (action.type) {
    case ACTION_HAS_ERRORED:
      return action.hasErrored

    default:
      return state
  }
}

export function itemsIsLoading (state = false, action) {
  switch (action.type) {
    case ACTION_IS_PROCESSING:
      return action.isLoading

    default:
      return state
  }
}

export function items (state = [], action) {
  switch (action.type) {
    case ACTION_IS_SUCCESS:
      return action.items

    default:
      return state
  }
}