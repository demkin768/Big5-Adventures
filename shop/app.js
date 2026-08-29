/*=========================================
BIG5 ADVENTURES SHOP
app.js
=========================================*/

let cart = JSON.parse(localStorage.getItem("big5_cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("big5_wishlist")) || [];
let currentQuickViewId = null;

// Fixed end date/time for the current sale — shared by the countdown timer AND the
// "SALE" badges on products. To run a new sale, just change this one line — the
// countdown and every "SALE" badge site-wide will pick it up automatically.
const SALE_END = new Date("2026-08-31T23:59:59").getTime();

function isSaleActive(){
    return Date.now() < SALE_END;
}

const productGrid = document.getElementById("productGrid");
const cartCount = document.getElementById("cart-count");
const wishlistCount = document.getElementById("wishlist-count");
const cartItems = document.getElementById("cartItems");
const subtotal = document.getElementById("subtotal");
const searchInput = document.getElementById("searchInput");

/*=========================================
LOAD PRODUCTS
=========================================*/

const COLOR_CLASS_MAP = {
    khaki: "khaki",
    olive: "olive",
    brown: "brown",
    black: "black",
    white: "white",
    green: "green",
    "jungle green": "green",
    grey: "grey",
    gray: "grey"
};

function renderProducts(list = products) {

    if (!productGrid) return;

    productGrid.innerHTML = "";

    if (list.length === 0) {
        productGrid.innerHTML = "<p class='empty-cart'>No products match your search.</p>";
        return;
    }

    list.forEach(product => {

        const isWishlisted = wishlist.includes(product.id);
        const showBadge = product.badge && (product.badge !== "SALE" || isSaleActive());

        productGrid.innerHTML += `

        <div class="product-card" id="product-${product.id}">

            ${showBadge ? `<span class="badge ${product.badge.toLowerCase()}">${product.badge}</span>` : ""}

            <button class="wishlist${isWishlisted ? " active" : ""}" onclick="toggleWishlist(${product.id}, this)">
                <i class="${isWishlisted ? "fas" : "far"} fa-heart"></i>
            </button>

            <img src="${product.image}" alt="${product.name}" onclick="location.href='/shop/product/?id=${product.id}'" style="cursor:pointer;">

            <div class="product-info">

                <h3>${product.name}</h3>

                <div class="rating">
                    ⭐ ${product.rating}
                </div>

                <div class="price">$${product.price}</div>

                <div class="product-buttons">
                    <button class="cart-button" onclick="location.href='/shop/product/?id=${product.id}'">
                        <i class="fas fa-cart-shopping"></i> Add To Cart
                    </button>
                    <button class="quick-button" onclick="quickView(${product.id})">
                        Quick View
                    </button>
                </div>

            </div>

        </div>

        `;

    });

}

/*=========================================
SELECTION HELPERS (size / colour toggle, animal toggle + swipe)
=========================================*/

function toggleSelect(el){
    const wasSelected = el.classList.contains("selected");
    el.parentElement.querySelectorAll(":scope > *").forEach(sib => sib.classList.remove("selected"));
    if (!wasSelected) {
        el.classList.add("selected");
    }
}

/*=========================================
TOAST NOTIFICATIONS
=========================================*/

let toastTimeout = null;

function showToast(message){

    const toast = document.getElementById("toast");
    const toastMessage = document.getElementById("toastMessage");
    if (!toast || !toastMessage) return;

    toastMessage.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove("show");
    }, 2200);
}

/*=========================================
ADD TO CART
=========================================*/

function addToCart(id, btnEl){

    const product = products.find(p => p.id === id);
    if (!product) return;

    const existing = cart.find(item => (item.cartId || String(item.id)) === String(id));

    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    saveCart();
    showToast("Item added to Cart");

    if (btnEl) {
        btnEl.classList.add("added");
        setTimeout(() => btnEl.classList.remove("added"), 1200);
    }
}

