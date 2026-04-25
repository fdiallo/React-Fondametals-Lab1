import type { ProductDisplayProps } from "../../types";

/**
 * Define ProductDisplay component
 */
function ProductDisplay({ product, showDescription, showStockStatus, onAddToCart, children }: ProductDisplayProps) {
    return (
        <div>
            <h1>Product Information</h1>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{showDescription ? product.description : ""}</p>
            <p>{showStockStatus ? "In Stock" : ""}</p>
            <button onClick={() => onAddToCart?.(product.id)}>Add to Cart</button>
            {children}
        </div>
    )
}

export default ProductDisplay