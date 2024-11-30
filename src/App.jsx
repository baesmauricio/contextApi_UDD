import { AppRouter } from "./routes/AppRouter"
import { CartProvider } from "./context/Cart/CartGlobalState"


export const App = () => {
  return (  
    <CartProvider>
      <AppRouter />
    </CartProvider>
  )
}