/*=========================================
SAVE CART
=========================================*/

function saveCart(){
    localStorage.setItem("big5_cart", JSON.stringify(cart));
    updateCart();
}

/*=========================================
UPDATE CART
=========================================*/

function updateCart(){

    if (cartCount) {
        cartCount.innerText = cart.reduce((a, b) => a + b.qty, 0);
    }

    if (!cartItems) return;

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(item => {

        const lineTotal = item.price * item.qty;
        total += lineTotal;
        const key = item.cartId || item.id;

        cartItems.innerHTML += `

        <div class="cart-item">
            <img src="${item.image}">
            <div class="cart-details">
                <h4>${item.name}</h4>
                <p class="cart-price">$${lineTotal.toFixed(2)}</p>
                <div class="qty-controls">
                    <button class="qty-btn" onclick="changeQty('${key}', -1)">−</button>
                    <span class="qty-value">${item.qty}</span>
                    <button class="qty-btn" onclick="changeQty('${key}', 1)">+</button>
                </div>
                <button class="remove-item" onclick="removeCart('${key}')">Remove</button>
            </div>
        </div>

        `;

    });

    if (cart.length === 0) {
        cartItems.innerHTML = "<p class='empty-cart'>Your cart is empty.</p>";
    }

    if (subtotal) {
        subtotal.innerText = "$" + total.toFixed(2);
    }

    const cartTotalEl = document.getElementById("cartTotal");
    if (cartTotalEl) {
        cartTotalEl.innerText = "$" + total.toFixed(2);
    }

}

/*=========================================
CHANGE QUANTITY
=========================================*/

function changeQty(key, delta){

    const item = cart.find(i => String(i.cartId || i.id) === String(key));
    if (!item) return;

    item.qty = Math.max(1, item.qty + delta);

    saveCart();
}

/*=========================================
REMOVE ITEM
=========================================*/

function removeCart(key){
    cart = cart.filter(item => (item.cartId || String(item.id)) !== String(key));
    saveCart();
}

/*=========================================
WISHLIST
=========================================*/

function toggleWishlist(id, btnEl){

    const index = wishlist.indexOf(id);
    const added = index === -1;

    if (added) {
        wishlist.push(id);
    } else {
        wishlist.splice(index, 1);
    }

    localStorage.setItem("big5_wishlist", JSON.stringify(wishlist));
    updateWishlist();
    showToast(added ? "Item added to Wishlist" : "Item removed from Wishlist");

    if (btnEl) {
        btnEl.classList.toggle("active", added);
        const icon = btnEl.querySelector("i");
        if (icon) {
            icon.classList.toggle("fas", added);
            icon.classList.toggle("far", !added);
        }
    }
}

/*=========================================
UPDATE WISHLIST
=========================================*/

function updateWishlist(){
    if (wishlistCount) {
        wishlistCount.innerText = wishlist.length;
    }
    renderWishlist();
}

function renderWishlist(){

    const wishlistItems = document.getElementById("wishlistItems");
    if (!wishlistItems) return;

    if (wishlist.length === 0) {
        wishlistItems.innerHTML = "<p class='empty-cart'>Your wishlist is empty.</p>";
        return;
    }

    wishlistItems.innerHTML = wishlist.map(id => {

        const product = products.find(p => p.id === id);
        if (!product) return "";

        return `
        <div class="cart-item">
            <img src="${product.image}">
            <div class="cart-details">
                <h4>${product.name}</h4>
                <p class="cart-price">$${product.price}</p>
                <button class="wishlist-add-btn" onclick="addToCart(${product.id})">
                    <i class="fas fa-cart-shopping"></i> Add to Cart
                </button>
                <button class="remove-item" onclick="toggleWishlist(${product.id})">Remove</button>
            </div>
        </div>
        `;

    }).join("");
}

/*=========================================
SEARCH
=========================================*/

