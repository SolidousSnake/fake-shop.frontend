function applyFilters() {
    const category = document.getElementById('categoryFilter').value;
    const search = document.getElementById('searchBox').value.toLowerCase();

    let filtered = allProducts;

    if (category !== 'all') {
        filtered = filtered.filter(p => p.category === category);
    }

    if (search) {
        filtered = filtered.filter(p => p.title.toLowerCase().includes(search));
    }

    renderProducts(filtered);
}
