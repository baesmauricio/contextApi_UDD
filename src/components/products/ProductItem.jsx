import { useContext } from "react"
import { CartContext } from "../../context/Cart/cartContext"

export const ProductItem = ({ product }) => {
    const { title, image, price, description } = product; 

    const { addToCart } = useContext(CartContext)



    return(
        <div className="product-item">
            <div className="product-item__header">
                <img className="product-item__image" src={image} alt={title} />    
                <h2>{title}</h2>
            </div>

            <div className="product-item__body">
                <p>Precio {price}</p>
                <p>{description}</p>
                <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
            </div>
        </div>
    )
}