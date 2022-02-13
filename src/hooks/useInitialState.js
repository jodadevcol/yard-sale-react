import { useState } from "react";

const initialState = { cart: [] }

function useInitialState() {
  const [state, setState] = useState(initialState)

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload]
    })
  }

  /* Delete product of Cart */
  const removeToCart = (payload, valueIndex) => {
    setState({
      ...state,
      cart: state.cart.filter(
        (item, index) => {
          /* return item.id !== payload && index !== valueIndex */
          return index !== valueIndex
        }
      )
    })
  }

  return {
    state,
    addToCart,
    removeToCart
  }
}

export default useInitialState