const searchButton = document.querySelector(".search-box button");

function runSearch(){

    const keyword = searchInput.value.toLowerCase();

    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(keyword) ||
        product.category.toLowerCase().includes(keyword)
    );

    renderProducts(filtered);

    document.getElementById("featured").scrollIntoView({ behavior: "smooth" });
}

if (searchInput && searchButton) {

    searchButton.addEventListener("click", runSearch);

    searchInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            runSearch();
        }
    });

    searchInput.addEventListener("input", () => {
        if (searchInput.value.trim() === "") {
            renderProducts(products);
        }
    });
}

/*=========================================
QUICK VIEW
=========================================*/

let currentQuickAnimal = null;
let currentQuickSize = null;
let currentQuickColor = null;

function quickView(id){

    const product = products.find(p => p.id === id);
    if (!product) return;

    currentQuickViewId = id;
    currentQuickAnimal = null;
    currentQuickSize = null;
    currentQuickColor = null;

    document.getElementById("quickTitle").innerText = product.name;
    document.getElementById("quickPrice").innerText = "$" + product.price;
    document.getElementById("quickImage").src = product.image;
    document.getElementById("quickDescription").innerText = product.description;

    const variantsEl = document.getElementById("quickVariants");
    let variantsHTML = "";

    const colorSwatches = (product.colours || [])
        .filter(c => COLOR_CLASS_MAP[c.toLowerCase()])
        .map(c => `<span class="color ${COLOR_CLASS_MAP[c.toLowerCase()]}" title="${c}" onclick="toggleSelect(this); currentQuickColor = this.classList.contains('selected') ? this.getAttribute('title') : null;"></span>`)
        .join("");

    if (colorSwatches) {
        variantsHTML += `<div class="variant-label">Colour:</div><div class="colors">${colorSwatches}</div>`;
    }

    if (product.animals && product.animals.length) {

        currentQuickAnimal = product.animals[0].name;

        variantsHTML += `
            <div class="variant-label">Choose design:</div>
            <div class="variant-scroll">
                ${product.animals.map((a, i) => `
                    <div class="variant-thumb${i === 0 ? " selected" : ""}" data-animal="${a.name}" data-image="${a.image}" onclick="selectQuickVariant(this)">
                        <img src="${a.image}" alt="${a.name}">
                        <span>${a.name}</span>
                    </div>
                `).join("")}
            </div>
        `;

        document.getElementById("quickImage").src = product.animals[0].image;
    }

    if (product.sizes && product.sizes.length > 1) {
        const sizeButtons = product.sizes.map(s => `<button type="button" onclick="toggleSelect(this); currentQuickSize = this.classList.contains('selected') ? this.textContent.trim() : null;">${s}</button>`).join("");
        variantsHTML += `<div class="variant-label">Size:</div><div class="sizes">${sizeButtons}</div>`;
    }

    variantsEl.innerHTML = variantsHTML;

    document.getElementById("quickView").classList.add("active");
    document.getElementById("overlay").classList.add("active");
}

function selectQuickVariant(el){
    document.querySelectorAll(".variant-thumb").forEach(t => t.classList.remove("selected"));
    el.classList.add("selected");
    currentQuickAnimal = el.dataset.animal;
    document.getElementById("quickImage").src = el.dataset.image;
}

const quickAddCart = document.getElementById("quickAddCart");

