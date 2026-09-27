import { MenuItem } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  // --- LUNCH: PLATES & SANDWICHES ---
  {
    id: 'koshary',
    name: 'Royal Egyptian Koshary',
    originalName: 'Koshary',
    category: 'lunch',
    price: 12.99,
    description: 'The iconic national dish: seasoned rice, macaroni, tender chickpeas, and brown lentils, topped with deeply golden crispy fried onions and spiced Alexandrian tomato coulis.',
    isVegetarian: true,
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80',
    tags: ['Signature', 'Vegetarian', 'Traditional']
  },
  {
    id: 'hawawshi',
    name: 'Crispy Baladi Hawawshi',
    originalName: 'Hawawshi',
    category: 'lunch',
    price: 15.99,
    description: 'Artisanal pita bread filled with spiced minced beef, celery, diced tomatoes, and sweet onions, baked in stone oven until golden and delightfully crispy.',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80',
    tags: ['House Favorite', 'Oven Baked']
  },
  {
    id: 'chicken-shawerma',
    name: 'Gourmet Chicken Shawerma',
    originalName: 'Chicken Shawerma',
    category: 'lunch',
    price: 14.99,
    description: 'Tender chicken slices marinated in citrus and 7 Middle Eastern spices, slowly spit-roasted, served in flatbread with house pickles and sauce of your choice.',
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=800&q=80',
    tags: ['Signature Sandwich']
  },
  {
    id: 'beef-shawerma',
    name: 'Marinated Beef Shawerma',
    originalName: 'Beef Shawerma',
    category: 'lunch',
    price: 14.99,
    description: 'Prime cut beef delicately marinated in Cairo spices, flame roasted, served with sumac onions, fresh parsley, and artisanal sesame tahini drizzle.',
    image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=800&q=80',
    tags: ['Traditional']
  },
  {
    id: 'chicken-tikka',
    name: 'Chicken Tikka Plate with Saffron Rice',
    originalName: 'Chicken Tikka',
    category: 'lunch',
    price: 14.99,
    description: 'Charbroiled chicken breast skewers seasoned with oriental spices, served alongside fragrant saffron basmati rice and house dipping sauces.',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    tags: ['Hot Plate']
  },

  // --- BAKERY & VIENNOISERIE ---
  {
    id: 'plain-croissant',
    name: 'Flaky Pure Butter Croissant',
    originalName: 'Plain Croissant',
    category: 'bakery',
    price: 3.99,
    description: 'Delicately layered and baked to golden perfection using premium European sweet butter for an unmistakable crisp flake.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
    tags: ['Artisanal']
  },
  {
    id: 'zaatar-croissant',
    name: 'Wild Zaatar Croissant',
    originalName: 'Zaatar Croissant',
    category: 'bakery',
    price: 4.99,
    description: 'French viennoiserie meets Levantine herbs: crispy buttery croissant infused with aromatic wild thyme, sumac, and toasted sesame.',
    image: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&w=800&q=80',
    tags: ['House Specialty']
  },
  {
    id: 'fastrami-croissant',
    name: 'Pastrami & Spices Croissant',
    originalName: 'Fastrami Croissant',
    category: 'bakery',
    price: 5.29,
    description: 'Flaky croissant stuffed with thin cuts of smoked Egyptian pastrami (basterma), balanced with melted cheese and delicate spices.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    tags: ['Savory Gourmet']
  },
  {
    id: 'cream-cheese-croissant',
    name: 'Cream Cheese Croissant',
    originalName: 'Cream Cheese Croissant',
    category: 'bakery',
    price: 4.99,
    description: 'Silky sweet whipped cream cheese center baked within a golden, flaky puff pastry shell.',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=800&q=80',
    tags: ['Bakery']
  },
  {
    id: 'cheddar-croissant',
    name: 'Melted Cheddar Croissant',
    originalName: 'Cheddar Croissant',
    category: 'bakery',
    price: 4.99,
    description: 'Generously filled with aged cheddar cheese, gently gratinéed on top for rich, comforting flavor.',
    image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=800&q=80',
    tags: ['Savory']
  },
  {
    id: 'danish-berry',
    name: 'Artisan Berry Danish',
    originalName: 'Danish',
    category: 'bakery',
    price: 4.99,
    description: 'Brioche puff pastry filled with vanilla bean pastry cream, sweet wild red berry compote, and delicate glaze.',
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=800&q=80',
    tags: ['Sweet Pastry']
  },
  {
    id: 'lotus-croissant',
    name: 'Lotus Biscoff Caramel Croissant',
    originalName: 'Lotus Croissant',
    category: 'bakery',
    price: 4.99,
    description: 'Generously drizzled with rich Lotus speculoos spread and topped with crushed caramelized biscuit crunch.',
    image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80',
    tags: ['Indulgent']
  },
  {
    id: 'nutella-croissant',
    name: 'Nutella Hazelnut Croissant',
    originalName: 'Nutella Croissant',
    category: 'bakery',
    price: 4.99,
    description: 'Filled and topped with luscious cocoa hazelnut cream and sprinkled with toasted crushed hazelnuts.',
    image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=800&q=80',
    tags: ['Indulgent']
  },
  {
    id: 'almond-croissant',
    name: 'Toasted Almond Croissant',
    originalName: 'Almond Croissant',
    category: 'bakery',
    price: 5.49,
    description: 'Infused with light syrup, layered with homemade sweet almond frangipane, and crowned with toasted sliced almonds and powdered sugar.',
    image: 'https://images.unsplash.com/photo-1623334044303-251086455794?auto=format&fit=crop&w=800&q=80',
    tags: ['Classic']
  },

  // --- BEVERAGES & CAFE ---
  {
    id: 'sailaai',
    name: 'Royal Egyptian Sailaai',
    originalName: 'Sailaai',
    category: 'beverages',
    price: 4.99,
    description: 'The house secret recipe: velvety hot beverage brewed with crushed green cardamom pods, steamed milk, and warming sweet spices.',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80',
    tags: ['House Signature', 'Must Try']
  },
  {
    id: 'karak-tea',
    name: 'Authentic Spiced Karak Tea',
    originalName: 'Karak Tea',
    category: 'beverages',
    price: 3.99,
    description: 'Rich black tea slow-simmered with evaporated milk, whole cardamom pods, cinnamon bark, and cloves.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    tags: ['Traditional']
  },
  {
    id: 'espresso-blend',
    name: 'Grand Cru Espresso',
    originalName: 'Espresso',
    category: 'beverages',
    price: 2.99,
    description: 'Dense extraction of single-origin beans roasted to perfection, topped with silky copper-colored crema.',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=80',
    tags: ['Specialty Coffee']
  },
  {
    id: 'american-coffee',
    name: 'House Roast American Coffee',
    originalName: 'American Coffee',
    category: 'beverages',
    price: 2.99,
    priceVariants: [
      { size: 'Small (S)', price: 2.99 },
      { size: 'Medium (M)', price: 3.99 },
      { size: 'Large (L)', price: 4.99 }
    ],
    description: 'Clean, aromatic drip coffee with notes of dark cacao and tonka bean.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    tags: ['Classic']
  },
  {
    id: 'latte-artisan',
    name: 'Artisanal Cafe Latte',
    originalName: 'Latte',
    category: 'beverages',
    price: 3.99,
    priceVariants: [
      { size: 'Medium (M)', price: 3.99 },
      { size: 'Large (L)', price: 4.99 }
    ],
    description: 'Double espresso pulled over smooth textured microfoam milk, finished with handcrafted latte art.',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80',
    tags: ['Smooth & Balanced']
  },
  {
    id: 'cappuccino-crema',
    name: 'Cappuccino Crema Royale',
    originalName: 'Cappuccino',
    category: 'beverages',
    price: 2.99,
    priceVariants: [
      { size: 'Small (S)', price: 2.99 },
      { size: 'Medium (M)', price: 3.99 },
      { size: 'Large (L)', price: 4.99 }
    ],
    description: 'Equal parts robust espresso, steamed milk, and a thick airy dome of foam.',
    image: 'https://images.unsplash.com/photo-1572442388796-11668ba67e53?auto=format&fit=crop&w=800&q=80',
    tags: ['Classic']
  },

  // --- PIZZA, BAGEL & WORKSHOP ---
  {
    id: 'egg-bagel-chips',
    name: 'Egg Bagel & Golden Chips',
    originalName: 'Egg Bagel & Chips',
    category: 'pizza_others',
    price: 6.99,
    description: 'Toasted artisanal bagel stuffed with tender scrambled eggs and melted cheese, paired with seasoned crispy chips.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    tags: ['Brunch & Lunch']
  },
  {
    id: 'artisan-pizza',
    name: 'Stone Oven Artisan Pizza',
    originalName: 'Choose Your Pizza',
    category: 'pizza_others',
    price: 7.99,
    description: 'Crispy thin crust baked on stone with aromatic herb tomato sauce and melted mozzarella. Additional toppings available (+2.00$ : Mixed Cheese, Wild Zaatar, Artisanal Pepperoni, Spiced Chicken).',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    tags: ['Customizable']
  }
];

