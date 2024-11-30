import { Route, Routes } from "react-router-dom"
import { HomePage, AboutPage } from "../pages"
import { Navbar } from "../components"
import { CartPage } from "../pages/CartPage"


export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </>
    )
}