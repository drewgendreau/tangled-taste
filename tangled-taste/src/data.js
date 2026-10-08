// Curated dataset. Popularity values (0–100) are illustrative estimates of
// worldwide recognition, not measured statistics.

export const CATEGORIES = {
  vegetable: { label: 'Vegetables', color: '#7fa36b' },
  herb: { label: 'Herbs & Greens', color: '#4f9a72' },
  fruit: { label: 'Fruits', color: '#e08a63' },
  spice: { label: 'Spices & Chilies', color: '#c4743a' },
  meat: { label: 'Meat & Poultry', color: '#bf5656' },
  seafood: { label: 'Seafood', color: '#5a8fb8' },
  dairy: { label: 'Dairy & Eggs', color: '#e0bb57' },
  grain: { label: 'Grains & Starches', color: '#c39a62' },
  legume: { label: 'Legumes & Soy', color: '#958a4a' },
  nut: { label: 'Nuts & Seeds', color: '#9c7552' },
  pantry: { label: 'Sauces, Oils & Pantry', color: '#8d5f8e' },
};

export const CUISINES = {
  Italian: { country: 'Italy', region: 'Southern Europe', lat: 42.5, lng: 12.5, color: '#c0504d' },
  French: { country: 'France', region: 'Western Europe', lat: 46.6, lng: 2.4, color: '#5b7db1' },
  Spanish: { country: 'Spain', region: 'Southern Europe', lat: 40.2, lng: -3.7, color: '#d9913b' },
  Greek: { country: 'Greece', region: 'Southern Europe', lat: 39.0, lng: 22.0, color: '#4a90a8' },
  Mexican: { country: 'Mexico', region: 'North America', lat: 23.6, lng: -102.5, color: '#3f9a6b' },
  American: { country: 'United States', region: 'North America', lat: 39.8, lng: -98.6, color: '#8a6aa8' },
  Peruvian: { country: 'Peru', region: 'South America', lat: -9.2, lng: -75.0, color: '#d46a7e' },
  Brazilian: { country: 'Brazil', region: 'South America', lat: -14.2, lng: -51.9, color: '#6f9a3a' },
  Japanese: { country: 'Japan', region: 'East Asia', lat: 36.2, lng: 138.3, color: '#cf5f6f' },
  Chinese: { country: 'China', region: 'East Asia', lat: 35.9, lng: 104.2, color: '#b8433a' },
  Korean: { country: 'South Korea', region: 'East Asia', lat: 36.5, lng: 127.9, color: '#5a6fb0' },
  Thai: { country: 'Thailand', region: 'Southeast Asia', lat: 15.9, lng: 100.9, color: '#3e9c8f' },
  Vietnamese: { country: 'Vietnam', region: 'Southeast Asia', lat: 14.1, lng: 108.3, color: '#86a83f' },
  Indian: { country: 'India', region: 'South Asia', lat: 21.0, lng: 78.9, color: '#e0a030' },
  Levantine: { country: 'Lebanon', region: 'Middle East', lat: 33.9, lng: 35.9, color: '#b7884a' },
  Moroccan: { country: 'Morocco', region: 'North Africa', lat: 31.8, lng: -7.1, color: '#c8673e' },
  Ethiopian: { country: 'Ethiopia', region: 'East Africa', lat: 9.1, lng: 40.5, color: '#9e5a3c' },
};

