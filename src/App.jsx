/* Contexts */
import AppContext from "contexts/AppContext"
/* Hooks */
import useCartState from "hooks/useCartState"
/* Routes */
import { MainRoutes } from "routes"
/* Styles */
import styles from "./App.css"

function App() {
  const initialState = useCartState()

  return (
    <AppContext.Provider value={initialState}>
      <MainRoutes></MainRoutes>
    </AppContext.Provider>
  )
}

export default App
