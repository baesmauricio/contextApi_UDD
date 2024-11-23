import { AppRouter } from "./routes/AppRouter"
import { CartProvider } from "./context/Cart/cartGlobalState"


export const App = () => {
  return (  
    <CartProvider>
      <AppRouter />
    </CartProvider>
  )
}