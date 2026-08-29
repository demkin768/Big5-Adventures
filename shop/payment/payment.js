/*=========================================
BIG5 ADVENTURES
payment.js — order summary + payment method selection
=========================================*/

const COUNTRIES = [
    "",
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Ivory Coast",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Lucia",
    "Samoa",
    "San Marino",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe"
];

document.addEventListener("DOMContentLoaded", () => {

    const paymentPage = document.getElementById("paymentPage");
    let checkoutInfo = JSON.parse(localStorage.getItem("big5_checkout_info") || "null");
    const savedCart = JSON.parse(localStorage.getItem("big5_cart") || "[]");

    if (!checkoutInfo || savedCart.length === 0) {
        paymentPage.innerHTML = `
            <p>We couldn't find an order to pay for. <a href="/shop/">Return to the shop</a> and checkout again.</p>
        `;
        return;
    }

    const total = savedCart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    const itemsHTML = savedCart.map(item => `
        <div class="payment-line">
            <img src="${item.image}" alt="${item.name}">
            <div class="payment-line-details">
                <h4>${item.name}</h4>
                <span>Qty: ${item.qty}</span>
            </div>
            <div class="payment-line-price">$${(item.price * item.qty).toFixed(2)}</div>
        </div>
    `).join("");

    paymentPage.innerHTML = `
        <div class="payment-grid">

            <div class="payment-summary">
                <h2 class="section-title" style="text-align:left;font-size:26px;">Order Summary</h2>
                ${itemsHTML}
                <div class="payment-total-row">
                    <span>Total Due</span>
                    <strong>$${total.toFixed(2)}</strong>
                </div>
            </div>

            <div class="payment-methods-panel">
                <h2 class="section-title" style="text-align:left;font-size:26px;">Deliver To</h2>

                <div class="payment-customer" id="deliverToView">
                    <p><strong>${checkoutInfo.firstName} ${checkoutInfo.lastName}</strong></p>
                    <p>${checkoutInfo.phone} &middot; ${checkoutInfo.email}</p>
                    <p>${checkoutInfo.address}${checkoutInfo.country ? ", " + checkoutInfo.country : ""}</p>
                    <button type="button" class="payment-edit-link" id="editDeliverToBtn">Edit details</button>
                </div>

                <form class="checkout-form" id="deliverToForm" style="display:none;padding:0;">
                    <div class="checkout-row">
                        <div class="checkout-field">
                            <label for="editFirstName">First Name</label>
                            <input type="text" id="editFirstName" value="${checkoutInfo.firstName}" required>
                        </div>
                        <div class="checkout-field">
                            <label for="editLastName">Last Name</label>
                            <input type="text" id="editLastName" value="${checkoutInfo.lastName}" required>
                        </div>
                    </div>
                    <div class="checkout-row">
                        <div class="checkout-field">
                            <label for="editPhone">Phone Number</label>
                            <input type="tel" id="editPhone" value="${checkoutInfo.phone}" required>
                        </div>
                        <div class="checkout-field">
                            <label for="editEmail">Email</label>
                            <input type="email" id="editEmail" value="${checkoutInfo.email}" required>
                        </div>
                    </div>
                    <div class="checkout-row">
                        <div class="checkout-field checkout-field-address">
                            <label for="editAddress">Delivery Address</label>
                            <textarea id="editAddress" rows="2" placeholder="e.g. Kilimani, Nairobi. Nyali, Mombasa. 280, Kigali, Rwanda" required>${checkoutInfo.address}</textarea>
                        </div>
                        <div class="checkout-field checkout-field-country">
                            <label for="editCountry">Country</label>
                            <select id="editCountry" required>
                                ${COUNTRIES.map(c => `<option value="${c}" ${checkoutInfo.country === c ? "selected" : ""}>${c || "-Select-"}</option>`).join("")}
                            </select>
                        </div>
                    </div>
                    <div class="checkout-buttons">
                        <button type="button" class="btn btn-outline" id="cancelEditBtn">Cancel</button>
                        <button type="submit" class="btn">Save Details</button>
                    </div>
                </form>

                <h2 class="section-title" style="text-align:left;font-size:26px;margin-top:30px;">Choose Payment Method</h2>

                <button class="payment-method-btn" id="payWithCard">
                    <i class="fas fa-credit-card"></i>
                    <span>Pay with Bank Card</span>
                </button>

                <button class="payment-method-btn" id="payWithPaypal">
                    <i class="fab fa-paypal"></i>
                    <span>Pay with PayPal</span>
                </button>

                <p class="payment-pending-note" id="paymentPendingNote">
                    Select a payment method to complete your order.
                </p>
            </div>

        </div>
    `;

    const payWithCardBtn = document.getElementById("payWithCard");
    const payWithPaypalBtn = document.getElementById("payWithPaypal");

    /*=====================================================
    EDIT DELIVER TO DETAILS — inline, no navigation away
    =====================================================*/

    const deliverToView = document.getElementById("deliverToView");
    const deliverToForm = document.getElementById("deliverToForm");
    const editBtn = document.getElementById("editDeliverToBtn");
    const cancelBtn = document.getElementById("cancelEditBtn");

    editBtn.addEventListener("click", () => {
        deliverToView.style.display = "none";
        deliverToForm.style.display = "block";
    });

    cancelBtn.addEventListener("click", () => {
        deliverToForm.style.display = "none";
        deliverToView.style.display = "block";
    });

    deliverToForm.addEventListener("submit", (e) => {
        e.preventDefault();

        checkoutInfo = {
            firstName: document.getElementById("editFirstName").value.trim(),
            lastName: document.getElementById("editLastName").value.trim(),
            phone: document.getElementById("editPhone").value.trim(),
            email: document.getElementById("editEmail").value.trim(),
            address: document.getElementById("editAddress").value.trim(),
            country: document.getElementById("editCountry").value,
            amount: total
        };

        localStorage.setItem("big5_checkout_info", JSON.stringify(checkoutInfo));

        deliverToView.innerHTML = `
            <p><strong>${checkoutInfo.firstName} ${checkoutInfo.lastName}</strong></p>
            <p>${checkoutInfo.phone} &middot; ${checkoutInfo.email}</p>
            <p>${checkoutInfo.address}${checkoutInfo.country ? ", " + checkoutInfo.country : ""}</p>
            <button type="button" class="payment-edit-link" id="editDeliverToBtn">Edit details</button>
        `;

        document.getElementById("editDeliverToBtn").addEventListener("click", () => {
            deliverToView.style.display = "none";
            deliverToForm.style.display = "block";
        });

        deliverToForm.style.display = "none";
        deliverToView.style.display = "block";
        showToast("Delivery details updated");
    });

    function selectMethodUI(btn){
        payWithCardBtn.classList.remove("active");
        payWithPaypalBtn.classList.remove("active");
        btn.classList.add("active");
    }

    function clearOrderAndRedirect(reference){
        localStorage.removeItem("big5_cart");
        localStorage.removeItem("big5_checkout_info");
        const params = new URLSearchParams({ ref: reference || "", amount: total.toFixed(2) });
        location.href = `/shop/order-confirmed/?${params.toString()}`;
    }

    /*=====================================================
    PAYSTACK — real integration (public key from Big5's live site)
    =====================================================*/
    payWithCardBtn.addEventListener("click", () => {

        selectMethodUI(payWithCardBtn);

        const handler = PaystackPop.setup({
            key: "pk_live_02166bc4dbe3aaaac6535ee5265331c72a81966f",
            email: checkoutInfo.email || "info@big5adventures.com",
            amount: Math.round(total * 100), // Paystack expects the smallest currency unit
            currency: "USD",
            metadata: {
                custom_fields: [
                    { display_name: "Customer Name", variable_name: "customer_name", value: `${checkoutInfo.firstName} ${checkoutInfo.lastName}` },
                    { display_name: "Phone", variable_name: "phone", value: checkoutInfo.phone },
                    { display_name: "Delivery Address", variable_name: "address", value: checkoutInfo.address },
                    { display_name: "Country", variable_name: "country", value: checkoutInfo.country || "" },
                    { display_name: "Order Items", variable_name: "order_items", value: savedCart.map(i => `${i.name} x${i.qty}`).join(", ") }
                ]
            },
            callback: function(response){
                clearOrderAndRedirect(response.reference);
            },
            onClose: function(){
                alert("Payment was not completed.");
            }
        });

        handler.openIframe();
    });

    /*=====================================================
    PAYPAL — real integration (adapted from Big5's donation
    button). Uses a standard "Buy Now" redirect since this is
    a product purchase, not a donation.
    =====================================================*/
    payWithPaypalBtn.addEventListener("click", () => {

        selectMethodUI(payWithPaypalBtn);

        const itemNames = savedCart.map(i => `${i.name} x${i.qty}`).join(", ");

        const url = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick`
            + `&business=${encodeURIComponent("big5global2@gmail.com")}`
            + `&item_name=${encodeURIComponent("Big5 Adventures Order: " + itemNames)}`
            + `&amount=${encodeURIComponent(total.toFixed(2))}`
            + `&currency_code=USD`
            + `&no_shipping=0`
            + `&address_override=0`;

        window.open(url, "_blank");

        clearOrderAndRedirect("");
    });

});