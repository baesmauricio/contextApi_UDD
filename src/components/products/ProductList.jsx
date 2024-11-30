import { useState, useEffect } from "react";
import { getAllProducts } from "../../services/productApi";
import { ProductItem } from "./ProductItem";

export const ProductList = () => {
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        getAllProducts().then((data) => setProducts(data))
    }, [])

    return (
        <div className="product-list">
            {
                products.length > 0 ? (
                    products.map((product) => (
                        <ProductItem product={product} key={product.id} />
                    ))
                ) : (
                    <p>Cargando Productos...</p>
                )
            }
        </div>
    )
}