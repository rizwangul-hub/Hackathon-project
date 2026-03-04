

window.onload = function () {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const username = document.getElementById("username");

  const page = window.location.pathname;

  function searchProducts(searchTerm) {
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return;   const container = document.getElementById("productsContainer"); 
    container.innerHTML = "";
    
    if (filteredProducts.length === 0) {
      container.innerHTML = "<p>No products found</p>";
      return;
    }
    
    filteredProducts.forEach((product) => {
      const card = document.createElement("div");
      card.classList.add("product-card");
      
      card.innerHTML = `
        <div class="product-image">
          <img src="${product.image}" alt="${product.title}">
          <button class="home-add-cart" data-id="${product.id}">Add to Cart</button>
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
      
      container.appendChild(card);
    });
  }

  if (username && currentUser) {
    username.innerText = "Hello, " + currentUser.name;
  }
};

/* ================= LOGOUT ================= */

function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "login.html";
}

// Home page
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

const sliderWrapper = document.getElementById("sliderWrapper");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementsByClassName("nav-btn")[0];
const nextBtn = document.getElementsByClassName("nav-btn")[1];
console.log(prevBtn);

let currentIndex = 0;

function updateSlider() {
  sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto Slide
setInterval(() => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSlider();
}, 3000);

nextBtn.addEventListener("click", () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSlider();
});

prevBtn.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slides.length - 1;
  }
  updateSlider();
});

const container = document.getElementById("cardContainer");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
console.log(prev);
console.log(next);
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

next.addEventListener("click", () => {
  if (startIndex + itemsPerPage < categories.length) {
    startIndex += itemsPerPage;
    displayCards();
  }
});

prev.addEventListener("click", () => {
  if (startIndex - itemsPerPage >= 0) {
    startIndex -= itemsPerPage;
    displayCards();
  }
});

displayCards();

const products = [
  {
    id: 1,
    title: "Graphic T-Shirt",
    category: "Men Collection",
    price: 38,
    oldPrice: 49,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
  },
  {
    id: 2,
    title: "Leather Handbag",
    category: "Women Collection",
    price: 80,
    oldPrice: 100,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
  },
  {
    title: "Casual Sweatshirt",
    id: 3,
    category: "Men Collection",
    price: 50,
    oldPrice: 65,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500",
  },
  {
    title: "Running Shoes",
    id: 4,
    category: "Footwear",
    price: 60,
    oldPrice: 75,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
  },
  {
    title: "Evening Dress",
    category: "Women Collection",
    id: 5,
    price: 35,
    oldPrice: 45,
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070?w=500",
  },
  {
    title: "Kids Party Dress",
    category: "Kids Wear",
    id: 6,
    price: 40,
    oldPrice: 55,
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=500",
  },
  {
    title: "Printed Shirt",
    category: "Men Collection",
    id: 7,
    price: 42,
    oldPrice: 55,
    image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=500",
  },
  {
    title: "Women Sandals",
    category: "Footwear",
    price: 35,
    oldPrice: 50,
    id: 8,
    image: "data:image/jpeg;base64,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",
  },
];

const feature = document.getElementById("productsContainer");

products.forEach((product) => {
  const card = document.createElement("div");
  card.classList.add("product-card");

  card.innerHTML = `
    <div class="product-image">
      <img src="${product.image}" alt="${product.title}">
      <button class="home-add-cart" data-id="${product.id}">Add to Cart</button>
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

  const addCartBtn = card.querySelector(".home-add-cart");
  addCartBtn.addEventListener("click", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1
    };
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push(cartItem);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
  });

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
// });