const I = (category, ...names) => names.map((n) => [n, category]);
export const INGREDIENT_CATEGORY = Object.fromEntries([
  ...I('vegetable', 'tomato', 'onion', 'garlic', 'carrot', 'celery', 'potato', 'eggplant', 'zucchini',
    'bell pepper', 'mushroom', 'cucumber', 'cabbage', 'spinach', 'lettuce', 'scallion', 'sweet potato',
    'radish', 'bean sprouts', 'green beans', 'peas', 'fennel', 'bamboo shoot', 'olive', 'avocado', 'pickle', 'seaweed'),
  ...I('herb', 'basil', 'parsley', 'cilantro', 'mint', 'dill', 'thyme', 'oregano', 'bay leaf',
    'lemongrass', 'curry leaves'),
  ...I('fruit', 'lemon', 'lime', 'orange', 'apple', 'pineapple', 'mango', 'papaya', 'pear',
    'pomegranate', 'apricot', 'coconut', 'tamarind'),
  ...I('spice', 'black pepper', 'chili', 'paprika', 'cumin', 'coriander', 'cinnamon', 'nutmeg',
    'saffron', 'turmeric', 'ginger', 'galangal', 'garam masala', 'cardamom', 'star anise',
    'sichuan pepper', 'five-spice', 'fenugreek', 'mustard seed', 'berbere', 'wasabi', 'vanilla'),
  ...I('meat', 'beef', 'pork', 'chicken', 'lamb', 'veal', 'duck', 'bacon', 'guanciale', 'sausage'),
  ...I('seafood', 'fish', 'shrimp', 'shellfish'),
  ...I('dairy', 'egg', 'butter', 'milk', 'cream', 'parmesan', 'mozzarella', 'pecorino', 'mascarpone',
    'gruyère', 'feta', 'cheddar', 'queso fresco', 'yogurt', 'paneer', 'ghee'),
  ...I('grain', 'flour', 'rice', 'pasta', 'noodles', 'bread', 'corn', 'flatbread', 'bulgur',
    'couscous', 'tapioca', 'yeast'),
  ...I('legume', 'chickpeas', 'lentils', 'beans', 'tofu', 'miso', 'soy sauce'),
  ...I('nut', 'peanut', 'almond', 'walnut', 'pistachio', 'pine nuts', 'sesame', 'tahini'),
  ...I('pantry', 'olive oil', 'vegetable oil', 'sesame oil', 'palm oil', 'salt', 'sugar', 'honey',
    'vinegar', 'white wine', 'red wine', 'stock', 'coffee', 'cocoa', 'chocolate', 'fish sauce',
    'hoisin', 'mirin', 'gochujang', 'chili bean paste', 'mayonnaise', 'coconut milk'),
]);

