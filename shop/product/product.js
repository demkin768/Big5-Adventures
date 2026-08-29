/*=========================================
BIG5 ADVENTURES
product.js — standalone product detail page
=========================================*/

(function () {

    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get("id"), 10);
    const product = products.find(p => p.id === productId);

    const detailEl = document.getElementById("productDetail");
    const likeGridEl = document.getElementById("likeGrid");
    const pageTitleEl = document.getElementById("pageTitle");

    if (!product) {
        if (detailEl) {
            detailEl.innerHTML = "<p>Sorry, we couldn't find that product. <a href='/shop/'>Back to Shop</a></p>";
        }
        return;
    }

    let selectedAnimal = null;
    let selectedImage = product.image;

    if (product.animals && product.animals.length) {
        selectedAnimal = product.animals[0].name;
        selectedImage = product.animals[0].image;
    }

    if (pageTitleEl) pageTitleEl.textContent = `Big5 Adventures | ${product.name}`;

    const colorSwatches = (product.colours || [])
        .filter(c => COLOR_CLASS_MAP[c.toLowerCase()])
        .map(c => `<span class="color ${COLOR_CLASS_MAP[c.toLowerCase()]}" title="${c}" onclick="toggleSelect(this)"></span>`)
        .join("");

    const sizeButtons = (product.sizes && product.sizes.length > 1)
        ? product.sizes.map(s => `<button type="button" onclick="toggleSelect(this)">${s}</button>`).join("")
        : "";

    const animalThumbs = product.animals
        ? `<div class="variant-scroll" id="detailAnimalScroll">${product.animals.map((a, i) => `
            <div class="variant-thumb${i === 0 ? " selected" : ""}" data-animal="${a.name}" data-image="${a.image}" title="${a.name}" onclick="selectDetailAnimal(this)">
                <img src="${a.image}" alt="${a.name}">
                <span>${a.name}</span>
            </div>
          `).join("")}</div>`
        : "";

    detailEl.innerHTML = `
        <div class="product-detail-grid">
            <div class="product-detail-image">
                <img id="detailImage" src="${selectedImage}" alt="${product.name}">
            </div>
            <div class="product-detail-info">
                <h2>${product.name}</h2>
                <div class="rating">⭐ ${product.rating}</div>
                <p class="product-detail-description">${product.description}</p>
                <div class="price" id="detailPrice">$${product.price}</div>

                ${colorSwatches ? `<div class="variant-label">Colour:</div><div class="colors">${colorSwatches}</div>` : ""}
                ${product.animals ? `<div class="variant-label">Choose design:</div>${animalThumbs}` : ""}
                ${sizeButtons ? `<div class="variant-label">Size:</div><div class="sizes">${sizeButtons}</div>` : ""}

                <div class="product-detail-buttons">
                    <button class="cart-button" id="detailAddCart">
                        <i class="fas fa-cart-shopping"></i> Add To Cart
                    </button>
                    <button class="btn btn-whatsapp" id="detailQuickOrder">
                        <i class="fab fa-whatsapp"></i> Quick Order via WhatsApp
                    </button>
                </div>
            </div>
        </div>
    `;

    window.selectDetailAnimal = function (el) {
        document.querySelectorAll("#detailAnimalScroll .variant-thumb").forEach(t => t.classList.remove("selected"));
        el.classList.add("selected");
        selectedAnimal = el.dataset.animal;
        selectedImage = el.dataset.image;
        document.getElementById("detailImage").src = selectedImage;
    };

    function currentSelections(){
        const sizeEl = detailEl.querySelector(".sizes button.selected");
        const colorEl = detailEl.querySelector(".colors .color.selected");
        return {
            size: sizeEl ? sizeEl.textContent.trim() : null,
            color: colorEl ? colorEl.getAttribute("title") : null,
            animal: selectedAnimal
        };
    }

    document.getElementById("detailAddCart").addEventListener("click", function(){

        const { size, color, animal } = currentSelections();
        const variantParts = [size, color, (animal && animal !== "Plain") ? animal : null].filter(Boolean);
        const cartId = variantParts.length ? `${product.id}-${variantParts.join("-")}` : String(product.id);
        const cartName = variantParts.length ? `${product.name} (${variantParts.join(", ")})` : product.name;

        const existing = cart.find(item => (item.cartId || String(item.id)) === cartId);

        if (existing) {
            existing.qty++;
        } else {
            cart.push({ ...product, cartId, name: cartName, image: selectedImage, size, color, animal, qty: 1 });
        }

        saveCart();
        showToast("Item added to Cart");

        this.classList.add("added");
        setTimeout(() => this.classList.remove("added"), 1200);
    });

    document.getElementById("detailQuickOrder").addEventListener("click", function(){

        const { size, color, animal } = currentSelections();
        const variantParts = [size, color, (animal && animal !== "Plain") ? animal : null].filter(Boolean);
        const name = variantParts.length ? `${product.name} (${variantParts.join(", ")})` : product.name;

        let message = `Hi Big5 Adventures! I'd like to order:\n\n`;
        message += `${name} - $${product.price}\n\n`;
        message += `Please confirm availability and delivery details. Thank you!`;

        const url = `https://wa.me/254701941527?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    });

    /*=========================================
    YOU MIGHT ALSO LIKE — 4 random other products
    =========================================*/

    if (likeGridEl) {

        const others = products.filter(p => p.id !== product.id);
        const shuffled = others.sort(() => Math.random() - 0.5).slice(0, 4);

        likeGridEl.innerHTML = shuffled.map(p => `
            <a class="like-card" href="/shop/product/?id=${p.id}">
                <img src="${p.image}" alt="${p.name}">
                <h4>${p.name}</h4>
                <span class="like-price">$${p.price}</span>
            </a>
        `).join("");
    }

})();