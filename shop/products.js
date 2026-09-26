/*=========================================
BIG5 ADVENTURES
PRODUCT DATABASE
=========================================*/

const products = [

{
  id: 16,
  name: "Men's Explorer Safari Hat",
  category: "Hats",
  price: 15,
  rating: 4.3,
  reviews: 52,
  stock: 24,
  badge: "",
  image: "/shop/men-hat.png",
  description: "Structured wide-brim hat built for men's fit, with a UPF-rated weave.",
  sizes: ["S", "M", "L", "XL"],
  colours: ["Khaki", "Brown", "Olive"]
},

{
  id: 17,
  name: "Women's Explorer Safari Hat",
  category: "Hats",
  price: 15,
  rating: 4.4,
  reviews: 47,
  stock: 24,
  badge: "",
  image: "/shop/women-hat.png",
  description: "Lightweight wide-brim hat with an adjustable chin cord, cut for a women's fit.",
  sizes: ["S", "M", "L"],
  colours: ["Khaki", "Brown", "Olive"]
},

{
  id: 18,
  name: "Safari Hoodie",
  category: "Clothing",
  price: 24,
  rating: 4.8,
  reviews: 39,
  stock: 40,
  badge: "NEW",
  image: "/shop/Leopard-hoodie.png",
  description: "Heavyweight fleece hoodie, plain by default with the option of a Big Five animal on the front or the back.",
  sizes: ["S", "M", "L", "XL", "XXL"],
  colours: ["Khaki", "Jungle Green", "Black", "Grey"],
  animals: [
    { name: "Plain", image: "/shop/Plain-hoodie.png" },
    { name: "Lion", image: "/shop/Lion-hoodie.png" },
    { name: "Elephant", image: "/shop/Elephant-hoodie.png" },
    { name: "Buffalo", image: "/shop/Buffalo-hoodie.png" },
    { name: "Rhino", image: "/shop/Rhino-hoodie.png" },
    { name: "Leopard", image: "/shop/Leopard-hoodie.png" }
  ]
},

{
  id: 1,
  name: "Women Rufiji Boots",
  category: "Footwear",
  price: 48,
  rating: 4.0,
  reviews: 184,
  stock: 27,
  badge: "NEW",
  image: "/shop/Women-boots.jpg",
  description: "Stylish leather boots.",
  sizes: ["35", "36", "37", "38", "39", "40", "41",],
  colours: ["Khaki", "Olive", "Brown"]
},

{
  id: 2,
  name: "Safari Leather Hat",
  category: "Hats",
  price: 51,
  rating: 4.1,
  reviews: 96,
  stock: 18,
  badge: "",
  image: "/shop/Hat.png",
  description: "Men adjustable leather hat.",
  sizes: ["S", "M", "L"],
  colours: ["Brown",]
},

{
  id: 3,
  name: "Safari Expedition Duffel",
  category: "Luggage",
  price: 149,
  wasPrice: 186,
  rating: 4.7,
  reviews: 62,
  stock: 14,
  badge: "SALE",
  image: "/shop/Duffel.png",
  description: "Heavy duty expedition duffel bag.",
  sizes: ["60L"],
  colours: ["Khaki", "Black"]
},

{
  id: 4,
  name: "Outdoor Insect Repellent",
  category: "Repellent",
  price: 18,
  rating: 4,
  reviews: 41,
  stock: 75,
  badge: "",
  image: "/shop/Trek-insect-repellent.png",
  description: "Long lasting outdoor insect repellent 60ml.",
  sizes: ["60ml"],
  colours: ["Standard"],
  animals: [
    { name: "Turquoise Green", image: "/shop/Trek-insect-repellent.png" },
    { name: "Light blue", image: "/shop/Trek-BRepellent.jpg" },
    { name: "Orange", image: "/shop/Trek-ORepellent.png" },
  ]

},

{
  id: 5,
  name: "Unisex Tactical Military Boots",
  category: "Footwear",
  price: 66,
  rating: 4.7,
  reviews: 118,
  stock: 22,
  badge: "NEW",
  image: "/shop/Safari-Beigeboot.jpg",
  description: "Waterproof & Breathable unisex high-top tactical safari boots.",
  sizes: ["40", "41", "42", "43", "44", "45"],
  colours: [""],
  animals: [
    { name: "Beige", image: "/shop/Safari-Beigeboots.jpg" },
    { name: "Black", image: "/shop/Safari-Blackboots.jpg" },
    { name: "Brown", image: "/shop/Safari-Brownboots.jpg" },
  ]  
},

{
  id: 6,
  name: "Professional Binoculars",
  category: "Equipment",
  price: 199,
  rating: 5,
  reviews: 88,
  stock: 9,
  badge: "",
  image: "/shop/Binoculars.jpg",
  description: "Professional wildlife viewing binoculars.",
  sizes: ["10x42"],
  colours: ["Black"]
},

{
  id: 7,
  name: "Safari Cargo Trousers",
  category: "Clothing",
  price: 69,
  rating: 4.6,
  reviews: 93,
  stock: 32,
  badge: "",
  image: "/shop/Cargo-trousers.png",
  description: "Quick drying cargo safari trousers.",
  sizes: ["30", "32", "34", "36", "38"],
  colours: ["Khaki", "Olive"]
},

{
  id: 8,
  name: "Safari Fleece Jacket",
  category: "Clothing",
  price: 26,
  rating: 4.1,
  reviews: 70,
  stock: 15,
  badge: "NEW",
  image: "/shop/Fleece-jacket.png",
  description: "Warm fleece jacket for early morning game drives.",
  sizes: ["S", "M", "L", "XL"],
  colours: ["Jungle Green", "Black"]
},

{
  id: 9,
  name: "Waterproof Rain Jacket",
  category: "Clothing",
  price: 17,
  rating: 4.7,
  reviews: 54,
  stock: 20,
  badge: "",
  image: "/shop/Rain-jacket.jpg",
  description: "Lightweight waterproof shell.",
  sizes: ["S", "M", "L", "XL"],
  colours: ["Olive", "Black"]
},

{
  id: 33,
  name: "Siwar Tactical Military Hiking Boots",
  category: "Footwear",
  price: 38,
  rating: 4.8,
  reviews: 118,
  stock: 22,
  badge: "",
  image: "/shop/Tactical-Siwarboots.jpg",
  description: "High-top tactical combat boot .",
  sizes: ["40", "41", "42", "43", "44", "45"],
  colours: ["Beige",]
},

{
  id: 34,
  name: "Jungle Green Tactical Military Boots",
  category: "Footwear",
  price: 26,
  rating: 4.6,
  reviews: 118,
  stock: 22,
  badge: "",
  image: "/shop/Green-Tactical.png",
  description: "Comfortable military waterproof outdoor boots.",
  sizes: ["40", "41", "42", "43", "44", "45"],
  colours: ["Brown", "Black"]
},

{
  id: 10,
  name: "Leather Safari Belt",
  category: "Accessories",
  price: 29,
  rating: 4,
  reviews: 61,
  stock: 44,
  badge: "",
  image: "/shop/Leather-belt.png",
  description: "Premium leather safari belt.",
  sizes: ["32", "34", "36", "38"],
  colours: ["Brown", "Black"]
},

{
  id: 11,
  name: "Safari Backpack",
  category: "Luggage",
  price: 21,
  rating: 4.8,
  reviews: 74,
  stock: 21,
  badge: "",
  image: "/shop/Backpack.jpg",
  description: "Adventure backpack with hydration compatibility.",
  sizes: ["35L"],
  colours: ["Olive", "Khaki", "Black"]
},

{
  id: 22,
  name: "Men's Safari Trousers",
  category: "Clothing",
  price: 69,
  rating: 4.7,
  reviews: 44,
  stock: 26,
  badge: "",
  image: "/shop/Men-trouser.png",
  description: "Durable quick-dry safari trousers cut for a men's fit.",
  sizes: ["30", "32", "34", "36", "38"],
  colours: ["Khaki", "Olive", "Brown", "Black"]
},

{
  id: 23,
  name: "Women's Safari Trousers",
  category: "Clothing",
  price: 69,
  rating: 4.8,
  reviews: 41,
  stock: 26,
  badge: "",
  image: "/shop/Women-trouser.png",
  description: "Durable quick-dry safari trousers cut for a women's fit.",
  sizes: ["6", "8", "10", "12", "14"],
  colours: ["Khaki", "Olive", "Brown", "Black"]
},

{
  id: 12,
  name: "Safari Water Bottle",
  category: "Accessories",
  price: 13,
  wasPrice: 16,
  rating: 4.7,
  reviews: 131,
  stock: 58,
  badge: "SALE",
  image: "/shop/Bottle.jpeg",
  description: "1600ml Water bottle with flip lid, detachable belt strap | Suitable for both cold and warm beverages.",
  sizes: ["750ml"],
  colours: ["Black"]
},

{
  id: 13,
  name: "Ultra Bright LED Headlamp",
  category: "Equipment",
  price: 9,
  rating: 4.2,
  reviews: 46,
  stock: 30,
  badge: "",
  image: "/shop/Head-lamp3.jpg",
  description: "Rechargeable LED headlamp,waterproof zoomable head lamp 3 modes light for outdoors camping.",
  sizes: ["Standard"],
  colours: ["Black"]
},

{
  id: 35,
  name: "Siwar Military Desert Brown Men's Tactical Boots",
  category: "Footwear",
  price: 38,
  rating: 4.8,
  reviews: 118,
  stock: 22,
  badge: "",
  image: "/shop/Tactical-Desertbrown.png",
  description: "Desert Brown tactical boots built for outdoor use .",
  sizes: ["40", "41", "42", "43", "44", "45"],
  colours: ["Brown",]
},

{
  id: 36,
  name: "Camouflage Tactical Combat Boots",
  category: "Footwear",
  price: 28,
  rating: 4.4,
  reviews: 118,
  stock: 22,
  badge: "",
  image: "/shop/Camouflage-Boots.jpg",
  description: "Woodland camouflage boots with tan/desert accents.",
  sizes: ["40", "41", "42", "43", "44", "45"],
  colours: ["Brown", "Black"]
},

{
  id: 32,
  name: "7-LEDs Headlamp",
  category: "Equipment",
  price: 15,
  wasPrice: 22,
  rating: 4.5,
  reviews: 46,
  stock: 30,
  badge: "SALE",
  image: "/shop/Headlamp7.jpg",
  description: "Led Superior headlamp rechargeable usb 7 head torch |3 modes waterproof for bikers, camping, hiking, fishing.",
  sizes: ["Standard"],
  colours: ["Black"]
},

{
  id: 19,
  name: "Safari Hoodie and Sweatpants Set",
  category: "Clothing",
  price: 27,
  wasPrice: 34,
  rating: 4.9,
  reviews: 28,
  stock: 22,
  badge: "SALE",
  image: "/shop/Rhino-set.png",
  description: "Matching hoodie and sweatpants set, plain by default with the option of a Big Five animal — on the hoodie front or back and the sweatpants' upper left leg.",
  sizes: ["S", "M", "L", "XL", "XXL"],
  colours: ["Khaki", "Jungle Green", "Black", "Grey"],
  animals: [
    { name: "Plain", image: "/shop/Plain-set.png" },
    { name: "Lion", image: "/shop/Lion-set.png" },
    { name: "Elephant", image: "/shop/Elephant-set.png" },
    { name: "Buffalo", image: "/shop/Buffalo-set.png" },
    { name: "Rhino", image: "/shop/Rhino-set.png" },
    { name: "Leopard", image: "/shop/Leopard-set.png" }
  ]
},

{
  id: 20,
  name: "Men's Safari Shirt",
  category: "Clothing",
  price: 59,
  rating: 4.8,
  reviews: 66,
  stock: 30,
  badge: "",
  image: "/shop/men-safari-shirt.png",
  description: "Breathable button-up safari shirt tailored for a men's fit.",
  sizes: ["S", "M", "L", "XL", "XXL"],
  colours: ["Khaki", "Olive", "Brown",]
},

{
  id: 21,
  name: "Women's Safari Shirt",
  category: "Clothing",
  price: 59,
  rating: 4.9,
  reviews: 58,
  stock: 30,
  badge: "",
  image: "/shop/women-safari-shirt.png",
  description: "Breathable button-up safari shirt tailored for a women's fit.",
  sizes: ["S", "M", "L", "XL"],
  colours: ["Khaki", "Olive", "Brown",]
},

{
  id: 31,
  name: "Boonie Hat",
  category: "Hats",
  price: 29,
  rating: 3.8,
  reviews: 41,
  stock: 26,
  badge: "",
  image: "/shop/Boonie-hat.png",
  description: "Unisex bonnie-hat | Wide brim sun hat, outdoor boonie fishing, hiking hat.",
  sizes: ["S", "M", "L", "XL"],
  colours: ["Khaki", "Olive", "Grey",]
},

{
  id: 24,
  name: "Men's Safari T-Shirt",
  category: "Clothing",
  price: 32,
  rating: 4.8,
  reviews: 71,
  stock: 50,
  badge: "",
  image: "/shop/Lion-Mtshirt.png",
  description: "Soft cotton tee, plain by default with the option of a Big Five animal print.",
  sizes: ["S", "M", "L", "XL", "XXL"],
  colours: ["White", "Khaki", "Jungle Green", "Grey", "Black"],
  animals: [
    { name: "Plain", image: "/shop/Men-Tshirt.jpg" },
    { name: "Lion", image: "/shop/Lion-Mtshirt.png" },
    { name: "Elephant", image: "/shop/Elephant-Mtshirt.png" },
    { name: "Buffalo", image: "/shop/Buffalo-Mtshirt.png" },
    { name: "Rhino", image: "/shop/Rhino-Mtshirt.png" },
    { name: "Leopard", image: "/shop/Leopard-Mtshirt.png" }
  ]
},

{
  id: 25,
  name: "Women's Safari T-Shirt",
  category: "Clothing",
  price: 32,
  rating: 4.9,
  reviews: 64,
  stock: 50,
  badge: "",
  image: "/shop/Women-Tshirt.png",
  description: "Soft cotton tee, plain by default with the option of a Big Five animal print.",
  sizes: ["S", "M", "L", "XL"],
  colours: ["White", "Khaki", "Jungle Green", "Grey", "Black"],
  animals: [
    { name: "Plain", image: "/shop/Women-Ptshirt.png" },
    { name: "Lion", image: "/shop/Lion-Wtshirt.png" },
    { name: "Elephant", image: "/shop/Elephant-Wtshirt.png" },
    { name: "Buffalo", image: "/shop/Buffalo-Wtshirt.png" },
    { name: "Rhino", image: "/shop/Rhino-Wtshirt.png" },
    { name: "Leopard", image: "/shop/Leopard-Wtshirt.png" }
  ]
},

{
  id: 26,
  name: "Safari Shoes",
  category: "Footwear",
  price: 79,
  rating: 4.7,
  reviews: 35,
  stock: 28,
  badge: "NEW",
  image: "/shop/Sandals.png",
  description: "Lightweight breathable safari shoes, built for warm-weather game drives and walking trails.",
  sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
  colours: ["Khaki", "Grey", "Black", "Brown"]
},

{
  id: 29,
  name: "Women Boonie Hat",
  category: "Hats",
  price: 38,
  rating: 3.8,
  reviews: 41,
  stock: 26,
  badge: "",
  image: "/shop/Women-Booniehat.png",
  description: "Wide-brim sun hat with neck flap | UPF 50+ outdoor boonie fishing hiking hat.",
  sizes: ["S", "M", "L", "XL"],
  colours: ["Khaki", "Olive", "Grey",]
},

{
  id: 30,
  name: "Men Boonie Hat",
  category: "Hats",
  price: 38,
  rating: 4.0,
  reviews: 41,
  stock: 26,
  badge: "",
  image: "/shop/Men-Booniehat.png",
  description: "Wide-brim sun hat with neck flap | UPF 50+ outdoor boonie fishing hiking hat.",
  sizes: ["S", "M", "L", "XL"],
  colours: ["Khaki", "Olive", "Grey",]
},

{
  id: 14,
  name: "Safari Gloves",
  category: "Accessories",
  price: 26,
  rating: 3.9,
  reviews: 33,
  stock: 18,
  badge: "",
  image: "/shop/Khaki-gloves.png",
  description: "Comfortable outdoor gloves.",
  sizes: ["S", "M", "L"],
  colours: ["Olive", "Brown", "Black"]
},

{
  id: 15,
  name: "Safari Socks",
  category: "Accessories",
  price: 11,
  rating: 4.2,
  reviews: 82,
  stock: 90,
  badge: "",
  image: "/shop/Socks-grey.png",
  description: "Breathable 4 pack hiking socks.",
  sizes: ["S", "M", "L"],
  colours: ["Brown", "Olive", "Grey", "Black"]
},

{
  id: 27,
  name: "Beads and Necklaces",
  category: "Accessories",
  price: 4,
  rating: 4.9,
  reviews: 57,
  stock: 60,
  badge: "",
  image: "/shop/Beads.jpeg",
  description: "Handcrafted beaded necklaces made by local Kenyan artisans — each piece is one of a kind.",
  sizes: ["One Size"],
  colours: ["Multicolour"]
},

{
  id: 28,
  name: "Carvings",
  category: "Accessories",
  price: 22,
  rating: 4.8,
  reviews: 33,
  stock: 20,
  badge: "NEW",
  image: "/shop/Carvings.png",
  description: "Hand-carved wooden Big Five figures and ornaments, sourced from local artisans.",
  sizes: ["One Size"],
  colours: ["Natural Wood"]
}

];