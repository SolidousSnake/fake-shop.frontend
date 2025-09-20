let allProducts = []; 

async function getProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok)
            throw new Error('Ошибка загрузки данных');
        return await response.json();
    } catch (err) {
        console.error(err);
        return [];
    }
}

getProducts().then(data => {
    allProducts = data;
    renderProducts(allProducts);

    document.getElementById('categoryFilter').addEventListener('change', applyFilters);
    document.getElementById('searchBox').addEventListener('input', applyFilters);
});
