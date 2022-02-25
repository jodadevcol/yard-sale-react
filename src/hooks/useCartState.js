import { useState } from "react"

const initialState = { cart: [] }

function useCartState() {
  const [state, setState] = useState(initialState)
  const [isOpenCart, setIsOpenCart] = useState(false)

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    })
  }

  /* Delete product of Cart */
  const removeToCart = (payload, valueIndex) => {
    setState({
      ...state,
      cart: state.cart.filter((item, index) => {
        /* return item.id !== payload && index !== valueIndex */
        return index !== valueIndex
      }),
    })
  }


  const isShoppingCart = () => {
    setIsOpenCart(!isOpenCart)
  }

  return {
    state,
    isOpenCart,
    isShoppingCart,
    addToCart,
    removeToCart,
  }
}

export default useCartState
