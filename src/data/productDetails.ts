export type ProductDetailFields = {
  description: string
  ingredients: string[]
  calories: string
  serving: string
  deliveryTime: string
  spicyLevel: 'Not spicy' | 'Mild' | 'Medium' | 'Hot'
  foodType: 'Veg' | 'Non-Veg' | 'Dessert' | 'Drink'
  tags: string[]
}

export const productDetailsById: Record<number, ProductDetailFields> = {
  1: {
    description:
      'A comforting bowl of noodles tossed in a fragrant garlic soy glaze with crunchy vegetables. The texture is silky and light, making it a satisfying everyday meal without feeling heavy.',
    ingredients: ['Noodles', 'Garlic', 'Soy sauce', 'Bell peppers', 'Spring onions'],
    calories: '460 kcal',
    serving: 'Serves 1',
    deliveryTime: '20-30 min',
    spicyLevel: 'Mild',
    foodType: 'Veg',
    tags: ['Popular', 'Fresh', 'Chef Special'],
  },
  2: {
    description:
      'Juicy grilled chicken layered with smoky spices and a touch of lemon. Each bite is tender, aromatic, and balanced with a mildly charred finish.',
    ingredients: ['Chicken', 'Yogurt', 'Lemon juice', 'Paprika', 'Ginger garlic paste'],
    calories: '520 kcal',
    serving: 'Serves 1',
    deliveryTime: '25-35 min',
    spicyLevel: 'Medium',
    foodType: 'Non-Veg',
    tags: ['Grilled', 'High Protein', 'Chef Special'],
  },
  3: {
    description:
      'Classic paneer curry simmered in a rich tomato-onion gravy with warm Indian spices. It is creamy, hearty, and pairs perfectly with naan or jeera rice.',
    ingredients: ['Paneer', 'Tomatoes', 'Onion', 'Cream', 'Garam masala'],
    calories: '480 kcal',
    serving: 'Serves 1',
    deliveryTime: '20-30 min',
    spicyLevel: 'Mild',
    foodType: 'Veg',
    tags: ['North Indian', 'Creamy', 'Popular'],
  },
  4: {
    description:
      'Crispy fried fish fillet served with a zesty herb seasoning and lemon drizzle. The outside is golden and crunchy while the inside stays flaky and moist.',
    ingredients: ['Fish fillet', 'Flour', 'Black pepper', 'Lemon', 'Mixed herbs'],
    calories: '510 kcal',
    serving: 'Serves 1',
    deliveryTime: '25-35 min',
    spicyLevel: 'Mild',
    foodType: 'Non-Veg',
    tags: ['Seafood', 'Crispy', 'Fresh'],
  },
  5: {
    description:
      'A refreshing fruit smoothie blended with ripe mango and banana for natural sweetness. It is chilled, creamy, and ideal as a quick energy boost.',
    ingredients: ['Mango', 'Banana', 'Yogurt', 'Honey', 'Ice'],
    calories: '290 kcal',
    serving: 'Serves 1',
    deliveryTime: '15-20 min',
    spicyLevel: 'Not spicy',
    foodType: 'Drink',
    tags: ['Refreshing', 'Seasonal', 'Popular'],
  },
  6: {
    description:
      'Thin crust pizza topped with mozzarella, roasted vegetables, and house tomato sauce. It bakes to a smoky edge with a soft, cheesy center.',
    ingredients: ['Pizza dough', 'Mozzarella', 'Tomato sauce', 'Olives', 'Zucchini'],
    calories: '640 kcal',
    serving: 'Serves 1',
    deliveryTime: '25-35 min',
    spicyLevel: 'Not spicy',
    foodType: 'Veg',
    tags: ['Italian', 'Bestseller', 'Wood Fired'],
  },
  7: {
    description:
      'Street-style chicken wrap loaded with crunchy lettuce and tangy garlic mayo. It is tightly rolled for a perfect balance of juicy filling and soft flatbread.',
    ingredients: ['Chicken strips', 'Flatbread', 'Lettuce', 'Garlic mayo', 'Pickled onions'],
    calories: '540 kcal',
    serving: 'Serves 1',
    deliveryTime: '20-30 min',
    spicyLevel: 'Medium',
    foodType: 'Non-Veg',
    tags: ['On-The-Go', 'Popular', 'Spicy'],
  },
  8: {
    description:
      'Aromatic vegetable biryani layered with saffron rice and caramelized onions. Slow dum cooking brings out deep flavor in every grain.',
    ingredients: ['Basmati rice', 'Mixed vegetables', 'Saffron', 'Mint', 'Fried onions'],
    calories: '590 kcal',
    serving: 'Serves 1',
    deliveryTime: '25-35 min',
    spicyLevel: 'Medium',
    foodType: 'Veg',
    tags: ['Dum Cooked', 'Aromatic', 'Chef Special'],
  },
  9: {
    description:
      'Spicy prawns tossed in a buttery garlic sauce with crushed chili flakes. The flavor is bold and coastal, ideal for seafood lovers.',
    ingredients: ['Prawns', 'Butter', 'Garlic', 'Chili flakes', 'Parsley'],
    calories: '470 kcal',
    serving: 'Serves 1',
    deliveryTime: '20-30 min',
    spicyLevel: 'Hot',
    foodType: 'Non-Veg',
    tags: ['Seafood', 'Spicy', 'Fresh'],
  },
  10: {
    description:
      'Rich chocolate brownie with a fudgy center and crisp top layer. Served warm for a melt-in-mouth dessert finish.',
    ingredients: ['Dark chocolate', 'Cocoa', 'Butter', 'Flour', 'Brown sugar'],
    calories: '410 kcal',
    serving: 'Serves 1',
    deliveryTime: '15-20 min',
    spicyLevel: 'Not spicy',
    foodType: 'Dessert',
    tags: ['Dessert', 'Sweet Tooth', 'Popular'],
  },
  11: {
    description:
      'Classic paneer tikka skewers marinated in smoky yogurt masala and grilled to perfection. The charred edges and creamy paneer create a bold tandoori taste.',
    ingredients: ['Paneer', 'Yogurt', 'Kashmiri chili', 'Capsicum', 'Onion'],
    calories: '500 kcal',
    serving: 'Serves 1',
    deliveryTime: '20-30 min',
    spicyLevel: 'Medium',
    foodType: 'Veg',
    tags: ['Tandoor', 'Chef Special', 'Popular'],
  },
  12: {
    description:
      'Crispy chicken burger stacked with cheddar, lettuce, and smoky chipotle sauce. It is crunchy, juicy, and packed with comforting flavor.',
    ingredients: ['Chicken patty', 'Burger bun', 'Cheddar', 'Lettuce', 'Chipotle sauce'],
    calories: '670 kcal',
    serving: 'Serves 1',
    deliveryTime: '20-30 min',
    spicyLevel: 'Mild',
    foodType: 'Non-Veg',
    tags: ['Bestseller', 'American', 'Cheesy'],
  },
  13: {
    description:
      'Creamy mushroom pasta cooked in a garlic parmesan sauce with herbs. Every forkful is silky and deeply savory with a restaurant-style finish.',
    ingredients: ['Penne pasta', 'Mushrooms', 'Cream', 'Parmesan', 'Garlic'],
    calories: '560 kcal',
    serving: 'Serves 1',
    deliveryTime: '20-30 min',
    spicyLevel: 'Not spicy',
    foodType: 'Veg',
    tags: ['Italian', 'Creamy', 'Comfort Food'],
  },
  14: {
    description:
      'Tangy fish curry simmered with coconut, tamarind, and coastal spices. It is vibrant, fragrant, and best enjoyed with steamed rice.',
    ingredients: ['Fish', 'Coconut milk', 'Tamarind', 'Curry leaves', 'Mustard seeds'],
    calories: '530 kcal',
    serving: 'Serves 1',
    deliveryTime: '25-35 min',
    spicyLevel: 'Hot',
    foodType: 'Non-Veg',
    tags: ['Coastal', 'Spicy', 'Fresh'],
  },
  15: {
    description:
      'Fresh lime mojito with mint leaves and crushed ice for a cool, citrusy sip. It is fizzy, light, and perfect for warm afternoons.',
    ingredients: ['Lime', 'Mint', 'Soda', 'Sugar syrup', 'Ice'],
    calories: '180 kcal',
    serving: 'Serves 1',
    deliveryTime: '10-15 min',
    spicyLevel: 'Not spicy',
    foodType: 'Drink',
    tags: ['Refreshing', 'Summer', 'Quick'],
  },
  16: {
    description:
      'Gulab jamun soaked in fragrant cardamom syrup and served warm. Soft and juicy texture makes it a classic Indian dessert indulgence.',
    ingredients: ['Khoya', 'Flour', 'Sugar syrup', 'Cardamom', 'Ghee'],
    calories: '360 kcal',
    serving: 'Serves 1',
    deliveryTime: '15-20 min',
    spicyLevel: 'Not spicy',
    foodType: 'Dessert',
    tags: ['Indian Sweet', 'Festive', 'Popular'],
  },
  17: {
    description:
      'Spicy chicken fried rice tossed on high flame with vegetables and soy chili sauce. It has smoky wok notes and a punchy finish.',
    ingredients: ['Rice', 'Chicken', 'Soy sauce', 'Carrot', 'Chili sauce'],
    calories: '610 kcal',
    serving: 'Serves 1',
    deliveryTime: '20-30 min',
    spicyLevel: 'Hot',
    foodType: 'Non-Veg',
    tags: ['Wok Tossed', 'Spicy', 'Bestseller'],
  },
  18: {
    description:
      'Signature falafel platter with hummus, pita, and pickled vegetables. Crisp falafel balls pair with creamy dip for a balanced and wholesome meal.',
    ingredients: ['Chickpeas', 'Parsley', 'Tahini', 'Pita bread', 'Pickled veggies'],
    calories: '500 kcal',
    serving: 'Serves 1',
    deliveryTime: '20-30 min',
    spicyLevel: 'Mild',
    foodType: 'Veg',
    tags: ['Middle Eastern', 'Healthy', 'Chef Special'],
  },
}
