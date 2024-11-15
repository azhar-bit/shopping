document.addEventListener("DOMContentLoaded", () => {
    const cart = [];
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");

    function updateCart() {
        cartItems.innerHTML = "";
        let total = 0;

        cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - $${item.price}`;
            cartItems.appendChild(li);
            total += item.price;
        });

        totalPrice.textContent = total.toFixed(2);
    }

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", event => {
            const product = event.target.closest(".product");
            const id = product.dataset.id;
            const name = product.querySelector("h3").textContent;
            const price = parseFloat(product.querySelector("p").textContent.replace("$", ""));

            cart.push({ id, name, price });
            updateCart();
        });
    });
});