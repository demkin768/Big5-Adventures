/*=========================================
BIG5 ADVENTURES
PRODUCT DATABASE
=========================================*/

const products = [

{
  id: 16,
  name: "Men's Explorer Safari Hat",
  category: "Hats",
  price: 38,
  rating: 4.8,
  reviews: 52,
  stock: 24,
  badge: "NEW",
  image: "/shop/men-hat.jpg",
  description: "Structured wide-brim hat built for men's fit, with a UPF-rated weave.",
  sizes: ["S", "M", "L", "XL"],
  colours: ["Khaki", "Brown", "Black"]
},

{
  id: 17,
  name: "Women's Explorer Safari Hat",
  category: "Hats",
  price: 38,
  rating: 4.9,
  reviews: 47,
  stock: 24,
  badge: "NEW",
  image: "/shop/women-hatt.jpg",
  description: "Lightweight wide-brim hat with an adjustable chin cord, cut for a women's fit.",
  sizes: ["S", "M", "L"],
  colours: ["Khaki", "White", "Grey"]
},

{
  id: 18,
  name: "Safari Hoodie",
  category: "Clothing",
  price: 65,
  rating: 4.8,
  reviews: 39,
  stock: 40,
  badge: "NEW",
  image: "https://picsum.photos/seed/big5-hoodie-plain/500/500",
  description: "Heavyweight fleece hoodie, plain by default with the option of a Big Five animal on the front.",
  sizes: ["S", "M", "L", "XL", "XXL"],
  colours: ["Khaki", "Jungle Green", "Black", "Grey"],
  animals: [
    { name: "Plain", image: "https://picsum.photos/seed/big5-hoodie-plain/500/500" },
    { name: "Lion", image: "https://picsum.photos/seed/big5-hoodie-lion/500/500" },
    { name: "Elephant", image: "https://picsum.photos/seed/big5-hoodie-elephant/500/500" },
    { name: "Buffalo", image: "https://picsum.photos/seed/big5-hoodie-buffalo/500/500" },
    { name: "Rhino", image: "https://picsum.photos/seed/big5-hoodie-rhino/500/500" },
    { name: "Cheetah", image: "https://picsum.photos/seed/big5-hoodie-cheetah/500/500" }
  ]
},

{
  id: 1,
  name: "Safari Explorer Shirt",
  category: "Clothing",
  price: 59,
  rating: 4.9,
  reviews: 184,
  stock: 27,
  badge: "NEW",
  image: "https://picsum.photos/seed/big5-shirt1/500/500",
  description: "Lightweight breathable safari shirt with UPF protection.",
  sizes: ["S", "M", "L", "XL", "XXL"],
  colours: ["Khaki", "Olive", "Brown"]
},

{
  id: 2,
  name: "Safari Bush Hat",
  category: "Hats",
  price: 35,
  rating: 4.8,
  reviews: 96,
  stock: 18,
  badge: "",
  image: "https://picsum.photos/seed/big5-hat1/500/500",
  description: "Wide brim safari hat for maximum sun protection.",
  sizes: ["S", "M", "L"],
  colours: ["Khaki", "Olive"]
},

{
  id: 3,
  name: "Safari Expedition Duffel",
  category: "Luggage",
  price: 149,
  rating: 4.9,
  reviews: 62,
  stock: 14,
  badge: "SALE",
  image: "https://picsum.photos/seed/big5-bag1/500/500",
  description: "Heavy duty expedition duffel bag.",
  sizes: ["60L"],
  colours: ["Khaki", "Black"]
},

{
  id: 4,
  name: "Outdoor Insect Repellent",
  category: "Repellent",
  price: 18,
  rating: 4.8,
  reviews: 41,
  stock: 75,
  badge: "",
  image: "https://picsum.photos/seed/big5-repellent2/500/500",
  description: "Long lasting outdoor insect protection.",
  sizes: ["100ml"],
  colours: ["Standard"]
},

{
  id: 5,
  name: "Safari Walking Boots",
  category: "Footwear",
  price: 129,
  rating: 5,
  reviews: 118,
  stock: 22,
  badge: "NEW",
  image: "https://picsum.photos/seed/big5-boots1/500/500",
  description: "Comfortable waterproof safari boots.",
  sizes: ["40", "41", "42", "43", "44", "45"],
  colours: ["Brown", "Black"]
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
  image: "https://picsum.photos/seed/big5-binoculars1/500/500",
  description: "Professional wildlife viewing binoculars.",
  sizes: ["10x42"],
  colours: ["Black"]
},

{
  id: 7,
  name: "Safari Cargo Trousers",
  category: "Clothing",
  price: 69,
  rating: 4.8,
  reviews: 93,
  stock: 32,
  badge: "",
  image: "https://picsum.photos/seed/big5-trousers/500/500",
  description: "Quick drying cargo safari trousers.",
  sizes: ["30", "32", "34", "36", "38"],
  colours: ["Khaki", "Olive"]
},

{
  id: 8,
  name: "Safari Fleece Jacket",
  category: "Clothing",
  price: 89,
  rating: 4.9,
  reviews: 70,
  stock: 15,
  badge: "NEW",
  image: "https://picsum.photos/seed/big5-jacket/500/500",
  description: "Warm fleece jacket for early morning game drives.",
  sizes: ["S", "M", "L", "XL"],
  colours: ["Jungle Green", "Black"]
},

{
  id: 9,
  name: "Waterproof Rain Jacket",
  category: "Clothing",
  price: 99,
  rating: 4.7,
  reviews: 54,
  stock: 20,
  badge: "",
  image: "https://picsum.photos/seed/big5-rain/500/500",
  description: "Lightweight waterproof shell.",
  sizes: ["S", "M", "L", "XL"],
  colours: ["Olive", "Black"]
},

{
  id: 10,
  name: "Leather Safari Belt",
  category: "Accessories",
  price: 29,
  rating: 4.9,
  reviews: 61,
  stock: 44,
  badge: "",
  image: "https://picsum.photos/seed/big5-belt/500/500",
  description: "Premium leather safari belt.",
  sizes: ["32", "34", "36", "38"],
  colours: ["Brown", "Black"]
},

{
  id: 11,
  name: "Safari Backpack",
  category: "Luggage",
  price: 119,
  rating: 4.8,
  reviews: 74,
  stock: 21,
  badge: "",
  image: "https://picsum.photos/seed/big5-backpack/500/500",
  description: "Adventure backpack with hydration compatibility.",
  sizes: ["35L"],
  colours: ["Olive", "Black"]
},

{
  id: 12,
  name: "Safari Water Bottle",
  category: "Accessories",
  price: 24,
  rating: 4.9,
  reviews: 131,
  stock: 58,
  badge: "SALE",
  image: "https://picsum.photos/seed/big5-bottle/500/500",
  description: "Insulated stainless steel bottle.",
  sizes: ["750ml"],
  colours: ["Jungle Green", "Black"]
},

{
  id: 13,
  name: "Headlamp",
  category: "Equipment",
  price: 39,
  rating: 4.8,
  reviews: 46,
  stock: 30,
  badge: "",
  image: "https://picsum.photos/seed/big5-headlamp/500/500",
  description: "Rechargeable LED headlamp.",
  sizes: ["Standard"],
  colours: ["Black"]
},

{
  id: 14,
  name: "Safari Gloves",
  category: "Accessories",
  price: 26,
  rating: 4.7,
  reviews: 33,
  stock: 18,
  badge: "",
  image: "https://picsum.photos/seed/big5-gloves/500/500",
  description: "Comfortable outdoor gloves.",
  sizes: ["S", "M", "L"],
  colours: ["Brown", "Black"]
},

{
  id: 15,
  name: "Safari Socks",
  category: "Accessories",
  price: 15,
  rating: 4.8,
  reviews: 82,
  stock: 90,
  badge: "",
  image: "https://picsum.photos/seed/big5-socks/500/500",
  description: "Breathable safari socks.",
  sizes: ["39-45"],
  colours: ["Khaki", "Grey"]
},

{
  id: 19,
  name: "Safari Hoodie and Sweatpants Set",
  category: "Clothing",
  price: 110,
  rating: 4.9,
  reviews: 28,
  stock: 22,
  badge: "SALE",
  image: "https://picsum.photos/seed/big5-set-plain/500/500",
  description: "Matching hoodie and sweatpants set, plain by default with the option of a Big Five animal — on the hoodie front and the sweatpants' upper left leg.",
  sizes: ["S", "M", "L", "XL", "XXL"],
  colours: ["Khaki", "Jungle Green", "Black", "Grey"],
  animals: [
    { name: "Plain", image: "https://picsum.photos/seed/big5-set-plain/500/500" },
    { name: "Lion", image: "https://picsum.photos/seed/big5-set-lion/500/500" },
    { name: "Elephant", image: "https://picsum.photos/seed/big5-set-elephant/500/500" },
    { name: "Buffalo", image: "https://picsum.photos/seed/big5-set-buffalo/500/500" },
    { name: "Rhino", image: "https://picsum.photos/seed/big5-set-rhino/500/500" },
    { name: "Cheetah", image: "https://picsum.photos/seed/big5-set-cheetah/500/500" }
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
  image: "/shop/mens-safari-shirt.jpg",
  description: "Breathable button-up safari shirt tailored for a men's fit.",
  sizes: ["S", "M", "L", "XL", "XXL"],
  colours: ["Khaki", "Olive", "Brown", "White"]
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
  image: "/shop/womens-safari-shirt.jpg",
  description: "Breathable button-up safari shirt tailored for a women's fit.",
  sizes: ["S", "M", "L", "XL"],
  colours: ["Khaki", "Olive", "White", "Grey"]
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
  image: "https://picsum.photos/seed/big5-mens-trousers/500/500",
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
  image: "https://picsum.photos/seed/big5-womens-trousers/500/500",
  description: "Durable quick-dry safari trousers cut for a women's fit.",
  sizes: ["6", "8", "10", "12", "14"],
  colours: ["Khaki", "Olive", "Grey", "Black"]
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
  image: "https://picsum.photos/seed/big5-mtee-plain/500/500",
  description: "Soft cotton tee, plain by default with the option of a Big Five animal print.",
  sizes: ["S", "M", "L", "XL", "XXL"],
  colours: ["White", "Khaki", "Jungle Green", "Grey", "Black"],
  animals: [
    { name: "Plain", image: "https://picsum.photos/seed/big5-mtee-plain/500/500" },
    { name: "Lion", image: "https://picsum.photos/seed/big5-mtee-lion/500/500" },
    { name: "Elephant", image: "https://picsum.photos/seed/big5-mtee-elephant/500/500" },
    { name: "Buffalo", image: "https://picsum.photos/seed/big5-mtee-buffalo/500/500" },
    { name: "Rhino", image: "https://picsum.photos/seed/big5-mtee-rhino/500/500" },
    { name: "Cheetah", image: "https://picsum.photos/seed/big5-mtee-cheetah/500/500" }
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
  image: "https://picsum.photos/seed/big5-wtee-plain/500/500",
  description: "Soft cotton tee, plain by default with the option of a Big Five animal print.",
  sizes: ["S", "M", "L", "XL"],
  colours: ["White", "Khaki", "Jungle Green", "Grey", "Black"],
  animals: [
    { name: "Plain", image: "https://picsum.photos/seed/big5-wtee-plain/500/500" },
    { name: "Lion", image: "https://picsum.photos/seed/big5-wtee-lion/500/500" },
    { name: "Elephant", image: "https://picsum.photos/seed/big5-wtee-elephant/500/500" },
    { name: "Buffalo", image: "https://picsum.photos/seed/big5-wtee-buffalo/500/500" },
    { name: "Rhino", image: "https://picsum.photos/seed/big5-wtee-rhino/500/500" },
    { name: "Cheetah", image: "https://picsum.photos/seed/big5-wtee-cheetah/500/500" }
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
  image: "https://picsum.photos/seed/big5-shoes/500/500",
  description: "Lightweight breathable safari shoes, built for warm-weather game drives and walking trails.",
  sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
  colours: ["Khaki", "Grey", "Black", "Brown"]
},

{
  id: 27,
  name: "Beads and Necklaces",
  category: "Accessories",
  price: 22,
  rating: 4.9,
  reviews: 57,
  stock: 60,
  badge: "NEW",
  image: "https://picsum.photos/seed/big5-beads/500/500",
  description: "Handcrafted beaded necklaces made by local Kenyan artisans — each piece is one of a kind.",
  sizes: ["One Size"],
  colours: ["Multicolour"]
},

{
  id: 28,
  name: "Carvings",
  category: "Accessories",
  price: 45,
  rating: 4.8,
  reviews: 33,
  stock: 20,
  badge: "NEW",
  image: "https://picsum.photos/seed/big5-carvings/500/500",
  description: "Hand-carved wooden Big Five figures and ornaments, sourced from local Kenyan artisans.",
  sizes: ["One Size"],
  colours: ["Natural Wood"]
}

];