export const FLAVOR_OPTIONS = [
  { name: 'Bourbon Vanilla', original: 'Vanilla', price: 1.00 },
  { name: 'Golden Caramel', original: 'Caramel', price: 1.00 },
  { name: 'Pure Wild Honey', original: 'Honey', price: 1.00 },
  { name: 'White Mocha', original: 'White Mocha', price: 1.00 },
  { name: 'Oriental Spiced Blend', original: 'Spiced', price: 1.00 }
];

export const SANDWICH_BUILDER_OPTIONS = {
  breads: [
    { name: 'Soft Bread', price: 7.99, type: 'standard' },
    { name: 'Traditional Panini', price: 7.99, type: 'standard' },
    { name: 'Brown Panini (Whole Wheat)', price: 7.99, type: 'standard' },
    { name: 'Plain Ciabatta', price: 7.99, type: 'standard' },
    { name: 'Brown Ciabatta (Whole Wheat)', price: 7.99, type: 'standard' },
    { name: 'Natural Sourdough', price: 7.99, type: 'standard' },
    { name: 'Tortilla Wrap', price: 7.99, type: 'standard' },
    { name: 'White Bagel', price: 4.99, type: 'bagel' },
    { name: 'Brown Bagel (Multi-grain)', price: 4.99, type: 'bagel' }
  ],
  proteins: [
    { name: 'Roasted Herb Turkey', price: 2.00 },
    { name: 'Marinated Roast Beef', price: 2.00 },
    { name: 'Egyptian Spiced Grilled Chicken', price: 2.00 },
    { name: 'Spicy Marinated Chicken', price: 2.00 },
    { name: 'Seasoned Tuna', price: 2.00 }
  ],
  toppings: [
    { name: 'Mixed Melted Cheese', price: 1.00 },
    { name: 'Fresh Vegetables (Tomato, Lettuce, Cucumber)', price: 1.00 },
    { name: 'House Pickles', price: 1.00 },
    { name: 'Jalapeños', price: 1.00 }
  ],
  sauces: [
    { name: 'Taste of Egypt Special Sauce', price: 0 },
    { name: 'Smooth Mayonnaise', price: 0 },
    { name: 'Fresh Basil & Olive Oil Pesto', price: 0 }
  ],
  pizzaToppings: [
    { name: 'Mixed Melted Cheese', price: 2.00 },
    { name: 'Wild Zaatar & Extra Virgin Olive Oil', price: 2.00 },
    { name: 'Artisanal Pepperoni', price: 2.00 },
    { name: 'Spiced Grilled Chicken', price: 2.00 }
  ]
};

