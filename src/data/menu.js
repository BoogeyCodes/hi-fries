// ===== BRAND / CONTACT =====
export const brand = {
  name: 'Hi Fries',
  tagline: 'More Than Fries',
  uan: '0311 111 54 54',
  uanRaw: '03111115454',
  whatsapp: '923165555454', // 0316 555 54 54 -> international
  whatsappDisplay: '0316 555 54 54',
  address: '86-Tulip Commercial, Park View City, Lahore',
  website: 'www.hifries.pk',
  social: '@hifries.official',
}

export const fmtPrice = (n) => 'Rs. ' + Number(n).toLocaleString('en-PK')

// image helper paths are relative; prefix with import.meta.env.BASE_URL when rendering
const img = (name) => 'images/food/' + name

// ===== DEALS =====
export const deals = [
  {
    id: 'deal-zinger',
    tag: 'Zinger Zinger',
    name: 'Double Zinger',
    price: 930,
    img: img('burger.jpg'),
    items: ['2× Zesty Zingers', '2× Cold Drinks'],
  },
  {
    id: 'deal-lunch',
    tag: 'Lunch Deal · 1–6 PM',
    name: 'Solo Lunch',
    price: 1199,
    img: img('pizza.jpg'),
    items: ['Small Pizza', 'Chicken Fil-A Burger', 'Next Cola 345ml'],
    note: 'Available 1 PM – 6 PM only',
  },
  {
    id: 'deal-twohot',
    tag: 'Two Hot Two Handle',
    name: 'Pizza Duo',
    price: 1199,
    img: img('pizza2.jpg'),
    items: ['Any 2 Small Pizzas (Classic Range)', '2× Cola Next 300ml'],
  },
  {
    id: 'deal-double',
    tag: 'Double Down',
    name: 'Double Down Deal',
    price: 1649,
    img: img('meal.jpg'),
    items: [
      '1× Double Injected Burger',
      '1× Nashville Burger',
      '1× Plain Fries',
      '2× 300ml Drink',
    ],
  },
]

// ===== ADD-ONS (attach to any item) =====
export const addonOptions = [
  { id: 'make-meal', name: 'Make it a Meal (Drink + Fries)', price: 250 },
  { id: 'dip', name: 'Dip Sauce', price: 70 },
  { id: 'extra-topping', name: 'Extra Topping (Cheese / Chicken)', price: 100 },
  { id: 'add-fries', name: 'Add Plain Fries', price: 230 },
  { id: 'add-drink', name: 'Add Cold Drink', price: 120 },
]

// pizza size pricing presets
const PIZZA_CLASSIC = [
  { label: 'S', price: 550 },
  { label: 'M', price: 1050 },
  { label: 'L', price: 1550 },
  { label: 'XL', price: 1850 },
]
const PIZZA_PREMIUM = [
  { label: 'R', price: 1250 },
  { label: 'L', price: 2100 },
  { label: 'XL', price: 2600 },
]
const PIZZA_SIGNATURE = [{ label: 'L', price: 2200 }]

