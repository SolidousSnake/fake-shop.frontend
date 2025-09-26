import React from "react";
import { ProductsProps } from "../type/types";
import ProductCard from "./ProductCard";

const Products: React.FC<ProductsProps> = ({ products, addToCart }) => {
    return (
        <div id="products">
            {products.length === 0 ? (<p>Нет товаров</p>) : (
                products.map(p => (
                    <ProductCard key={p.id} product={p} addToCart={addToCart} />
                ))
            )}
        </div>
    );
};

export default Products;
