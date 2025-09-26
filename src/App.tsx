import React from "react";
import {HashRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/home";
import Checkout from "./pages/checkout";
import NotFound from "./pages/notFound";

const App: React.FC = () => {
    return (
        <HashRouter>
            <header>
                <h1>🛒 Fake Shop</h1>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/checkout" element={<Checkout/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </main>
            <footer>
                <p>
                    © 2025 Fake Shop | Данные товаров:{" "}
                    <a href="https://fakestoreapi.com/" target="_blank" rel="noreferrer">
                        Fake Store API
                    </a>
                </p>
            </footer>
        </HashRouter>

    );
};

export default App;