if (quickAddCart) {
    quickAddCart.onclick = () => {
        if (currentQuickViewId === null) return;

        const product = products.find(p => p.id === currentQuickViewId);
        if (!product) return;

        let image = product.image;
        if (product.animals && currentQuickAnimal) {
            const variant = product.animals.find(a => a.name === currentQuickAnimal);
            if (variant) image = variant.image;
        }

        const animalPart = (product.animals && currentQuickAnimal && currentQuickAnimal !== "Plain") ? currentQuickAnimal : null;
        const variantParts = [currentQuickSize, currentQuickColor, animalPart].filter(Boolean);

        const cartId = variantParts.length ? `${product.id}-${variantParts.join("-")}` : String(product.id);
        const cartName = variantParts.length ? `${product.name} (${variantParts.join(", ")})` : product.name;

        const existing = cart.find(item => (item.cartId || String(item.id)) === cartId);

        if (existing) {
            existing.qty++;
        } else {
            cart.push({ ...product, cartId, name: cartName, image, qty: 1 });
        }

        saveCart();
        showToast("Item added to Cart");
        closeQuickView();
    };
}

function closeQuickView(){
    document.getElementById("quickView").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
}

const closeQuick = document.getElementById("closeQuick");

if (closeQuick) {
    closeQuick.onclick = closeQuickView;
}

/*=========================================
CART DRAWER OPEN / CLOSE
=========================================*/

function openCart(){
    document.getElementById("wishlistDrawer").classList.remove("active");
    document.getElementById("cartDrawer").classList.add("active");
    document.getElementById("overlay").classList.add("active");
    if (typeof showCartView === "function") showCartView();
}

function closeCartDrawer(){
    document.getElementById("cartDrawer").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
}

const cartButton = document.querySelector(".cart-btn");

if (cartButton) {
    cartButton.onclick = openCart;
}

const closeCart = document.getElementById("closeCart");

if (closeCart) {
    closeCart.onclick = closeCartDrawer;
}

/*=========================================
WISHLIST DRAWER OPEN / CLOSE
=========================================*/

function openWishlistDrawer(){
    document.getElementById("cartDrawer").classList.remove("active");
    document.getElementById("wishlistDrawer").classList.add("active");
    document.getElementById("overlay").classList.add("active");
}

function closeWishlistDrawer(){
    document.getElementById("wishlistDrawer").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
}

const wishlistButton = document.getElementById("wishlistBtn");

if (wishlistButton) {
    wishlistButton.onclick = openWishlistDrawer;
}

const closeWishlist = document.getElementById("closeWishlist");

if (closeWishlist) {
    closeWishlist.onclick = closeWishlistDrawer;
}

/*=========================================
OVERLAY
=========================================*/

const overlay = document.getElementById("overlay");

if (overlay) {
    overlay.onclick = () => {
        overlay.classList.remove("active");
        document.getElementById("cartDrawer").classList.remove("active");
        document.getElementById("wishlistDrawer").classList.remove("active");
        document.getElementById("quickView").classList.remove("active");
    };
}

/*=========================================
FLASH SALE COUNTDOWN
=========================================*/

function startCountdown(){

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if (!daysEl) return;

    const endTime = SALE_END;

    function tick(){

        const remaining = Math.max(0, endTime - Date.now());

        const d = Math.floor(remaining / (1000 * 60 * 60 * 24));
        const h = Math.floor((remaining / (1000 * 60 * 60)) % 24);
        const m = Math.floor((remaining / (1000 * 60)) % 60);
        const s = Math.floor((remaining / 1000) % 60);

        daysEl.innerText = String(d).padStart(2, "0");
        hoursEl.innerText = String(h).padStart(2, "0");
        minutesEl.innerText = String(m).padStart(2, "0");
        secondsEl.innerText = String(s).padStart(2, "0");

        if (remaining <= 0) clearInterval(interval);
    }

    tick();
    const interval = setInterval(tick, 1000);
}

/*=========================================
MOBILE MENU (matches main site behavior)
=========================================*/

const mobileMenu = document.getElementById("mobile-menu");
const navLinksEl = document.getElementById("nav-links");
const headerEl = document.getElementById("header");

if (mobileMenu && navLinksEl) {
    mobileMenu.addEventListener("click", () => {
        navLinksEl.classList.toggle("active");
        mobileMenu.innerHTML = navLinksEl.classList.contains("active")
            ? '<i class="fas fa-times"></i>'
            : '<i class="fas fa-bars"></i>';
    });

    navLinksEl.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinksEl.classList.remove("active");
            mobileMenu.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
}

