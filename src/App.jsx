/* Contexts */
import AppContext from "contexts/AppContext"
/* Hooks */
import useInitialState from "hooks/useInitialState"
/* Routes */
import { MainRoutes } from "routes"
/* Styles */
import styles from "./App.css"

function App() {
  const initialState = useInitialState()

  return (
    <AppContext.Provider value={initialState}>
      <MainRoutes></MainRoutes>
    </AppContext.Provider>
  )
}

export default App
