import { ADD_VIEWS, REMOVE_VIEWS } from './types'

export const addViews = (number) => {
  return {
    type: ADD_VIEWS,
    payload: Number(number)
  }
}

export const removeViews = () => {
  return {
    type: REMOVE_VIEWS
  }
}

