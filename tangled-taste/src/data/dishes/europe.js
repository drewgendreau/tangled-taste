// [dish, cuisine, popularity 0-100, ingredients, note, type]
export default [
  // Italian
  ['Margherita Pizza', 'Italian', 98, 'flour, yeast, tomato, mozzarella, basil, olive oil, salt', 'Naples, 1889 — the colours of the Italian flag.', 'main'],
  ['Spaghetti Carbonara', 'Italian', 92, 'pasta, egg, pecorino, guanciale, black pepper', 'A Roman classic; no cream required.', 'rice & noodles'],
  ['Lasagna', 'Italian', 90, 'pasta, beef, tomato, onion, garlic, parmesan, mozzarella, milk, butter, flour', 'Layered pasta baked with ragù and béchamel.', 'rice & noodles'],
  ['Risotto alla Milanese', 'Italian', 70, 'rice, saffron, butter, parmesan, onion, white wine, stock', 'Golden saffron risotto from Milan.', 'rice & noodles'],
  ['Pesto Genovese', 'Italian', 78, 'basil, pine nuts, garlic, parmesan, pecorino, olive oil, pasta', 'Pounded basil sauce from Liguria.', 'rice & noodles'],
  ['Tiramisu', 'Italian', 88, 'egg, sugar, mascarpone, coffee, cocoa, flour', 'Coffee-soaked layers of mascarpone cream.', 'dessert'],
  ['Minestrone', 'Italian', 60, 'tomato, onion, carrot, celery, beans, pasta, garlic, olive oil, zucchini, parmesan', 'A thick, seasonal vegetable soup.', 'soup & stew'],
  ['Osso Buco', 'Italian', 55, 'veal, onion, carrot, celery, white wine, tomato, garlic, lemon, parsley, butter', 'Braised veal shanks with gremolata.', 'main'],
  ['Arancini', 'Italian', 72, 'rice, mozzarella, peas, beef, egg, bread, tomato, parmesan', 'Sicilian fried rice balls with a molten heart.', 'street & snack'],
  ['Panna Cotta', 'Italian', 68, 'cream, milk, sugar, vanilla, strawberry', 'Cooked cream, barely set.', 'dessert'],

  // French
  ['Coq au Vin', 'French', 65, 'chicken, red wine, mushroom, onion, bacon, garlic, thyme, butter, bay leaf', 'Chicken braised slowly in Burgundy wine.', 'soup & stew'],
  ['Ratatouille', 'French', 70, 'eggplant, zucchini, tomato, bell pepper, onion, garlic, olive oil, thyme, basil', 'Provençal summer vegetable stew.', 'salad & side'],
  ['French Onion Soup', 'French', 72, 'onion, butter, stock, bread, gruyère, thyme, white wine, bay leaf', 'Caramelised onions under a bubbling cheese crust.', 'soup & stew'],
  ['Croissant', 'French', 90, 'flour, butter, yeast, sugar, milk, salt', 'Laminated, flaky, buttery pastry.', 'bread & pastry'],
  ['Crème Brûlée', 'French', 80, 'cream, egg, sugar, vanilla', 'Silky custard beneath a glassy sugar crust.', 'dessert'],
  ['Bouillabaisse', 'French', 50, 'fish, shellfish, tomato, onion, garlic, saffron, fennel, olive oil, orange, bread', 'Marseille fisherman’s stew.', 'soup & stew'],
  ['Quiche Lorraine', 'French', 62, 'egg, cream, bacon, flour, butter, gruyère, nutmeg', 'Savoury custard tart from Lorraine.', 'bread & pastry'],
  ['Beef Bourguignon', 'French', 68, 'beef, red wine, onion, carrot, mushroom, bacon, garlic, thyme, bay leaf', 'Beef stewed in red wine with pearl onions.', 'soup & stew'],
  ['Salade Niçoise', 'French', 58, 'fish, egg, potato, green beans, olive, tomato, lettuce, olive oil, vinegar, mustard', 'The composed salad of Nice.', 'salad & side'],
  ['Crêpes', 'French', 82, 'flour, milk, egg, butter, sugar, salt', 'Paper-thin Breton pancakes.', 'breakfast'],

  // Spanish
  ['Paella', 'Spanish', 85, 'rice, saffron, chicken, shrimp, tomato, bell pepper, paprika, olive oil, garlic, peas, green beans', 'Saffron rice cooked wide and shallow in Valencia.', 'rice & noodles'],
  ['Gazpacho', 'Spanish', 60, 'tomato, cucumber, bell pepper, garlic, olive oil, bread, vinegar, salt', 'Chilled Andalusian tomato soup.', 'soup & stew'],
  ['Tortilla Española', 'Spanish', 70, 'potato, egg, onion, olive oil, salt', 'Thick potato and egg omelette.', 'main'],
  ['Patatas Bravas', 'Spanish', 66, 'potato, paprika, tomato, garlic, olive oil, chili, mayonnaise', 'Crisp potatoes with a smoky, spicy sauce.', 'salad & side'],
  ['Churros con Chocolate', 'Spanish', 75, 'flour, sugar, vegetable oil, cinnamon, chocolate, milk, salt', 'Fried dough dipped in thick hot chocolate.', 'dessert'],
  ['Crema Catalana', 'Spanish', 52, 'milk, egg, sugar, cinnamon, lemon', 'Catalonia’s citrus-scented custard.', 'dessert'],

  // Greek
  ['Moussaka', 'Greek', 64, 'eggplant, lamb, tomato, onion, garlic, cinnamon, milk, butter, flour, nutmeg, egg', 'Layers of eggplant, spiced lamb and béchamel.', 'main'],
  ['Greek Salad', 'Greek', 72, 'tomato, cucumber, onion, olive, feta, oregano, olive oil, bell pepper', 'Horiatiki — the village salad.', 'salad & side'],
  ['Souvlaki', 'Greek', 70, 'pork, garlic, lemon, oregano, olive oil, flatbread, yogurt, tomato, onion', 'Grilled skewers wrapped in warm pita.', 'main'],
  ['Spanakopita', 'Greek', 55, 'spinach, feta, flour, onion, dill, egg, olive oil, butter', 'Spinach and feta in crisp phyllo.', 'bread & pastry'],
  ['Tzatziki', 'Greek', 60, 'yogurt, cucumber, garlic, dill, olive oil, lemon', 'Cool yogurt and cucumber dip.', 'sauce & dip'],
  ['Avgolemono', 'Greek', 48, 'chicken, rice, egg, lemon, stock, dill', 'Silky egg-lemon soup.', 'soup & stew'],

  // German
  ['Wiener Schnitzel', 'German', 76, 'veal, flour, egg, bread, lemon, butter, salt', 'Thin, golden, breaded veal.', 'main'],
  ['Sauerbraten', 'German', 50, 'beef, vinegar, red wine, onion, carrot, bay leaf, sugar, allspice', 'Pot roast marinated for days.', 'main'],
  ['Kartoffelsalat', 'German', 56, 'potato, onion, vinegar, mustard, stock, bacon, vegetable oil', 'Warm potato salad, Swabian style.', 'salad & side'],
  ['Bratwurst', 'German', 70, 'sausage, mustard, bread, onion, caraway', 'Grilled sausage with mustard.', 'street & snack'],
  ['Black Forest Cake', 'German', 64, 'flour, cocoa, egg, sugar, cherry, cream, butter', 'Chocolate, cherries and clouds of cream.', 'dessert'],

  // Hungarian
  ['Goulash', 'Hungarian', 72, 'beef, paprika, onion, potato, carrot, caraway, tomato, bell pepper, garlic', 'The herdsman’s paprika soup.', 'soup & stew'],
  ['Chicken Paprikash', 'Hungarian', 58, 'chicken, paprika, onion, sour cream, flour, butter, bell pepper', 'Chicken in a creamy paprika sauce.', 'soup & stew'],
  ['Lángos', 'Hungarian', 50, 'flour, yeast, garlic, sour cream, cheddar, milk, vegetable oil', 'Fried dough with garlic, sour cream and cheese.', 'street & snack'],

  // British
  ['Fish and Chips', 'British', 82, 'fish, potato, flour, beer, vegetable oil, salt, vinegar, peas', 'Seaside supper wrapped in paper.', 'main'],
  ['Shepherd’s Pie', 'British', 66, 'lamb, potato, onion, carrot, peas, butter, milk, stock, thyme', 'Lamb mince under mashed potato.', 'main'],
  ['Full English Breakfast', 'British', 70, 'egg, bacon, sausage, beans, tomato, mushroom, bread, butter', 'The classic fry-up with all the trimmings.', 'breakfast'],
  ['Scones', 'British', 62, 'flour, butter, milk, sugar, egg, strawberry, cream', 'With jam and clotted cream, in that order (or not).', 'bread & pastry'],

  // Russian
  ['Borscht', 'Russian', 66, 'beet, cabbage, potato, carrot, onion, dill, sour cream, beef, vinegar', 'Ruby beet soup.', 'soup & stew'],
  ['Beef Stroganoff', 'Russian', 72, 'beef, mushroom, onion, sour cream, butter, mustard, noodles', 'Seared beef in mustard sour cream.', 'main'],
  ['Pelmeni', 'Russian', 60, 'flour, egg, pork, beef, onion, sour cream, black pepper', 'Siberian dumplings, frozen by the hundred.', 'street & snack'],
  ['Blini', 'Russian', 58, 'flour, milk, egg, butter, yeast, sour cream, fish', 'Yeasted pancakes for Maslenitsa.', 'breakfast'],

  // Swedish
  ['Swedish Meatballs', 'Swedish', 74, 'beef, pork, onion, bread, milk, egg, allspice, cream, lingonberry, potato', 'Köttbullar with lingonberries and cream sauce.', 'main'],
  ['Gravlax', 'Swedish', 58, 'salmon, dill, sugar, salt, black pepper', 'Salmon cured under dill.', 'main'],
  ['Kanelbullar', 'Swedish', 66, 'flour, butter, sugar, cinnamon, cardamom, yeast, milk', 'Cardamom-scented cinnamon buns for fika.', 'bread & pastry'],
  ['Jansson’s Temptation', 'Swedish', 40, 'potato, onion, cream, fish, bread', 'Potato and sprat gratin at Christmas.', 'main'],

  // Polish
  ['Pierogi', 'Polish', 74, 'flour, egg, potato, onion, sour cream, butter', 'Half-moon dumplings, boiled then fried.', 'street & snack'],
  ['Bigos', 'Polish', 50, 'cabbage, sausage, pork, mushroom, onion, tomato, bay leaf, allspice, red wine', 'Hunter’s stew of cabbage and meats.', 'soup & stew'],
  ['Żurek', 'Polish', 44, 'rye, sausage, egg, potato, garlic, oregano', 'Sour rye soup, often served in bread.', 'soup & stew'],
  ['Gołąbki', 'Polish', 48, 'cabbage, beef, rice, onion, tomato', 'Cabbage rolls in tomato sauce.', 'main'],

  // Portuguese
  ['Bacalhau à Brás', 'Portuguese', 54, 'fish, potato, egg, onion, olive, parsley, olive oil', 'Salt cod scrambled with matchstick potatoes.', 'main'],
  ['Pastel de Nata', 'Portuguese', 84, 'flour, egg, sugar, cream, cinnamon, lemon, butter', 'Blistered custard tarts from Belém.', 'dessert'],
  ['Caldo Verde', 'Portuguese', 52, 'kale, potato, onion, sausage, olive oil, garlic', 'Green kale soup with chouriço.', 'soup & stew'],
  ['Francesinha', 'Portuguese', 50, 'bread, beef, ham, sausage, cheddar, beer, tomato, egg', 'Porto’s gloriously excessive sandwich.', 'street & snack'],
  ['Piri-Piri Chicken', 'Portuguese', 70, 'chicken, chili, garlic, lemon, paprika, olive oil, oregano', 'Flame-grilled bird with African bird’s-eye chili.', 'main'],

  // Georgian
  ['Khachapuri', 'Georgian', 72, 'flour, yeast, mozzarella, feta, egg, butter', 'Cheese-filled bread boat crowned with an egg.', 'bread & pastry'],
  ['Khinkali', 'Georgian', 62, 'flour, beef, pork, onion, cilantro, black pepper, cumin', 'Twisted soup dumplings, eaten by the knot.', 'street & snack'],
  ['Pkhali', 'Georgian', 42, 'spinach, beet, walnut, garlic, cilantro, pomegranate, coriander', 'Vegetable and walnut pâtés.', 'salad & side'],
  ['Chakhokhbili', 'Georgian', 44, 'chicken, tomato, onion, garlic, cilantro, basil, fenugreek, chili', 'Herby chicken and tomato stew.', 'soup & stew'],
  ['Churchkhela', 'Georgian', 40, 'grape, walnut, flour', 'Walnuts dipped in thickened grape must.', 'dessert'],

  // Irish
  ['Irish Stew', 'Irish', 64, 'lamb, potato, onion, carrot, thyme, stock, parsley', 'Mutton, potatoes and patience.', 'soup & stew'],
  ['Colcannon', 'Irish', 50, 'potato, kale, butter, milk, scallion', 'Buttery mash with greens.', 'salad & side'],
  ['Soda Bread', 'Irish', 56, 'flour, milk, salt, butter', 'Quick bread marked with a cross.', 'bread & pastry'],
  ['Boxty', 'Irish', 40, 'potato, flour, milk, egg, butter', 'Potato pancakes from the north-west.', 'main'],
  ['Beef and Stout Stew', 'Irish', 60, 'beef, beer, onion, carrot, potato, thyme, tomato', 'Beef braised dark and rich in stout.', 'soup & stew'],
];
