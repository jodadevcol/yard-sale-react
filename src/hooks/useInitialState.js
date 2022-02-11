import { useState } from "react";

const initialState = { cart: [] }

function useInitialState() {
  const [state, setState] = useState(initialState)

  const addToCart = (playload) => {
    setState({
      ...state,
      cart: [...state.cart, playload]
    })
  }

  return {
    state,
    addToCart
  }
}

export default useInitialState