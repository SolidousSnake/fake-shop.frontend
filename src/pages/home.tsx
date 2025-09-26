import Products from "../component/Products";
import Filters from "../component/Filter";
import Cart from "../component/Cart";

import {CartItem, Product} from "../type/types";
import React, {useEffect, useState} from "react";

const Home: React.FC = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<CartItem[]>([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch("https://fakestoreapi.com/products");
            const data: Product[] = await res.json();
            setProducts(data);
            setFilteredProducts(data);
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        let result = [...products];
        if (category !== "all") {
            result = result.filter(p => p.category === category);
        }
        if (search.trim() !== "") {
            result = result.filter(p =>
                p.title.toLowerCase().includes(search.toLowerCase())
            );
        }
        setFilteredProducts(result);
    }, [products, category, search]);

    const addToCart = (product: Product) => {
        setCart(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (id: number) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    const updateQuantity = (id: number, quantity: number) => {
        setCart(prev =>
            prev.map(item =>
                item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
            )
        );
    };
    
    return (
        <section className="home">
            <Filters
                category={category}
                setCategory={setCategory}
                search={search}
                setSearch={setSearch}
            />

            <main>
                <Products products={filteredProducts} addToCart={addToCart} />
            </main>

            <Cart
                items={cart}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
            />
        </section>
    );
};

export default Home;
