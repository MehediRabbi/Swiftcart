const categoryContainer = document.getElementById("category-buttons");
const productGrid = document.getElementById("product-grid");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");

let cart = JSON.parse(localStorage.getItem("cart")) || [];
updateCartCount();

/* ✅ Scroll */
function scrollToProducts() {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

/* ✅ Load Categories */
async function loadCategories() {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const categories = await res.json();

  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.innerText = cat;

    btn.onclick = () => {
      document.querySelectorAll(".category-buttons button")
        .forEach(b => b.classList.remove("active"));

      btn.classList.add("active");
      loadProducts(`https://fakestoreapi.com/products/category/${cat}`);
    };

    categoryContainer.appendChild(btn);
  });
}

/* ✅ Load Products */
async function loadProducts(url = "https://fakestoreapi.com/products") {
  productGrid.innerHTML = "<p>Loading...</p>";

  const res = await fetch(url);
  const products = await res.json();

  displayProducts(products);
}

/* ✅ Display Products */
function displayProducts(products) {
  productGrid.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${product.image}">
      <h3>${product.title.substring(0, 40)}...</h3>
      <p><strong>$${product.price}</strong></p>
      <p>${product.category}</p>
      <p>⭐ ${product.rating.rate}</p>
      <button onclick="showDetails(${product.id})">Details</button>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    productGrid.appendChild(card);
  });
}

/* ✅ Details Modal */
async function showDetails(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();

  modalBody.innerHTML = `
    <h2>${product.title}</h2>
    <img src="${product.image}" style="width:100%; height:200px; object-fit:contain;">
    <p>${product.description}</p>
    <p><strong>$${product.price}</strong></p>
    <p>⭐ ${product.rating.rate}</p>
    <button onclick="addToCart(${product.id})">Add to Cart</button>
  `;

  modal.classList.remove("hidden");
}

/* ❌ Close Modal */
document.getElementById("close-modal").onclick = () => {
  modal.classList.add("hidden");
};

/* ✅ Cart */
function addToCart(id) {
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  document.getElementById("cart-count").innerText = cart.length;
}

/* 🚀 Init */
loadCategories();
loadProducts();