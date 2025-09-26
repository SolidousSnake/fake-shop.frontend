import React, {useState} from "react";
import {CartProps} from "../type/types";
import {Link} from "react-router-dom";

const Cart: React.FC<CartProps> = ({items, removeFromCart, updateQuantity}) => {
    const [isOpen, setIsOpen] = useState(false);

    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

    const handleDecrease = (id: number, currentQuantity: number) => {
        if (currentQuantity <= 1) removeFromCart(id);
        else updateQuantity(id, currentQuantity - 1);
    };

    const handleIncrease = (id: number, quantity: number) => updateQuantity(id, quantity + 1);

    const handleRemove = (id: number) => removeFromCart(id);

    return (
        <>
            {!isOpen && (
                <button className="cart-open-btn" onClick={() => setIsOpen(true)}>
                    🛒 Корзина ({totalItems})
                </button>
            )}

            <aside className={`cart ${isOpen ? "open" : "closed"}`}>
                <button className="cart-close-btn" onClick={() => setIsOpen(false)}>
                    ❌ Закрыть
                </button>

                <div className="cart-content">
                    <h2>🛒 Корзина</h2>
                    <p><strong>Товаров:</strong> {totalItems}</p>
                    <p><strong>Сумма:</strong> ${total.toFixed(2)}</p>

                    {items.length === 0 ? (<p>Корзина пуста</p>) : (
                        <ul>
                            {items.map((item) => (
                                <li key={item.id}>
                                    <div className="cart-item-content">
                                        <div className="cart-item-text">
                                            <div className="cart-item-title">{item.title}</div>
                                            <div className="cart-item-quantity">x {item.quantity}</div>
                                        </div>
                                        <div className="cart-item-controls">
                                            <button className="quantity-btn" onClick={() => handleDecrease(item.id, item.quantity)}>
                                                ➖
                                            </button>
                                            <button className="quantity-btn" onClick={() => handleIncrease(item.id, item.quantity)}>
                                                ➕
                                            </button>
                                            <button className="remove-btn" onClick={() => handleRemove(item.id)}>
                                                ❌
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                    <br/>
                    {items.length > 0 && (
                        <div className="checkout-container">
                            <Link to="/checkout" className="checkout-btn">Оплатить</Link>
                        </div>
                    )}
                </div>
            </aside>
            
        </>
    );
};

export default Cart;