// [dish, cuisine, popularity, ingredients, short note]
const D = [
  ['Margherita Pizza', 'Italian', 98, 'flour, yeast, tomato, mozzarella, basil, olive oil, salt', 'Naples, 1889 — the colours of the Italian flag.'],
  ['Spaghetti Carbonara', 'Italian', 92, 'pasta, egg, pecorino, guanciale, black pepper', 'A Roman classic; no cream required.'],
  ['Lasagna', 'Italian', 90, 'pasta, beef, tomato, onion, garlic, parmesan, mozzarella, milk, butter, flour', 'Layered pasta baked with ragù and béchamel.'],
  ['Risotto alla Milanese', 'Italian', 70, 'rice, saffron, butter, parmesan, onion, white wine, stock', 'Golden saffron risotto from Milan.'],
  ['Pesto Genovese', 'Italian', 78, 'basil, pine nuts, garlic, parmesan, pecorino, olive oil, pasta', 'Pounded basil sauce from Liguria.'],
  ['Tiramisu', 'Italian', 88, 'egg, sugar, mascarpone, coffee, cocoa, flour', 'Coffee-soaked layers of mascarpone cream.'],
  ['Minestrone', 'Italian', 60, 'tomato, onion, carrot, celery, beans, pasta, garlic, olive oil, zucchini, parmesan', 'A thick, seasonal vegetable soup.'],
  ['Osso Buco', 'Italian', 55, 'veal, onion, carrot, celery, white wine, tomato, garlic, lemon, parsley, butter', 'Braised veal shanks with gremolata.'],

  ['Coq au Vin', 'French', 65, 'chicken, red wine, mushroom, onion, bacon, garlic, thyme, butter, bay leaf', 'Chicken braised slowly in Burgundy wine.'],
  ['Ratatouille', 'French', 70, 'eggplant, zucchini, tomato, bell pepper, onion, garlic, olive oil, thyme, basil', 'Provençal summer vegetable stew.'],
  ['French Onion Soup', 'French', 72, 'onion, butter, stock, bread, gruyère, thyme, white wine, bay leaf', 'Caramelised onions under a bubbling cheese crust.'],
  ['Croissant', 'French', 90, 'flour, butter, yeast, sugar, milk, salt', 'Laminated, flaky, buttery pastry.'],
  ['Crème Brûlée', 'French', 80, 'cream, egg, sugar, vanilla', 'Silky custard beneath a glassy sugar crust.'],
  ['Bouillabaisse', 'French', 50, 'fish, shellfish, tomato, onion, garlic, saffron, fennel, olive oil, orange, bread', 'Marseille fisherman’s stew.'],
  ['Quiche Lorraine', 'French', 62, 'egg, cream, bacon, flour, butter, gruyère, nutmeg', 'Savoury custard tart from Lorraine.'],
  ['Beef Bourguignon', 'French', 68, 'beef, red wine, onion, carrot, mushroom, bacon, garlic, thyme, bay leaf', 'Beef stewed in red wine with pearl onions.'],

  ['Paella', 'Spanish', 85, 'rice, saffron, chicken, shrimp, tomato, bell pepper, paprika, olive oil, garlic, peas, green beans', 'Saffron rice cooked wide and shallow in Valencia.'],
  ['Gazpacho', 'Spanish', 60, 'tomato, cucumber, bell pepper, garlic, olive oil, bread, vinegar, salt', 'Chilled Andalusian tomato soup.'],
  ['Tortilla Española', 'Spanish', 70, 'potato, egg, onion, olive oil, salt', 'Thick potato and egg omelette.'],
  ['Patatas Bravas', 'Spanish', 66, 'potato, paprika, tomato, garlic, olive oil, chili, mayonnaise', 'Crisp potatoes with a smoky, spicy sauce.'],
  ['Churros con Chocolate', 'Spanish', 75, 'flour, sugar, vegetable oil, cinnamon, chocolate, milk, salt', 'Fried dough dipped in thick hot chocolate.'],

  ['Moussaka', 'Greek', 64, 'eggplant, lamb, tomato, onion, garlic, cinnamon, milk, butter, flour, nutmeg, egg', 'Layers of eggplant, spiced lamb and béchamel.'],
  ['Greek Salad', 'Greek', 72, 'tomato, cucumber, onion, olive, feta, oregano, olive oil, bell pepper', 'Horiatiki — the village salad.'],
  ['Souvlaki', 'Greek', 70, 'pork, garlic, lemon, oregano, olive oil, flatbread, yogurt, tomato, onion', 'Grilled skewers wrapped in warm pita.'],
  ['Spanakopita', 'Greek', 55, 'spinach, feta, flour, onion, dill, egg, olive oil, butter', 'Spinach and feta in crisp phyllo.'],
  ['Tzatziki', 'Greek', 60, 'yogurt, cucumber, garlic, dill, olive oil, lemon', 'Cool yogurt and cucumber dip.'],

  ['Tacos al Pastor', 'Mexican', 88, 'pork, pineapple, chili, onion, cilantro, corn, lime, garlic, cumin, vinegar', 'Spit-roasted pork, born from Lebanese shawarma.'],
  ['Guacamole', 'Mexican', 85, 'avocado, lime, onion, cilantro, chili, tomato, salt', 'Aztec-era avocado sauce.'],
  ['Mole Poblano', 'Mexican', 58, 'chili, chocolate, sesame, almond, garlic, onion, cinnamon, tomato, chicken, cumin', 'Dozens of ingredients ground into a dark, rich sauce.'],
  ['Enchiladas', 'Mexican', 74, 'corn, chicken, chili, tomato, onion, queso fresco, cream, garlic', 'Rolled tortillas bathed in chili sauce.'],
  ['Pozole', 'Mexican', 52, 'pork, corn, chili, garlic, onion, oregano, cabbage, lime, radish', 'Hominy stew served for celebrations.'],
  ['Chiles en Nogada', 'Mexican', 40, 'chili, pork, walnut, pomegranate, cream, apple, onion, garlic, parsley', 'Stuffed poblanos in walnut sauce.'],

  ['Hamburger', 'American', 96, 'beef, bread, lettuce, tomato, onion, cheddar, pickle, salt', 'The world’s favourite sandwich.'],
  ['BBQ Ribs', 'American', 70, 'pork, sugar, paprika, garlic, vinegar, tomato, black pepper, salt', 'Low-and-slow smoked ribs.'],
  ['Mac and Cheese', 'American', 80, 'pasta, cheddar, milk, butter, flour, salt', 'Comfort food baked until golden.'],
  ['Fried Chicken', 'American', 86, 'chicken, flour, milk, paprika, black pepper, vegetable oil, garlic, salt', 'Buttermilk-brined, crisp-fried.'],
  ['Apple Pie', 'American', 76, 'apple, flour, butter, sugar, cinnamon, nutmeg, lemon', 'As American as…'],
  ['Clam Chowder', 'American', 55, 'shellfish, potato, onion, celery, cream, bacon, butter, thyme', 'New England’s creamy clam soup.'],

  ['Ceviche', 'Peruvian', 78, 'fish, lime, chili, onion, cilantro, sweet potato, corn, salt', 'Raw fish cured in tiger’s milk.'],
  ['Lomo Saltado', 'Peruvian', 60, 'beef, potato, tomato, onion, soy sauce, vinegar, chili, rice, cilantro', 'Chifa stir-fry of beef and fries.'],
  ['Ají de Gallina', 'Peruvian', 45, 'chicken, chili, bread, milk, walnut, onion, garlic, parmesan, rice', 'Shredded chicken in a creamy yellow-pepper sauce.'],

  ['Feijoada', 'Brazilian', 62, 'beans, pork, sausage, onion, garlic, bay leaf, orange, rice, bacon', 'Black bean and pork stew.'],
  ['Pão de Queijo', 'Brazilian', 58, 'tapioca, parmesan, egg, milk, vegetable oil, salt', 'Chewy cheese bread from Minas Gerais.'],
  ['Moqueca', 'Brazilian', 50, 'fish, coconut milk, tomato, onion, bell pepper, cilantro, lime, palm oil, garlic', 'Bahian fish stew with dendê oil.'],

  ['Sushi', 'Japanese', 97, 'rice, fish, vinegar, seaweed, soy sauce, wasabi, ginger, sugar', 'Vinegared rice with the freshest fish.'],
  ['Ramen', 'Japanese', 92, 'noodles, pork, egg, soy sauce, miso, scallion, garlic, ginger, seaweed, stock', 'Noodles in a deep, slow-simmered broth.'],
  ['Tempura', 'Japanese', 70, 'shrimp, flour, egg, vegetable oil, sweet potato, soy sauce, radish, mirin', 'Feather-light battered fritters.'],
  ['Miso Soup', 'Japanese', 75, 'miso, tofu, seaweed, scallion, fish', 'Everyday soup of dashi and miso.'],
  ['Teriyaki Chicken', 'Japanese', 72, 'chicken, soy sauce, mirin, sugar, ginger, garlic, rice', 'Glossy, sweet-savoury glaze.'],
  ['Okonomiyaki', 'Japanese', 45, 'flour, cabbage, egg, pork, scallion, mayonnaise, seaweed', 'Savory pancake, "grilled as you like it".'],

  ['Kung Pao Chicken', 'Chinese', 80, 'chicken, peanut, chili, sichuan pepper, soy sauce, garlic, ginger, scallion, vinegar, sugar', 'Sichuan stir-fry with numbing heat.'],
  ['Mapo Tofu', 'Chinese', 68, 'tofu, pork, chili, sichuan pepper, chili bean paste, garlic, ginger, scallion, soy sauce', 'Silken tofu in fiery bean sauce.'],
  ['Peking Duck', 'Chinese', 75, 'duck, hoisin, scallion, cucumber, flour, five-spice, sugar', 'Lacquered roast duck in thin pancakes.'],
  ['Jiaozi Dumplings', 'Chinese', 88, 'flour, pork, cabbage, ginger, scallion, soy sauce, sesame oil, garlic', 'Folded for Lunar New Year.'],
  ['Fried Rice', 'Chinese', 85, 'rice, egg, scallion, soy sauce, garlic, peas, carrot, sesame oil', 'Day-old rice, wok-tossed.'],
  ['Hot and Sour Soup', 'Chinese', 55, 'tofu, mushroom, egg, vinegar, black pepper, soy sauce, bamboo shoot', 'Peppery, tangy and warming.'],

  ['Pad Thai', 'Thai', 92, 'noodles, shrimp, egg, tofu, peanut, fish sauce, tamarind, lime, bean sprouts, garlic, sugar', 'Stir-fried rice noodles, sweet-sour-salty.'],
  ['Green Curry', 'Thai', 80, 'coconut milk, chicken, chili, lemongrass, galangal, basil, fish sauce, eggplant, lime, sugar', 'Fragrant curry of fresh green chilies.'],
  ['Tom Yum', 'Thai', 74, 'shrimp, lemongrass, galangal, lime, chili, fish sauce, mushroom, cilantro', 'Hot and sour shrimp soup.'],
  ['Som Tam', 'Thai', 58, 'papaya, chili, lime, fish sauce, peanut, tomato, garlic, green beans, sugar', 'Pounded green papaya salad.'],
  ['Mango Sticky Rice', 'Thai', 70, 'rice, mango, coconut milk, sugar, sesame, salt', 'Sweet coconut rice with ripe mango.'],

  ['Pho', 'Vietnamese', 88, 'noodles, beef, star anise, cinnamon, ginger, onion, fish sauce, basil, cilantro, lime, bean sprouts, chili', 'Aromatic beef noodle soup.'],
  ['Bánh Mì', 'Vietnamese', 80, 'bread, pork, carrot, radish, cilantro, cucumber, chili, mayonnaise, soy sauce', 'French baguette, Vietnamese fillings.'],
  ['Gỏi Cuốn', 'Vietnamese', 64, 'rice, shrimp, pork, lettuce, mint, noodles, peanut, hoisin', 'Fresh summer rolls in rice paper.'],

  ['Kimchi', 'Korean', 76, 'cabbage, chili, garlic, ginger, fish sauce, scallion, radish, sugar', 'Fermented napa cabbage.'],
  ['Bibimbap', 'Korean', 78, 'rice, beef, egg, spinach, carrot, bean sprouts, gochujang, sesame oil, mushroom, garlic', 'Mixed rice in a sizzling stone bowl.'],
  ['Bulgogi', 'Korean', 74, 'beef, soy sauce, pear, garlic, sesame oil, sugar, scallion, ginger', '"Fire meat" — marinated grilled beef.'],
  ['Tteokbokki', 'Korean', 60, 'rice, gochujang, fish, scallion, sugar, egg, cabbage', 'Chewy rice cakes in red chili sauce.'],

  ['Butter Chicken', 'Indian', 90, 'chicken, tomato, butter, cream, garam masala, ginger, garlic, chili, yogurt, fenugreek', 'Murgh makhani, born in Delhi.'],
  ['Biryani', 'Indian', 88, 'rice, chicken, yogurt, onion, saffron, garam masala, ginger, garlic, mint, cilantro, ghee, cardamom', 'Layered, perfumed rice.'],
  ['Chana Masala', 'Indian', 72, 'chickpeas, tomato, onion, garlic, ginger, cumin, coriander, garam masala, chili', 'Spiced chickpea curry.'],
  ['Palak Paneer', 'Indian', 70, 'spinach, paneer, onion, garlic, ginger, cumin, cream, garam masala, chili', 'Fresh cheese in spinach gravy.'],
  ['Dal Tadka', 'Indian', 75, 'lentils, turmeric, cumin, garlic, ginger, onion, tomato, ghee, chili', 'Lentils finished with sizzling spices.'],
  ['Samosa', 'Indian', 82, 'flour, potato, peas, cumin, coriander, chili, ginger, vegetable oil', 'Crisp pastry pockets of spiced potato.'],
  ['Masala Dosa', 'Indian', 68, 'rice, lentils, potato, mustard seed, turmeric, onion, chili, curry leaves, coconut', 'Crisp fermented crêpe from the South.'],

  ['Hummus', 'Levantine', 88, 'chickpeas, tahini, lemon, garlic, olive oil, cumin, salt', 'Creamy chickpea and sesame purée.'],
  ['Falafel', 'Levantine', 82, 'chickpeas, onion, garlic, parsley, cilantro, cumin, coriander, vegetable oil', 'Herb-flecked chickpea fritters.'],
  ['Shawarma', 'Levantine', 85, 'chicken, garlic, yogurt, lemon, cumin, paprika, turmeric, flatbread, tahini', 'Spit-roasted meat shaved thin.'],
  ['Tabbouleh', 'Levantine', 60, 'bulgur, parsley, mint, tomato, onion, lemon, olive oil', 'A parsley salad, not a grain salad.'],
  ['Baklava', 'Levantine', 74, 'flour, walnut, pistachio, butter, honey, sugar, cinnamon', 'Honeyed layers of nuts and phyllo.'],

  ['Lamb Tagine', 'Moroccan', 66, 'lamb, onion, garlic, ginger, cinnamon, cumin, saffron, apricot, almond, honey, olive oil', 'Slow-cooked under a conical lid.'],
  ['Vegetable Couscous', 'Moroccan', 62, 'couscous, carrot, zucchini, chickpeas, onion, tomato, cumin, cinnamon, turmeric', 'Friday couscous with seven vegetables.'],
  ['Harira', 'Moroccan', 45, 'lentils, chickpeas, tomato, onion, celery, cilantro, parsley, lamb, ginger, cinnamon, turmeric', 'Soup that breaks the Ramadan fast.'],

  ['Doro Wat', 'Ethiopian', 50, 'chicken, onion, berbere, butter, garlic, ginger, egg, cardamom', 'Slow-simmered chicken in berbere.'],
  ['Misir Wat', 'Ethiopian', 45, 'lentils, berbere, onion, garlic, ginger, tomato, vegetable oil', 'Spiced red lentil stew.'],
  ['Shiro', 'Ethiopian', 42, 'chickpeas, berbere, onion, garlic, tomato, butter', 'Silky ground-chickpea stew.'],
];

export const DISHES = D.map(([name, cuisine, popularity, ingr, note], id) => ({
  id,
  name,
  cuisine,
  popularity,
  note,
  ingredients: ingr.split(',').map((s) => s.trim()),
}));

for (const d of DISHES) {
  for (const i of d.ingredients) {
    if (!INGREDIENT_CATEGORY[i]) console.warn('Uncategorised ingredient:', i, 'in', d.name);
  }
}
