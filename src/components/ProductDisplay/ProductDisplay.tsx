import type { ProductDisplayProps } from "../../types";


function ProductDisplay({product, }: ProductDisplayProps) {
    return (
        <div>
            <h1>Product Information</h1>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <p>{product.imageUrl}</p>
            <p>In stock: {product.inStock}</p>
            <p></p>
        </div>
    )
}

export default ProductDisplay