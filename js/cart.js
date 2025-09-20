const cart = {
    items: [],

    add(product) {
        this.items.push(product);
        this.updateCartUI();
    },

    remove(index) {
        this.items.splice(index, 1);
        this.updateCartUI();
    },

    get count() {
        return this.items.length;
    },

    get total() {
        return this.items.reduce((sum, p) => sum + p.price, 0);
    },

    updateCartUI() {
        document.getElementById('cartCount').textContent = this.count;
        document.getElementById('cartTotal').textContent = this.total.toFixed(2);

        const cartList = document.getElementById('cartItems');
        cartList.innerHTML = '';

        this.items.forEach((product, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
        ${product.title} - $${product.price.toFixed(2)}
        <button class="removeBtn">❌</button>
      `;

            li.querySelector('.removeBtn').addEventListener('click', () => {
                this.remove(index);
            });

            cartList.appendChild(li);
        });
    }
};