// ===== MENU CATEGORIES =====
export const categories = [
  {
    id: 'burgers',
    name: 'Burger Bliss',
    emoji: '🍔',
    banner: img('burger.jpg'),
    wide: true,
    pill: 'Make it a meal +250',
    items: [
      { name: 'Chicken Patty Burger', price: 400, desc: 'Jumbo chicken patty, special white sauce & lettuce' },
      { name: 'Zesty Zinger', price: 450, desc: 'Crunchy ch. thai, special white sauce & lettuce' },
      { name: 'Jumbo Jack Zinger', price: 730, desc: 'Double crunchy ch. thai, cheese, white ‘n’ thousand & lettuce' },
      { name: 'Chicken-fil-A', price: 500, desc: 'Ch. tender fillet, chipotle ‘n’ thousand sauce & lettuce' },
      { name: 'Jalapeno Blaze', price: 500, desc: 'Double grilled patty, cheese, jalapeno, thousand ‘n’ chipotle & lettuce' },
      { name: 'Americano', price: 550, desc: 'Smash beef, cheese, onion, tomato, mustard ‘n’ chipotle & lettuce' },
      { name: 'Stacked', price: 750, desc: 'Double smash beef, double cheese, onion, tomato, jalapeno & lettuce' },
      { name: 'Hi-Fries Special Burger', price: 800, desc: 'Double patty, cheese, sausage, onion, tomato, jalapeno & special sauce' },
    ],
    note: 'Make it a Meal — Drink + Fries · Rs. 250',
  },
  {
    id: 'pizza',
    name: 'Pizza Paradise',
    emoji: '🍕',
    banner: img('pizza.jpg'),
    wide: true,
    pill: 'S · M · L · XL',
    groups: [
      {
        title: 'Classics — S 550 · M 1050 · L 1550 · XL 1850',
        items: [
          { name: 'Tikka', desc: 'Red pizza sauce, onion, ch. tikka, cheese', variants: PIZZA_CLASSIC },
          { name: 'Veggie Lover', desc: 'Cheesy pizza topped with fresh colourful vegetables & rich tomato sauce', variants: PIZZA_CLASSIC },
          { name: 'Fajita', desc: 'Red pizza sauce, onion, ch. fajita, cheese & capsicum', variants: PIZZA_CLASSIC },
          { name: 'Fajita Sicilian', desc: 'Red pizza sauce, onion, combination chicken, cheese, jalapeno & capsicum', variants: PIZZA_CLASSIC },
          { name: 'Cheese Deluxe', desc: 'Red pizza sauce, cheese & lots of cheese', variants: PIZZA_CLASSIC },
          { name: 'Royal Pepperoni (Chicken / Beef)', desc: 'Red pizza sauce, mozzarella cheese, pepperoni', variants: PIZZA_CLASSIC },
        ],
      },
      {
        title: 'Premiums — R 1250 · L 2100 · XL 2600',
        items: [
          { name: 'Super Supreme', desc: 'Red pizza sauce, onion, special combination chicken, cheese, ch. sausages, black olives, capsicum & white sauce', variants: PIZZA_PREMIUM },
          { name: 'Afghani Malai Boti', desc: 'Afghani white pizza sauce, onion, afghani malai chicken, cheese & white sauce', variants: PIZZA_PREMIUM },
          { name: 'Starlight Crust', desc: 'Red pizza sauce, special combination chicken in crown, lots of cheese, onion, capsicum, black olives & white sauce', variants: PIZZA_PREMIUM },
          { name: 'Peri Peri Spicy', desc: 'Hot pizza sauce, onion, tomato, special tandoori chicken, lots of cheese, capsicum, jalapeno & peri peri sauce', variants: PIZZA_PREMIUM },
        ],
      },
      {
        title: 'Signatures — Large Only · Rs. 2200',
        items: [
          { name: 'Stuffed Crust on Choice', desc: 'Kabab · cheese · special sauce — tikka ‘n’ fajita, mushroom, capsicum, black olive & special sauce', variants: PIZZA_SIGNATURE },
          { name: 'Behari Kabab', desc: 'Red ‘n’ white sauce, onion, spicy ch. chunks, behari seekh kabab, jalapeno, cheese, capsicum & white sauce', variants: PIZZA_SIGNATURE },
          { name: 'Lazania Hot & Cheesy', desc: 'Hot pizza sauce, onion, tomato, special tandoori chicken, lots of cheese, capsicum & sauce combo', variants: PIZZA_SIGNATURE },
          { name: 'Splitza (2 in 1)', desc: 'Combination of any two flavours of your choice', variants: PIZZA_SIGNATURE },
        ],
      },
    ],
    note: 'Extra Toppings (Cheese & Chicken) — S 80 · M 100 · L 120 · XL 150',
  },
  {
    id: 'sandwiches',
    name: 'Sandwich Sensation',
    emoji: '🥪',
    banner: img('sandwich.jpg'),
    items: [
      { name: 'Smoky Sandwich', price: 500, desc: 'Ch. tikka, onion, cheese, thousand sauce & lettuce' },
      { name: 'Artisan Shred Sandwich', price: 500, desc: 'Ch. spread, fried egg, white sauce, cucumber, tomato & lettuce' },
      { name: 'BBQ Sandwich', price: 500, desc: 'Spicy chicken, onion, black olive, bbq ‘n’ chipotle & lettuce' },
      { name: 'Steak Sandwich', price: 500, desc: 'Ch. thai steak, onion, tomato, cheese, thousand ‘n’ chipotle & lettuce' },
    ],
  },
  {
    id: 'pasta',
    name: 'Pasta Passion',
    emoji: '🍝',
    banner: img('pasta.jpg'),
    items: [
      { name: 'Classic Alfredo Pasta', desc: 'Ch. chunks, capsicum, olives, pasta sauce, pizza cheese & white sauce', variants: [{ label: 'Reg', price: 450 }, { label: 'Lrg', price: 700 }] },
      { name: 'Zesty Crunchy Alfredo', desc: 'Crispy ch., capsicum, olives, sausages, pizza cheese & white sauce', variants: [{ label: 'Lrg', price: 750 }] },
      { name: 'Cheesy Drizzle', desc: 'Special chicken, black olives, pasta sauce & lots of pizza cheese', variants: [{ label: 'Lrg', price: 800 }] },
    ],
  },
  {
    id: 'wraps',
    name: 'Wonder Wraps',
    emoji: '🌯',
    banner: img('wrap.jpg'),
    groups: [
      {
        title: 'Tortilla Wraps',
        items: [
          { name: 'Zesty Twister Wrap', price: 600, desc: 'Ch. tender, fries, chipotle ‘n’ white sauce & lettuce' },
          { name: 'Cluck & Crackle Wrap', price: 650, desc: 'Ch. thai, fries, chipotle ‘n’ garlic chilli & lettuce' },
          { name: 'Sweet ‘N’ Chilli Crispy Wrap', price: 650, desc: 'Crispy sweet ‘n’ chilli strips, fries, chipotle & lettuce' },
        ],
      },
      {
        title: 'Oven Baked Wraps',
        items: [
          { name: 'Zesty Classic Wrap', price: 500, desc: 'Classic bread, ch. chunks, onion, white & thousand sauce' },
          { name: 'Mexican Hot ‘N’ Spicy Wrap', price: 550, desc: 'Hot ‘n’ spicy chicken, onion, capsicum, jalapeno & pizza cheese' },
          { name: 'Hi-Fries Special Wrap', price: 600, desc: 'Chicken, fries, black olive, onion, capsicum, special sauce & cheese' },
        ],
      },
    ],
  },
  {
    id: 'fried',
    name: 'Fried Feast',
    emoji: '🍗',
    banner: img('wings.jpg'),
    groups: [
      {
        title: 'Wings (5 pcs)',
        items: [
          { name: 'Fried Wings', price: 250 },
          { name: 'Grilled Wings', price: 250 },
          { name: 'Peri Peri Wings', price: 300 },
          { name: 'BBQ Wings', price: 300 },
          { name: 'Sweet ‘N’ Chilli Wings', price: 350 },
        ],
      },
      {
        title: 'Strips & Nuggets',
        items: [
          { name: 'Chicken Strips', price: 450 },
          { name: 'Sweet ‘N’ Chilli Strips', price: 450 },
          { name: 'Tempura Nuggets', price: 350 },
        ],
      },
      {
        title: 'Fried Chicken',
        items: [
          { name: 'Fried Combo — 2 Pcs', price: 400 },
          { name: 'Fried Combo — 4 Pcs', price: 750 },
          { name: 'Sweet ‘N’ Chilli Fried — 2 Pcs', price: 500 },
          { name: 'Sweet ‘N’ Chilli Fried — 4 Pcs', price: 950 },
          { name: 'Tender Pops', price: 450 },
          { name: 'Tender Pops (10 · Saucy)', price: 500 },
        ],
      },
    ],
  },
  {
    id: 'fries',
    name: 'Fries Frenzy',
    emoji: '🍟',
    banner: img('fries.jpg'),
    wide: true,
    pill: 'More Than Fries',
    groups: [
      {
        title: 'Classic Fries',
        items: [
          { name: 'Plain Fries', price: 230 },
          { name: 'Masala Fries', price: 250 },
          { name: 'Peri Peri Masala Fries', price: 250 },
          { name: 'Jalapeno Masala Fries', price: 250 },
        ],
      },
      {
        title: 'Hi-Fries Special',
        items: [
          { name: 'Peri Peri ‘N’ Chipotle Fries', desc: 'Crispy golden fries topped with peri peri thousand sauce, jalapeno & chicken tikka', variants: [{ label: 'L', price: 550 }] },
          { name: 'Oven Baked Loaded Fries', desc: 'Fries, special ch., pizza cheese, sausages, capsicum & topped with thousand & bbq sauce', variants: [{ label: 'S', price: 400 }, { label: 'L', price: 650 }] },
          { name: 'Crunchy Loaded Fries', desc: 'Crispy golden fries, crispy chicken thai, pop jalapeno & topped with bbq thousand sauce', variants: [{ label: 'L', price: 650 }] },
        ],
      },
      {
        title: 'Dip Sauce · Rs. 70 each',
        items: [
          { name: 'Mayo Dip', price: 70 },
          { name: 'Chipotle Dip', price: 70 },
          { name: 'Special White Dip', price: 70 },
          { name: 'BBQ Dip', price: 70 },
          { name: 'Thousand Dip', price: 70 },
          { name: 'Peri Peri Dip', price: 70 },
        ],
      },
    ],
    note: 'Extra Toppings — S 80 · M 100 · L 120 · XL 150',
  },
]
