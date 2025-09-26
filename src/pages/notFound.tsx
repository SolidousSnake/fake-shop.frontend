import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
    return (
        <section className="not-found">
            <h1>404 — страница не найдена</h1>
            <p>
                Вернуться на <Link to="/">главную</Link>.
            </p>
        </section>
    );
};

export default NotFound;
