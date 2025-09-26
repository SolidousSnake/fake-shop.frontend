export interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
}

export interface CartItem extends Product {
    quantity: number;
}

export interface FiltersProps {
    category: string;
    setCategory: (c: string) => void;
    search: string;
    setSearch: (s: string) => void;
}

export interface ProductCardProps {
    product: Product;
    addToCart: (product: Product) => void;
}

export interface ProductsProps {
    products: Product[];
    addToCart: (product: Product) => void;
}

export interface CartProps {
    items: CartItem[];
    removeFromCart: (id: number) => void;
    updateQuantity: (id: number, qty: number) => void;
}