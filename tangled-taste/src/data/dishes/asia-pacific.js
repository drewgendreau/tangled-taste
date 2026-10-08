// [dish, cuisine, popularity 0-100, ingredients, note, type]
export default [
  // Japanese
  ['Sushi', 'Japanese', 97, 'rice, fish, vinegar, seaweed, soy sauce, wasabi, ginger, sugar', 'Vinegared rice with the freshest fish.', 'rice & noodles'],
  ['Ramen', 'Japanese', 92, 'noodles, pork, egg, soy sauce, miso, scallion, garlic, ginger, seaweed, stock', 'Noodles in a deep, slow-simmered broth.', 'soup & stew'],
  ['Tempura', 'Japanese', 70, 'shrimp, flour, egg, vegetable oil, sweet potato, soy sauce, radish, mirin', 'Feather-light battered fritters.', 'street & snack'],
  ['Miso Soup', 'Japanese', 75, 'miso, tofu, seaweed, scallion, fish', 'Everyday soup of dashi and miso.', 'soup & stew'],
  ['Teriyaki Chicken', 'Japanese', 72, 'chicken, soy sauce, mirin, sugar, ginger, garlic, rice', 'Glossy, sweet-savoury glaze.', 'main'],
  ['Okonomiyaki', 'Japanese', 45, 'flour, cabbage, egg, pork, scallion, mayonnaise, seaweed', 'Savory pancake, "grilled as you like it".', 'street & snack'],
  ['Tonkatsu', 'Japanese', 70, 'pork, flour, egg, bread, cabbage, rice, vegetable oil', 'Panko-crusted pork cutlet.', 'main'],
  ['Yakitori', 'Japanese', 72, 'chicken, scallion, soy sauce, mirin, sugar', 'Charcoal-grilled chicken skewers.', 'street & snack'],

  // Chinese
  ['Kung Pao Chicken', 'Chinese', 80, 'chicken, peanut, chili, sichuan pepper, soy sauce, garlic, ginger, scallion, vinegar, sugar', 'Sichuan stir-fry with numbing heat.', 'main'],
  ['Mapo Tofu', 'Chinese', 68, 'tofu, pork, chili, sichuan pepper, chili bean paste, garlic, ginger, scallion, soy sauce', 'Silken tofu in fiery bean sauce.', 'main'],
  ['Peking Duck', 'Chinese', 75, 'duck, hoisin, scallion, cucumber, flour, five-spice, sugar', 'Lacquered roast duck in thin pancakes.', 'main'],
  ['Jiaozi Dumplings', 'Chinese', 88, 'flour, pork, cabbage, ginger, scallion, soy sauce, sesame oil, garlic', 'Folded for Lunar New Year.', 'street & snack'],
  ['Fried Rice', 'Chinese', 85, 'rice, egg, scallion, soy sauce, garlic, peas, carrot, sesame oil', 'Day-old rice, wok-tossed.', 'rice & noodles'],
  ['Hot and Sour Soup', 'Chinese', 55, 'tofu, mushroom, egg, vinegar, black pepper, soy sauce, bamboo shoot', 'Peppery, tangy and warming.', 'soup & stew'],
  ['Char Siu', 'Chinese', 72, 'pork, hoisin, honey, soy sauce, five-spice, garlic, sugar', 'Cantonese barbecued pork.', 'main'],

  // Korean
  ['Kimchi', 'Korean', 76, 'cabbage, chili, garlic, ginger, fish sauce, scallion, radish, sugar', 'Fermented napa cabbage.', 'salad & side'],
  ['Bibimbap', 'Korean', 78, 'rice, beef, egg, spinach, carrot, bean sprouts, gochujang, sesame oil, mushroom, garlic', 'Mixed rice in a sizzling stone bowl.', 'rice & noodles'],
  ['Bulgogi', 'Korean', 74, 'beef, soy sauce, pear, garlic, sesame oil, sugar, scallion, ginger', '"Fire meat" — marinated grilled beef.', 'main'],
  ['Tteokbokki', 'Korean', 60, 'rice, gochujang, fish, scallion, sugar, egg, cabbage', 'Chewy rice cakes in red chili sauce.', 'street & snack'],
  ['Japchae', 'Korean', 64, 'noodles, beef, spinach, carrot, mushroom, onion, soy sauce, sesame oil, sugar, garlic', 'Glass noodles stir-fried with vegetables.', 'rice & noodles'],
  ['Samgyeopsal', 'Korean', 70, 'pork, garlic, lettuce, gochujang, sesame oil, cabbage, chili', 'Grilled pork belly wrapped in lettuce.', 'main'],

  // Thai
  ['Pad Thai', 'Thai', 92, 'noodles, shrimp, egg, tofu, peanut, fish sauce, tamarind, lime, bean sprouts, garlic, sugar', 'Stir-fried rice noodles, sweet-sour-salty.', 'rice & noodles'],
  ['Green Curry', 'Thai', 80, 'coconut milk, chicken, chili, lemongrass, galangal, basil, fish sauce, eggplant, lime, sugar', 'Fragrant curry of fresh green chilies.', 'soup & stew'],
  ['Tom Yum', 'Thai', 74, 'shrimp, lemongrass, galangal, lime, chili, fish sauce, mushroom, cilantro', 'Hot and sour shrimp soup.', 'soup & stew'],
  ['Som Tam', 'Thai', 58, 'papaya, chili, lime, fish sauce, peanut, tomato, garlic, green beans, sugar', 'Pounded green papaya salad.', 'salad & side'],
  ['Mango Sticky Rice', 'Thai', 70, 'rice, mango, coconut milk, sugar, sesame, salt', 'Sweet coconut rice with ripe mango.', 'dessert'],
  ['Massaman Curry', 'Thai', 76, 'beef, coconut milk, potato, peanut, onion, cinnamon, cardamom, tamarind, fish sauce, chili', 'A Persian-influenced, gently spiced curry.', 'soup & stew'],

  // Vietnamese
  ['Pho', 'Vietnamese', 88, 'noodles, beef, star anise, cinnamon, ginger, onion, fish sauce, basil, cilantro, lime, bean sprouts, chili', 'Aromatic beef noodle soup.', 'soup & stew'],
  ['Bánh Mì', 'Vietnamese', 80, 'bread, pork, carrot, radish, cilantro, cucumber, chili, mayonnaise, soy sauce', 'French baguette, Vietnamese fillings.', 'street & snack'],
  ['Gỏi Cuốn', 'Vietnamese', 64, 'rice, shrimp, pork, lettuce, mint, noodles, peanut, hoisin', 'Fresh summer rolls in rice paper.', 'street & snack'],
  ['Bún Chả', 'Vietnamese', 62, 'pork, noodles, fish sauce, sugar, garlic, lettuce, mint, lime, chili, vinegar', 'Grilled pork with noodles and herbs, Hanoi style.', 'main'],

  // Indian
  ['Butter Chicken', 'Indian', 90, 'chicken, tomato, butter, cream, garam masala, ginger, garlic, chili, yogurt, fenugreek', 'Murgh makhani, born in Delhi.', 'soup & stew'],
  ['Biryani', 'Indian', 88, 'rice, chicken, yogurt, onion, saffron, garam masala, ginger, garlic, mint, cilantro, ghee, cardamom', 'Layered, perfumed rice.', 'rice & noodles'],
  ['Chana Masala', 'Indian', 72, 'chickpeas, tomato, onion, garlic, ginger, cumin, coriander, garam masala, chili', 'Spiced chickpea curry.', 'soup & stew'],
  ['Palak Paneer', 'Indian', 70, 'spinach, paneer, onion, garlic, ginger, cumin, cream, garam masala, chili', 'Fresh cheese in spinach gravy.', 'soup & stew'],
  ['Dal Tadka', 'Indian', 75, 'lentils, turmeric, cumin, garlic, ginger, onion, tomato, ghee, chili', 'Lentils finished with sizzling spices.', 'soup & stew'],
  ['Samosa', 'Indian', 82, 'flour, potato, peas, cumin, coriander, chili, ginger, vegetable oil', 'Crisp pastry pockets of spiced potato.', 'street & snack'],
  ['Masala Dosa', 'Indian', 68, 'rice, lentils, potato, mustard seed, turmeric, onion, chili, curry leaves, coconut', 'Crisp fermented crêpe from the South.', 'breakfast'],
  ['Rogan Josh', 'Indian', 70, 'lamb, yogurt, chili, garlic, ginger, cardamom, cinnamon, onion, garam masala', 'Kashmiri lamb in a deep red gravy.', 'soup & stew'],
  ['Gulab Jamun', 'Indian', 74, 'milk, flour, sugar, cardamom, ghee, saffron', 'Milk dumplings soaked in fragrant syrup.', 'dessert'],
  ['Masala Chai', 'Indian', 80, 'tea, milk, sugar, ginger, cardamom, cinnamon, cloves, black pepper', 'Spiced milky tea from every street corner.', 'drink'],

  // Indonesian
  ['Nasi Goreng', 'Indonesian', 80, 'rice, egg, shallot, garlic, chili, soy sauce, shrimp paste, shrimp, cucumber', 'Sweet-soy fried rice.', 'rice & noodles'],
  ['Rendang', 'Indonesian', 78, 'beef, coconut milk, lemongrass, galangal, ginger, chili, shallot, garlic, turmeric, coconut', 'Beef slow-cooked until the coconut caramelises.', 'soup & stew'],
  ['Satay', 'Indonesian', 76, 'chicken, peanut, soy sauce, garlic, shallot, coriander, turmeric, lime, sugar, chili', 'Skewers with peanut sauce.', 'street & snack'],
  ['Gado-Gado', 'Indonesian', 54, 'cabbage, bean sprouts, potato, egg, tofu, peanut, chili, lime, green beans, cucumber', 'Vegetable salad in peanut dressing.', 'salad & side'],

  // Filipino
  ['Chicken Adobo', 'Filipino', 74, 'chicken, pork, vinegar, soy sauce, garlic, bay leaf, black pepper', 'Braised in vinegar and soy — the national dish.', 'main'],
  ['Sinigang', 'Filipino', 56, 'pork, tamarind, tomato, radish, onion, green beans, spinach, chili, fish sauce', 'Sour tamarind soup.', 'soup & stew'],
  ['Lumpia', 'Filipino', 62, 'flour, pork, carrot, cabbage, onion, garlic, soy sauce, vegetable oil', 'Crisp, slender spring rolls.', 'street & snack'],
  ['Pancit', 'Filipino', 58, 'noodles, chicken, cabbage, carrot, soy sauce, garlic, onion, lime', 'Birthday noodles for long life.', 'rice & noodles'],
  ['Lechon', 'Filipino', 60, 'pork, garlic, lemongrass, salt, black pepper, bay leaf', 'Whole spit-roasted pig.', 'main'],

  // Malaysian
  ['Nasi Lemak', 'Malaysian', 76, 'rice, coconut milk, pandan, fish, peanut, cucumber, egg, chili, shrimp paste', 'Coconut rice with sambal — the national breakfast.', 'rice & noodles'],
  ['Laksa', 'Malaysian', 78, 'noodles, coconut milk, shrimp, tofu, lemongrass, chili, shrimp paste, bean sprouts, egg', 'Spicy coconut noodle soup.', 'soup & stew'],
  ['Roti Canai', 'Malaysian', 68, 'flour, ghee, egg, sugar, salt', 'Flaky griddled flatbread with curry.', 'bread & pastry'],
  ['Char Kway Teow', 'Malaysian', 66, 'noodles, shrimp, egg, bean sprouts, soy sauce, chili, garlic, scallion, sausage', 'Smoky wok-fried flat noodles.', 'rice & noodles'],
  ['Kaya Toast', 'Malaysian', 54, 'bread, coconut milk, egg, sugar, pandan, butter', 'Coconut jam toast with soft eggs.', 'breakfast'],

  // Sri Lankan
  ['Hoppers', 'Sri Lankan', 58, 'rice, coconut milk, yeast, sugar, egg', 'Bowl-shaped crêpes with crisp lacy edges.', 'bread & pastry'],
  ['Kottu Roti', 'Sri Lankan', 62, 'flour, egg, carrot, cabbage, onion, chili, curry leaves, chicken, soy sauce', 'Chopped flatbread stir-fry, clattered on a griddle.', 'rice & noodles'],
  ['Fish Ambul Thiyal', 'Sri Lankan', 44, 'fish, tamarind, black pepper, curry leaves, garlic, cinnamon, cloves', 'Sour, peppery fish curry.', 'soup & stew'],
  ['Parippu', 'Sri Lankan', 52, 'lentils, coconut milk, turmeric, curry leaves, mustard seed, onion, chili', 'Creamy coconut dhal.', 'soup & stew'],
  ['Pol Sambol', 'Sri Lankan', 48, 'coconut, chili, lime, onion, fish', 'Fresh coconut relish.', 'salad & side'],
  ['Pumpkin Curry', 'Sri Lankan', 46, 'pumpkin, coconut milk, turmeric, curry leaves, mustard seed, garlic, cinnamon, chili', 'Golden pumpkin simmered in coconut.', 'soup & stew'],
  ['Polos Curry', 'Sri Lankan', 40, 'jackfruit, coconut milk, chili, curry leaves, cinnamon, cloves, garlic, mustard seed', 'Young jackfruit curry.', 'soup & stew'],

  // Hawaiian
  ['Poke', 'Hawaiian', 76, 'fish, soy sauce, sesame oil, seaweed, scallion, sesame, chili', 'Cubed raw fish, dressed simply.', 'salad & side'],
  ['Loco Moco', 'Hawaiian', 56, 'rice, beef, egg, onion, mushroom, stock, soy sauce', 'Rice, burger patty, fried egg and gravy.', 'main'],
  ['Kalua Pig', 'Hawaiian', 52, 'pork, salt', 'Whole pig steamed in an underground imu.', 'main'],
  ['Spam Musubi', 'Hawaiian', 58, 'rice, ham, seaweed, soy sauce, sugar', 'Glazed luncheon meat on rice, wrapped in nori.', 'street & snack'],
  ['Huli Huli Chicken', 'Hawaiian', 54, 'chicken, pineapple, soy sauce, ginger, garlic, sugar, tomato', 'Turned-and-turned teriyaki-style grilled chicken.', 'main'],
  ['Banana Macadamia Bread', 'Hawaiian', 50, 'banana, flour, sugar, butter, egg, macadamia', 'Island banana bread with buttery nuts.', 'bread & pastry'],

  // Uzbek
  ['Plov', 'Uzbek', 72, 'rice, lamb, carrot, onion, cumin, garlic, chickpeas, vegetable oil, raisins', 'Rice cooked in a vast kazan for weddings.', 'rice & noodles'],
  ['Samsa', 'Uzbek', 58, 'flour, lamb, onion, cumin, butter, sesame', 'Tandoor-baked meat pastries.', 'bread & pastry'],
  ['Lagman', 'Uzbek', 56, 'noodles, beef, bell pepper, tomato, onion, garlic, radish, cumin', 'Hand-pulled noodles with a rich stew.', 'rice & noodles'],
  ['Shashlik', 'Uzbek', 60, 'lamb, onion, vinegar, cumin, coriander', 'Silk Road skewers over vine-wood coals.', 'main'],

  // Burmese
  ['Mohinga', 'Burmese', 60, 'noodles, fish, lemongrass, chickpeas, onion, garlic, ginger, fish sauce, egg, lime', 'Fish and rice-noodle soup, the national breakfast.', 'soup & stew'],
  ['Lahpet Thoke', 'Burmese', 54, 'tea, cabbage, tomato, peanut, sesame, garlic, chili, lime, fish sauce', 'Fermented tea leaf salad with crunchy beans.', 'salad & side'],
  ['Shan Noodles', 'Burmese', 50, 'noodles, chicken, tomato, garlic, peanut, soy sauce, chili, scallion', 'Sticky rice noodles in a tomato-chicken sauce.', 'rice & noodles'],
  ['Ohn No Khao Swè', 'Burmese', 48, 'noodles, chicken, coconut milk, chickpeas, onion, garlic, turmeric, egg, lime, chili', 'Coconut chicken noodle soup.', 'soup & stew'],

  // Nepali
  ['Momo', 'Nepali', 72, 'flour, beef, onion, garlic, ginger, cilantro, cumin, tomato, chili, sesame', 'Pleated dumplings with a fiery tomato achar.', 'street & snack'],
  ['Dal Bhat', 'Nepali', 66, 'lentils, rice, turmeric, cumin, garlic, ginger, ghee, spinach, tomato', '"Dal bhat power, 24 hour."', 'rice & noodles'],
  ['Sel Roti', 'Nepali', 46, 'rice, sugar, ghee, banana, cardamom', 'Ring-shaped festival bread.', 'bread & pastry'],
  ['Thukpa', 'Nepali', 54, 'noodles, chicken, carrot, cabbage, garlic, ginger, tomato, chili, cilantro', 'Himalayan noodle soup.', 'soup & stew'],
];
