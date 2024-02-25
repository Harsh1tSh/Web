document.addEventListener('DOMContentLoaded', function() {
    loadProducts(); // Simulate loading products
});

function loadProducts() {
    // Simulated product data - replace with actual data fetched from backend
    const products = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 100 },
    ];

    const productsContainer = document.getElementById('products');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `<h2>${product.name}</h2><p>$${product.price}</p><button>Add to Cart</button>`;
        productsContainer.appendChild(productElement);
    });
}
