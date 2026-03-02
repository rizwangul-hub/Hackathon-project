// Signup and Login javaScript
let users = JSON.parse(localStorage.getItem("users")) || [];

function signup() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  if (!name || !email || !password) {
    message.style.color = "red";
    message.innerText = "Please fill all fields!";
    return;
  }

  const emailExists = users.find((user) => user.email === email);
  if (emailExists) {
    message.style.color = "red";
    message.innerText = "Email already registered!";
    return;
  }

  users.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  message.style.color = "green";
  message.innerText = "Signup successful! Redirecting...";

  setTimeout(() => {
    window.location.href = "login.html";
  }, 1500);
}

function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  const loginMessage = document.getElementById("loginMessage");

  const validUser = users.find(
    (user) => user.email === email && user.password === password,
  );

  if (!validUser) {
    loginMessage.innerText = "Invalid email or password!";
    return;
  }

  localStorage.setItem("currentUser", JSON.stringify(validUser));
  window.location.href = "home.html";
}

window.onload = function () {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const username = document.getElementById("username");

  const page = window.location.pathname;

  if (
    page.includes("home.html") ||
    page.includes("cart.html") ||
    page.includes("wishlist.html") ||
    page.includes("checkout.html")
  ) {
    if (!currentUser) {
      window.location.href = "login.html";
    }
  }

  if (username && currentUser) {
    username.innerText = "Hello, " + currentUser.name;
  }
};

function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "login.html";
}

// Home page
const cartSidebar = document.getElementById("cart-sidebar");

function toggleCart() {
  cartSidebar.classList.toggle("active");
}

const categories = [
  {
    name: "Casual Wear",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
  },
  {
    name: "Western Wear",
    image: "https://images.unsplash.com/photo-1495385794356-15371f348c31?w=500",
  },
  {
    name: "Ethnic Wear",
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=500",
  },
  {
    name: "Kids Wear",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500",
  },

  {
    name: "Sports Wear",
    image: "https://images.unsplash.com/photo-1520975922215-2301b54f38b9?w=500",
  },
  {
    name: "Winter Collection",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500",
  },
  {
    name: "Summer Collection",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500",
  },
  {
    name: "Formal Wear",
    image: "https://images.unsplash.com/photo-1520974735194-9e0ce9b1c1f3?w=500",
  },

  {
    name: "Denim Collection",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500",
  },
  {
    name: "Party Wear",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500",
  },
  {
    name: "Shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
  },
  {
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=500",
  },
];

const container = document.getElementById("cardContainer");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let startIndex = 0;
const itemsPerPage = 4;

function displayCards() {
  container.innerHTML = "";

  const visibleItems = categories.slice(startIndex, startIndex + itemsPerPage);

  visibleItems.forEach((category) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${category.image}" alt="${category.name}">
      <div class="card-content">${category.name}</div>
    `;

    container.appendChild(card);
  });
}

nextBtn.addEventListener("click", () => {
  if (startIndex + itemsPerPage < categories.length) {
    startIndex += itemsPerPage;
    displayCards();
  }
});

prevBtn.addEventListener("click", () => {
  if (startIndex - itemsPerPage >= 0) {
    startIndex -= itemsPerPage;
    displayCards();
  }
});

displayCards();

const products = [
  {
    title: "Graphic T-Shirt",
    category: "Men Collection",
    price: 38,
    oldPrice: 49,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
  },
  {
    title: "Leather Handbag",
    category: "Women Collection",
    price: 80,
    oldPrice: 100,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
  },
  {
    title: "Casual Sweatshirt",
    category: "Men Collection",
    price: 50,
    oldPrice: 65,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500",
  },
  {
    title: "Running Shoes",
    category: "Footwear",
    price: 60,
    oldPrice: 75,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
  },
  {
    title: "Evening Dress",
    category: "Women Collection",
    price: 35,
    oldPrice: 45,
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070?w=500",
  },
  {
    title: "Kids Party Dress",
    category: "Kids Wear",
    price: 40,
    oldPrice: 55,
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=500",
  },
  {
    title: "Printed Shirt",
    category: "Men Collection",
    price: 42,
    oldPrice: 55,
    image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=500",
  },
  {
    title: "Women Sandals",
    category: "Footwear",
    price: 35,
    oldPrice: 50,
    image: "https://images.unsplash.com/photo-1528701800489-20be3c3b5f7b?w=500",
  },
];

const feature = document.getElementById("productsContainer");

products.forEach((product) => {
  const card = document.createElement("div");
  card.classList.add("product-card");

  card.innerHTML = `
    <div class="product-image">
      <img src="${product.image}" alt="${product.title}">
      <button class="add-cart">Add to Cart</button>
    </div>
    <div class="product-info">
      <div class="product-title">${product.title}</div>
      <div class="product-category">${product.category}</div>
      <div class="price">
        $${product.price}
        <span class="old-price">$${product.oldPrice}</span>
      </div>
    </div>
  `;

  feature.appendChild(card);
});

const targetDate = new Date().getTime() + 1000 * 60 * 60 * 24 * 120; // 120 days from now

function updateTimer() {
  const now = new Date().getTime();
  const diff = targetDate - now;

  document.getElementById("days").innerText = Math.floor(
    diff / (1000 * 60 * 60 * 24),
  );
  document.getElementById("hours").innerText = Math.floor(
    (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  document.getElementById("mins").innerText = Math.floor(
    (diff % (1000 * 60 * 60)) / (1000 * 60),
  );
  document.getElementById("secs").innerText = Math.floor(
    (diff % (1000 * 60)) / 1000,
  );
}

setInterval(updateTimer, 1000);

function scrollReviews(scrollOffset) {
  const container = document.querySelector(".review-container");
  container.scrollBy({ left: scrollOffset, behavior: "smooth" });
}

function heart(index) {
  // Select product details dynamically
  const productCard = document.getElementsByClassName("products")[index];
  const title = productCard.querySelector(".productDetails h4").innerText;
  const price = productCard.querySelector(".productDetails h2").innerText;
  const img = productCard.querySelector(".proImg").src;

  // Create product object
  const product = { title, price, img };

  // Get wishlist from localStorage or create empty array
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  // Check if product already exists
  const exists = wishlist.find((item) => item.title === product.title);
  if (!exists) {
    wishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    alert("Added to wishlist!");
  } else {
    alert("Product already in wishlist!");
  }

  // Change heart color
  document.getElementsByClassName("heart")[index].style.backgroundColor = "red";
}