export const GALLERY_ITEMS = [
  {
    title: 'The Intimate Dining Atmosphere',
    caption: 'Warm ambient lighting, velvet seating, and dark walnut tables in San Diego',
    image: 'https://i.ibb.co/hRj3SFzR/Chat-GPT-Image-27-sept-2026-02-36-16-1.png',
    category: 'The Venue'
  },
  {
    title: 'Authentic Egyptian Koshary',
    caption: 'Layered brown lentils, chickpeas, and golden crispy onions',
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80',
    category: 'Signature Dish'
  },
  {
    title: 'Stone Oven Charred Hawawshi',
    caption: 'Spiced minced beef baked inside fresh baladi pita bread',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80',
    category: 'Elevated Street Food'
  },
  {
    title: 'Golden Artisanal Viennoiserie',
    caption: 'Freshly baked every morning with pure butter and subtle Eastern spices',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
    category: 'Bakery Workshop'
  },
  {
    title: 'Karak Tea & Spiced Chai Ritual',
    caption: 'Crushed green cardamom, cinnamon bark, and creamy evaporated milk',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    category: 'Coffee & Infusions'
  },
  {
    title: 'Spit-Roasted Shawerma Platter',
    caption: 'Slow-roasted tender slices, sesame tahini, and warm baladi bread',
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=800&q=80',
    category: 'Lunch Plates'
  },
  {
    title: 'Artisan Bagel Sandwich & Crispy Chips',
    caption: 'Warm eggs, melted cheese, and seasoned crispy chips',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    category: 'Brunch'
  }
];

export const CAFE_INFO = {
  name: 'TASTE OF EGYPT CAFE',
  tagline: 'Haute Egyptian Gastronomy & Artisanal Bakery',
  address: '4360 Twain Ave, Unit 110',
  cityStateZip: 'San Diego, California 92120',
  phone: '(619) 714-0898',
  phoneRaw: '6197140898',
  email: 'contact@tasteofegyptcafe.com',
  hours: {
    weekdays: '7:00 AM – 10:00 PM',
    weekends: '8:00 AM – 11:00 PM'
  },
  features: [
    'Dine-in & Curbside Pickup',
    'Fresh pastries baked daily at dawn',
    'Authentic spices imported from Egypt',
    'Specialty coffee & traditional Karak tea',
    'Sunny patio & private salon seating'
  ]
};
