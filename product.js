const Products = [
  {
    id: 1,
    title: "Smart Watch",
    price: 2500,
    image: "https://picsum.photos/200?1",
  },
  {
    id: 2,
    title: "Wireless Headphones",
    price: 3500,
    image: "https://picsum.photos/200?2",
  },
  {
    id: 3,
    title: "Bluetooth Speaker",
    price: 1800,
    image: "https://picsum.photos/200?3",
  },
  {
    id: 4,
    title: "Laptop Bag",
    price: 1200,
    image: "https://picsum.photos/200?4",
  },
  {
    id: 5,
    title: "Gaming Mouse",
    price: 900,
    image: "https://picsum.photos/200?5",
  },
  {
    id: 6,
    title: "Keyboard",
    price: 1500,
    image: "https://picsum.photos/200?6",
  },
  {
    id: 7,
    title: "Power Bank",
    price: 2000,
    image: "https://picsum.photos/200?7",
  },
  {
    id: 8,
    title: "Phone Cover",
    price: 500,
    image: "https://picsum.photos/200?8",
  },
  {
    id: 9,
    title: "LED Light",
    price: 700,
    image: "https://picsum.photos/200?9",
  },
  {
    id: 10,
    title: "USB Cable",
    price: 300,
    image: "https://picsum.photos/200?10",
  },
  {
    id: 11,
    title: "Tablet Stand",
    price: 1100,
    image: "https://picsum.photos/200?11",
  },
  {
    id: 12,
    title: "Camera Tripod",
    price: 2200,
    image: "https://picsum.photos/200?12",
  },
  {
    id: 13,
    title: "Smart Glasses",
    price: 4500,
    image: "https://picsum.photos/200?13",
  },
  {
    id: 14,
    title: "Mini Fan",
    price: 800,
    image: "https://picsum.photos/200?14",
  },
  {
    id: 15,
    title: "Monitor",
    price: 12000,
    image: "https://picsum.photos/200?15",
  },
  {
    id: 16,
    title: "Desk Lamp",
    price: 1300,
    image: "https://picsum.photos/200?16",
  },
  {
    id: 17,
    title: "VR Headset",
    price: 5000,
    image: "https://picsum.photos/200?17",
  },
  {
    id: 18,
    title: "Microphone",
    price: 2700,
    image: "https://picsum.photos/200?18",
  },
  {
    id: 19,
    title: "SSD Drive",
    price: 6000,
    image: "https://picsum.photos/200?19",
  },
  {
    id: 20,
    title: "Graphic Tablet",
    price: 8000,
    image: "https://picsum.photos/200?20",
  },
];

const getData = (key) => JSON.parse(localStorage.getItem(key)) || [];
const setData = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

let currentPage = 1;
const productsPerPage = 10;

function displayProducts() {
  const container = document.getElementById("product-container");
  if (!container) return;

  container.innerHTML = "";

  const start = (currentPage - 1) * productsPerPage;
  const paginatedItems = Products.slice(start, start + productsPerPage);

  paginatedItems.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("product");

    div.innerHTML = `
      <img src="${product.image}" width="150">
      <h3>${product.title}</h3>
      <p>Rs ${product.price}</p>
      <button class="add-cart" data-id="${product.id}">Add To Cart</button>
      <span class="add-wishlist" data-id="${product.id}" style="cursor:pointer">❤️</span>
    `;

    container.appendChild(div);
  });

  updateCounts();
}

function addToCart(id) {
  let cart = getData("cart");
  const product = Products.find((p) => p.id === id);

  const exist = cart.find((item) => item.id === id);

  if (exist) {
    exist.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  setData("cart", cart);
  updateCounts();
}

function addToWishlist(id) {
  let wishlist = getData("wishlist");
  const product = Products.find((p) => p.id === id);

  if (!wishlist.find((item) => item.id === id)) {
    wishlist.push(product);
    setData("wishlist", wishlist);
    updateCounts();
  }
}

function updateCounts() {
  const cartCount = document.getElementById("cart-count");
  const wishlistCount = document.getElementById("wishlist-count");

  if (cartCount) {
    const cart = getData("cart");
    cartCount.innerText = cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  if (wishlistCount) {
    const wishlist = getData("wishlist");
    wishlistCount.innerText = wishlist.length;
  }
}

function loadCart() {
  const container = document.getElementById("cart-items");
  const totalElement = document.getElementById("total-price");
  if (!container || !totalElement) return;

  const cart = getData("cart");
  container.innerHTML = "";

  let total = 0;

  cart.forEach((item) => {
    total += item.price * item.quantity;

    container.innerHTML += `
      <div>
        <img src="${item.image}" width="80">
        <p>${item.title}</p>
        <p>Rs ${item.price}</p>
        <p>Qty: ${item.quantity}</p>
        <button class="remove-item" data-id="${item.id}">Remove</button>
      </div>
    `;
  });

  totalElement.innerText = total;
}

function removeItem(id) {
  let cart = getData("cart");
  cart = cart.filter((item) => item.id !== id);
  setData("cart", cart);
  loadCart();
  updateCounts();
}

function loadWishlist() {
  const container = document.getElementById("wishlist-items");
  if (!container) return;

  const wishlist = getData("wishlist");
  container.innerHTML = "";

  wishlist.forEach((item) => {
    container.innerHTML += `
      <div>
        <img src="${item.image}" width="80">
        <p>${item.title}</p>
        <p>Rs ${item.price}</p>
      </div>
    `;
  });
}

function setupPagination() {
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  if (!nextBtn || !prevBtn) return;

  nextBtn.addEventListener("click", () => {
    if (currentPage * productsPerPage < Products.length) {
      currentPage++;
      displayProducts();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      displayProducts();
    }
  });
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-cart")) {
    addToCart(Number(e.target.dataset.id));
  }

  if (e.target.classList.contains("add-wishlist")) {
    addToWishlist(Number(e.target.dataset.id));
  }

  if (e.target.classList.contains("remove-item")) {
    removeItem(Number(e.target.dataset.id));
  }
});

document.addEventListener("DOMContentLoaded", () => {
  displayProducts();
  loadCart();
  loadWishlist();
  setupPagination();
  updateCounts();
});
