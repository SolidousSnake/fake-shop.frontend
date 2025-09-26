import React from "react";
import {ProductCardProps} from "../type/types";

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
    return (
        <div className="card">
            <img src={product.image} alt={product.title} />
            <h3 className="title">{product.title}</h3>
            <p className="price">${product.price.toFixed(2)}</p>
            <button className="btn" onClick={() => addToCart(product)}>
                Добавить в корзину
            </button>
        </div>
    );
};

export default ProductCard;
