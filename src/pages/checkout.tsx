import React, { useState } from "react";

const Checkout: React.FC = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        address: "",
        card: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Заказ оформлен на имя ${form.name}. Спасибо за покупку!`);
    };

    return (
        <div className="checkout-container"> 
            <h1>💳 Оформление заказа</h1>
            <form className="checkout-form" onSubmit={handleSubmit}>
                <div>
                    <label>Имя</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Адрес доставки</label>
                    <input
                        type="text"
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Номер карты</label>
                    <input
                        type="text"
                        name="card"
                        value={form.card}
                        onChange={handleChange}
                        required
                        placeholder="1234 5678 9012 3456"
                    />
                </div>
                <button type="submit">✅ Оплатить</button>
            </form>
        </div>
    );
};

export default Checkout;
