// [dish, cuisine, popularity 0-100, ingredients, note, type]
export default [
  // Levantine
  ['Hummus', 'Levantine', 88, 'chickpeas, tahini, lemon, garlic, olive oil, cumin, salt', 'Creamy chickpea and sesame purée.', 'sauce & dip'],
  ['Falafel', 'Levantine', 82, 'chickpeas, onion, garlic, parsley, cilantro, cumin, coriander, vegetable oil', 'Herb-flecked chickpea fritters.', 'street & snack'],
  ['Shawarma', 'Levantine', 85, 'chicken, garlic, yogurt, lemon, cumin, paprika, turmeric, flatbread, tahini', 'Spit-roasted meat shaved thin.', 'street & snack'],
  ['Tabbouleh', 'Levantine', 60, 'bulgur, parsley, mint, tomato, onion, lemon, olive oil', 'A parsley salad, not a grain salad.', 'salad & side'],
  ['Baklava', 'Levantine', 74, 'flour, walnut, pistachio, butter, honey, sugar, cinnamon', 'Honeyed layers of nuts and phyllo.', 'dessert'],
  ['Shakshuka', 'Levantine', 78, 'egg, tomato, bell pepper, onion, garlic, cumin, paprika, chili, olive oil', 'Eggs poached in spiced tomato.', 'breakfast'],

  // Moroccan
  ['Lamb Tagine', 'Moroccan', 66, 'lamb, onion, garlic, ginger, cinnamon, cumin, saffron, apricot, almond, honey, olive oil', 'Slow-cooked under a conical lid.', 'soup & stew'],
  ['Vegetable Couscous', 'Moroccan', 62, 'couscous, carrot, zucchini, chickpeas, onion, tomato, cumin, cinnamon, turmeric', 'Friday couscous with seven vegetables.', 'rice & noodles'],
  ['Harira', 'Moroccan', 45, 'lentils, chickpeas, tomato, onion, celery, cilantro, parsley, lamb, ginger, cinnamon, turmeric', 'Soup that breaks the Ramadan fast.', 'soup & stew'],
  ['Chicken Pastilla', 'Moroccan', 44, 'chicken, flour, almond, egg, onion, cinnamon, saffron, sugar, butter, parsley', 'Sweet-savoury pie dusted with cinnamon sugar.', 'bread & pastry'],
  ['Zaalouk', 'Moroccan', 46, 'eggplant, tomato, garlic, cumin, paprika, olive oil, cilantro', 'Smoky eggplant and tomato salad.', 'salad & side'],
  ['Kefta Tagine', 'Moroccan', 56, 'beef, egg, tomato, onion, cumin, paprika, cilantro, parsley', 'Meatballs and eggs in tomato sauce.', 'soup & stew'],
  ['Sardine Chermoula', 'Moroccan', 42, 'sardine, cilantro, parsley, garlic, cumin, paprika, lemon, olive oil', 'Sardines stuffed with chermoula, grilled or fried.', 'main'],

  // Ethiopian
  ['Doro Wat', 'Ethiopian', 50, 'chicken, onion, berbere, butter, garlic, ginger, egg, cardamom', 'Slow-simmered chicken in berbere.', 'soup & stew'],
  ['Misir Wat', 'Ethiopian', 45, 'lentils, berbere, onion, garlic, ginger, tomato, vegetable oil', 'Spiced red lentil stew.', 'soup & stew'],
  ['Shiro', 'Ethiopian', 42, 'chickpeas, berbere, onion, garlic, tomato, butter', 'Silky ground-chickpea stew.', 'soup & stew'],
  ['Kitfo', 'Ethiopian', 40, 'beef, butter, berbere, cardamom, chili', 'Minced beef warmed in spiced butter.', 'main'],
  ['Tibs', 'Ethiopian', 52, 'beef, onion, thyme, chili, butter, garlic, bell pepper', 'Sizzling sautéed beef, served to honour guests.', 'main'],
  ['Gomen', 'Ethiopian', 38, 'kale, onion, garlic, ginger, butter, chili', 'Collard-style greens in spiced butter.', 'salad & side'],

  // Turkish
  ['Adana Kebab', 'Turkish', 70, 'lamb, chili, onion, flatbread, sumac, parsley, tomato, salt', 'Hand-minced lamb on wide skewers.', 'main'],
  ['Menemen', 'Turkish', 56, 'egg, tomato, bell pepper, onion, olive oil, chili', 'Soft-scrambled eggs with peppers and tomato.', 'breakfast'],
  ['İmam Bayıldı', 'Turkish', 48, 'eggplant, onion, tomato, garlic, olive oil, parsley, sugar', '"The imam fainted" — olive-oil braised eggplant.', 'salad & side'],
  ['Lahmacun', 'Turkish', 62, 'flour, yeast, lamb, onion, tomato, bell pepper, parsley, sumac, lemon, chili', 'Thin flatbread with spiced lamb.', 'bread & pastry'],
  ['Turkish Coffee', 'Turkish', 58, 'coffee, sugar, cardamom', 'Unfiltered and thick, read from the grounds.', 'drink'],

  // Persian
  ['Ghormeh Sabzi', 'Persian', 56, 'lamb, beans, parsley, cilantro, fenugreek, onion, lime, turmeric', 'Iran’s beloved herb stew.', 'soup & stew'],
  ['Fesenjan', 'Persian', 48, 'chicken, walnut, pomegranate, onion, turmeric, cinnamon, sugar', 'Walnut and pomegranate braise.', 'soup & stew'],
  ['Tahdig', 'Persian', 54, 'rice, butter, saffron, yogurt, vegetable oil', 'The prized golden crust of the rice pot.', 'rice & noodles'],
  ['Kuku Sabzi', 'Persian', 40, 'egg, parsley, cilantro, dill, walnut, turmeric, onion', 'A frittata that is mostly herbs.', 'main'],
  ['Joojeh Kabab', 'Persian', 52, 'chicken, saffron, lemon, onion, yogurt, butter', 'Saffron chicken skewers.', 'main'],
  ['Ash Reshteh', 'Persian', 44, 'kidney beans, noodles, spinach, parsley, cilantro, dill, onion, lentils, yogurt', 'Herb and noodle soup for Nowruz.', 'soup & stew'],

  // West African
  ['Jollof Rice', 'West African', 78, 'rice, tomato, bell pepper, onion, chili, vegetable oil, thyme, bay leaf, stock', 'Party rice — and the subject of friendly rivalry.', 'rice & noodles'],
  ['Egusi Soup', 'West African', 50, 'spinach, palm oil, fish, beef, onion, chili, stock, shrimp', 'Leafy soup thickened with melon seeds.', 'soup & stew'],
  ['Suya', 'West African', 62, 'beef, peanut, chili, ginger, garlic, onion, paprika', 'Spice-crusted grilled skewers.', 'street & snack'],
  ['Puff-Puff', 'West African', 54, 'flour, yeast, sugar, nutmeg, vegetable oil', 'Pillowy fried dough balls.', 'street & snack'],
  ['Akara', 'West African', 46, 'black-eyed peas, onion, chili, salt, vegetable oil', 'Bean fritters for breakfast.', 'street & snack'],
  ['Fufu and Okra Soup', 'West African', 48, 'cassava, okra, palm oil, fish, onion, chili, stock', 'Pounded cassava with silky okra soup.', 'soup & stew'],

  // Egyptian
  ['Koshari', 'Egyptian', 66, 'rice, lentils, pasta, chickpeas, tomato, onion, vinegar, garlic, cumin, chili', 'Cairo’s carb-on-carb street feast.', 'rice & noodles'],
  ['Ful Medames', 'Egyptian', 62, 'fava beans, olive oil, cumin, garlic, lemon, parsley', 'Slow-stewed fava beans for breakfast.', 'breakfast'],
  ['Molokhia', 'Egyptian', 44, 'spinach, chicken, garlic, coriander, stock', 'Silky green soup of jute leaves.', 'main'],
  ['Ta’ameya', 'Egyptian', 56, 'fava beans, parsley, cilantro, dill, onion, garlic, cumin, sesame', 'Egypt’s green fava-bean falafel.', 'street & snack'],
  ['Fattah', 'Egyptian', 42, 'rice, flatbread, lamb, garlic, vinegar, tomato', 'Feast-day layers of bread, rice and meat.', 'main'],

  // South African
  ['Bobotie', 'South African', 58, 'beef, bread, milk, egg, onion, garlic, turmeric, raisins, apricot, bay leaf, almond', 'Spiced mince baked under a savoury custard.', 'main'],
  ['Bunny Chow', 'South African', 60, 'bread, chicken, potato, tomato, onion, garlic, ginger, garam masala, chili, curry leaves', 'Durban curry served in a hollowed loaf.', 'street & snack'],
  ['Boerewors', 'South African', 56, 'sausage, coriander, cloves, nutmeg, vinegar', 'Coiled farmer’s sausage for the braai.', 'main'],
  ['Chakalaka', 'South African', 48, 'beans, carrot, bell pepper, onion, tomato, chili, garlic, ginger, turmeric', 'Spicy township relish.', 'salad & side'],
  ['Malva Pudding', 'South African', 52, 'flour, sugar, egg, butter, apricot, milk, cream, vinegar', 'Sticky apricot sponge with hot cream sauce.', 'dessert'],
  ['Biltong', 'South African', 58, 'beef, vinegar, coriander, salt, black pepper', 'Air-dried, spice-cured beef.', 'main'],
];
