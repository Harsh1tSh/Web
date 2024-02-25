let totalItems = 0;
let totalPrice = 0;

document.querySelectorAll('.addToCart').forEach(button => {
    button.addEventListener('click', () => {
        totalItems++;
        totalPrice += 10; // Assuming each item costs $10
        document.getElementById('totalItems').textContent = totalItems;
        document.getElementById('totalPrice').textContent = totalPrice;
    });
});

document.getElementById('checkoutButton').addEventListener('click', function() {
    alert(`Thank you for your purchase! Total Price: $${totalPrice}`);
    // Reset cart (for simplicity)
    totalItems = 0;
    totalPrice = 0;
    document.getElementById('totalItems').textContent = totalItems;
    document.getElementById('totalPrice').textContent = totalPrice;
    // Here we would integrate with a real payment system
});
