import { ACTION_HAS_ERRORED, ACTION_IS_PROCESSING, ACTION_IS_SUCCESS } from '../constants/actionTypes'

/**
 * Action sets hasErrored flag to true if some error happened.
 * @param bool boolean state.
 * @returns {{type: string, hasErrored: *}}
 */
export function itemsHasErrored (bool) {
  return {
    type: ACTION_HAS_ERRORED,
    hasErrored: bool,
  }
}

/**
 * Action sets isLoading flag to true during content fetching.
 * @param bool boolean state.
 * @returns {{type: string, isLoading: *}}
 */
export function itemsIsLoading (bool) {
  return {
    type: ACTION_IS_PROCESSING,
    isLoading: bool,
  }
}

/**
 * Action notifies about success data fetching and returns fetched items.
 * @param items fetched data.
 * @returns {{type: string, items: *}}
 */
export function itemsFetchDataSuccess (items) {
  return {
    type: ACTION_IS_SUCCESS,
    items,
  }
}

/**
 * Fetches items from specified url.
 * @param url API url from which data is fetched.
 * @returns {Function}
 */
export function itemsFetchData (url, params) {
  return (dispatch) => {
    dispatch(itemsIsLoading(true))

    fetch(url, params)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        dispatch(itemsIsLoading(false))
        return response
      })
      .then((response) => response.json())
      .then((items) => dispatch(itemsFetchDataSuccess(items)))
      .catch(() => dispatch(itemsHasErrored(true)))
  }
}