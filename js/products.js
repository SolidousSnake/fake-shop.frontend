function renderProducts(products) {
    const container = document.getElementById('products');
    container.innerHTML = '';

    if (products.length === 0) {
        container.innerHTML = '<p>Ничего не найдено</p>';
        return;
    }

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <div class="title">${product.title}</div>
      <div class="price">$${product.price}</div>
      <button class="btn">В корзину</button>
    `;

        card.querySelector('button').addEventListener('click', () => {
            cart.add(product);
        });

        container.appendChild(card);
    });
}