/*=========================================
STICKY HEADER
=========================================*/

if (headerEl) {
    window.addEventListener("scroll", () => {
        headerEl.classList.toggle("scrolled", window.scrollY > 100);
    });
}

/*=========================================
BACK TO TOP
=========================================*/

const backToTop = document.getElementById("backToTop");

if (backToTop) {
    window.addEventListener("scroll", () => {
        backToTop.classList.toggle("visible", window.scrollY > 300);
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

/*=========================================
CHECKOUT FORM FLOW
=========================================*/

const WHATSAPP_NUMBER = "254701941527";

const checkoutBtn = document.getElementById("checkoutBtn");
const backToCart = document.getElementById("backToCart");
const checkoutForm = document.getElementById("checkoutForm");
const cartView = document.getElementById("cartView");
const checkoutView = document.getElementById("checkoutView");
const cartDrawerTitle = document.getElementById("cartDrawerTitle");

function cartTotal(){
    return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function showCheckoutView(){

    if (cart.length === 0) {
        alert("Your cart is empty. Add a few items before checking out.");
        return;
    }

    document.getElementById("checkoutAmount").textContent = "$" + cartTotal().toFixed(2);
    cartView.style.display = "none";
    checkoutView.style.display = "block";
    cartDrawerTitle.textContent = "Checkout";
}

function showCartView(){
    checkoutView.style.display = "none";
    cartView.style.display = "block";
    cartDrawerTitle.textContent = "Your Cart";
}

if (checkoutBtn) {
    checkoutBtn.onclick = showCheckoutView;
}

if (backToCart) {
    backToCart.onclick = showCartView;
}

if (checkoutForm) {
    checkoutForm.addEventListener("submit", (e) => {
        e.preventDefault();

        if (cart.length === 0) {
            alert("Your cart is empty.");
            return;
        }

        const checkoutInfo = {
            firstName: document.getElementById("checkoutFirstName").value.trim(),
            lastName: document.getElementById("checkoutLastName").value.trim(),
            phone: document.getElementById("checkoutPhone").value.trim(),
            email: document.getElementById("checkoutEmail").value.trim(),
            address: document.getElementById("checkoutAddress").value.trim(),
            country: document.getElementById("checkoutCountry").value,
            amount: cartTotal()
        };

        localStorage.setItem("big5_checkout_info", JSON.stringify(checkoutInfo));
        location.href = "/shop/payment/";
    });
}

/*=========================================
QUICK ORDER VIA WHATSAPP (single item, no cart)
=========================================*/

function quickOrderWhatsApp(){

    if (currentQuickViewId === null) return;

    const product = products.find(p => p.id === currentQuickViewId);
    if (!product) return;

    let name = product.name;
    let image = product.image;

    if (product.animals && currentQuickAnimal) {
        const variant = product.animals.find(a => a.name === currentQuickAnimal);
        if (currentQuickAnimal !== "Plain") name += ` (${currentQuickAnimal})`;
        if (variant) image = variant.image;
    }

    let message = `Hi Big5 Adventures! I'd like to order:\n\n`;
    message += `${name} - $${product.price}\n\n`;
    message += `Please confirm availability and delivery details. Thank you!`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}

const quickOrderBtn = document.getElementById("quickOrderWhatsApp");

if (quickOrderBtn) {
    quickOrderBtn.onclick = quickOrderWhatsApp;
}

/*=========================================
NEWSLETTER FORMS
=========================================*/

document.querySelectorAll(".footer-newsletter, .newsletter form").forEach(form => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for subscribing to our newsletter!");
        form.reset();
    });
});

/*=========================================
INITIALISE
=========================================*/

renderProducts();
updateCart();
updateWishlist();
startCountdown();