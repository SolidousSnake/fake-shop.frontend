import React from "react";
import {FiltersProps} from "../type/types";

const Filters: React.FC<FiltersProps> = ({category, setCategory, search, setSearch}) => {
    return (
        <section className="controls">
            <select value={category} onChange={e => setCategory(e.target.value)}>
                <option value="all">Все категории</option>
                <option value="electronics">Электроника</option>
                <option value="jewelery">Украшения</option>
                <option value="men's clothing">Мужская одежда</option>
                <option value="women's clothing">Женская одежда</option>
            </select>
            <input
                type="search"
                placeholder="Поиск товара..."
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
        </section>
    );
};

export default Filters;
