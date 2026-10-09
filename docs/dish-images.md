# Dish image reference guide

> Generated file: it is rebuilt automatically (`pnpm art:build`, which `pnpm dev` and `pnpm build` run). Do not edit it by hand.

**50 of 826 dish pictures are created. 776 still to create.**

One picture per dish. Placeholders in the prompt template: `{{name}}` = Dish, `{{cuisine}}` = Cuisine, `{{note}}` = Description, `{{ingredients}}` = Key ingredients (listed in the "Still to create" table). Every picture is a single dish centered on a pure white background with a clear margin; see the template.

## What every picture must be

| | |
|---|---|
| File format | WebP (.webp) |
| Pixel size | 1024 × 1024 px (square) |
| Target file size | 150–300 KB (hard limit 400 KB) |
| Saved in | `tangled-taste/art/dishes/` |
| File name | the item's permanent ID plus `.webp` (see the "Expected file name" column) |

## Required prompt wording

Always use this wording for the picture prompt (fill in the two bracketed parts):

```text
A delicate, refined watercolor food illustration of [DISH NAME AND KEY INGREDIENTS], viewed from a 45-degree angle looking down and slightly to the side. Soft fluid watercolor washes, visible cold-press paper grain texture, and subtle organic pigment bleeding on the food and dish. Rendered in a unique [VESSEL / SERVING DISH TYPE] with minimal, clean watercolor shading and no heavy blotches or mottled stains. Isolated on a completely clean, solid pure white background with no puddle splatters, background splotches, or external marks. Studio lighting, appetizing, high detail.
```

- **[DISH NAME AND KEY INGREDIENTS]**: the dish's name from the Dish column, then its Key ingredients (listed in the "Still to create" table), for example "Birria Tacos with beef, chili, onion, cinnamon and melted cheese".
- **[VESSEL / SERVING DISH TYPE]**: choose a fitting, distinctive vessel or serving dish for that cuisine (a clay bowl, a cast-iron skillet, a banana leaf, a wooden board, a tall glass…) so the pictures in the set do not all use the same plate.

### Prompt template (additional detail)

This longer template adds composition and background details. Use it together with the required wording above, filling the `{{…}}` placeholders from the item's row (details under each list). Leave `{{extra}}` empty unless told otherwise.

```text
A polished, richly colored, hand-illustrated food illustration of {{name}} ({{cuisine}} cuisine). {{note}} Key ingredients that should be visible: {{ingredients}}.

Composition: a single dish, plated or served the traditional way, centered, seen in three-quarter view from slightly above. Square 1:1 image. The dish fills about 80% of the frame with at least 8% clear margin on every side; nothing (plate, handle, utensil or garnish) touches or crosses an edge.

Background: pure white (#FFFFFF), flat and even, with no gradient, vignette, table, scene or props apart from a soft contact shadow directly under the dish.

Style: a hand-painted watercolor food illustration: soft translucent washes, delicate ink linework, gentle shading, rich natural color, soft light from the upper left. The same look for every picture in the set. No text, no letters, no logos, no hands, no people.

{{extra}}
```

## Still to create (776)

| ID | Dish | Cuisine | Description | Key ingredients | Expected file name |
|---|---|---|---|---|---|
| TT-0087 | Risotto alla Milanese | Italian | Golden saffron risotto from Milan. | rice, saffron, butter, parmesan, onion, white wine, stock | `TT-0087.webp` |
| TT-0184 | Minestrone | Italian | A thick, seasonal vegetable soup. | tomato, onion, carrot, celery, beans, pasta, garlic, olive oil | `TT-0184.webp` |
| TT-0275 | Osso Buco | Italian | Braised veal shanks with gremolata. | veal, onion, carrot, celery, white wine, tomato, garlic, lemon | `TT-0275.webp` |
| TT-0072 | Arancini | Italian | Sicilian fried rice balls with a molten heart. | rice, mozzarella, peas, beef, egg, bread, tomato, parmesan | `TT-0072.webp` |
| TT-0111 | Panna Cotta | Italian | Cooked cream, barely set. | cream, milk, sugar, vanilla, strawberry | `TT-0111.webp` |
| TT-0088 | Amatriciana | Italian | Roman pasta with cured pork cheek and tomato. | pasta, guanciale, pecorino, tomato, chili, white wine | `TT-0088.webp` |
| TT-0058 | Cacio e Pepe | Italian | Three ingredients, one creamy Roman sauce. | pasta, pecorino, black pepper | `TT-0058.webp` |
| TT-0468 | Pasta con le Sarde | Italian | Sicilian pasta of sardines, wild fennel and sweet raisins. | pasta, sardine, fennel, pine nuts, raisins, anchovy, onion, olive oil | `TT-0468.webp` |
| TT-0460 | Vitello Tonnato | Italian | Cold sliced veal under a creamy tuna sauce. | veal, tuna, anchovy, capers, mayonnaise, olive oil, lemon, white wine | `TT-0460.webp` |
| TT-0279 | Saltimbocca | Italian | “Jumps in the mouth” — veal, ham and sage. | veal, prosciutto, sage, butter, white wine, flour | `TT-0279.webp` |
| TT-0519 | Coniglio alla Cacciatora | Italian | Hunter-style braised rabbit. | rabbit, tomato, white wine, rosemary, garlic, olive, olive oil | `TT-0519.webp` |
| TT-0520 | Fegato alla Veneziana | Italian | Venice’s liver with slow-cooked onions. | liver, onion, butter, white wine, sage, parsley | `TT-0520.webp` |
| TT-0392 | Tortellini in Brodo | Italian | Tiny stuffed pasta floating in clear broth. | pasta, prosciutto, pork, parmesan, nutmeg, stock, egg | `TT-0392.webp` |
| TT-0153 | Cannoli | Italian | Crisp Sicilian shells piped with sweet ricotta. | flour, ricotta, sugar, chocolate, pistachio, vanilla, butter | `TT-0153.webp` |
| TT-0211 | Spinach and Ricotta Ravioli | Italian | Pasta pillows with sage butter. | pasta, ricotta, spinach, nutmeg, butter, sage, parmesan | `TT-0211.webp` |
| TT-0393 | Caponata | Italian | Sicilian sweet-and-sour eggplant. | eggplant, celery, olive, capers, tomato, vinegar, sugar, pine nuts | `TT-0393.webp` |
| TT-0423 | Risotto agli Asparagi | Italian | Spring risotto with tender asparagus. | rice, asparagus, parmesan, butter, onion, white wine, stock | `TT-0423.webp` |
| TT-0424 | Gnocchi al Gorgonzola | Italian | Potato gnocchi in blue cheese sauce. | potato, flour, blue cheese, cream, walnut, butter | `TT-0424.webp` |
| TT-0521 | Pear and Mascarpone Tart | Italian | Crisp tart with creamy mascarpone and poached pears. | pear, mascarpone, flour, butter, sugar, egg, vanilla | `TT-0521.webp` |
| TT-0142 | Coq au Vin | French | Chicken braised slowly in Burgundy wine. | chicken, red wine, mushroom, onion, bacon, garlic, thyme, butter | `TT-0142.webp` |
| TT-0089 | Ratatouille | French | Provençal summer vegetable stew. | eggplant, zucchini, tomato, bell pepper, onion, garlic, olive oil, thyme | `TT-0089.webp` |
| TT-0073 | French Onion Soup | French | Caramelised onions under a bubbling cheese crust. | onion, butter, stock, bread, gruyère, thyme, white wine, bay leaf | `TT-0073.webp` |
| TT-0344 | Bouillabaisse | French | Marseille fisherman’s stew. | fish, shellfish, tomato, onion, garlic, saffron, fennel, olive oil | `TT-0344.webp` |
| TT-0154 | Quiche Lorraine | French | Savoury custard tart from Lorraine. | egg, cream, bacon, flour, butter, gruyère, nutmeg | `TT-0154.webp` |
| TT-0112 | Beef Bourguignon | French | Beef stewed in red wine with pearl onions. | beef, red wine, onion, carrot, mushroom, bacon, garlic, thyme | `TT-0112.webp` |
| TT-0212 | Salade Niçoise | French | The composed salad of Nice. | fish, egg, potato, green beans, olive, tomato, lettuce, olive oil | `TT-0212.webp` |
| TT-0155 | Duck Confit | French | Duck slow-cooked in its own fat until it falls off the bone. | duck, thyme, garlic, salt, bay leaf, potato, black pepper | `TT-0155.webp` |
| TT-0118 | Moules Marinières | French | Mussels steamed in white wine, served with frites. | mussels, white wine, shallot, butter, parsley, garlic, cream | `TT-0118.webp` |
| TT-0237 | Cassoulet | French | Slow-baked beans and meats from Languedoc. | white beans, duck, pork, sausage, onion, garlic, thyme, bay leaf | `TT-0237.webp` |
| TT-0425 | Vichyssoise | French | Chilled leek and potato soup. | leek, potato, cream, butter, stock, chives | `TT-0425.webp` |
| TT-0469 | Pissaladière | French | Niçois tart of sweet onions, anchovies and olives. | flour, yeast, onion, anchovy, olive, thyme, olive oil | `TT-0469.webp` |
| TT-0470 | Brandade de Morue | French | Salt cod whipped with garlic and olive oil. | cod, potato, garlic, milk, olive oil, cream | `TT-0470.webp` |
| TT-0532 | Lapin à la Moutarde | French | Rabbit braised in a mustard cream sauce. | rabbit, mustard, cream, white wine, shallot, thyme | `TT-0532.webp` |
| TT-0426 | Pâté de Campagne | French | Rustic country pâté with liver and pork. | liver, pork, butter, shallot, thyme, red wine, bread | `TT-0426.webp` |
| TT-0461 | Sauce Béarnaise | French | Emulsified butter sauce with tarragon. | butter, egg, tarragon, shallot, vinegar, white wine | `TT-0461.webp` |
| TT-0427 | Poulet à l’Estragon | French | Chicken in a tarragon cream sauce. | chicken, tarragon, cream, white wine, butter, shallot | `TT-0427.webp` |
| TT-0374 | Salade de Chèvre Chaud | French | Warm goat cheese toasts on greens. | goat cheese, lettuce, bread, honey, walnut, olive oil, vinegar | `TT-0374.webp` |
| TT-0522 | Goat Cheese Tart | French | Savory tart with creamy goat cheese. | goat cheese, egg, cream, flour, butter, thyme | `TT-0522.webp` |
| TT-0504 | Roquefort Salad | French | Greens with pear, walnuts and blue cheese. | blue cheese, lettuce, pear, walnut, vinegar, olive oil | `TT-0504.webp` |
| TT-0375 | Choucroute Garnie | French | Alsatian sauerkraut with a heap of meats. | sauerkraut, pork, sausage, bacon, potato, white wine, juniper, bay leaf | `TT-0375.webp` |
| TT-0301 | Galette Bretonne | French | Buckwheat crêpe folded around ham, egg and cheese. | buckwheat, egg, ham, emmental, butter | `TT-0301.webp` |
| TT-0345 | Cherry Clafoutis | French | Baked custard batter studded with cherries. | cherry, egg, flour, milk, sugar, butter, vanilla | `TT-0345.webp` |
| TT-0346 | Lobster Bisque | French | Velvety shellfish soup. | lobster, cream, butter, white wine, tomato, onion, celery, carrot | `TT-0346.webp` |
| TT-0185 | Gazpacho | Spanish | Chilled Andalusian tomato soup. | tomato, cucumber, bell pepper, garlic, olive oil, bread, vinegar, salt | `TT-0185.webp` |
| TT-0090 | Tortilla Española | Spanish | Thick potato and egg omelette. | potato, egg, onion, olive oil, salt | `TT-0090.webp` |
| TT-0119 | Patatas Bravas | Spanish | Crisp potatoes with a smoky, spicy sauce. | potato, paprika, tomato, garlic, olive oil, chili, mayonnaise | `TT-0119.webp` |
| TT-0054 | Churros con Chocolate | Spanish | Fried dough dipped in thick hot chocolate. | flour, sugar, vegetable oil, cinnamon, chocolate, milk, salt | `TT-0054.webp` |
| TT-0302 | Crema Catalana | Spanish | Catalonia’s citrus-scented custard. | milk, egg, sugar, cinnamon, lemon | `TT-0302.webp` |
| TT-0156 | Calamares Fritos | Spanish | Crisp fried squid rings with lemon. | squid, flour, vegetable oil, lemon, salt, parsley | `TT-0156.webp` |
| TT-0120 | Gambas al Ajillo | Spanish | Shrimp sizzling in garlic and chili oil. | shrimp, garlic, chili, olive oil, white wine, parsley | `TT-0120.webp` |
| TT-0394 | Fabada Asturiana | Spanish | Asturias’ rich bean and sausage stew. | white beans, chorizo, pork, bacon, onion, garlic, paprika, saffron | `TT-0394.webp` |
| TT-0238 | Pulpo a la Gallega | Spanish | Galician octopus with potatoes and smoked paprika. | octopus, potato, paprika, olive oil, salt | `TT-0238.webp` |
| TT-0143 | Moussaka | Greek | Layers of eggplant, spiced lamb and béchamel. | eggplant, lamb, tomato, onion, garlic, cinnamon, milk, butter | `TT-0143.webp` |
| TT-0074 | Greek Salad | Greek | Horiatiki — the village salad. | tomato, cucumber, onion, olive, feta, oregano, olive oil, bell pepper | `TT-0074.webp` |
| TT-0091 | Souvlaki | Greek | Grilled skewers wrapped in warm pita. | pork, garlic, lemon, oregano, olive oil, flatbread, yogurt, tomato | `TT-0091.webp` |
| TT-0276 | Spanakopita | Greek | Spinach and feta in crisp phyllo. | spinach, feta, flour, onion, dill, egg, olive oil, butter | `TT-0276.webp` |
| TT-0186 | Tzatziki | Greek | Cool yogurt and cucumber dip. | yogurt, cucumber, garlic, dill, olive oil, lemon | `TT-0186.webp` |
| TT-0376 | Avgolemono | Greek | Silky egg-lemon soup. | chicken, rice, egg, lemon, stock, dill | `TT-0376.webp` |
| TT-0471 | Gigantes Plaki | Greek | Giant beans baked in tomato and dill. | white beans, tomato, onion, garlic, dill, olive oil, parsley | `TT-0471.webp` |
| TT-0347 | Htapodi sti Skara | Greek | Charcoal-grilled octopus dressed with lemon and oregano. | octopus, olive oil, lemon, oregano, vinegar | `TT-0347.webp` |
| TT-0505 | Stifado | Greek | Rabbit stewed with pearl onions and warm spices. | rabbit, onion, red wine, tomato, cinnamon, bay leaf, vinegar, olive oil | `TT-0505.webp` |
| TT-0348 | Sauerbraten | German | Pot roast marinated for days. | beef, vinegar, red wine, onion, carrot, bay leaf, sugar, allspice | `TT-0348.webp` |
| TT-0239 | Kartoffelsalat | German | Warm potato salad, Swabian style. | potato, onion, vinegar, mustard, stock, bacon, vegetable oil | `TT-0239.webp` |
| TT-0092 | Bratwurst | German | Grilled sausage with mustard. | sausage, mustard, bread, onion, caraway | `TT-0092.webp` |
| TT-0144 | Black Forest Cake | German | Chocolate, cherries and clouds of cream. | flour, cocoa, egg, sugar, cherry, cream, butter | `TT-0144.webp` |
| TT-0121 | Brezel | German | Lye-dipped pretzel, chewy and glossy. | flour, yeast, butter, salt, milk | `TT-0121.webp` |
| TT-0240 | Schweinshaxe | German | Roast pork knuckle with crackling. | pork, sauerkraut, beer, caraway, onion, bay leaf, potato | `TT-0240.webp` |
| TT-0472 | Rollmops | German | Herring rolled around pickles and onion. | herring, vinegar, onion, pickle, mustard seed, bay leaf, sugar | `TT-0472.webp` |
| TT-0428 | Weißer Spargel | German | White asparagus with hollandaise. | asparagus, butter, egg, lemon, potato, ham, white wine | `TT-0428.webp` |
| TT-0429 | Zwetschgenkuchen | German | Autumn plum cake on yeast dough. | plum, flour, butter, sugar, egg, yeast, cinnamon | `TT-0429.webp` |
| TT-0075 | Goulash | Hungarian | The herdsman’s paprika soup. | beef, paprika, onion, potato, carrot, caraway, tomato, bell pepper | `TT-0075.webp` |
| TT-0213 | Chicken Paprikash | Hungarian | Chicken in a creamy paprika sauce. | chicken, paprika, onion, sour cream, flour, butter, bell pepper | `TT-0213.webp` |
| TT-0349 | Lángos | Hungarian | Fried dough with garlic, sour cream and cheese. | flour, yeast, garlic, sour cream, cheddar, milk, vegetable oil | `TT-0349.webp` |
| TT-0303 | Halászlé | Hungarian | Fisherman’s soup of the Danube, fiery red with paprika. | fish, paprika, onion, tomato, bell pepper, chili | `TT-0303.webp` |
| TT-0280 | Töltött Káposzta | Hungarian | Cabbage rolls stuffed with pork and rice, simmered in paprika. | cabbage, pork, rice, paprika, onion, sour cream, bacon | `TT-0280.webp` |
| TT-0395 | Dobos Torte | Hungarian | Thin sponge layers stacked under a glassy caramel crown. | flour, egg, sugar, butter, chocolate, vanilla | `TT-0395.webp` |
| TT-0396 | Lecsó | Hungarian | Summer stew of peppers and tomatoes, finished with egg. | bell pepper, tomato, onion, paprika, sausage, egg | `TT-0396.webp` |
| TT-0430 | Túrós Csusza | Hungarian | Noodles tossed with curd cheese, sour cream and crisp bacon. | noodles, queso fresco, sour cream, bacon, butter | `TT-0430.webp` |
| TT-0122 | Shepherd’s Pie | British | Lamb mince under mashed potato. | lamb, potato, onion, carrot, peas, butter, milk, stock | `TT-0122.webp` |
| TT-0093 | Full English Breakfast | British | The classic fry-up with all the trimmings. | egg, bacon, sausage, beans, tomato, mushroom, bread, butter | `TT-0093.webp` |
| TT-0157 | Scones | British | With jam and clotted cream, in that order (or not). | flour, butter, milk, sugar, egg, strawberry, cream | `TT-0157.webp` |
| TT-0123 | Sunday Roast | British | Roast beef, crisp potatoes and a puffed Yorkshire pudding. | beef, potato, carrot, flour, egg, milk, rosemary, onion | `TT-0123.webp` |
| TT-0158 | Sticky Toffee Pudding | British | Dark fruit-studded sponge drenched in warm toffee sauce. | flour, butter, sugar, egg, cream, raisins, milk | `TT-0158.webp` |
| TT-0241 | Cornish Pasty | British | Crimped pastry parcel that fed generations of tin miners. | flour, butter, beef, potato, onion, black pepper, salt | `TT-0241.webp` |
| TT-0473 | Kedgeree | British | Smoked fish, rice and eggs — a colonial breakfast. | rice, cod, egg, butter, turmeric, parsley, lemon | `TT-0473.webp` |
| TT-0474 | Cullen Skink | British | Thick Scottish soup of smoked haddock and potato. | cod, potato, onion, leek, milk, butter, cream, chives | `TT-0474.webp` |
| TT-0523 | Cock-a-Leekie | British | Scotland’s chicken and leek soup. | chicken, leek, rice, stock, bacon, thyme | `TT-0523.webp` |
| TT-0397 | Porridge | British | Scottish oats stirred with a spurtle. | oats, milk, honey, salt | `TT-0397.webp` |
| TT-0506 | Scotch Broth | British | Barley and lamb soup. | lamb, barley, carrot, turnip, leek, onion, celery | `TT-0506.webp` |
| TT-0533 | Venison Pie | British | Game pie from the Highlands. | venison, flour, butter, onion, red wine, carrot, thyme, juniper | `TT-0533.webp` |
| TT-0124 | Borscht | Russian | Ruby beet soup. | beet, cabbage, potato, carrot, onion, dill, sour cream, beef | `TT-0124.webp` |
| TT-0076 | Beef Stroganoff | Russian | Seared beef in mustard sour cream. | beef, mushroom, onion, sour cream, butter, mustard, noodles | `TT-0076.webp` |
| TT-0187 | Pelmeni | Russian | Siberian dumplings, frozen by the hundred. | flour, egg, pork, beef, onion, sour cream, black pepper | `TT-0187.webp` |
| TT-0214 | Blini | Russian | Yeasted pancakes for Maslenitsa. | flour, milk, egg, butter, yeast, sour cream, fish | `TT-0214.webp` |
| TT-0242 | Olivier Salad | Russian | The creamy diced-vegetable salad of every New Year’s table. | potato, carrot, egg, pickle, peas, mayonnaise, ham, dill | `TT-0242.webp` |
| TT-0304 | Pirozhki | Russian | Small baked or fried buns with a savory filling. | flour, yeast, beef, onion, egg, butter, dill | `TT-0304.webp` |
| TT-0398 | Syrniki | Russian | Pan-fried curd-cheese pancakes served with sour cream. | queso fresco, flour, egg, sugar, sour cream, raisins, butter | `TT-0398.webp` |
| TT-0215 | Chicken Kiev | Russian | Breaded chicken that bursts with garlic butter. | chicken, butter, egg, bread, garlic, parsley, dill, flour | `TT-0215.webp` |
| TT-0507 | Pashtet | Russian | Smooth liver pâté spread on dark bread. | liver, butter, onion, carrot, bread, cream, black pepper | `TT-0507.webp` |
| TT-0475 | Okroshka | Russian | Chilled summer soup of raw vegetables. | cucumber, potato, egg, radish, dill, scallion, ham, buttermilk | `TT-0475.webp` |
| TT-0281 | Medovik | Russian | Layered honey cake with sour cream. | honey, flour, sour cream, egg, sugar, butter, walnut | `TT-0281.webp` |
| TT-0534 | Kisel | Russian | Thick, tart berry drink. | cranberry, sugar, lemon | `TT-0534.webp` |
| TT-0059 | Swedish Meatballs | Swedish | Köttbullar with lingonberries and cream sauce. | beef, pork, onion, bread, milk, egg, allspice, cream | `TT-0059.webp` |
| TT-0216 | Gravlax | Swedish | Salmon cured under dill. | salmon, dill, sugar, salt, black pepper | `TT-0216.webp` |
| TT-0125 | Kanelbullar | Swedish | Cardamom-scented cinnamon buns for fika. | flour, butter, sugar, cinnamon, cardamom, yeast, milk | `TT-0125.webp` |
| TT-0476 | Jansson’s Temptation | Swedish | Potato and sprat gratin at Christmas. | potato, onion, cream, fish, bread | `TT-0476.webp` |
| TT-0431 | Räksmörgås | Swedish | Open-faced shrimp sandwich piled high. | bread, shrimp, egg, mayonnaise, dill, lemon, butter | `TT-0431.webp` |
| TT-0477 | Ärtsoppa | Swedish | Thursday’s yellow pea soup, served with mustard. | peas, ham, onion, carrot, thyme, mustard | `TT-0477.webp` |
| TT-0243 | Semla | Swedish | Cardamom bun filled with almond paste and whipped cream. | flour, yeast, milk, butter, sugar, cardamom, almond, cream | `TT-0243.webp` |
| TT-0399 | Sill | Swedish | Pickled herring, the heart of the midsummer table. | herring, vinegar, sugar, onion, dill, allspice, bay leaf | `TT-0399.webp` |
| TT-0060 | Pierogi | Polish | Half-moon dumplings, boiled then fried. | flour, egg, potato, onion, sour cream, butter | `TT-0060.webp` |
| TT-0350 | Bigos | Polish | Hunter’s stew of cabbage and meats. | cabbage, sausage, pork, mushroom, onion, tomato, bay leaf, allspice | `TT-0350.webp` |
| TT-0432 | Żurek | Polish | Sour rye soup, often served in bread. | rye, sausage, egg, potato, garlic, oregano | `TT-0432.webp` |
| TT-0377 | Gołąbki | Polish | Cabbage rolls in tomato sauce. | cabbage, beef, rice, onion, tomato | `TT-0377.webp` |
| TT-0244 | Kotlet Schabowy | Polish | Breaded pork cutlet with buttery potatoes. | pork, flour, egg, bread, butter, lemon, potato | `TT-0244.webp` |
| TT-0378 | Placki Ziemniaczane | Polish | Crisp grated-potato pancakes with sour cream. | potato, onion, egg, flour, sour cream, vegetable oil | `TT-0378.webp` |
| TT-0305 | Sernik | Polish | Baked cheesecake made from twaróg curd. | queso fresco, egg, sugar, butter, flour, vanilla, raisins | `TT-0305.webp` |
| TT-0351 | Zapiekanka | Polish | Open-faced baguette baked with mushrooms and cheese. | bread, mushroom, cheddar, onion, mayonnaise, tomato | `TT-0351.webp` |
| TT-0508 | Chłodnik | Polish | Pink chilled beet soup. | beet, buttermilk, cucumber, dill, radish, egg, scallion | `TT-0508.webp` |
| TT-0433 | Makowiec | Polish | Rolled yeast cake with poppy seed filling. | flour, poppy seeds, butter, sugar, milk, yeast, egg, honey | `TT-0433.webp` |
| TT-0282 | Bacalhau à Brás | Portuguese | Salt cod scrambled with matchstick potatoes. | fish, potato, egg, onion, olive, parsley, olive oil | `TT-0282.webp` |
| TT-0306 | Caldo Verde | Portuguese | Green kale soup with chouriço. | kale, potato, onion, sausage, olive oil, garlic | `TT-0306.webp` |
| TT-0352 | Francesinha | Portuguese | Porto’s gloriously excessive sandwich. | bread, beef, ham, sausage, cheddar, beer, tomato, egg | `TT-0352.webp` |
| TT-0094 | Piri-Piri Chicken | Portuguese | Flame-grilled bird with African bird’s-eye chili. | chicken, chili, garlic, lemon, paprika, olive oil, oregano | `TT-0094.webp` |
| TT-0353 | Sardinhas Assadas | Portuguese | Grilled sardines on bread, the taste of Lisbon’s June festivals. | sardine, salt, olive oil, bread, tomato | `TT-0353.webp` |
| TT-0478 | Mexilhões à Bulhão Pato | Portuguese | Mussels steamed in garlic, cilantro and wine. | mussels, garlic, cilantro, olive oil, white wine, lemon | `TT-0478.webp` |
| TT-0077 | Khachapuri | Georgian | Cheese-filled bread boat crowned with an egg. | flour, yeast, mozzarella, feta, egg, butter | `TT-0077.webp` |
| TT-0159 | Khinkali | Georgian | Twisted soup dumplings, eaten by the knot. | flour, beef, pork, onion, cilantro, black pepper, cumin | `TT-0159.webp` |
| TT-0462 | Pkhali | Georgian | Vegetable and walnut pâtés. | spinach, beet, walnut, garlic, cilantro, pomegranate, coriander | `TT-0462.webp` |
| TT-0434 | Chakhokhbili | Georgian | Herby chicken and tomato stew. | chicken, tomato, onion, garlic, cilantro, basil, fenugreek, chili | `TT-0434.webp` |
| TT-0479 | Churchkhela | Georgian | Walnuts dipped in thickened grape must. | grape, walnut, flour | `TT-0479.webp` |
| TT-0400 | Lobio | Georgian | Spiced kidney beans with walnuts. | kidney beans, onion, walnut, garlic, coriander, cilantro, fenugreek, vinegar | `TT-0400.webp` |
| TT-0401 | Satsivi | Georgian | Cold chicken in walnut sauce. | chicken, walnut, garlic, coriander, fenugreek, turmeric, cinnamon, vinegar | `TT-0401.webp` |
| TT-0538 | Tarkhuna | Georgian | Bright green tarragon lemonade. | tarragon, sugar, lime | `TT-0538.webp` |
| TT-0145 | Irish Stew | Irish | Mutton, potatoes and patience. | lamb, potato, onion, carrot, thyme, stock, parsley | `TT-0145.webp` |
| TT-0354 | Colcannon | Irish | Buttery mash with greens. | potato, kale, butter, milk, scallion | `TT-0354.webp` |
| TT-0245 | Soda Bread | Irish | Quick bread marked with a cross. | flour, milk, salt, butter | `TT-0245.webp` |
| TT-0480 | Boxty | Irish | Potato pancakes from the north-west. | potato, flour, milk, egg, butter | `TT-0480.webp` |
| TT-0188 | Beef and Stout Stew | Irish | Beef braised dark and rich in stout. | beef, beer, onion, carrot, potato, thyme, tomato | `TT-0188.webp` |
| TT-0435 | Champ | Irish | Mash with spring onions and a pool of butter. | potato, scallion, butter, milk | `TT-0435.webp` |
| TT-0481 | Barmbrack | Irish | Tea-soaked fruit bread for Halloween. | flour, yeast, tea, raisins, sugar, egg, butter, cinnamon | `TT-0481.webp` |
| TT-0482 | Dublin Coddle | Irish | Sausage and bacon simmered with potatoes. | sausage, bacon, potato, onion, stock, parsley | `TT-0482.webp` |
| TT-0126 | Varenyky | Ukrainian | Boiled dumplings stuffed with potato and cheese. | flour, potato, cheddar, onion, butter, sour cream | `TT-0126.webp` |
| TT-0246 | Holubtsi | Ukrainian | Cabbage rolls simmered in tomato sauce. | cabbage, rice, pork, onion, carrot, tomato, sour cream | `TT-0246.webp` |
| TT-0307 | Pampushky | Ukrainian | Soft garlic rolls served with borscht. | flour, yeast, garlic, butter, milk, dill, vegetable oil | `TT-0307.webp` |
| TT-0402 | Kutia | Ukrainian | Sweet grain pudding for Christmas Eve. | barley, poppy seeds, honey, walnut, raisins | `TT-0402.webp` |
| TT-0436 | Kasha with Mushrooms | Ukrainian | Toasted buckwheat with fried mushrooms and onions. | buckwheat, mushroom, onion, butter, dill | `TT-0436.webp` |
| TT-0355 | Kyiv Cake | Ukrainian | Airy hazelnut meringue layers with buttercream. | hazelnut, egg, sugar, butter, cream, chocolate | `TT-0355.webp` |
| TT-0189 | Svíčková | Czech | Marinated beef in a velvety root-vegetable cream sauce. | beef, carrot, celery, onion, cream, bread, cranberry, lemon | `TT-0189.webp` |
| TT-0160 | Vepřo Knedlo Zelo | Czech | Roast pork with bread dumplings and sauerkraut. | pork, sauerkraut, flour, bread, yeast, egg, caraway, onion | `TT-0160.webp` |
| TT-0247 | Smažený Sýr | Czech | Fried cheese in breadcrumbs, a pub favorite. | gouda, flour, egg, bread, vegetable oil, mayonnaise | `TT-0247.webp` |
| TT-0483 | Kulajda | Czech | Creamy dill soup with mushrooms and a poached egg. | potato, mushroom, cream, dill, egg, vinegar, flour | `TT-0483.webp` |
| TT-0403 | Koláče | Czech | Round sweet pastries with fruit or curd filling. | flour, yeast, butter, queso fresco, poppy seeds, plum, sugar, egg | `TT-0403.webp` |
| TT-0404 | Švestkové Knedlíky | Czech | Potato dumplings stuffed with whole plums. | plum, flour, potato, egg, butter, sugar, cinnamon | `TT-0404.webp` |
| TT-0248 | Tafelspitz | Austrian | Boiled beef served with apple-horseradish. | beef, carrot, celery, onion, potato, horseradish, apple, parsley | `TT-0248.webp` |
| TT-0127 | Sachertorte | Austrian | Dense chocolate cake with apricot jam. | chocolate, flour, egg, sugar, butter, apricot | `TT-0127.webp` |
| TT-0095 | Apfelstrudel | Austrian | Paper-thin pastry rolled around spiced apples. | apple, flour, butter, raisins, cinnamon, sugar, bread | `TT-0095.webp` |
| TT-0249 | Käsespätzle | Austrian | Egg noodles baked with melted cheese and crisp onions. | flour, egg, emmental, onion, butter, milk, nutmeg | `TT-0249.webp` |
| TT-0509 | Hirschgulasch | Austrian | Venison goulash with juniper and red wine. | venison, onion, red wine, juniper, paprika, flour, butter, cranberry | `TT-0509.webp` |
| TT-0190 | Kaiserschmarrn | Austrian | Shredded fluffy pancake with plum compote. | flour, egg, milk, sugar, butter, raisins, plum | `TT-0190.webp` |
| TT-0308 | Wiener Melange | Austrian | The coffee-house classic, espresso with steamed milk. | coffee, milk | `TT-0308.webp` |
| TT-0061 | Cheese Fondue | Swiss | Bubbling melted cheese for dipping bread. | emmental, gruyère, white wine, garlic, bread, black pepper, nutmeg | `TT-0061.webp` |
| TT-0161 | Raclette | Swiss | Scraped molten cheese over potatoes and pickles. | gruyère, potato, pickle, onion, black pepper, bread | `TT-0161.webp` |
| TT-0191 | Rösti | Swiss | Crisp grated-potato cake. | potato, butter, onion, salt, bacon | `TT-0191.webp` |
| TT-0250 | Birchermüesli | Swiss | Soaked oats with grated apple and nuts. | oats, apple, yogurt, milk, hazelnut, honey, lemon, raisins | `TT-0250.webp` |
| TT-0524 | Basler Läckerli | Swiss | Spiced honey-nut biscuits from Basel. | hazelnut, almond, honey, flour, sugar, cinnamon, cloves | `TT-0524.webp` |
| TT-0484 | Älplermagronen | Swiss | Alpine macaroni with potatoes, cheese and apple sauce. | pasta, potato, emmental, cream, onion, butter, apple | `TT-0484.webp` |
| TT-0096 | Stroopwafel | Dutch | Two thin waffles glued with warm caramel. | flour, butter, sugar, egg, yeast, cinnamon, milk, honey | `TT-0096.webp` |
| TT-0405 | Haring | Dutch | Raw herring with onions, eaten by the tail. | herring, onion, pickle, bread | `TT-0405.webp` |
| TT-0356 | Erwtensoep | Dutch | Thick split-pea soup you can stand a spoon in. | peas, pork, sausage, celery, carrot, leek, potato, onion | `TT-0356.webp` |
| TT-0309 | Stamppot | Dutch | Mashed potatoes and kale with smoked sausage. | potato, kale, sausage, bacon, butter, milk, mustard | `TT-0309.webp` |
| TT-0463 | Kaassoufflé | Dutch | Deep-fried cheese pastry from the snack bar. | gouda, flour, egg, bread, vegetable oil | `TT-0463.webp` |
| TT-0283 | Poffertjes | Dutch | Tiny fluffy pancakes dusted with sugar. | flour, yeast, milk, egg, butter, sugar | `TT-0283.webp` |
| TT-0062 | Moules-Frites | Belgian | Mussels and fries, the national dish. | mussels, potato, white wine, celery, shallot, butter, cream, vegetable oil | `TT-0062.webp` |
| TT-0162 | Carbonnade Flamande | Belgian | Beef stewed in beer with mustard-coated bread. | beef, beer, onion, bread, mustard, sugar, thyme, bay leaf | `TT-0162.webp` |
| TT-0379 | Waterzooi | Belgian | Ghent’s creamy chicken and vegetable stew. | chicken, leek, carrot, celery, potato, cream, egg, butter | `TT-0379.webp` |
| TT-0217 | Pralines | Belgian | Filled chocolates invented in Brussels. | chocolate, cream, butter, hazelnut | `TT-0217.webp` |
| TT-0485 | Asperges à la Flamande | Belgian | White asparagus with chopped egg and butter. | asparagus, egg, butter, parsley, nutmeg, potato | `TT-0485.webp` |
| TT-0310 | Fårikål | Norwegian | Layers of lamb and cabbage simmered for hours. | lamb, cabbage, black pepper, flour, salt | `TT-0310.webp` |
| TT-0311 | Smørbrød | Norwegian | Open-faced sandwich with smoked salmon. | smoked salmon, rye, butter, dill, egg, cucumber, lemon | `TT-0311.webp` |
| TT-0437 | Bergensk Fiskesuppe | Norwegian | Creamy fish soup from Bergen. | cod, carrot, leek, cream, egg, butter, flour, parsley | `TT-0437.webp` |
| TT-0486 | Pinnekjøtt | Norwegian | Steamed salted lamb ribs for Christmas. | lamb, salt, potato, turnip, stock | `TT-0486.webp` |
| TT-0312 | Kjøttkaker | Norwegian | Meat cakes in brown gravy with lingonberries. | beef, pork, flour, milk, onion, nutmeg, potato, cream | `TT-0312.webp` |
| TT-0284 | Vafler | Norwegian | Heart-shaped waffles with sour cream and jam. | flour, egg, milk, butter, sugar, sour cream, cardamom | `TT-0284.webp` |
| TT-0218 | Lohikeitto | Finnish | Creamy salmon soup. | salmon, potato, carrot, leek, cream, butter, dill, onion | `TT-0218.webp` |
| TT-0313 | Karjalanpiirakka | Finnish | Rye pasties filled with rice porridge. | rye, rice, butter, egg, milk, salt | `TT-0313.webp` |
| TT-0406 | Mustikkapiirakka | Finnish | Blueberry pie from the forest. | blueberry, flour, butter, sugar, egg, cream, vanilla | `TT-0406.webp` |
| TT-0487 | Poronkäristys | Finnish | Sautéed reindeer with mashed potatoes and lingonberries. | venison, butter, onion, lingonberry, potato, cream, black pepper | `TT-0487.webp` |
| TT-0535 | Leipäjuusto | Finnish | Squeaky baked “bread cheese” with berry jam. | cheese curds, cream, lingonberry, sugar | `TT-0535.webp` |
| TT-0536 | Lanttulaatikko | Finnish | Sweet baked rutabaga casserole for Christmas. | turnip, cream, butter, bread, nutmeg, honey | `TT-0536.webp` |
| TT-0251 | Dolma | Armenian | Grape leaves stuffed with rice and lamb. | grape, rice, lamb, onion, parsley, dill, tomato, black pepper | `TT-0251.webp` |
| TT-0285 | Khorovats | Armenian | Open-fire barbecue shared outdoors. | pork, onion, tomato, eggplant, bell pepper, salt, black pepper | `TT-0285.webp` |
| TT-0314 | Lavash | Armenian | Thin flatbread baked on tandoor walls. | flour, salt, sesame | `TT-0314.webp` |
| TT-0438 | Ghapama | Armenian | Pumpkin baked with sweet rice and dried fruit. | pumpkin, rice, almond, raisins, apricot, honey, butter, cinnamon | `TT-0438.webp` |
| TT-0510 | Spas | Armenian | Warm yogurt soup with mint. | yogurt, egg, flour, rice, mint, butter, onion | `TT-0510.webp` |
| TT-0511 | Basturma | Armenian | Air-cured spiced beef sliced thin. | beef, fenugreek, paprika, garlic, cumin, salt | `TT-0511.webp` |
| TT-0542 | Smørrebrød | Danish | Open-faced rye sandwiches piled with toppings. | rye, butter, herring, egg, dill, pickle, onion | `TT-0542.webp` |
| TT-0545 | Frikadeller | Danish | Pan-fried Danish meatballs, served with potatoes. | pork, beef, onion, egg, flour, milk, butter, salt | `TT-0545.webp` |
| TT-0561 | Stegt Flæsk med Persillesovs | Danish | Crisp fried pork belly with parsley sauce, a national favourite. | pork, parsley, milk, butter, flour, potato, salt | `TT-0561.webp` |
| TT-0540 | Wienerbrød | Danish | The flaky laminated pastry the world calls Danish. | flour, butter, yeast, sugar, egg, milk, cardamom, vanilla | `TT-0540.webp` |
| TT-0609 | Rødgrød med Fløde | Danish | Red berry pudding poured over with cold cream. | strawberry, cherry, sugar, cream, vanilla | `TT-0609.webp` |
| TT-0566 | Æbleskiver | Danish | Spherical pancake puffs dusted with sugar. | flour, buttermilk, egg, sugar, butter, cardamom | `TT-0566.webp` |
| TT-0618 | Leverpostej | Danish | Warm liver pâté spread on rye bread. | liver, pork, onion, butter, flour, milk, egg, allspice | `TT-0618.webp` |
| TT-0546 | Sarmale | Romanian | Cabbage rolls simmered slowly, served with sour cream. | cabbage, pork, rice, onion, tomato, dill, sour cream, paprika | `TT-0546.webp` |
| TT-0562 | Mămăligă | Romanian | Golden cornmeal porridge, the Romanian staple. | corn, butter, feta, sour cream, egg, salt | `TT-0562.webp` |
| TT-0555 | Mici | Romanian | Skinless grilled sausages served with mustard. | beef, pork, garlic, black pepper, paprika, salt | `TT-0555.webp` |
| TT-0583 | Ciorbă de Perișoare | Romanian | Sour meatball soup finished with sour cream. | pork, beef, rice, carrot, onion, celery, parsley, dill | `TT-0583.webp` |
| TT-0567 | Papanași | Romanian | Fried cheese doughnuts topped with sour cream and jam. | ricotta, flour, egg, sugar, sour cream, plum | `TT-0567.webp` |
| TT-0595 | Zacuscă | Romanian | A smoky roasted vegetable spread, jarred for winter. | eggplant, bell pepper, onion, tomato, vegetable oil, bay leaf, salt | `TT-0595.webp` |
| TT-0584 | Cozonac | Romanian | Sweet braided bread swirled with walnuts and cocoa. | flour, yeast, milk, egg, sugar, butter, walnut, cocoa | `TT-0584.webp` |
| TT-0547 | Ćevapi | Croatian | Small grilled minced-meat sausages in flatbread. | beef, lamb, onion, garlic, paprika, bread, salt | `TT-0547.webp` |
| TT-0596 | Peka | Croatian | Meat and vegetables slow-baked under an iron bell. | lamb, potato, carrot, olive oil, rosemary, garlic, white wine, onion | `TT-0596.webp` |
| TT-0597 | Crni Rižot | Croatian | Black risotto coloured with squid ink. | rice, squid, olive oil, garlic, white wine, parsley, onion | `TT-0597.webp` |
| TT-0610 | Brudet | Croatian | Adriatic fish stew with tomatoes and wine. | fish, tomato, onion, garlic, olive oil, white wine, parsley, vinegar | `TT-0610.webp` |
| TT-0611 | Štrukli | Croatian | Rolled dough filled with fresh cheese, baked or boiled. | flour, ricotta, sour cream, egg, butter, salt | `TT-0611.webp` |
| TT-0619 | Fritule | Croatian | Small fried doughnuts scented with citrus. | flour, egg, raisins, sugar, lemon, yeast, vegetable oil | `TT-0619.webp` |
| TT-0620 | Pašticada | Croatian | Wine-marinated beef stew from Dalmatia. | beef, red wine, prosciutto, carrot, onion, garlic, cloves, nutmeg | `TT-0620.webp` |
| TT-0612 | Plokkfiskur | Icelandic | Creamy mashed fish and potato stew. | fish, potato, onion, butter, flour, milk, black pepper, chives | `TT-0612.webp` |
| TT-0592 | Kjötsúpa | Icelandic | Hearty lamb and root-vegetable soup. | lamb, potato, carrot, turnip, onion, cabbage, oats, salt | `TT-0592.webp` |
| TT-0585 | Skyr with Berries | Icelandic | Thick cultured dairy served with berries and cream. | yogurt, blueberry, sugar, cream, honey | `TT-0585.webp` |
| TT-0575 | Pylsur | Icelandic | Iceland’s beloved hot dog with crispy onions. | sausage, bread, onion, mustard, mayonnaise, pickle | `TT-0575.webp` |
| TT-0632 | Rúgbrauð | Icelandic | Dense sweet rye bread traditionally baked in the ground. | rye, flour, sugar, yeast, salt, milk | `TT-0632.webp` |
| TT-0642 | Kleinur | Icelandic | Twisted fried doughnuts, a coffee-time treat. | flour, sugar, butter, egg, milk, cardamom, vegetable oil | `TT-0642.webp` |
| TT-0646 | Harðfiskur | Icelandic | Wind-dried fish eaten with butter. | cod, butter, salt | `TT-0646.webp` |
| TT-0598 | Prosciutto e Fichi | Italian | Salty cured ham with sweet ripe figs. | prosciutto, fig, honey, black pepper, olive oil | `TT-0598.webp` |
| TT-0633 | Honeyed Figs with Yogurt | Greek | Ripe figs drizzled with honey over thick yogurt. | fig, yogurt, honey, walnut, cinnamon | `TT-0633.webp` |
| TT-0693 | Banitsa | Bulgarian | Flaky filo pastry layered with eggs and brined cheese. | flour, egg, yogurt, feta, butter, salt | `TT-0693.webp` |
| TT-0709 | Shopska Salad | Bulgarian | Chopped salad snowed under with grated white cheese. | tomato, cucumber, onion, bell pepper, feta, olive oil, parsley, vinegar | `TT-0709.webp` |
| TT-0737 | Tarator | Bulgarian | Cold yogurt and cucumber soup for hot days. | yogurt, cucumber, garlic, dill, walnut, olive oil, salt | `TT-0737.webp` |
| TT-0773 | Kavarma | Bulgarian | Slow-cooked pork stew, often served in a clay pot. | pork, onion, tomato, bell pepper, mushroom, red wine, paprika, black pepper | `TT-0773.webp` |
| TT-0764 | Kyufte | Bulgarian | Spiced grilled meatballs. | pork, beef, onion, egg, cumin, parsley, black pepper, bread | `TT-0764.webp` |
| TT-0765 | Lyutenitsa | Bulgarian | A sweet roasted pepper and tomato relish. | bell pepper, tomato, eggplant, garlic, vegetable oil, sugar, salt | `TT-0765.webp` |
| TT-0800 | Mekitsi | Bulgarian | Pillowy fried dough, eaten with jam or cheese. | flour, yogurt, egg, sugar, vegetable oil, yeast | `TT-0800.webp` |
| TT-0700 | Pljeskavica | Serbian | A large spiced grilled meat patty. | beef, pork, onion, paprika, black pepper, bread, salt | `TT-0700.webp` |
| TT-0732 | Ajvar | Serbian | Roasted red pepper spread made every autumn. | bell pepper, eggplant, garlic, vegetable oil, vinegar, salt | `TT-0732.webp` |
| TT-0733 | Sarma | Serbian | Sour cabbage rolls simmered for hours. | cabbage, pork, rice, onion, paprika, sauerkraut | `TT-0733.webp` |
| TT-0774 | Karađorđeva Šnicla | Serbian | A rolled cutlet filled with cream, crumbed and fried. | veal, cheese curds, bread, egg, flour, vegetable oil, salt | `TT-0774.webp` |
| TT-0766 | Gibanica | Serbian | Cheese and egg pie in crisp pastry. | flour, feta, egg, yogurt, butter, vegetable oil | `TT-0766.webp` |
| TT-0785 | Prebranac | Serbian | Oven-baked beans with paprika and onions. | white beans, onion, paprika, garlic, vegetable oil, bay leaf | `TT-0785.webp` |
| TT-0808 | Proja | Serbian | A rustic cornbread with cheese. | corn, egg, yogurt, feta, flour, vegetable oil | `TT-0808.webp` |
| TT-0718 | Cepelinai | Lithuanian | Giant potato dumplings stuffed with meat. | potato, pork, onion, sour cream, bacon, egg, salt | `TT-0718.webp` |
| TT-0726 | Šaltibarščiai | Lithuanian | Bright pink cold beet soup. | beet, buttermilk, cucumber, dill, egg, potato, scallion, sour cream | `TT-0726.webp` |
| TT-0775 | Kibinai | Lithuanian | Crescent pastries filled with seasoned meat. | flour, lamb, onion, butter, egg, black pepper, salt | `TT-0775.webp` |
| TT-0767 | Kugelis | Lithuanian | Baked grated potato pudding. | potato, bacon, onion, egg, sour cream, milk, salt | `TT-0767.webp` |
| TT-0801 | Šakotis | Lithuanian | Spit-baked tree cake with spiky branches. | egg, butter, flour, sugar, vanilla, cream | `TT-0801.webp` |
| TT-0786 | Balandėliai | Lithuanian | Little cabbage “doves” in tomato sauce. | cabbage, pork, rice, onion, tomato, sour cream, carrot | `TT-0786.webp` |
| TT-0802 | Juoda Duona | Lithuanian | Dark sour rye bread. | rye, flour, yeast, sugar, caraway, salt, honey | `TT-0802.webp` |
| TT-0676 | Bruschetta | Italian | Grilled bread rubbed with garlic and piled with tomato. | bread, tomato, garlic, basil, olive oil, salt | `TT-0676.webp` |
| TT-0661 | Gnocchi | Italian | Soft potato dumplings in sage butter. | potato, flour, egg, butter, sage, parmesan, salt | `TT-0661.webp` |
| TT-0686 | Focaccia | Italian | Dimpled olive-oil flatbread. | flour, yeast, olive oil, salt, rosemary | `TT-0686.webp` |
| TT-0659 | Gelato | Italian | Dense, slow-churned Italian ice cream. | milk, cream, sugar, egg, vanilla | `TT-0659.webp` |
| TT-0727 | Pasta alla Norma | Italian | Sicilian pasta with fried eggplant and salted ricotta. | pasta, eggplant, tomato, ricotta, basil, garlic, olive oil | `TT-0727.webp` |
| TT-0749 | Panzanella | Italian | Tuscan bread and tomato salad. | bread, tomato, cucumber, onion, basil, olive oil, vinegar | `TT-0749.webp` |
| TT-0738 | Affogato | Italian | Espresso poured over a scoop of ice cream. | coffee, milk, cream, sugar, vanilla | `TT-0738.webp` |
| TT-0687 | Croque Monsieur | French | Grilled ham and cheese with a béchamel crown. | bread, ham, gruyère, butter, flour, milk, nutmeg | `TT-0687.webp` |
| TT-0671 | Macarons | French | Delicate almond meringue sandwiches. | almond, egg, sugar, butter, cream, vanilla | `TT-0671.webp` |
| TT-0710 | Tarte Tatin | French | The famous upside-down caramelised apple tart. | apple, butter, sugar, flour, salt | `TT-0710.webp` |
| TT-0677 | Steak Frites | French | Pan-seared steak with crisp fries. | beef, potato, butter, vegetable oil, salt, black pepper, mustard | `TT-0677.webp` |
| TT-0776 | Pisto | Spanish | Slow-cooked vegetable stew, the Spanish ratatouille. | tomato, bell pepper, zucchini, onion, garlic, olive oil, egg, salt | `TT-0776.webp` |
| TT-0728 | Albóndigas | Spanish | Meatballs in tomato sauce, a tapas staple. | beef, pork, onion, garlic, bread, egg, tomato, parsley | `TT-0728.webp` |
| TT-0662 | Gyros | Greek | Spit-roasted meat in pita with tzatziki. | pork, flatbread, tomato, onion, yogurt, cucumber, garlic, olive oil | `TT-0662.webp` |
| TT-0719 | Dolmades | Greek | Vine leaves stuffed with herbed rice. | rice, onion, dill, mint, lemon, olive oil, pine nuts, salt | `TT-0719.webp` |
| TT-0739 | Loukoumades | Greek | Honey-drenched fried dough balls. | flour, yeast, honey, cinnamon, walnut, sugar, vegetable oil | `TT-0739.webp` |
| TT-0688 | Currywurst | German | Sliced sausage under curried ketchup. | sausage, tomato, turmeric, cumin, vegetable oil, onion, sugar, paprika | `TT-0688.webp` |
| TT-0694 | Pretzel | German | A chewy, lye-glazed knot of bread. | flour, yeast, butter, salt, sugar | `TT-0694.webp` |
| TT-0740 | Rouladen | German | Beef rolled around bacon and pickle, then braised. | beef, bacon, onion, mustard, pickle, stock, red wine, flour | `TT-0740.webp` |
| TT-0741 | Scotch Egg | British | A boiled egg wrapped in sausage and crumbs. | egg, sausage, bread, flour, vegetable oil, salt | `TT-0741.webp` |
| TT-0711 | Bangers and Mash | British | Sausages on mash with onion gravy. | sausage, potato, butter, milk, onion, stock, flour | `TT-0711.webp` |
| TT-0729 | Yorkshire Pudding | British | Puffed batter baked in hot fat. | flour, egg, milk, vegetable oil, salt | `TT-0729.webp` |
| TT-0742 | Trifle | British | Layered sponge, custard, fruit and cream. | cream, egg, sugar, milk, strawberry, flour, vanilla, white wine | `TT-0742.webp` |
| TT-0219 | Mole Poblano | Mexican | Dozens of ingredients ground into a dark, rich sauce. | chili, chocolate, sesame, almond, garlic, onion, cinnamon, tomato | `TT-0219.webp` |
| TT-0063 | Enchiladas | Mexican | Rolled tortillas bathed in chili sauce. | corn, chicken, chili, tomato, onion, queso fresco, cream, garlic | `TT-0063.webp` |
| TT-0315 | Pozole | Mexican | Hominy stew served for celebrations. | pork, corn, chili, garlic, onion, oregano, cabbage, lime | `TT-0315.webp` |
| TT-0488 | Chiles en Nogada | Mexican | Stuffed poblanos in walnut sauce. | chili, pork, walnut, pomegranate, cream, apple, onion, garlic | `TT-0488.webp` |
| TT-0163 | Chilaquiles | Mexican | Tortilla chips simmered in salsa for breakfast. | corn, chili, tomato, onion, queso fresco, cream, egg, cilantro | `TT-0163.webp` |
| TT-0097 | Elote | Mexican | Street corn slathered and dusted with chili. | corn, mayonnaise, queso fresco, chili, lime | `TT-0097.webp` |
| TT-0078 | Caesar Salad | Mexican | Born in Tijuana in 1924 and adopted by the world. | lettuce, bread, anchovy, parmesan, egg, olive oil, lemon, garlic | `TT-0078.webp` |
| TT-0316 | Huevos con Chorizo | Mexican | Scrambled eggs with spicy sausage and warm tortillas. | egg, chorizo, corn, onion, chili, tomato | `TT-0316.webp` |
| TT-0357 | Agua de Jamaica | Mexican | Tart hibiscus agua fresca. | hibiscus, sugar, lime, cinnamon | `TT-0357.webp` |
| TT-0098 | BBQ Ribs | American | Low-and-slow smoked ribs. | pork, sugar, paprika, garlic, vinegar, tomato, black pepper, salt | `TT-0098.webp` |
| TT-0277 | Clam Chowder | American | New England’s creamy clam soup. | shellfish, potato, onion, celery, cream, bacon, butter, thyme | `TT-0277.webp` |
| TT-0128 | Pecan Pie | American | Southern holiday pie with a gooey heart. | pecan, sugar, butter, egg, maple syrup, vanilla, flour | `TT-0128.webp` |
| TT-0146 | Lobster Roll | American | New England summer in a toasted bun. | lobster, bread, mayonnaise, butter, celery, lemon | `TT-0146.webp` |
| TT-0220 | Crab Cakes | American | Chesapeake Bay classics, light on filler. | crab, bread, egg, mayonnaise, mustard, parsley, lemon, butter | `TT-0220.webp` |
| TT-0407 | Cioppino | American | San Francisco’s seafood stew. | crab, mussels, fish, tomato, white wine, garlic, bay leaf, onion | `TT-0407.webp` |
| TT-0129 | Roast Turkey | American | Thanksgiving centerpiece with herb stuffing. | turkey, butter, sage, thyme, rosemary, onion, celery, bread | `TT-0129.webp` |
| TT-0252 | Turkey Club Sandwich | American | Triple-decker deli classic. | turkey, bacon, bread, lettuce, tomato, mayonnaise | `TT-0252.webp` |
| TT-0130 | Chili con Carne | American | Texas-style bowl of red with beans. | beef, kidney beans, tomato, onion, garlic, chili, cumin, paprika | `TT-0130.webp` |
| TT-0317 | Tuna Salad Sandwich | American | Lunch-counter staple. | tuna, mayonnaise, bread, celery, lemon, onion | `TT-0317.webp` |
| TT-0192 | Loaded Baked Potato | American | Steakhouse side with all the toppings. | potato, butter, sour cream, cheddar, bacon, chives | `TT-0192.webp` |
| TT-0064 | Buffalo Wings | American | Fried wings tossed in hot sauce. | chicken, butter, chili, vinegar, celery, blue cheese, garlic | `TT-0064.webp` |
| TT-0113 | Pumpkin Pie | American | Thanksgiving’s spiced custard pie. | pumpkin, flour, butter, sugar, egg, cream, cinnamon, nutmeg | `TT-0113.webp` |
| TT-0439 | Cranberry Sauce | American | Tart sauce for the holiday table. | cranberry, sugar, orange, cinnamon | `TT-0439.webp` |
| TT-0131 | Reuben Sandwich | American | Grilled corned beef with sauerkraut and Swiss. | bread, beef, sauerkraut, gruyère, mayonnaise, mustard, pickle, butter | `TT-0131.webp` |
| TT-0164 | Lox and Bagel | American | Smoked salmon on a bagel with all the trimmings. | bread, smoked salmon, sour cream, onion, capers, dill | `TT-0164.webp` |
| TT-0318 | Shrimp Cocktail | American | Chilled shrimp with a horseradish sauce. | shrimp, tomato, horseradish, lemon, lettuce | `TT-0318.webp` |
| TT-0380 | Beef and Barley Soup | American | Homey winter soup. | beef, barley, carrot, celery, onion, tomato, thyme | `TT-0380.webp` |
| TT-0319 | Oatmeal | American | Warm bowl of oats. | oats, milk, butter, raisins, cinnamon, honey | `TT-0319.webp` |
| TT-0320 | Beet and Goat Cheese Salad | American | Roasted beets with tangy goat cheese. | beet, goat cheese, walnut, olive oil, vinegar, lettuce, honey | `TT-0320.webp` |
| TT-0440 | Pecan Pralines | American | New Orleans candy of toasted pecans and caramel. | pecan, sugar, butter, cream, vanilla | `TT-0440.webp` |
| TT-0193 | Lomo Saltado | Peruvian | Chifa stir-fry of beef and fries. | beef, potato, tomato, onion, soy sauce, vinegar, chili, rice | `TT-0193.webp` |
| TT-0419 | Ají de Gallina | Peruvian | Shredded chicken in a creamy yellow-pepper sauce. | chicken, chili, bread, milk, walnut, onion, garlic, parmesan | `TT-0419.webp` |
| TT-0441 | Causa Limeña | Peruvian | Layered terrine of chili-spiked potato. | potato, chili, lime, chicken, avocado, mayonnaise, egg | `TT-0441.webp` |
| TT-0489 | Solterito | Peruvian | Arequipa’s bright bean and cheese salad. | fava beans, corn, queso fresco, tomato, onion, olive, chili, lime | `TT-0489.webp` |
| TT-0442 | Quinoa Soup | Peruvian | Andean comfort in a bowl. | quinoa, potato, carrot, corn, onion, garlic, cilantro, queso fresco | `TT-0442.webp` |
| TT-0490 | Quinoa Chaufa | Peruvian | Peruvian-Chinese fried grain made with quinoa. | quinoa, egg, scallion, soy sauce, garlic, ginger, sesame oil, carrot | `TT-0490.webp` |
| TT-0165 | Feijoada | Brazilian | Black bean and pork stew. | beans, pork, sausage, onion, garlic, bay leaf, orange, rice | `TT-0165.webp` |
| TT-0221 | Pão de Queijo | Brazilian | Chewy cheese bread from Minas Gerais. | tapioca, parmesan, egg, milk, vegetable oil, salt | `TT-0221.webp` |
| TT-0358 | Moqueca | Brazilian | Bahian fish stew with dendê oil. | fish, coconut milk, tomato, onion, bell pepper, cilantro, lime, palm oil | `TT-0358.webp` |
| TT-0194 | Brigadeiro | Brazilian | Fudgy chocolate truffles for every party. | cocoa, sugar, butter, milk | `TT-0194.webp` |
| TT-0132 | Coxinha | Brazilian | Teardrop fritters of shredded chicken. | chicken, flour, butter, milk, onion, parsley, egg, bread | `TT-0132.webp` |
| TT-0408 | Acarajé | Brazilian | Bahian black-eyed pea fritters fried in dendê oil. | black-eyed peas, onion, shrimp, palm oil, chili, ginger | `TT-0408.webp` |
| TT-0099 | Churrasco | Brazilian | Grilled meats carved at the table. | beef, pork, sausage, chicken, salt, garlic | `TT-0099.webp` |
| TT-0443 | Farofa | Brazilian | Toasted cassava flour with bacon and egg. | cassava, bacon, onion, butter, egg, parsley | `TT-0443.webp` |
| TT-0321 | Ackee and Saltfish | Jamaican | Jamaica’s national breakfast. | ackee, fish, onion, tomato, chili, bell pepper, thyme, black pepper | `TT-0321.webp` |
| TT-0195 | Rice and Peas | Jamaican | Kidney beans and rice in coconut milk. | rice, beans, coconut milk, scallion, thyme, allspice, garlic, chili | `TT-0195.webp` |
| TT-0253 | Curry Goat | Jamaican | Sunday curry, slow and rich. | goat, turmeric, cumin, coriander, potato, onion, garlic, chili | `TT-0253.webp` |
| TT-0222 | Fried Plantain | Jamaican | Sweet, caramel-edged ripe plantain. | plantain, vegetable oil, salt | `TT-0222.webp` |
| TT-0491 | Escovitch Fish | Jamaican | Fried fish under spicy pickled vegetables. | fish, vinegar, onion, bell pepper, chili, allspice, thyme, vegetable oil | `TT-0491.webp` |
| TT-0525 | Ackee Patty | Jamaican | Golden pastry stuffed with seasoned ackee. | flour, ackee, onion, chili, thyme, butter, turmeric | `TT-0525.webp` |
| TT-0065 | Asado | Argentine | The ritual of the grill, with chimichurri. | beef, sausage, salt, black pepper, parsley, garlic, oregano, vinegar | `TT-0065.webp` |
| TT-0147 | Milanesa | Argentine | Breaded cutlet, an Italian import. | beef, bread, egg, garlic, parsley, lemon, vegetable oil | `TT-0147.webp` |
| TT-0133 | Alfajores | Argentine | Sandwich cookies filled with dulce de leche. | flour, butter, sugar, egg, dulce de leche, coconut | `TT-0133.webp` |
| TT-0444 | Provoleta | Argentine | Grilled cheese with oregano, crisp at the edges. | mozzarella, oregano, olive oil, chili, bread | `TT-0444.webp` |
| TT-0409 | Locro | Argentine | Hearty national stew of corn, beans and pumpkin. | corn, white beans, pumpkin, beef, pork, sausage, onion, garlic | `TT-0409.webp` |
| TT-0322 | Chimichurri | Argentine | The herb sauce that goes on everything off the grill. | parsley, garlic, oregano, olive oil, vinegar, chili, bay leaf | `TT-0322.webp` |
| TT-0166 | Choripán | Argentine | Grilled chorizo in a roll with chimichurri. | chorizo, bread, parsley, garlic, olive oil, vinegar, oregano | `TT-0166.webp` |
| TT-0286 | Flan con Dulce de Leche | Argentine | Custard flan served with a spoon of dulce de leche. | milk, egg, sugar, vanilla, dulce de leche | `TT-0286.webp` |
| TT-0100 | Cubano | Cuban | Pressed sandwich born between Havana and Tampa. | bread, pork, ham, gruyère, pickle, mustard, butter | `TT-0100.webp` |
| TT-0148 | Ropa Vieja | Cuban | "Old clothes" — shredded braised beef. | beef, bell pepper, onion, tomato, garlic, cumin, olive, white wine | `TT-0148.webp` |
| TT-0323 | Moros y Cristianos | Cuban | Black beans and white rice cooked together. | beans, rice, onion, bell pepper, garlic, cumin, bay leaf | `TT-0323.webp` |
| TT-0254 | Lechón Asado | Cuban | Roast pork in sour-orange mojo. | pork, orange, lime, garlic, oregano, cumin | `TT-0254.webp` |
| TT-0324 | Picadillo | Cuban | Sweet-savory beef hash with olives and raisins. | beef, onion, bell pepper, tomato, garlic, olive, raisins, cumin | `TT-0324.webp` |
| TT-0287 | Tostones | Cuban | Twice-fried green plantain slices. | plantain, vegetable oil, salt, garlic | `TT-0287.webp` |
| TT-0359 | Flan de Leche | Cuban | Silky baked custard under liquid caramel. | milk, egg, sugar, vanilla | `TT-0359.webp` |
| TT-0288 | Arroz con Pollo | Cuban | Chicken and rice cooked in beer and sofrito. | rice, chicken, tomato, bell pepper, onion, garlic, peas, beer | `TT-0288.webp` |
| TT-0196 | Bandeja Paisa | Colombian | A platter big enough for a mule driver. | beans, rice, pork, beef, sausage, egg, plantain, avocado | `TT-0196.webp` |
| TT-0066 | Arepas | Colombian | Griddled corn cakes, split and filled. | corn, butter, queso fresco, salt | `TT-0066.webp` |
| TT-0289 | Ajiaco | Colombian | Bogotá’s three-potato chicken soup. | chicken, potato, corn, oregano, cream, avocado | `TT-0289.webp` |
| TT-0325 | Sancocho | Colombian | Hearty Sunday stew. | chicken, plantain, cassava, corn, potato, cilantro, onion, garlic | `TT-0325.webp` |
| TT-0326 | Empanadas Colombianas | Colombian | Golden corn-flour turnovers with beef and potato. | corn, beef, potato, onion, vegetable oil, cumin, cilantro | `TT-0326.webp` |
| TT-0526 | Changua | Colombian | Andean breakfast soup of milk and poached egg. | milk, egg, scallion, cilantro, bread | `TT-0526.webp` |
| TT-0381 | Buñuelos | Colombian | Crisp-shelled cheese fritters, a Christmas staple. | queso fresco, corn, egg, sugar, vegetable oil | `TT-0381.webp` |
| TT-0360 | Tamal Colombiano | Colombian | Corn dough steamed in banana leaves with meat and vegetables. | corn, chicken, pork, potato, peas, egg, onion, cilantro | `TT-0360.webp` |
| TT-0223 | Butter Tarts | Canadian | Runny, buttery and fiercely debated. | flour, butter, sugar, maple syrup, egg, raisins | `TT-0223.webp` |
| TT-0361 | Tourtière | Canadian | Québécois spiced meat pie for Christmas Eve. | flour, butter, pork, beef, onion, potato, cinnamon, cloves | `TT-0361.webp` |
| TT-0290 | Nanaimo Bars | Canadian | No-bake three-layer bars. | cocoa, butter, sugar, egg, coconut, walnut, milk, chocolate | `TT-0290.webp` |
| TT-0255 | Maple-Glazed Salmon | Canadian | West-coast salmon with a sweet glaze. | salmon, maple syrup, soy sauce, garlic, mustard | `TT-0255.webp` |
| TT-0327 | Blueberry Pie | Canadian | Wild Maritime blueberries under a lattice. | blueberry, flour, butter, sugar, lemon | `TT-0327.webp` |
| TT-0224 | Pastel de Choclo | Chilean | Sweet-corn crust over a spiced filling. | corn, beef, onion, egg, olive, raisins, chicken, basil | `TT-0224.webp` |
| TT-0328 | Cazuela | Chilean | A clear soup with a bit of everything. | chicken, potato, pumpkin, corn, rice, green beans, carrot, cilantro | `TT-0328.webp` |
| TT-0197 | Empanadas de Pino | Chilean | Baked turnovers for Fiestas Patrias. | flour, beef, onion, egg, olive, raisins, cumin, paprika | `TT-0197.webp` |
| TT-0362 | Sopaipillas | Chilean | Pumpkin fritters for rainy days. | pumpkin, flour, butter, salt, vegetable oil | `TT-0362.webp` |
| TT-0291 | Completo | Chilean | A hot dog buried in avocado. | bread, sausage, avocado, tomato, mayonnaise | `TT-0291.webp` |
| TT-0492 | Mote con Huesillo | Chilean | Summer drink of peaches and wheat berries. | barley, apricot, sugar, cinnamon | `TT-0492.webp` |
| TT-0198 | Reina Pepiada | Venezuelan | Arepa stuffed with chicken-avocado salad. | corn, chicken, avocado, mayonnaise, cilantro, butter | `TT-0198.webp` |
| TT-0256 | Pabellón Criollo | Venezuelan | National plate of shredded beef, beans and rice. | beef, rice, beans, plantain, onion, garlic, tomato, cumin | `TT-0256.webp` |
| TT-0445 | Hallacas | Venezuelan | Christmas tamales wrapped in banana leaves. | corn, beef, pork, olive, raisins, bell pepper, onion, capers | `TT-0445.webp` |
| TT-0167 | Tequeños | Venezuelan | Cheese sticks wrapped in dough and fried. | flour, queso fresco, butter, egg, vegetable oil | `TT-0167.webp` |
| TT-0363 | Cachapas | Venezuelan | Sweet corn pancakes folded over cheese. | corn, queso fresco, butter, sugar, milk | `TT-0363.webp` |
| TT-0329 | Pan de Jamón | Venezuelan | Christmas bread rolled around ham, olives and raisins. | flour, yeast, ham, butter, olive, raisins, egg, sugar | `TT-0329.webp` |
| TT-0199 | Mofongo | Puerto Rican | Mashed fried plantain with garlic. | plantain, garlic, bacon, olive oil, salt, stock | `TT-0199.webp` |
| TT-0200 | Arroz con Gandules | Puerto Rican | Rice with pigeon peas and sofrito. | rice, peas, pork, onion, bell pepper, garlic, cilantro, olive | `TT-0200.webp` |
| TT-0225 | Pernil | Puerto Rican | Slow-roasted pork shoulder with crackling. | pork, garlic, oregano, olive oil, vinegar, black pepper, salt | `TT-0225.webp` |
| TT-0512 | Pasteles | Puerto Rican | Holiday plantain parcels steamed in leaves. | plantain, pork, olive, raisins, chickpeas, garlic, onion | `TT-0512.webp` |
| TT-0410 | Coquito | Puerto Rican | Creamy coconut holiday drink. | coconut milk, milk, cinnamon, cloves, vanilla, sugar | `TT-0410.webp` |
| TT-0493 | Tembleque | Puerto Rican | Wobbly coconut pudding dusted with cinnamon. | coconut milk, sugar, cinnamon, salt | `TT-0493.webp` |
| TT-0551 | Ceviche de Camarón | Ecuadorian | Shrimp cured in citrus, served with plantain chips. | shrimp, tomato, onion, lime, cilantro, orange, salt | `TT-0551.webp` |
| TT-0568 | Locro de Papa | Ecuadorian | Creamy Andean potato and cheese soup. | potato, queso fresco, avocado, onion, milk, cumin, garlic, cilantro | `TT-0568.webp` |
| TT-0576 | Encebollado | Ecuadorian | A fish soup eaten as a morning cure. | tuna, cassava, onion, tomato, cilantro, lime, cumin, chili | `TT-0576.webp` |
| TT-0599 | Llapingachos | Ecuadorian | Cheese-stuffed potato patties with peanut sauce. | potato, queso fresco, onion, butter, egg, peanut | `TT-0599.webp` |
| TT-0631 | Fanesca | Ecuadorian | Easter soup of grains, beans and salt cod. | fava beans, lentils, corn, pumpkin, peanut, milk, cod, egg | `TT-0631.webp` |
| TT-0621 | Hornado | Ecuadorian | Slow-roasted pork with crackling. | pork, garlic, cumin, onion, beer, potato, salt | `TT-0621.webp` |
| TT-0613 | Bolón de Verde | Ecuadorian | Mashed green plantain balls stuffed with cheese or pork. | plantain, queso fresco, pork, butter, salt | `TT-0613.webp` |
| TT-0556 | Griot | Haitian | Marinated pork braised then fried crisp. | pork, orange, lime, garlic, thyme, bell pepper, parsley, chili | `TT-0556.webp` |
| TT-0614 | Diri ak Djon Djon | Haitian | Rice cooked in black mushroom broth. | rice, mushroom, thyme, garlic, onion, shrimp, salt | `TT-0614.webp` |
| TT-0553 | Soup Joumou | Haitian | Pumpkin soup eaten on New Year’s Day for independence. | pumpkin, beef, potato, carrot, cabbage, turnip, leek, thyme | `TT-0553.webp` |
| TT-0600 | Pikliz | Haitian | Fiery pickled slaw served with fried foods. | cabbage, carrot, chili, onion, vinegar, lime, bell pepper, black pepper | `TT-0600.webp` |
| TT-0634 | Legim | Haitian | A thick stewed vegetable dish with meat. | eggplant, cabbage, carrot, beef, spinach, bell pepper, onion, garlic | `TT-0634.webp` |
| TT-0601 | Bannann Peze | Haitian | Twice-fried green plantain discs. | plantain, vegetable oil, salt, lime | `TT-0601.webp` |
| TT-0647 | Akasan | Haitian | A warm, thick, spiced corn drink. | corn, milk, cinnamon, vanilla, sugar, nutmeg, star anise | `TT-0647.webp` |
| TT-0543 | Doubles | Trinidadian | Soft fried flatbreads holding spiced chickpeas. | flour, chickpeas, turmeric, cumin, garlic, tamarind, chili, yeast | `TT-0543.webp` |
| TT-0557 | Curry Chicken Roti | Trinidadian | Curry wrapped in a soft roti. | flour, chicken, potato, turmeric, cumin, coriander, garlic, onion | `TT-0557.webp` |
| TT-0577 | Pelau | Trinidadian | One-pot caramelised chicken and rice. | rice, chicken, beans, coconut milk, carrot, sugar, onion, garlic | `TT-0577.webp` |
| TT-0569 | Callaloo | Trinidadian | A velvety green leaf and okra soup. | okra, spinach, coconut milk, onion, garlic, thyme, chili, pumpkin | `TT-0569.webp` |
| TT-0602 | Bake and Shark | Trinidadian | Fried shark in a fluffy bake with tropical sauces. | flour, fish, lime, cilantro, garlic, tamarind, vegetable oil, chili | `TT-0602.webp` |
| TT-0622 | Pholourie | Trinidadian | Fried split-pea balls with tamarind chutney. | flour, lentils, turmeric, cumin, garlic, vegetable oil, tamarind, mango | `TT-0622.webp` |
| TT-0623 | Macaroni Pie | Trinidadian | Baked macaroni and cheese cut into squares. | pasta, cheddar, milk, egg, mustard, onion, black pepper, butter | `TT-0623.webp` |
| TT-0635 | Sorrel Drink | Trinidadian | A ruby-red spiced hibiscus drink for Christmas. | hibiscus, ginger, cinnamon, cloves, sugar, orange | `TT-0635.webp` |
| TT-0570 | Cobb Salad | American | Chopped salad laid out in neat rows. | lettuce, chicken, bacon, egg, avocado, tomato, blue cheese, vinegar | `TT-0570.webp` |
| TT-0701 | Salteñas | Bolivian | Juicy baked pastries with a sweet-spicy stew inside. | flour, beef, chicken, potato, peas, egg, onion, olive | `TT-0701.webp` |
| TT-0743 | Silpancho | Bolivian | Breaded pounded steak over rice and potatoes with an egg. | beef, potato, rice, egg, tomato, onion, parsley, flour | `TT-0743.webp` |
| TT-0768 | Pique Macho | Bolivian | A heap of beef, sausage and fries with peppers. | beef, sausage, potato, tomato, onion, bell pepper, egg, chili | `TT-0768.webp` |
| TT-0761 | Sopa de Maní | Bolivian | Peanut soup with fries on top. | peanut, beef, potato, carrot, peas, onion, rice, parsley | `TT-0761.webp` |
| TT-0809 | Api Morado | Bolivian | A warm purple corn drink. | corn, cinnamon, cloves, sugar, lemon | `TT-0809.webp` |
| TT-0803 | Chairo | Bolivian | Highland soup of meat, chuño-style potatoes and corn. | beef, potato, carrot, corn, onion, peas, mint | `TT-0803.webp` |
| TT-0787 | Cuñapé | Bolivian | Chewy cheese bread rolls. | tapioca, queso fresco, egg, milk, butter | `TT-0787.webp` |
| TT-0734 | Pepián | Guatemalan | A roasted spice and seed stew, the national dish. | chicken, tomato, chili, sesame, pumpkin, cinnamon, cloves, onion | `TT-0734.webp` |
| TT-0788 | Kak’ik | Guatemalan | Mayan turkey soup in a deep red broth. | turkey, tomato, chili, cilantro, garlic, onion, salt | `TT-0788.webp` |
| TT-0804 | Jocón | Guatemalan | Chicken in a green herb and sesame sauce. | chicken, tomato, cilantro, chili, sesame, onion, garlic, corn | `TT-0804.webp` |
| TT-0762 | Tamales Colorados | Guatemalan | Red masa tamales with pork and olives. | corn, pork, tomato, chili, sesame, olive, raisins, butter | `TT-0762.webp` |
| TT-0777 | Rellenitos | Guatemalan | Fried plantain dumplings stuffed with sweet beans. | plantain, beans, sugar, cinnamon, vegetable oil, chocolate | `TT-0777.webp` |
| TT-0810 | Fiambre | Guatemalan | An elaborate cold salad for All Saints’ Day. | ham, sausage, beet, carrot, cabbage, egg, olive, onion | `TT-0810.webp` |
| TT-0816 | Plátanos en Mole | Guatemalan | Fried plantains in a chocolate and chili sauce. | plantain, chocolate, sesame, chili, cinnamon, almond, raisins, tomato | `TT-0816.webp` |
| TT-0652 | Pupusas | Salvadoran | Thick griddled masa cakes with a savory filling. | corn, beans, queso fresco, pork, cabbage, vinegar, chili, oregano | `TT-0652.webp` |
| TT-0789 | Curtido | Salvadoran | Lightly fermented slaw served with pupusas. | cabbage, carrot, onion, vinegar, oregano, chili, salt | `TT-0789.webp` |
| TT-0769 | Yuca Frita con Chicharrón | Salvadoran | Fried cassava with crisp pork and slaw. | cassava, pork, cabbage, tomato, lime, salt, vegetable oil | `TT-0769.webp` |
| TT-0805 | Pastelitos Salvadoreños | Salvadoran | Fried turnovers with a savory filling. | flour, chicken, potato, carrot, vegetable oil, onion, cabbage, vinegar | `TT-0805.webp` |
| TT-0790 | Panes con Pavo | Salvadoran | A warm turkey sandwich in a sauce of roasted spices. | turkey, bread, tomato, onion, cilantro, mustard, mayonnaise, garlic | `TT-0790.webp` |
| TT-0820 | Horchata de Morro | Salvadoran | A nutty, cinnamon seed drink. | sesame, cinnamon, sugar, milk, vanilla, almond | `TT-0820.webp` |
| TT-0825 | Nuégados | Salvadoran | Fried yuca rings in spiced syrup. | cassava, sugar, cinnamon, honey, vegetable oil | `TT-0825.webp` |
| TT-0720 | La Bandera | Dominican | The “flag”: rice, beans and stewed meat. | rice, beans, beef, plantain, onion, garlic, tomato, bell pepper | `TT-0720.webp` |
| TT-0735 | Mangú | Dominican | Mashed boiled plantain with pickled onions. | plantain, butter, onion, vinegar, egg, sausage | `TT-0735.webp` |
| TT-0730 | Sancocho Dominicano | Dominican | A seven-meat root-vegetable stew for celebrations. | beef, chicken, pork, cassava, plantain, corn, yam, pumpkin | `TT-0730.webp` |
| TT-0791 | Chicharrones de Pollo | Dominican | Crunchy fried chicken pieces with garlic and lime. | chicken, flour, lime, garlic, oregano, vegetable oil, salt | `TT-0791.webp` |
| TT-0778 | Habichuelas Guisadas | Dominican | Stewed red beans served over white rice. | beans, pumpkin, tomato, onion, garlic, cilantro, bell pepper, oregano | `TT-0778.webp` |
| TT-0817 | Habichuelas con Dulce | Dominican | A sweet bean cream for Lent. | beans, milk, coconut milk, sugar, cinnamon, cloves, sweet potato, raisins | `TT-0817.webp` |
| TT-0792 | Pastelón | Dominican | Sweet plantain “lasagna” layered with spiced beef. | plantain, beef, mozzarella, tomato, onion, olive, raisins, bell pepper | `TT-0792.webp` |
| TT-0702 | Chivito | Uruguayan | Uruguay’s towering steak sandwich. | beef, bread, ham, bacon, egg, mozzarella, tomato, lettuce | `TT-0702.webp` |
| TT-0721 | Asado Uruguayo | Uruguayan | Beef and sausage grilled over embers with chimichurri. | beef, sausage, salt, parsley, garlic, vinegar, olive oil, oregano | `TT-0721.webp` |
| TT-0770 | Milanesa Napolitana | Uruguayan | Breaded steak topped with sauce, ham and cheese. | beef, bread, egg, tomato, ham, mozzarella, olive oil, oregano | `TT-0770.webp` |
| TT-0793 | Olímpico | Uruguayan | A triple-decker club sandwich. | bread, chicken, ham, egg, tomato, lettuce, mayonnaise, olive | `TT-0793.webp` |
| TT-0811 | Torta Frita | Uruguayan | Rainy-day fried bread rounds. | flour, vegetable oil, salt, sugar, milk | `TT-0811.webp` |
| TT-0806 | Pasta Frola | Uruguayan | A lattice-topped jam tart. | flour, butter, sugar, egg, apple, vanilla | `TT-0806.webp` |
| TT-0794 | Chajá | Uruguayan | Sponge cake layered with cream, dulce de leche and meringue. | egg, flour, cream, dulce de leche, strawberry, sugar | `TT-0794.webp` |
| TT-0650 | Birria Tacos | Mexican | Jalisco’s chili-braised beef in crisp cheesy tortillas, served with consommé for dipping. | beef, chili, onion, garlic, cumin, oregano, cinnamon, cloves | `TT-0650.webp` |
| TT-0656 | Tamales | Mexican | Steamed masa parcels with savory fillings. | corn, pork, chili, vegetable oil, garlic, onion, salt, cumin | `TT-0656.webp` |
| TT-0678 | Cochinita Pibil | Mexican | Yucatán pork marinated in citrus and slow-roasted. | pork, orange, lime, garlic, cumin, oregano, cloves, vinegar | `TT-0678.webp` |
| TT-0663 | Carnitas | Mexican | Pork simmered in its own fat until crisp at the edges. | pork, orange, garlic, oregano, cumin, onion, salt, lime | `TT-0663.webp` |
| TT-0672 | Enchiladas Rojas | Mexican | Tortillas dipped in red chili sauce and baked. | corn, chili, chicken, onion, queso fresco, sour cream, garlic, cumin | `TT-0672.webp` |
| TT-0703 | Tacos de Pescado | Mexican | Baja-style battered fish tacos. | fish, flour, beer, cabbage, lime, cilantro, sour cream, corn | `TT-0703.webp` |
| TT-0664 | Quesadilla | Mexican | Folded griddled tortillas with melted cheese. | corn, mozzarella, chili, onion, tomato, cilantro | `TT-0664.webp` |
| TT-0704 | Horchata | Mexican | A chilled, creamy rice and cinnamon drink. | rice, milk, cinnamon, sugar, vanilla | `TT-0704.webp` |
| TT-0653 | Philly Cheesesteak | American | Thin-sliced steak and melted cheese on a roll. | beef, bread, onion, cheddar, bell pepper, butter, salt | `TT-0653.webp` |
| TT-0712 | Biscuits and Gravy | American | Fluffy biscuits under peppery sausage gravy. | flour, butter, milk, sausage, black pepper, buttermilk, salt | `TT-0712.webp` |
| TT-0654 | Brownies | American | Fudgy chocolate squares. | chocolate, butter, sugar, egg, flour, cocoa, vanilla, walnut | `TT-0654.webp` |
| TT-0713 | Chicken and Waffles | American | Fried chicken with waffles and syrup. | chicken, flour, egg, milk, butter, maple syrup, buttermilk, paprika | `TT-0713.webp` |
| TT-0714 | Meatloaf | American | Baked ground beef with a glossy glaze. | beef, egg, bread, onion, tomato, milk, black pepper, mustard | `TT-0714.webp` |
| TT-0722 | Corn Dog | American | A battered sausage on a stick. | sausage, flour, corn, egg, milk, sugar, vegetable oil, mustard | `TT-0722.webp` |
| TT-0695 | Anticuchos | Peruvian | Grilled skewers marinated in chili and vinegar. | beef, chili, vinegar, garlic, cumin, oregano, potato, corn | `TT-0695.webp` |
| TT-0731 | Causa | Peruvian | Cold layered potato terrine with a creamy filling. | potato, chili, lime, chicken, avocado, mayonnaise, egg, olive | `TT-0731.webp` |
| TT-0101 | Tempura | Japanese | Feather-light battered fritters. | shrimp, flour, egg, vegetable oil, sweet potato, soy sauce, radish, mirin | `TT-0101.webp` |
| TT-0055 | Miso Soup | Japanese | Everyday soup of dashi and miso. | miso, tofu, seaweed, scallion, fish | `TT-0055.webp` |
| TT-0079 | Teriyaki Chicken | Japanese | Glossy, sweet-savoury glaze. | chicken, soy sauce, mirin, sugar, ginger, garlic, rice | `TT-0079.webp` |
| TT-0420 | Okonomiyaki | Japanese | Savory pancake, "grilled as you like it". | flour, cabbage, egg, pork, scallion, mayonnaise, seaweed | `TT-0420.webp` |
| TT-0102 | Tonkatsu | Japanese | Panko-crusted pork cutlet. | pork, flour, egg, bread, cabbage, rice, vegetable oil | `TT-0102.webp` |
| TT-0080 | Yakitori | Japanese | Charcoal-grilled chicken skewers. | chicken, scallion, soy sauce, mirin, sugar | `TT-0080.webp` |
| TT-0103 | Sashimi | Japanese | Fresh-sliced raw fish with wasabi and soy. | tuna, salmon, soy sauce, wasabi, radish, ginger | `TT-0103.webp` |
| TT-0134 | Takoyaki | Japanese | Osaka’s crisp octopus balls. | octopus, flour, egg, scallion, ginger, mayonnaise, seaweed, vegetable oil | `TT-0134.webp` |
| TT-0168 | Zaru Soba | Japanese | Chilled buckwheat noodles with dipping sauce. | buckwheat, soy sauce, mirin, scallion, seaweed, wasabi | `TT-0168.webp` |
| TT-0114 | Mapo Tofu | Chinese | Silken tofu in fiery bean sauce. | tofu, pork, chili, sichuan pepper, chili bean paste, garlic, ginger, scallion | `TT-0114.webp` |
| TT-0056 | Peking Duck | Chinese | Lacquered roast duck in thin pancakes. | duck, hoisin, scallion, cucumber, flour, five-spice, sugar | `TT-0056.webp` |
| TT-0278 | Hot and Sour Soup | Chinese | Peppery, tangy and warming. | tofu, mushroom, egg, vinegar, black pepper, soy sauce, bamboo shoot | `TT-0278.webp` |
| TT-0081 | Char Siu | Chinese | Cantonese barbecued pork. | pork, hoisin, honey, soy sauce, five-spice, garlic, sugar | `TT-0081.webp` |
| TT-0364 | Salt and Pepper Squid | Chinese | Crisp wok-tossed squid with chili and garlic. | squid, flour, chili, scallion, garlic, salt, black pepper, vegetable oil | `TT-0364.webp` |
| TT-0382 | Garlic Bok Choy | Chinese | Quick stir-fry of crisp greens. | bok choy, garlic, ginger, sesame oil, soy sauce, vegetable oil | `TT-0382.webp` |
| TT-0135 | Wonton Soup | Chinese | Delicate dumplings in clear broth. | flour, pork, shrimp, bok choy, ginger, scallion, soy sauce, sesame oil | `TT-0135.webp` |
| TT-0067 | Bulgogi | Korean | "Fire meat" — marinated grilled beef. | beef, soy sauce, pear, garlic, sesame oil, sugar, scallion, ginger | `TT-0067.webp` |
| TT-0201 | Tteokbokki | Korean | Chewy rice cakes in red chili sauce. | rice, gochujang, fish, scallion, sugar, egg, cabbage | `TT-0201.webp` |
| TT-0149 | Japchae | Korean | Glass noodles stir-fried with vegetables. | noodles, beef, spinach, carrot, mushroom, onion, soy sauce, sesame oil | `TT-0149.webp` |
| TT-0104 | Samgyeopsal | Korean | Grilled pork belly wrapped in lettuce. | pork, garlic, lettuce, gochujang, sesame oil, cabbage, chili | `TT-0104.webp` |
| TT-0494 | Ojingeo Bokkeum | Korean | Fiery stir-fried squid. | squid, gochujang, onion, garlic, scallion, sesame oil, cabbage | `TT-0494.webp` |
| TT-0068 | Tom Yum | Thai | Hot and sour shrimp soup. | shrimp, lemongrass, galangal, lime, chili, fish sauce, mushroom, cilantro | `TT-0068.webp` |
| TT-0226 | Som Tam | Thai | Pounded green papaya salad. | papaya, chili, lime, fish sauce, peanut, tomato, garlic, green beans | `TT-0226.webp` |
| TT-0105 | Mango Sticky Rice | Thai | Sweet coconut rice with ripe mango. | rice, mango, coconut milk, sugar, sesame, salt | `TT-0105.webp` |
| TT-0150 | Gỏi Cuốn | Vietnamese | Fresh summer rolls in rice paper. | rice, shrimp, pork, lettuce, mint, noodles, peanut, hoisin | `TT-0150.webp` |
| TT-0169 | Bún Chả | Vietnamese | Grilled pork with noodles and herbs, Hanoi style. | pork, noodles, fish sauce, sugar, garlic, lettuce, mint, lime | `TT-0169.webp` |
| TT-0170 | Bánh Xèo | Vietnamese | Sizzling turmeric crêpes wrapped in lettuce and herbs. | rice, coconut milk, turmeric, shrimp, pork, bean sprouts, mint, lettuce | `TT-0170.webp` |
| TT-0151 | Cà Phê Sữa Đá | Vietnamese | Strong drip coffee over sweet condensed milk and ice. | coffee, milk, sugar | `TT-0151.webp` |
| TT-0330 | Cơm Tấm | Vietnamese | Broken rice with grilled pork, egg and pickles. | rice, pork, egg, scallion, fish sauce, cucumber, tomato, sugar | `TT-0330.webp` |
| TT-0411 | Canh Chua | Vietnamese | Sweet-and-sour fish soup of the Mekong Delta. | fish, tamarind, pineapple, tomato, bean sprouts, okra, cilantro, lime | `TT-0411.webp` |
| TT-0082 | Chana Masala | Indian | Spiced chickpea curry. | chickpeas, tomato, onion, garlic, ginger, cumin, coriander, garam masala | `TT-0082.webp` |
| TT-0106 | Palak Paneer | Indian | Fresh cheese in spinach gravy. | spinach, paneer, onion, garlic, ginger, cumin, cream, garam masala | `TT-0106.webp` |
| TT-0057 | Dal Tadka | Indian | Lentils finished with sizzling spices. | lentils, turmeric, cumin, garlic, ginger, onion, tomato, ghee | `TT-0057.webp` |
| TT-0115 | Masala Dosa | Indian | Crisp fermented crêpe from the South. | rice, lentils, potato, mustard seed, turmeric, onion, chili, curry leaves | `TT-0115.webp` |
| TT-0107 | Rogan Josh | Indian | Kashmiri lamb in a deep red gravy. | lamb, yogurt, chili, garlic, ginger, cardamom, cinnamon, onion | `TT-0107.webp` |
| TT-0069 | Gulab Jamun | Indian | Milk dumplings soaked in fragrant syrup. | milk, flour, sugar, cardamom, ghee, saffron, rose water | `TT-0069.webp` |
| TT-0108 | Paneer Tikka | Indian | Tandoori-charred paneer and peppers. | paneer, yogurt, bell pepper, onion, garam masala, chili, lemon, ginger | `TT-0108.webp` |
| TT-0083 | Mango Lassi | Indian | Cooling mango and yogurt drink. | mango, yogurt, milk, sugar, cardamom | `TT-0083.webp` |
| TT-0171 | Rajma | Indian | Punjabi kidney bean curry, eaten with rice. | kidney beans, tomato, onion, garlic, ginger, cumin, garam masala, chili | `TT-0171.webp` |
| TT-0292 | Gado-Gado | Indonesian | Vegetable salad in peanut dressing. | cabbage, bean sprouts, potato, egg, tofu, peanut, chili, lime | `TT-0292.webp` |
| TT-0227 | Soto Ayam | Indonesian | Golden turmeric chicken soup. | chicken, turmeric, lemongrass, ginger, garlic, shallot, noodles, egg | `TT-0227.webp` |
| TT-0172 | Mie Goreng | Indonesian | Sweet, smoky fried noodles. | noodles, egg, shrimp, cabbage, soy sauce, garlic, shallot, chili | `TT-0172.webp` |
| TT-0365 | Sambal Terasi | Indonesian | Fiery chili relish pounded with fermented shrimp paste. | chili, shrimp paste, tomato, lime, sugar, shallot, garlic | `TT-0365.webp` |
| TT-0383 | Martabak Manis | Indonesian | Thick street pancake stuffed with chocolate and peanuts. | flour, egg, sugar, milk, peanut, chocolate, butter, yeast | `TT-0383.webp` |
| TT-0070 | Chicken Adobo | Filipino | Braised in vinegar and soy — the national dish. | chicken, pork, vinegar, soy sauce, garlic, bay leaf, black pepper | `TT-0070.webp` |
| TT-0257 | Sinigang | Filipino | Sour tamarind soup. | pork, tamarind, tomato, radish, onion, green beans, spinach, chili | `TT-0257.webp` |
| TT-0173 | Lumpia | Filipino | Crisp, slender spring rolls. | flour, pork, carrot, cabbage, onion, garlic, soy sauce, vegetable oil | `TT-0173.webp` |
| TT-0228 | Pancit | Filipino | Birthday noodles for long life. | noodles, chicken, cabbage, carrot, soy sauce, garlic, onion, lime | `TT-0228.webp` |
| TT-0202 | Lechon | Filipino | Whole spit-roasted pig. | pork, garlic, lemongrass, salt, black pepper, bay leaf | `TT-0202.webp` |
| TT-0513 | Atchara | Filipino | Pickled green papaya, the Filipino table’s tangy side. | papaya, carrot, vinegar, sugar, ginger, garlic, bell pepper, salt | `TT-0513.webp` |
| TT-0258 | Halo-Halo | Filipino | Shaved ice layered with sweet beans, fruit and milk. | milk, sugar, jackfruit, banana, beans, coconut, tapioca | `TT-0258.webp` |
| TT-0116 | Roti Canai | Malaysian | Flaky griddled flatbread with curry. | flour, ghee, egg, sugar, salt | `TT-0116.webp` |
| TT-0136 | Char Kway Teow | Malaysian | Smoky wok-fried flat noodles. | noodles, shrimp, egg, bean sprouts, soy sauce, chili, garlic, scallion | `TT-0136.webp` |
| TT-0293 | Kaya Toast | Malaysian | Coconut jam toast with soft eggs. | bread, coconut milk, egg, sugar, pandan, butter | `TT-0293.webp` |
| TT-0259 | Chili Crab | Malaysian | Messy, glorious crab in sweet chili-tomato sauce. | crab, tomato, chili, garlic, ginger, egg, soy sauce, sugar | `TT-0259.webp` |
| TT-0229 | Hoppers | Sri Lankan | Bowl-shaped crêpes with crisp lacy edges. | rice, coconut milk, yeast, sugar, egg | `TT-0229.webp` |
| TT-0174 | Kottu Roti | Sri Lankan | Chopped flatbread stir-fry, clattered on a griddle. | flour, egg, carrot, cabbage, onion, chili, curry leaves, chicken | `TT-0174.webp` |
| TT-0446 | Fish Ambul Thiyal | Sri Lankan | Sour, peppery fish curry. | fish, tamarind, black pepper, curry leaves, garlic, cinnamon, cloves | `TT-0446.webp` |
| TT-0331 | Parippu | Sri Lankan | Creamy coconut dhal. | lentils, coconut milk, turmeric, curry leaves, mustard seed, onion, chili | `TT-0331.webp` |
| TT-0384 | Pol Sambol | Sri Lankan | Fresh coconut relish. | coconut, chili, lime, onion, fish | `TT-0384.webp` |
| TT-0412 | Pumpkin Curry | Sri Lankan | Golden pumpkin simmered in coconut. | pumpkin, coconut milk, turmeric, curry leaves, mustard seed, garlic, cinnamon, chili | `TT-0412.webp` |
| TT-0495 | Polos Curry | Sri Lankan | Young jackfruit curry. | jackfruit, coconut milk, chili, curry leaves, cinnamon, cloves, garlic, mustard seed | `TT-0495.webp` |
| TT-0051 | Poke | Hawaiian | Cubed raw fish, dressed simply. | fish, soy sauce, sesame oil, seaweed, scallion, sesame, chili | `TT-0051.webp` |
| TT-0260 | Loco Moco | Hawaiian | Rice, burger patty, fried egg and gravy. | rice, beef, egg, onion, mushroom, stock, soy sauce | `TT-0260.webp` |
| TT-0332 | Kalua Pig | Hawaiian | Whole pig steamed in an underground imu. | pork, salt | `TT-0332.webp` |
| TT-0230 | Spam Musubi | Hawaiian | Glazed luncheon meat on rice, wrapped in nori. | rice, ham, seaweed, soy sauce, sugar | `TT-0230.webp` |
| TT-0294 | Huli Huli Chicken | Hawaiian | Turned-and-turned teriyaki-style grilled chicken. | chicken, pineapple, soy sauce, ginger, garlic, sugar, tomato | `TT-0294.webp` |
| TT-0366 | Banana Macadamia Bread | Hawaiian | Island banana bread with buttery nuts. | banana, flour, sugar, butter, egg, macadamia | `TT-0366.webp` |
| TT-0084 | Plov | Uzbek | Rice cooked in a vast kazan for weddings. | rice, lamb, carrot, onion, cumin, garlic, chickpeas, vegetable oil | `TT-0084.webp` |
| TT-0231 | Samsa | Uzbek | Tandoor-baked meat pastries. | flour, lamb, onion, cumin, butter, sesame | `TT-0231.webp` |
| TT-0261 | Lagman | Uzbek | Hand-pulled noodles with a rich stew. | noodles, beef, bell pepper, tomato, onion, garlic, radish, cumin | `TT-0261.webp` |
| TT-0203 | Shashlik | Uzbek | Silk Road skewers over vine-wood coals. | lamb, onion, vinegar, cumin, coriander | `TT-0203.webp` |
| TT-0367 | Manti | Uzbek | Steamed lamb dumplings topped with yogurt. | flour, lamb, onion, pumpkin, cumin, black pepper, butter, yogurt | `TT-0367.webp` |
| TT-0447 | Shurpa | Uzbek | Fragrant lamb and vegetable soup. | lamb, potato, carrot, tomato, onion, cumin, coriander, cilantro | `TT-0447.webp` |
| TT-0333 | Non | Uzbek | Round tandoor bread stamped with a pattern. | flour, yeast, sesame, salt, vegetable oil | `TT-0333.webp` |
| TT-0527 | Achichuk | Uzbek | Razor-thin tomato and onion salad served with plov. | tomato, onion, chili, cilantro, salt | `TT-0527.webp` |
| TT-0204 | Mohinga | Burmese | Fish and rice-noodle soup, the national breakfast. | noodles, fish, lemongrass, chickpeas, onion, garlic, ginger, fish sauce | `TT-0204.webp` |
| TT-0295 | Lahpet Thoke | Burmese | Fermented tea leaf salad with crunchy beans. | tea, cabbage, tomato, peanut, sesame, garlic, chili, lime | `TT-0295.webp` |
| TT-0368 | Shan Noodles | Burmese | Sticky rice noodles in a tomato-chicken sauce. | noodles, chicken, tomato, garlic, peanut, soy sauce, chili, scallion | `TT-0368.webp` |
| TT-0385 | Ohn No Khao Swè | Burmese | Coconut chicken noodle soup. | noodles, chicken, coconut milk, chickpeas, onion, garlic, turmeric, egg | `TT-0385.webp` |
| TT-0496 | Nan Gyi Thoke | Burmese | Thick rice noodles tossed with chicken curry and chickpea powder. | noodles, chicken, chili, vegetable oil, peanut, chickpeas, egg, cilantro | `TT-0496.webp` |
| TT-0528 | Samusa Thoke | Burmese | Crushed samosas dressed as a salad. | flour, potato, onion, cabbage, mint, cilantro, lime, chili | `TT-0528.webp` |
| TT-0537 | Shwe Yin Aye | Burmese | Cooling coconut dessert with tapioca pearls and jackfruit. | tapioca, coconut milk, sugar, bread, jackfruit | `TT-0537.webp` |
| TT-0448 | Wetthar Hin | Burmese | Slow-cooked Burmese pork curry. | pork, onion, garlic, ginger, turmeric, chili, vegetable oil, fish sauce | `TT-0448.webp` |
| TT-0085 | Momo | Nepali | Pleated dumplings with a fiery tomato achar. | flour, beef, onion, garlic, ginger, cilantro, cumin, tomato | `TT-0085.webp` |
| TT-0137 | Dal Bhat | Nepali | "Dal bhat power, 24 hour." | lentils, rice, turmeric, cumin, garlic, ginger, ghee, spinach | `TT-0137.webp` |
| TT-0413 | Sel Roti | Nepali | Ring-shaped festival bread. | rice, sugar, ghee, banana, cardamom | `TT-0413.webp` |
| TT-0296 | Thukpa | Nepali | Himalayan noodle soup. | noodles, chicken, carrot, cabbage, garlic, ginger, tomato, chili | `TT-0296.webp` |
| TT-0514 | Choila | Nepali | Newari spiced grilled meat salad. | goat, ginger, garlic, chili, mustard seed, cumin, cilantro, scallion | `TT-0514.webp` |
| TT-0497 | Aloo Tama | Nepali | Sour bamboo shoot and potato curry. | bamboo shoot, potato, beans, turmeric, cumin, garlic, ginger, chili | `TT-0497.webp` |
| TT-0529 | Yomari | Nepali | Steamed rice-flour dumplings filled with sesame and molasses. | rice, sugar, sesame, ghee, milk | `TT-0529.webp` |
| TT-0515 | Chatamari | Nepali | Newari rice-flour crêpe, the “Nepali pizza”. | rice, goat, egg, onion, tomato, chili, cilantro | `TT-0515.webp` |
| TT-0052 | Hainanese Chicken Rice | Singaporean | Poached chicken with fragrant rice and chili sauce. | chicken, rice, ginger, garlic, cucumber, scallion, sesame oil, soy sauce | `TT-0052.webp` |
| TT-0262 | Bak Kut Teh | Singaporean | Peppery pork-rib soup, eaten at breakfast. | pork, garlic, black pepper, star anise, cinnamon, cloves, soy sauce, stock | `TT-0262.webp` |
| TT-0369 | Chai Tow Kway | Singaporean | Pan-fried radish cake, known as “carrot cake”. | radish, flour, egg, garlic, scallion, soy sauce, chili, vegetable oil | `TT-0369.webp` |
| TT-0334 | Kopi | Singaporean | Kopitiam coffee, thick and sweet. | coffee, milk, sugar | `TT-0334.webp` |
| TT-0449 | Ice Kachang | Singaporean | Shaved-ice mountain with beans, corn and syrup. | corn, beans, coconut milk, sugar, jackfruit | `TT-0449.webp` |
| TT-0335 | Pandan Chiffon Cake | Singaporean | Airy green cake perfumed with pandan. | flour, egg, sugar, coconut milk, pandan, vegetable oil | `TT-0335.webp` |
| TT-0263 | Fish Amok | Cambodian | Steamed fish curry mousse in banana leaf. | fish, coconut milk, lemongrass, galangal, turmeric, chili, fish sauce, egg | `TT-0263.webp` |
| TT-0336 | Lok Lak | Cambodian | Stir-fried beef with lime-pepper dipping sauce. | beef, lime, black pepper, tomato, lettuce, onion, soy sauce, egg | `TT-0336.webp` |
| TT-0450 | Nom Banh Chok | Cambodian | Khmer noodles in green fish curry. | noodles, fish, lemongrass, turmeric, cucumber, mint, bean sprouts | `TT-0450.webp` |
| TT-0498 | Kuy Teav | Cambodian | Phnom Penh breakfast noodle soup. | noodles, pork, shrimp, bean sprouts, garlic, scallion, stock, lime | `TT-0498.webp` |
| TT-0414 | Bai Sach Chrouk | Cambodian | Grilled pork and rice for breakfast. | rice, pork, garlic, coconut milk, pickle, egg | `TT-0414.webp` |
| TT-0530 | Samlor Machu Trey | Cambodian | Sweet-and-sour Cambodian fish soup. | fish, tamarind, pineapple, tomato, lemongrass, bean sprouts, chili, fish sauce | `TT-0530.webp` |
| TT-0086 | Beef Noodle Soup | Taiwanese | Taiwan’s national bowl of braised beef. | beef, noodles, star anise, soy sauce, ginger, garlic, scallion, bok choy | `TT-0086.webp` |
| TT-0138 | Gua Bao | Taiwanese | Steamed bun folded around braised pork belly. | flour, pork, peanut, cilantro, pickle, sugar, soy sauce, star anise | `TT-0138.webp` |
| TT-0152 | Scallion Pancake | Taiwanese | Flaky, chewy griddled flatbread. | flour, scallion, sesame oil, vegetable oil, salt | `TT-0152.webp` |
| TT-0053 | Bubble Tea | Taiwanese | Milk tea with chewy tapioca pearls. | tea, milk, tapioca, sugar | `TT-0053.webp` |
| TT-0205 | Lu Rou Fan | Taiwanese | Braised pork rice, Taiwan’s comfort food. | pork, rice, soy sauce, shallot, five-spice, egg, sugar, garlic | `TT-0205.webp` |
| TT-0206 | Popcorn Chicken | Taiwanese | Crisp bites of fried chicken with fried basil. | chicken, flour, egg, five-spice, garlic, basil, vegetable oil, salt | `TT-0206.webp` |
| TT-0337 | Nihari | Pakistani | Slow-cooked beef stew for breakfast. | beef, ginger, garlic, onion, ghee, garam masala, flour, chili | `TT-0337.webp` |
| TT-0207 | Chicken Karahi | Pakistani | Chicken cooked fast in a wok-like pan. | chicken, tomato, ginger, garlic, chili, cumin, coriander, cilantro | `TT-0207.webp` |
| TT-0232 | Seekh Kebab | Pakistani | Spiced minced lamb grilled on skewers. | lamb, onion, ginger, garlic, chili, cumin, cilantro, garam masala | `TT-0232.webp` |
| TT-0415 | Haleem | Pakistani | Hours-long porridge of grains, lentils and meat. | lentils, beef, barley, ghee, ginger, garam masala, onion, lemon | `TT-0415.webp` |
| TT-0264 | Kheer | Pakistani | Creamy rice pudding scented with cardamom. | rice, milk, sugar, cardamom, almond, pistachio, saffron, rose water | `TT-0264.webp` |
| TT-0451 | Chapli Kebab | Pakistani | Flat spiced patties fried to a crisp. | beef, onion, tomato, coriander, cumin, chili, egg, flour | `TT-0451.webp` |
| TT-0139 | Meat Pie | Australian | The footy-night hand pie. | beef, flour, butter, onion, stock, tomato | `TT-0139.webp` |
| TT-0175 | Lamington | Australian | Sponge squares dipped in chocolate and coconut. | flour, egg, sugar, butter, chocolate, coconut, milk | `TT-0175.webp` |
| TT-0117 | Pavlova | Australian | Crisp meringue shell with cream and fruit. | egg, sugar, cream, strawberry, vinegar, vanilla | `TT-0117.webp` |
| TT-0452 | Barramundi | Australian | Pan-seared barramundi with lemon butter. | fish, lemon, butter, olive oil, parsley | `TT-0452.webp` |
| TT-0297 | Anzac Biscuits | Australian | Chewy oat and coconut biscuits. | oats, flour, coconut, sugar, butter, honey | `TT-0297.webp` |
| TT-0386 | Macadamia Cookies | Australian | Buttery cookies with native Australian nuts. | macadamia, flour, butter, sugar, egg, chocolate, vanilla | `TT-0386.webp` |
| TT-0550 | Kacchi Biryani | Bangladeshi | Raw marinated meat layered with rice and cooked sealed. | rice, goat, yogurt, onion, ginger, garlic, ghee, cardamom | `TT-0550.webp` |
| TT-0571 | Bhuna Khichuri | Bangladeshi | Rice and lentils cooked with spices, a rainy-day comfort. | rice, lentils, ghee, onion, ginger, turmeric, cumin, bay leaf | `TT-0571.webp` |
| TT-0558 | Shorshe Ilish | Bangladeshi | Hilsa fish in a sharp mustard sauce. | fish, mustard seed, chili, turmeric, vegetable oil, salt | `TT-0558.webp` |
| TT-0563 | Beef Bhuna | Bangladeshi | A dry, deeply browned beef curry. | beef, onion, garlic, ginger, cumin, coriander, turmeric, chili | `TT-0563.webp` |
| TT-0578 | Fuchka | Bangladeshi | Crisp shells stuffed with spiced potato and tamarind water. | potato, chickpeas, tamarind, onion, cilantro, chili, cumin, flour | `TT-0578.webp` |
| TT-0586 | Mishti Doi | Bangladeshi | Caramelised sweet set yogurt. | milk, yogurt, sugar, cardamom | `TT-0586.webp` |
| TT-0579 | Chingri Malai Curry | Bangladeshi | Prawns in a gentle spiced coconut gravy. | shrimp, coconut milk, onion, ginger, turmeric, cardamom, cinnamon, cloves | `TT-0579.webp` |
| TT-0552 | Buuz | Mongolian | Steamed dumplings eaten at Tsagaan Sar. | flour, lamb, beef, onion, garlic, salt, black pepper | `TT-0552.webp` |
| TT-0572 | Khuushuur | Mongolian | Large fried meat turnovers. | flour, beef, lamb, onion, garlic, vegetable oil, salt | `TT-0572.webp` |
| TT-0593 | Tsuivan | Mongolian | Hand-cut noodles stir-fried with meat and vegetables. | noodles, lamb, carrot, onion, cabbage, garlic, vegetable oil, salt | `TT-0593.webp` |
| TT-0603 | Suutei Tsai | Mongolian | Salted milk tea, drunk all day. | tea, milk, salt, butter | `TT-0603.webp` |
| TT-0643 | Khorkhog | Mongolian | Lamb cooked with hot stones in a sealed pot. | lamb, potato, carrot, onion, cabbage, salt | `TT-0643.webp` |
| TT-0649 | Aaruul | Mongolian | Sun-dried milk curds, hard, sour and long lasting. | cheese curds, sugar, yogurt | `TT-0649.webp` |
| TT-0648 | Boortsog | Mongolian | Fried dough biscuits served with milk tea. | flour, butter, sugar, milk, vegetable oil, yeast | `TT-0648.webp` |
| TT-0548 | Larb | Laotian | Minced meat salad with toasted rice and herbs. | chicken, lime, fish sauce, mint, cilantro, scallion, shallot, chili | `TT-0548.webp` |
| TT-0564 | Tam Mak Hoong | Laotian | Pounded green papaya salad. | papaya, tomato, green beans, chili, lime, fish sauce, garlic, peanut | `TT-0564.webp` |
| TT-0587 | Sai Oua | Laotian | Herby grilled sausage from Luang Prabang. | pork, lemongrass, galangal, chili, shallot, garlic, cilantro, fish sauce | `TT-0587.webp` |
| TT-0594 | Khao Poon | Laotian | Spicy coconut noodle soup. | noodles, chicken, coconut milk, lemongrass, galangal, chili, fish sauce, bean sprouts | `TT-0594.webp` |
| TT-0636 | Mok Pa | Laotian | Fish steamed in a banana-leaf parcel. | fish, dill, lemongrass, galangal, chili, shallot, fish sauce, scallion | `TT-0636.webp` |
| TT-0615 | Khao Jee Baguette | Laotian | A legacy of French rule: baguettes with pâté and pickles. | bread, pork, carrot, cilantro, mayonnaise, chili, pickle | `TT-0615.webp` |
| TT-0624 | Nam Khao | Laotian | Crispy rice salad with sour pork. | rice, pork, coconut, lime, mint, cilantro, scallion, chili | `TT-0624.webp` |
| TT-0549 | Kabuli Pulao | Afghan | Afghanistan’s national dish with sweet carrots and raisins. | rice, lamb, carrot, raisins, almond, pistachio, onion, cardamom | `TT-0549.webp` |
| TT-0573 | Mantu | Afghan | Steamed dumplings in tomato and yogurt sauce. | flour, beef, onion, yogurt, tomato, lentils, mint, garlic | `TT-0573.webp` |
| TT-0625 | Ashak | Afghan | Leek-filled dumplings under meat sauce and yogurt. | flour, leek, scallion, yogurt, garlic, mint, beef, tomato | `TT-0625.webp` |
| TT-0588 | Bolani | Afghan | Thin stuffed flatbreads fried until crisp. | flour, potato, leek, cilantro, chili, vegetable oil | `TT-0588.webp` |
| TT-0626 | Qorma-e-Sabzi | Afghan | A green herb and meat stew. | spinach, lamb, onion, cilantro, dill, beans, lemon, vegetable oil | `TT-0626.webp` |
| TT-0604 | Naan-e-Afghani | Afghan | Long oval flatbread baked on tandoor walls. | flour, yeast, salt, sesame, yogurt | `TT-0604.webp` |
| TT-0637 | Firni | Afghan | Cardamom milk pudding set in small bowls. | milk, sugar, cardamom, rose water, pistachio, rice | `TT-0637.webp` |
| TT-0605 | Chawanmushi | Japanese | Silky savoury steamed egg custard. | egg, stock, shrimp, mushroom, soy sauce, mirin, scallion | `TT-0605.webp` |
| TT-0544 | Chole Bhature | Indian | Spicy chickpeas with puffy fried bread. | chickpeas, flour, onion, tomato, ginger, garlic, cumin, coriander | `TT-0544.webp` |
| TT-0539 | Tom Yum Goong | Thai | Hot and sour shrimp soup. | shrimp, lemongrass, galangal, lime, fish sauce, chili, mushroom, cilantro | `TT-0539.webp` |
| TT-0541 | Kimchi Jjigae | Korean | Bubbling stew of aged kimchi and pork. | cabbage, pork, tofu, chili, garlic, scallion, sesame oil, stock | `TT-0541.webp` |
| TT-0574 | Ube Halaya | Filipino | Purple yam jam, rich and sweet. | yam, coconut milk, milk, sugar, butter, vanilla | `TT-0574.webp` |
| TT-0715 | Beshbarmak | Kazakh | “Five fingers”: boiled meat over wide noodles in broth. | lamb, beef, noodles, onion, black pepper, salt, stock, dill | `TT-0715.webp` |
| TT-0744 | Baursak | Kazakh | Puffy fried dough balls served at every feast. | flour, milk, yeast, sugar, vegetable oil, salt | `TT-0744.webp` |
| TT-0812 | Kuyrdak | Kazakh | Fried liver and offal with onions and potatoes. | liver, lamb, onion, potato, black pepper, salt, vegetable oil | `TT-0812.webp` |
| TT-0750 | Kazakh Manti | Kazakh | Large steamed dumplings filled with lamb and pumpkin. | flour, lamb, onion, pumpkin, black pepper, butter | `TT-0750.webp` |
| TT-0751 | Kazakh Palau | Kazakh | Lamb and carrot pilaf. | rice, lamb, carrot, onion, garlic, raisins, vegetable oil, cumin | `TT-0751.webp` |
| TT-0795 | Sorpa | Kazakh | A clear lamb broth with vegetables. | lamb, onion, potato, carrot, dill, salt | `TT-0795.webp` |
| TT-0779 | Naryn | Kazakh | Hand-cut noodles tossed with boiled meat and onion. | noodles, beef, onion, black pepper, stock | `TT-0779.webp` |
| TT-0665 | Udon | Japanese | Thick, chewy wheat noodles in hot broth. | noodles, flour, stock, soy sauce, mirin, scallion, seaweed | `TT-0665.webp` |
| TT-0673 | Onigiri | Japanese | Hand-formed rice balls wrapped in nori. | rice, seaweed, salmon, salt, plum | `TT-0673.webp` |
| TT-0689 | Mochi | Japanese | Soft, stretchy rice cakes. | rice, sugar, sesame, honey | `TT-0689.webp` |
| TT-0679 | Katsu Curry | Japanese | Crumbed cutlet under mild Japanese curry. | pork, rice, bread, egg, flour, carrot, potato, onion | `TT-0679.webp` |
| TT-0705 | Gyudon | Japanese | Thinly sliced simmered beef over rice. | beef, rice, onion, soy sauce, mirin, sugar, ginger, egg | `TT-0705.webp` |
| TT-0696 | Soba | Japanese | Cool buckwheat noodles with dipping sauce. | noodles, buckwheat, soy sauce, mirin, scallion, seaweed, wasabi | `TT-0696.webp` |
| TT-0752 | Dorayaki | Japanese | Pancake sandwiches filled with sweet red bean paste. | flour, egg, sugar, honey, beans | `TT-0752.webp` |
| TT-0666 | Dan Dan Noodles | Chinese | Sichuan noodles in a numbing, nutty sauce. | noodles, pork, chili, sichuan pepper, sesame, soy sauce, scallion, garlic | `TT-0666.webp` |
| TT-0657 | Xiaolongbao | Chinese | Soup dumplings from Shanghai. | flour, pork, ginger, scallion, soy sauce, stock, sesame oil, vinegar | `TT-0657.webp` |
| TT-0690 | Congee | Chinese | Smooth rice porridge with savoury toppings. | rice, ginger, scallion, stock, chicken, soy sauce, sesame oil | `TT-0690.webp` |
| TT-0680 | Har Gow | Chinese | Translucent shrimp dumplings. | shrimp, flour, tapioca, bamboo shoot, sesame oil, ginger, salt | `TT-0680.webp` |
| TT-0667 | Sweet and Sour Pork | Chinese | Crisp pork in a bright sweet-sour glaze. | pork, flour, egg, pineapple, bell pepper, vinegar, sugar, tomato | `TT-0667.webp` |
| TT-0697 | Egg Tart | Chinese | Flaky pastry cups with a silky custard. | flour, egg, sugar, butter, milk, vanilla | `TT-0697.webp` |
| TT-0668 | Chow Mein | Chinese | Stir-fried noodles with vegetables. | noodles, chicken, cabbage, carrot, bean sprouts, soy sauce, garlic, vegetable oil | `TT-0668.webp` |
| TT-0691 | Scallion Pancakes | Chinese | Flaky pan-fried flatbreads layered with scallions. | flour, scallion, sesame oil, vegetable oil, salt | `TT-0691.webp` |
| TT-0681 | Idli | Indian | Steamed rice and lentil cakes. | rice, lentils, salt, yogurt, ginger | `TT-0681.webp` |
| TT-0674 | Dal Makhani | Indian | Slow-cooked black lentils in butter and cream. | lentils, kidney beans, butter, cream, tomato, ginger, garlic, garam masala | `TT-0674.webp` |
| TT-0692 | Pav Bhaji | Indian | Mashed spiced vegetables with buttered rolls. | potato, tomato, peas, onion, bell pepper, butter, bread, garam masala | `TT-0692.webp` |
| TT-0716 | Rasmalai | Indian | Cheese dumplings soaked in cardamom milk. | milk, sugar, cardamom, pistachio, saffron, rose water | `TT-0716.webp` |
| TT-0698 | Lassi | Indian | A chilled yogurt drink, sweet or salty. | yogurt, sugar, cardamom, mango, rose water, milk | `TT-0698.webp` |
| TT-0651 | Chicken Tikka Masala | Indian | Grilled chicken in a creamy spiced tomato sauce. | chicken, yogurt, tomato, cream, onion, garlic, ginger, garam masala | `TT-0651.webp` |
| TT-0655 | Pad Kra Pao | Thai | Fiery stir-fry with holy basil over rice. | pork, basil, chili, garlic, soy sauce, fish sauce, sugar, egg | `TT-0655.webp` |
| TT-0660 | Tom Kha Gai | Thai | Coconut and galangal chicken soup. | chicken, coconut milk, galangal, lemongrass, mushroom, lime, fish sauce, chili | `TT-0660.webp` |
| TT-0682 | Khao Soi | Thai | Northern curry noodle soup with crispy noodles on top. | noodles, chicken, coconut milk, turmeric, chili, shallot, lime, ginger | `TT-0682.webp` |
| TT-0683 | Pad See Ew | Thai | Wide rice noodles stir-fried in sweet soy. | noodles, pork, egg, soy sauce, garlic, sugar, vegetable oil, kale | `TT-0683.webp` |
| TT-0684 | Panang Curry | Thai | A thick, nutty, mildly sweet red curry. | coconut milk, beef, chili, peanut, lime, fish sauce, sugar, basil | `TT-0684.webp` |
| TT-0658 | Korean Fried Chicken | Korean | Twice-fried chicken with a sticky glaze. | chicken, flour, gochujang, soy sauce, garlic, sugar, ginger, vegetable oil | `TT-0658.webp` |
| TT-0699 | Sundubu Jjigae | Korean | Bubbling soft tofu stew. | tofu, chili, garlic, egg, shellfish, scallion, sesame oil, stock | `TT-0699.webp` |
| TT-0675 | Kimbap | Korean | Seaweed rice rolls with colourful fillings. | rice, seaweed, carrot, cucumber, egg, sesame oil, pickle, beef | `TT-0675.webp` |
| TT-0723 | Bingsu | Korean | Shaved milk ice with sweet toppings. | milk, sugar, beans, strawberry, mango, cream | `TT-0723.webp` |
| TT-0706 | Bò Lúc Lắc | Vietnamese | “Shaking” stir-fried beef cubes. | beef, garlic, soy sauce, sugar, black pepper, lettuce, tomato, onion | `TT-0706.webp` |
| TT-0685 | Chả Giò | Vietnamese | Crispy fried spring rolls. | pork, shrimp, noodles, carrot, mushroom, egg, fish sauce, lettuce | `TT-0685.webp` |
| TT-0753 | Chè | Vietnamese | A sweet dessert soup. | beans, coconut milk, sugar, tapioca, banana, ginger | `TT-0753.webp` |
| TT-0763 | Tsebhi Dorho | Eritrean | Spicy chicken stew with a boiled egg. | chicken, berbere, onion, egg, ghee, garlic, lemon, ginger | `TT-0763.webp` |
| TT-0754 | Hāngī | New Zealander | Food steamed in an earth oven over hot stones. | pork, lamb, chicken, sweet potato, potato, pumpkin, cabbage, bread | `TT-0754.webp` |
| TT-0724 | Kiwi Meat Pie | New Zealander | A handheld minced-beef pie. | flour, beef, onion, butter, mushroom, cheddar, stock, potato | `TT-0724.webp` |
| TT-0796 | Whitebait Fritters | New Zealander | Tiny fish folded into batter. | fish, egg, flour, butter, lemon, salt, black pepper | `TT-0796.webp` |
| TT-0755 | Roast Lamb with Mint Sauce | New Zealander | A Sunday roast. | lamb, mint, vinegar, sugar, rosemary, garlic, potato | `TT-0755.webp` |
| TT-0771 | Hokey Pokey Ice Cream | New Zealander | Vanilla ice cream with honeycomb toffee. | cream, milk, sugar, honey, vanilla | `TT-0771.webp` |
| TT-0821 | Pāua Fritters | New Zealander | Fritters of local sea snail. | shellfish, flour, egg, butter, lemon, salt | `TT-0821.webp` |
| TT-0826 | Rēwena Bread | New Zealander | Māori sourdough made with a potato starter. | flour, potato, sugar, yeast, salt | `TT-0826.webp` |
| TT-0208 | Tabbouleh | Levantine | A parsley salad, not a grain salad. | bulgur, parsley, mint, tomato, onion, lemon, olive oil | `TT-0208.webp` |
| TT-0071 | Baklava | Levantine | Honeyed layers of nuts and phyllo. | flour, walnut, pistachio, butter, honey, sugar, cinnamon, rose water | `TT-0071.webp` |
| TT-0176 | Kibbeh | Levantine | Torpedo-shaped bulgur shells stuffed with spiced lamb. | bulgur, lamb, onion, pine nuts, cumin, cinnamon, allspice, vegetable oil | `TT-0176.webp` |
| TT-0140 | Lamb Tagine | Moroccan | Slow-cooked under a conical lid. | lamb, onion, garlic, ginger, cinnamon, cumin, saffron, apricot | `TT-0140.webp` |
| TT-0177 | Vegetable Couscous | Moroccan | Friday couscous with seven vegetables. | couscous, carrot, zucchini, chickpeas, onion, tomato, cumin, cinnamon | `TT-0177.webp` |
| TT-0421 | Harira | Moroccan | Soup that breaks the Ramadan fast. | lentils, chickpeas, tomato, onion, celery, cilantro, parsley, lamb | `TT-0421.webp` |
| TT-0453 | Chicken Pastilla | Moroccan | Sweet-savoury pie dusted with cinnamon sugar. | chicken, flour, almond, egg, onion, cinnamon, saffron, sugar | `TT-0453.webp` |
| TT-0416 | Zaalouk | Moroccan | Smoky eggplant and tomato salad. | eggplant, tomato, garlic, cumin, paprika, olive oil, cilantro | `TT-0416.webp` |
| TT-0265 | Kefta Tagine | Moroccan | Meatballs and eggs in tomato sauce. | beef, egg, tomato, onion, cumin, paprika, cilantro, parsley | `TT-0265.webp` |
| TT-0464 | Sardine Chermoula | Moroccan | Sardines stuffed with chermoula, grilled or fried. | sardine, cilantro, parsley, garlic, cumin, paprika, lemon, olive oil | `TT-0464.webp` |
| TT-0370 | Doro Wat | Ethiopian | Slow-simmered chicken in berbere. | chicken, onion, berbere, butter, garlic, ginger, egg, cardamom | `TT-0370.webp` |
| TT-0422 | Misir Wat | Ethiopian | Spiced red lentil stew. | lentils, berbere, onion, garlic, ginger, tomato, vegetable oil | `TT-0422.webp` |
| TT-0465 | Shiro | Ethiopian | Silky ground-chickpea stew. | chickpeas, berbere, onion, garlic, tomato, butter | `TT-0465.webp` |
| TT-0499 | Kitfo | Ethiopian | Minced beef warmed in spiced butter. | beef, butter, berbere, cardamom, chili | `TT-0499.webp` |
| TT-0338 | Tibs | Ethiopian | Sizzling sautéed beef, served to honour guests. | beef, onion, thyme, chili, butter, garlic, bell pepper | `TT-0338.webp` |
| TT-0516 | Gomen | Ethiopian | Collard-style greens in spiced butter. | kale, onion, garlic, ginger, butter, chili | `TT-0516.webp` |
| TT-0109 | Adana Kebab | Turkish | Hand-minced lamb on wide skewers. | lamb, chili, onion, flatbread, sumac, parsley, tomato, salt | `TT-0109.webp` |
| TT-0266 | Menemen | Turkish | Soft-scrambled eggs with peppers and tomato. | egg, tomato, bell pepper, onion, olive oil, chili | `TT-0266.webp` |
| TT-0387 | İmam Bayıldı | Turkish | "The imam fainted" — olive-oil braised eggplant. | eggplant, onion, tomato, garlic, olive oil, parsley, sugar | `TT-0387.webp` |
| TT-0178 | Lahmacun | Turkish | Thin flatbread with spiced lamb. | flour, yeast, lamb, onion, tomato, bell pepper, parsley, sumac | `TT-0178.webp` |
| TT-0233 | Turkish Coffee | Turkish | Unfiltered and thick, read from the grounds. | coffee, sugar, cardamom | `TT-0233.webp` |
| TT-0179 | Köfte | Turkish | Grilled spiced meatballs. | beef, onion, parsley, cumin, bread, mint, chili | `TT-0179.webp` |
| TT-0234 | Simit | Turkish | Sesame-crusted bread ring. | flour, yeast, sesame, honey | `TT-0234.webp` |
| TT-0267 | Mercimek Çorbası | Turkish | Red lentil soup with lemon. | lentils, onion, carrot, butter, paprika, lemon, cumin | `TT-0267.webp` |
| TT-0268 | Ghormeh Sabzi | Persian | Iran’s beloved herb stew. | lamb, beans, parsley, cilantro, fenugreek, onion, lime, turmeric | `TT-0268.webp` |
| TT-0388 | Fesenjan | Persian | Walnut and pomegranate braise. | chicken, walnut, pomegranate, onion, turmeric, cinnamon, sugar | `TT-0388.webp` |
| TT-0298 | Tahdig | Persian | The prized golden crust of the rice pot. | rice, butter, saffron, yogurt, vegetable oil | `TT-0298.webp` |
| TT-0500 | Kuku Sabzi | Persian | A frittata that is mostly herbs. | egg, parsley, cilantro, dill, walnut, turmeric, onion | `TT-0500.webp` |
| TT-0339 | Joojeh Kabab | Persian | Saffron chicken skewers. | chicken, saffron, lemon, onion, yogurt, butter | `TT-0339.webp` |
| TT-0454 | Ash Reshteh | Persian | Herb and noodle soup for Nowruz. | kidney beans, noodles, spinach, parsley, cilantro, dill, onion, lentils | `TT-0454.webp` |
| TT-0371 | Egusi Soup | West African | Leafy soup thickened with melon seeds. | spinach, palm oil, fish, beef, onion, chili, stock, shrimp | `TT-0371.webp` |
| TT-0180 | Suya | West African | Spice-crusted grilled skewers. | beef, peanut, chili, ginger, garlic, onion, paprika | `TT-0180.webp` |
| TT-0299 | Puff-Puff | West African | Pillowy fried dough balls. | flour, yeast, sugar, nutmeg, vegetable oil | `TT-0299.webp` |
| TT-0417 | Akara | West African | Bean fritters for breakfast. | black-eyed peas, onion, chili, salt, vegetable oil | `TT-0417.webp` |
| TT-0389 | Fufu and Okra Soup | West African | Pounded cassava with silky okra soup. | cassava, okra, palm oil, fish, onion, chili, stock | `TT-0389.webp` |
| TT-0141 | Koshari | Egyptian | Cairo’s carb-on-carb street feast. | rice, lentils, pasta, chickpeas, tomato, onion, vinegar, garlic | `TT-0141.webp` |
| TT-0181 | Ful Medames | Egyptian | Slow-stewed fava beans for breakfast. | fava beans, olive oil, cumin, garlic, lemon, parsley | `TT-0181.webp` |
| TT-0455 | Molokhia | Egyptian | Silky green soup of jute leaves. | spinach, chicken, garlic, coriander, stock | `TT-0455.webp` |
| TT-0269 | Ta’ameya | Egyptian | Egypt’s green fava-bean falafel. | fava beans, parsley, cilantro, dill, onion, garlic, cumin, sesame | `TT-0269.webp` |
| TT-0466 | Fattah | Egyptian | Feast-day layers of bread, rice and meat. | rice, flatbread, lamb, garlic, vinegar, tomato | `TT-0466.webp` |
| TT-0456 | Karkade | Egyptian | Chilled hibiscus tea. | hibiscus, sugar, mint | `TT-0456.webp` |
| TT-0372 | Basbousa | Egyptian | Semolina cake soaked in syrup. | couscous, yogurt, sugar, butter, coconut, almond, rose water | `TT-0372.webp` |
| TT-0457 | Hawawshi | Egyptian | Baked bread stuffed with spiced meat. | flour, beef, onion, bell pepper, parsley, chili | `TT-0457.webp` |
| TT-0235 | Bobotie | South African | Spiced mince baked under a savoury custard. | beef, bread, milk, egg, onion, garlic, turmeric, raisins | `TT-0235.webp` |
| TT-0209 | Bunny Chow | South African | Durban curry served in a hollowed loaf. | bread, chicken, potato, tomato, onion, garlic, ginger, garam masala | `TT-0209.webp` |
| TT-0270 | Boerewors | South African | Coiled farmer’s sausage for the braai. | sausage, coriander, cloves, nutmeg, vinegar | `TT-0270.webp` |
| TT-0390 | Chakalaka | South African | Spicy township relish. | beans, carrot, bell pepper, onion, tomato, chili, garlic, ginger | `TT-0390.webp` |
| TT-0340 | Malva Pudding | South African | Sticky apricot sponge with hot cream sauce. | flour, sugar, egg, butter, apricot, milk, cream, vinegar | `TT-0340.webp` |
| TT-0236 | Biltong | South African | Air-dried, spice-cured beef. | beef, vinegar, coriander, salt, black pepper | `TT-0236.webp` |
| TT-0271 | Sabich | Israeli | Pita stuffed with fried eggplant, egg and amba. | egg, eggplant, tahini, bread, tomato, cucumber, parsley, lemon | `TT-0271.webp` |
| TT-0182 | Israeli Salad | Israeli | Finely diced vegetables dressed with lemon. | cucumber, tomato, onion, parsley, olive oil, lemon | `TT-0182.webp` |
| TT-0517 | Chopped Liver | Israeli | Silky liver spread with caramelized onions. | liver, onion, egg, vegetable oil, salt, black pepper | `TT-0517.webp` |
| TT-0518 | Cholent | Israeli | Sabbath stew that cooks overnight. | beef, beans, potato, barley, egg, onion, paprika | `TT-0518.webp` |
| TT-0341 | Rugelach | Israeli | Crescent pastries rolled with nuts and cinnamon. | flour, butter, sour cream, walnut, cinnamon, sugar, raisins | `TT-0341.webp` |
| TT-0210 | Matzo Ball Soup | Israeli | Chicken soup with fluffy dumplings. | egg, flour, chicken, carrot, celery, dill, stock, onion | `TT-0210.webp` |
| TT-0272 | Brik | Tunisian | Crisp pastry with a runny egg inside. | flour, egg, tuna, parsley, capers, onion, vegetable oil, harissa | `TT-0272.webp` |
| TT-0458 | Lablabi | Tunisian | Chickpea soup ladled over torn bread. | chickpeas, garlic, cumin, olive oil, bread, egg, lemon, harissa | `TT-0458.webp` |
| TT-0391 | Ojja | Tunisian | Eggs poached in spicy tomato with sausage. | egg, tomato, chili, garlic, cumin, sausage, bell pepper, olive oil | `TT-0391.webp` |
| TT-0467 | Salade Méchouia | Tunisian | Grilled pepper and tomato salad. | bell pepper, tomato, garlic, olive oil, chili, tuna, caraway, lemon | `TT-0467.webp` |
| TT-0501 | Makroud | Tunisian | Diamond-shaped semolina pastries soaked in honey. | couscous, honey, butter, cinnamon, cloves, orange | `TT-0501.webp` |
| TT-0502 | Fricassé | Tunisian | Fried bread rolls stuffed with tuna and harissa. | flour, yeast, tuna, egg, olive, harissa, potato, capers | `TT-0502.webp` |
| TT-0110 | Thieboudienne | Senegalese | Senegal’s national dish of fish and tomato rice. | fish, rice, tomato, carrot, cassava, cabbage, eggplant, onion | `TT-0110.webp` |
| TT-0183 | Yassa Poulet | Senegalese | Chicken in tangy caramelized onions. | chicken, onion, lemon, mustard, garlic, vegetable oil, olive, chili | `TT-0183.webp` |
| TT-0300 | Mafé | Senegalese | Rich peanut stew. | beef, peanut, tomato, onion, sweet potato, cabbage, chili, palm oil | `TT-0300.webp` |
| TT-0418 | Bissap | Senegalese | Ruby hibiscus cooler. | hibiscus, sugar, mint, lime, ginger | `TT-0418.webp` |
| TT-0531 | Thiakry | Senegalese | Sweet millet pudding with yogurt. | couscous, milk, yogurt, sugar, vanilla, raisins, nutmeg | `TT-0531.webp` |
| TT-0459 | Fataya | Senegalese | Crescent-shaped fish pastries. | flour, fish, onion, chili, parsley, vegetable oil, black pepper | `TT-0459.webp` |
| TT-0273 | Nyama Choma | Kenyan | Grilled meat shared with friends. | goat, salt, onion, tomato, chili, lime, cilantro | `TT-0273.webp` |
| TT-0342 | Ugali | Kenyan | Firm maize porridge eaten with the hands. | corn, salt, butter | `TT-0342.webp` |
| TT-0373 | Sukuma Wiki | Kenyan | Sautéed greens, “stretch the week”. | kale, onion, tomato, garlic | `TT-0373.webp` |
| TT-0503 | Githeri | Kenyan | Corn and bean stew. | corn, beans, potato, onion, tomato, carrot, cilantro | `TT-0503.webp` |
| TT-0274 | Mandazi | Kenyan | Lightly sweet fried dough. | flour, coconut milk, sugar, cardamom, yeast, vegetable oil | `TT-0274.webp` |
| TT-0343 | Pilau | Kenyan | Spiced rice of the Swahili coast. | rice, beef, cinnamon, cloves, cardamom, cumin, black pepper, onion | `TT-0343.webp` |
| TT-0559 | Waakye | Ghanaian | Rice and beans cooked with sorghum leaves, a breakfast stall favourite. | rice, beans, egg, chili, salt, vegetable oil | `TT-0559.webp` |
| TT-0580 | Banku with Tilapia | Ghanaian | Fermented dough balls with grilled tilapia and pepper sauce. | corn, cassava, fish, tomato, onion, chili, ginger | `TT-0580.webp` |
| TT-0565 | Fufu with Light Soup | Ghanaian | Pounded cassava and plantain with a peppery broth. | cassava, plantain, chicken, tomato, onion, ginger, chili, garlic | `TT-0565.webp` |
| TT-0560 | Kelewele | Ghanaian | Spiced fried plantain cubes. | plantain, ginger, chili, cloves, vegetable oil, onion, salt | `TT-0560.webp` |
| TT-0589 | Groundnut Soup | Ghanaian | Rich peanut soup served with rice balls. | peanut, chicken, tomato, onion, ginger, chili, garlic, palm oil | `TT-0589.webp` |
| TT-0581 | Red Red | Ghanaian | Bean stew in palm oil with fried plantain. | black-eyed peas, plantain, palm oil, tomato, onion, ginger, chili | `TT-0581.webp` |
| TT-0644 | Shito | Ghanaian | A dark, spicy pepper relish. | chili, shrimp, onion, ginger, vegetable oil, tomato, garlic | `TT-0644.webp` |
| TT-0627 | Ampesi | Ghanaian | Boiled yam and plantain with pepper stew. | yam, plantain, tomato, onion, chili, fish, palm oil | `TT-0627.webp` |
| TT-0606 | Yam Porridge | West African | Soft yam simmered in a spicy palm oil sauce. | yam, palm oil, tomato, onion, chili, shrimp, spinach, stock | `TT-0606.webp` |
| TT-0628 | Chakhchoukha | Algerian | Torn flatbread soaked in spicy lamb stew. | flour, lamb, tomato, onion, chickpeas, chili, cumin, paprika | `TT-0628.webp` |
| TT-0638 | Rechta | Algerian | Fine noodles in a white sauce with chicken. | noodles, chicken, turnip, chickpeas, onion, cinnamon, black pepper, butter | `TT-0638.webp` |
| TT-0607 | Chorba Frik | Algerian | Ramadan soup with cracked green wheat and herbs. | lamb, tomato, onion, chickpeas, mint, cilantro, bulgur, cinnamon | `TT-0607.webp` |
| TT-0629 | Mhajeb | Algerian | Stuffed folded crêpes with tomato and onion. | flour, tomato, onion, chili, olive oil, garlic, cumin | `TT-0629.webp` |
| TT-0630 | Tajine Zitoune | Algerian | Chicken stewed with olives and preserved lemon. | chicken, olive, lemon, onion, garlic, saffron, cilantro, olive oil | `TT-0630.webp` |
| TT-0639 | Garantita | Algerian | Baked chickpea flan served in a sandwich. | chickpeas, egg, olive oil, cumin, harissa, bread | `TT-0639.webp` |
| TT-0582 | Masgouf | Iraqi | River carp split and grilled upright beside fire. | fish, tamarind, turmeric, lemon, tomato, onion, salt, olive oil | `TT-0582.webp` |
| TT-0590 | Iraqi Kubba | Iraqi | Crisp rice shells filled with spiced meat. | rice, beef, onion, allspice, cinnamon, almond, raisins, parsley | `TT-0590.webp` |
| TT-0616 | Tashreeb | Iraqi | Torn bread soaked in a lamb and tomato broth. | bread, lamb, tomato, onion, chickpeas, turmeric, cinnamon, cardamom | `TT-0616.webp` |
| TT-0608 | Kleicha | Iraqi | Iraq’s national cookie, filled with dates. | flour, dates, cardamom, butter, sugar, sesame | `TT-0608.webp` |
| TT-0640 | Tepsi Baytinijan | Iraqi | Layered baked eggplant and meat casserole. | eggplant, lamb, tomato, potato, onion, garlic, salt | `TT-0640.webp` |
| TT-0641 | Samoon | Iraqi | Diamond-shaped bread with a crisp crust. | flour, yeast, salt, sugar, olive oil | `TT-0641.webp` |
| TT-0617 | Timman Bagilla | Iraqi | Dill rice cooked with broad beans and ghee. | rice, fava beans, dill, ghee, onion, salt | `TT-0617.webp` |
| TT-0645 | Incir Tatlısı | Turkish | Stewed figs stuffed with walnuts and served with cream. | fig, walnut, sugar, cream, cinnamon | `TT-0645.webp` |
| TT-0554 | İskender Kebap | Turkish | Sliced doner on bread with tomato sauce and browned butter. | beef, bread, tomato, yogurt, butter, garlic | `TT-0554.webp` |
| TT-0591 | Maamoul | Levantine | Buttery semolina cookies filled with dates or nuts. | dates, flour, butter, walnut, rose water, sugar | `TT-0591.webp` |
| TT-0669 | Injera | Ethiopian | The spongy sour pancake that is plate and spoon. | teff, salt | `TT-0669.webp` |
| TT-0807 | Genfo | Ethiopian | A thick porridge with a well of spiced butter. | teff, butter, berbere, salt | `TT-0807.webp` |
| TT-0745 | Zigni | Eritrean | Spicy beef stew eaten with injera. | beef, berbere, onion, tomato, garlic, ghee, ginger, stock | `TT-0745.webp` |
| TT-0780 | Injera Firfir | Eritrean | Torn injera tossed in spicy sauce. | teff, berbere, onion, ghee, tomato, garlic | `TT-0780.webp` |
| TT-0813 | Eritrean Ful | Eritrean | Mashed fava beans with eggs and chili. | fava beans, olive oil, onion, tomato, chili, egg, cumin, lemon | `TT-0813.webp` |
| TT-0822 | Hilbet | Eritrean | A creamy bean and lentil dip. | lentils, fava beans, fenugreek, garlic, lemon, chili | `TT-0822.webp` |
| TT-0823 | Kitcha Fit-Fit | Eritrean | Shredded flatbread in spiced butter. | flour, butter, berbere, yogurt, onion | `TT-0823.webp` |
| TT-0707 | Bariis Iskukaris | Somali | Spiced rice with lamb and raisins. | rice, lamb, onion, tomato, cardamom, cinnamon, cloves, cumin | `TT-0707.webp` |
| TT-0756 | Canjeero | Somali | Thin spongy pancakes for breakfast. | flour, yeast, sugar, salt, butter | `TT-0756.webp` |
| TT-0746 | Suqaar | Somali | Cubes of beef quickly stir-fried. | beef, onion, bell pepper, garlic, cumin, tomato, cilantro, lime | `TT-0746.webp` |
| TT-0708 | Sambusa | Somali | Crisp triangular pastries, a Ramadan must. | flour, beef, onion, scallion, chili, cilantro, vegetable oil | `TT-0708.webp` |
| TT-0781 | Maraq | Somali | A fragrant meat and vegetable broth. | lamb, potato, carrot, onion, garlic, cumin, cilantro, tomato | `TT-0781.webp` |
| TT-0797 | Xalwo | Somali | A glossy, chewy sweet. | sugar, cardamom, nutmeg, flour, butter | `TT-0797.webp` |
| TT-0757 | Shaah | Somali | Spiced milk tea. | tea, milk, cardamom, cinnamon, cloves, ginger, sugar | `TT-0757.webp` |
| TT-0758 | Zanzibar Pizza | Tanzanian | A folded, griddled street “pizza”. | flour, egg, beef, onion, bell pepper, mozzarella, mayonnaise, butter | `TT-0758.webp` |
| TT-0736 | Zanzibari Pilau | Tanzanian | Fragrant spiced rice. | rice, beef, cinnamon, cloves, cardamom, cumin, black pepper, onion | `TT-0736.webp` |
| TT-0798 | Mchicha | Tanzanian | Greens in coconut and peanut sauce. | spinach, coconut milk, peanut, onion, tomato, garlic | `TT-0798.webp` |
| TT-0782 | Maharage ya Nazi | Tanzanian | Beans simmered in coconut milk. | beans, coconut milk, onion, tomato, garlic, turmeric, cilantro | `TT-0782.webp` |
| TT-0747 | Mishkaki | Tanzanian | Marinated beef skewers. | beef, lime, garlic, ginger, chili, paprika, turmeric, vegetable oil | `TT-0747.webp` |
| TT-0818 | Urojo | Tanzanian | Zanzibar mix soup with crispy toppings. | potato, cassava, egg, tamarind, chili, coconut, lime, cilantro | `TT-0818.webp` |
| TT-0670 | Kabsa | Saudi | Spiced rice and meat, the Arabian national dish. | rice, chicken, tomato, onion, garlic, cardamom, cloves, cinnamon | `TT-0670.webp` |
| TT-0799 | Jareesh | Saudi | Cracked wheat porridge with yogurt. | bulgur, chicken, yogurt, onion, cardamom, butter | `TT-0799.webp` |
| TT-0759 | Mutabbaq | Saudi | Stuffed pan-fried pastry. | flour, egg, beef, onion, vegetable oil, butter, parsley | `TT-0759.webp` |
| TT-0783 | Saleeg | Saudi | Creamy rice cooked in milk. | rice, milk, chicken, butter, black pepper, cardamom | `TT-0783.webp` |
| TT-0814 | Hanini | Saudi | A warm date and flour sweet. | dates, flour, butter, cardamom, sugar | `TT-0814.webp` |
| TT-0725 | Saudi Coffee | Saudi | Pale, spiced Arabic coffee served in small cups. | coffee, cardamom, saffron, cloves | `TT-0725.webp` |
| TT-0815 | Margoog | Saudi | Stew with thin dough sheets. | lamb, flour, tomato, zucchini, onion, pumpkin, potato, garlic | `TT-0815.webp` |
| TT-0748 | Saltah | Yemeni | Frothy fenugreek stew in a hot stone pot. | lamb, fenugreek, tomato, garlic, chili, onion, potato, egg | `TT-0748.webp` |
| TT-0717 | Mandi | Yemeni | Meat and rice cooked in an underground oven. | rice, lamb, cardamom, cloves, cinnamon, turmeric, coriander, cumin | `TT-0717.webp` |
| TT-0784 | Fahsa | Yemeni | Shredded beef stew. | beef, tomato, onion, garlic, cumin, fenugreek, cilantro, chili | `TT-0784.webp` |
| TT-0760 | Malawach | Yemeni | Flaky layered flatbread. | flour, butter, salt, vegetable oil, honey | `TT-0760.webp` |
| TT-0819 | Aseed | Yemeni | Dough porridge eaten by hand. | flour, butter, honey, salt | `TT-0819.webp` |
| TT-0824 | Shafout | Yemeni | Flatbread in herbed yogurt, a Ramadan dish. | yogurt, flatbread, mint, cilantro, garlic, onion, salt | `TT-0824.webp` |
| TT-0772 | Bint al-Sahn | Yemeni | The “daughter of the plate”: layered honey bread. | flour, egg, yeast, butter, honey, milk, sugar, sesame | `TT-0772.webp` |

## All dishs

| Status | ID | Dish | Cuisine | Description | Expected file name | Format | Pixel size | Target file size | Current size |
|---|---|---|---|---|---|---|---|---|---|
| ✅ created | TT-0001 | Margherita Pizza | Italian | Naples, 1889 — the colours of the Italian flag. | `TT-0001.webp` | WebP | 1024 × 1024 px | 150–300 KB | 211 KB |
| ✅ created | TT-0004 | Spaghetti Carbonara | Italian | A Roman classic; no cream required. | `TT-0004.webp` | WebP | 1024 × 1024 px | 150–300 KB | 161 KB |
| ✅ created | TT-0007 | Lasagna | Italian | Layered pasta baked with ragù and béchamel. | `TT-0007.webp` | WebP | 1024 × 1024 px | 150–300 KB | 158 KB |
| ⬜ to create | TT-0087 | Risotto alla Milanese | Italian | Golden saffron risotto from Milan. | `TT-0087.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ✅ created | TT-0036 | Pesto Genovese | Italian | Pounded basil sauce from Liguria. | `TT-0036.webp` | WebP | 1024 × 1024 px | 150–300 KB | 154 KB |
| ✅ created | TT-0010 | Tiramisu | Italian | Coffee-soaked layers of mascarpone cream. | `TT-0010.webp` | WebP | 1024 × 1024 px | 150–300 KB | 160 KB |
| ⬜ to create | TT-0184 | Minestrone | Italian | A thick, seasonal vegetable soup. | `TT-0184.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0275 | Osso Buco | Italian | Braised veal shanks with gremolata. | `TT-0275.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0072 | Arancini | Italian | Sicilian fried rice balls with a molten heart. | `TT-0072.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0111 | Panna Cotta | Italian | Cooked cream, barely set. | `TT-0111.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0088 | Amatriciana | Italian | Roman pasta with cured pork cheek and tomato. | `TT-0088.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0058 | Cacio e Pepe | Italian | Three ingredients, one creamy Roman sauce. | `TT-0058.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0468 | Pasta con le Sarde | Italian | Sicilian pasta of sardines, wild fennel and sweet raisins. | `TT-0468.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0460 | Vitello Tonnato | Italian | Cold sliced veal under a creamy tuna sauce. | `TT-0460.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0279 | Saltimbocca | Italian | “Jumps in the mouth” — veal, ham and sage. | `TT-0279.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0519 | Coniglio alla Cacciatora | Italian | Hunter-style braised rabbit. | `TT-0519.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0520 | Fegato alla Veneziana | Italian | Venice’s liver with slow-cooked onions. | `TT-0520.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0392 | Tortellini in Brodo | Italian | Tiny stuffed pasta floating in clear broth. | `TT-0392.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0153 | Cannoli | Italian | Crisp Sicilian shells piped with sweet ricotta. | `TT-0153.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0211 | Spinach and Ricotta Ravioli | Italian | Pasta pillows with sage butter. | `TT-0211.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0393 | Caponata | Italian | Sicilian sweet-and-sour eggplant. | `TT-0393.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0423 | Risotto agli Asparagi | Italian | Spring risotto with tender asparagus. | `TT-0423.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0424 | Gnocchi al Gorgonzola | Italian | Potato gnocchi in blue cheese sauce. | `TT-0424.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0521 | Pear and Mascarpone Tart | Italian | Crisp tart with creamy mascarpone and poached pears. | `TT-0521.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0142 | Coq au Vin | French | Chicken braised slowly in Burgundy wine. | `TT-0142.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0089 | Ratatouille | French | Provençal summer vegetable stew. | `TT-0089.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0073 | French Onion Soup | French | Caramelised onions under a bubbling cheese crust. | `TT-0073.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ✅ created | TT-0008 | Croissant | French | Laminated, flaky, buttery pastry. | `TT-0008.webp` | WebP | 1024 × 1024 px | 150–300 KB | 233 KB |
| ✅ created | TT-0027 | Crème Brûlée | French | Silky custard beneath a glassy sugar crust. | `TT-0027.webp` | WebP | 1024 × 1024 px | 150–300 KB | 154 KB |
| ⬜ to create | TT-0344 | Bouillabaisse | French | Marseille fisherman’s stew. | `TT-0344.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0154 | Quiche Lorraine | French | Savoury custard tart from Lorraine. | `TT-0154.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0112 | Beef Bourguignon | French | Beef stewed in red wine with pearl onions. | `TT-0112.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0212 | Salade Niçoise | French | The composed salad of Nice. | `TT-0212.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ✅ created | TT-0023 | Crêpes | French | Paper-thin Breton pancakes. | `TT-0023.webp` | WebP | 1024 × 1024 px | 150–300 KB | 160 KB |
| ⬜ to create | TT-0155 | Duck Confit | French | Duck slow-cooked in its own fat until it falls off the bone. | `TT-0155.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0118 | Moules Marinières | French | Mussels steamed in white wine, served with frites. | `TT-0118.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0237 | Cassoulet | French | Slow-baked beans and meats from Languedoc. | `TT-0237.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0425 | Vichyssoise | French | Chilled leek and potato soup. | `TT-0425.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0469 | Pissaladière | French | Niçois tart of sweet onions, anchovies and olives. | `TT-0469.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0470 | Brandade de Morue | French | Salt cod whipped with garlic and olive oil. | `TT-0470.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0532 | Lapin à la Moutarde | French | Rabbit braised in a mustard cream sauce. | `TT-0532.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0426 | Pâté de Campagne | French | Rustic country pâté with liver and pork. | `TT-0426.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0461 | Sauce Béarnaise | French | Emulsified butter sauce with tarragon. | `TT-0461.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0427 | Poulet à l’Estragon | French | Chicken in a tarragon cream sauce. | `TT-0427.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0374 | Salade de Chèvre Chaud | French | Warm goat cheese toasts on greens. | `TT-0374.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0522 | Goat Cheese Tart | French | Savory tart with creamy goat cheese. | `TT-0522.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0504 | Roquefort Salad | French | Greens with pear, walnuts and blue cheese. | `TT-0504.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0375 | Choucroute Garnie | French | Alsatian sauerkraut with a heap of meats. | `TT-0375.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0301 | Galette Bretonne | French | Buckwheat crêpe folded around ham, egg and cheese. | `TT-0301.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0345 | Cherry Clafoutis | French | Baked custard batter studded with cherries. | `TT-0345.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0346 | Lobster Bisque | French | Velvety shellfish soup. | `TT-0346.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ✅ created | TT-0017 | Paella | Spanish | Saffron rice cooked wide and shallow in Valencia. | `TT-0017.webp` | WebP | 1024 × 1024 px | 150–300 KB | 180 KB |
| ⬜ to create | TT-0185 | Gazpacho | Spanish | Chilled Andalusian tomato soup. | `TT-0185.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0090 | Tortilla Española | Spanish | Thick potato and egg omelette. | `TT-0090.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0119 | Patatas Bravas | Spanish | Crisp potatoes with a smoky, spicy sauce. | `TT-0119.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0054 | Churros con Chocolate | Spanish | Fried dough dipped in thick hot chocolate. | `TT-0054.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0302 | Crema Catalana | Spanish | Catalonia’s citrus-scented custard. | `TT-0302.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0156 | Calamares Fritos | Spanish | Crisp fried squid rings with lemon. | `TT-0156.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0120 | Gambas al Ajillo | Spanish | Shrimp sizzling in garlic and chili oil. | `TT-0120.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0394 | Fabada Asturiana | Spanish | Asturias’ rich bean and sausage stew. | `TT-0394.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0238 | Pulpo a la Gallega | Spanish | Galician octopus with potatoes and smoked paprika. | `TT-0238.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0143 | Moussaka | Greek | Layers of eggplant, spiced lamb and béchamel. | `TT-0143.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0074 | Greek Salad | Greek | Horiatiki — the village salad. | `TT-0074.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0091 | Souvlaki | Greek | Grilled skewers wrapped in warm pita. | `TT-0091.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0276 | Spanakopita | Greek | Spinach and feta in crisp phyllo. | `TT-0276.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0186 | Tzatziki | Greek | Cool yogurt and cucumber dip. | `TT-0186.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0376 | Avgolemono | Greek | Silky egg-lemon soup. | `TT-0376.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0471 | Gigantes Plaki | Greek | Giant beans baked in tomato and dill. | `TT-0471.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0347 | Htapodi sti Skara | Greek | Charcoal-grilled octopus dressed with lemon and oregano. | `TT-0347.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0505 | Stifado | Greek | Rabbit stewed with pearl onions and warm spices. | `TT-0505.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ✅ created | TT-0044 | Wiener Schnitzel | German | Thin, golden, breaded veal. | `TT-0044.webp` | WebP | 1024 × 1024 px | 150–300 KB | 158 KB |
| ⬜ to create | TT-0348 | Sauerbraten | German | Pot roast marinated for days. | `TT-0348.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0239 | Kartoffelsalat | German | Warm potato salad, Swabian style. | `TT-0239.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0092 | Bratwurst | German | Grilled sausage with mustard. | `TT-0092.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0144 | Black Forest Cake | German | Chocolate, cherries and clouds of cream. | `TT-0144.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0121 | Brezel | German | Lye-dipped pretzel, chewy and glossy. | `TT-0121.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0240 | Schweinshaxe | German | Roast pork knuckle with crackling. | `TT-0240.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0472 | Rollmops | German | Herring rolled around pickles and onion. | `TT-0472.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0428 | Weißer Spargel | German | White asparagus with hollandaise. | `TT-0428.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0429 | Zwetschgenkuchen | German | Autumn plum cake on yeast dough. | `TT-0429.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0075 | Goulash | Hungarian | The herdsman’s paprika soup. | `TT-0075.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0213 | Chicken Paprikash | Hungarian | Chicken in a creamy paprika sauce. | `TT-0213.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0349 | Lángos | Hungarian | Fried dough with garlic, sour cream and cheese. | `TT-0349.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0303 | Halászlé | Hungarian | Fisherman’s soup of the Danube, fiery red with paprika. | `TT-0303.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0280 | Töltött Káposzta | Hungarian | Cabbage rolls stuffed with pork and rice, simmered in paprika. | `TT-0280.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0395 | Dobos Torte | Hungarian | Thin sponge layers stacked under a glassy caramel crown. | `TT-0395.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0396 | Lecsó | Hungarian | Summer stew of peppers and tomatoes, finished with egg. | `TT-0396.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0430 | Túrós Csusza | Hungarian | Noodles tossed with curd cheese, sour cream and crisp bacon. | `TT-0430.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ✅ created | TT-0024 | Fish and Chips | British | Seaside supper wrapped in paper. | `TT-0024.webp` | WebP | 1024 × 1024 px | 150–300 KB | 153 KB |
| ⬜ to create | TT-0122 | Shepherd’s Pie | British | Lamb mince under mashed potato. | `TT-0122.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0093 | Full English Breakfast | British | The classic fry-up with all the trimmings. | `TT-0093.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0157 | Scones | British | With jam and clotted cream, in that order (or not). | `TT-0157.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0123 | Sunday Roast | British | Roast beef, crisp potatoes and a puffed Yorkshire pudding. | `TT-0123.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0158 | Sticky Toffee Pudding | British | Dark fruit-studded sponge drenched in warm toffee sauce. | `TT-0158.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0241 | Cornish Pasty | British | Crimped pastry parcel that fed generations of tin miners. | `TT-0241.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0473 | Kedgeree | British | Smoked fish, rice and eggs — a colonial breakfast. | `TT-0473.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0474 | Cullen Skink | British | Thick Scottish soup of smoked haddock and potato. | `TT-0474.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0523 | Cock-a-Leekie | British | Scotland’s chicken and leek soup. | `TT-0523.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0397 | Porridge | British | Scottish oats stirred with a spurtle. | `TT-0397.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0506 | Scotch Broth | British | Barley and lamb soup. | `TT-0506.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0533 | Venison Pie | British | Game pie from the Highlands. | `TT-0533.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0124 | Borscht | Russian | Ruby beet soup. | `TT-0124.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0076 | Beef Stroganoff | Russian | Seared beef in mustard sour cream. | `TT-0076.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0187 | Pelmeni | Russian | Siberian dumplings, frozen by the hundred. | `TT-0187.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0214 | Blini | Russian | Yeasted pancakes for Maslenitsa. | `TT-0214.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0242 | Olivier Salad | Russian | The creamy diced-vegetable salad of every New Year’s table. | `TT-0242.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0304 | Pirozhki | Russian | Small baked or fried buns with a savory filling. | `TT-0304.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0398 | Syrniki | Russian | Pan-fried curd-cheese pancakes served with sour cream. | `TT-0398.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0215 | Chicken Kiev | Russian | Breaded chicken that bursts with garlic butter. | `TT-0215.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0507 | Pashtet | Russian | Smooth liver pâté spread on dark bread. | `TT-0507.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0475 | Okroshka | Russian | Chilled summer soup of raw vegetables. | `TT-0475.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0281 | Medovik | Russian | Layered honey cake with sour cream. | `TT-0281.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0534 | Kisel | Russian | Thick, tart berry drink. | `TT-0534.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0059 | Swedish Meatballs | Swedish | Köttbullar with lingonberries and cream sauce. | `TT-0059.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0216 | Gravlax | Swedish | Salmon cured under dill. | `TT-0216.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0125 | Kanelbullar | Swedish | Cardamom-scented cinnamon buns for fika. | `TT-0125.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0476 | Jansson’s Temptation | Swedish | Potato and sprat gratin at Christmas. | `TT-0476.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0431 | Räksmörgås | Swedish | Open-faced shrimp sandwich piled high. | `TT-0431.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0477 | Ärtsoppa | Swedish | Thursday’s yellow pea soup, served with mustard. | `TT-0477.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0243 | Semla | Swedish | Cardamom bun filled with almond paste and whipped cream. | `TT-0243.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0399 | Sill | Swedish | Pickled herring, the heart of the midsummer table. | `TT-0399.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0060 | Pierogi | Polish | Half-moon dumplings, boiled then fried. | `TT-0060.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0350 | Bigos | Polish | Hunter’s stew of cabbage and meats. | `TT-0350.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0432 | Żurek | Polish | Sour rye soup, often served in bread. | `TT-0432.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0377 | Gołąbki | Polish | Cabbage rolls in tomato sauce. | `TT-0377.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0244 | Kotlet Schabowy | Polish | Breaded pork cutlet with buttery potatoes. | `TT-0244.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0378 | Placki Ziemniaczane | Polish | Crisp grated-potato pancakes with sour cream. | `TT-0378.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0305 | Sernik | Polish | Baked cheesecake made from twaróg curd. | `TT-0305.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0351 | Zapiekanka | Polish | Open-faced baguette baked with mushrooms and cheese. | `TT-0351.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0508 | Chłodnik | Polish | Pink chilled beet soup. | `TT-0508.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0433 | Makowiec | Polish | Rolled yeast cake with poppy seed filling. | `TT-0433.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0282 | Bacalhau à Brás | Portuguese | Salt cod scrambled with matchstick potatoes. | `TT-0282.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ✅ created | TT-0021 | Pastel de Nata | Portuguese | Blistered custard tarts from Belém. | `TT-0021.webp` | WebP | 1024 × 1024 px | 150–300 KB | 155 KB |
| ⬜ to create | TT-0306 | Caldo Verde | Portuguese | Green kale soup with chouriço. | `TT-0306.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0352 | Francesinha | Portuguese | Porto’s gloriously excessive sandwich. | `TT-0352.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0094 | Piri-Piri Chicken | Portuguese | Flame-grilled bird with African bird’s-eye chili. | `TT-0094.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0353 | Sardinhas Assadas | Portuguese | Grilled sardines on bread, the taste of Lisbon’s June festivals. | `TT-0353.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0478 | Mexilhões à Bulhão Pato | Portuguese | Mussels steamed in garlic, cilantro and wine. | `TT-0478.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0077 | Khachapuri | Georgian | Cheese-filled bread boat crowned with an egg. | `TT-0077.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0159 | Khinkali | Georgian | Twisted soup dumplings, eaten by the knot. | `TT-0159.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0462 | Pkhali | Georgian | Vegetable and walnut pâtés. | `TT-0462.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0434 | Chakhokhbili | Georgian | Herby chicken and tomato stew. | `TT-0434.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0479 | Churchkhela | Georgian | Walnuts dipped in thickened grape must. | `TT-0479.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0400 | Lobio | Georgian | Spiced kidney beans with walnuts. | `TT-0400.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0401 | Satsivi | Georgian | Cold chicken in walnut sauce. | `TT-0401.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0538 | Tarkhuna | Georgian | Bright green tarragon lemonade. | `TT-0538.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0145 | Irish Stew | Irish | Mutton, potatoes and patience. | `TT-0145.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0354 | Colcannon | Irish | Buttery mash with greens. | `TT-0354.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0245 | Soda Bread | Irish | Quick bread marked with a cross. | `TT-0245.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0480 | Boxty | Irish | Potato pancakes from the north-west. | `TT-0480.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0188 | Beef and Stout Stew | Irish | Beef braised dark and rich in stout. | `TT-0188.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0435 | Champ | Irish | Mash with spring onions and a pool of butter. | `TT-0435.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0481 | Barmbrack | Irish | Tea-soaked fruit bread for Halloween. | `TT-0481.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0482 | Dublin Coddle | Irish | Sausage and bacon simmered with potatoes. | `TT-0482.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0126 | Varenyky | Ukrainian | Boiled dumplings stuffed with potato and cheese. | `TT-0126.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0246 | Holubtsi | Ukrainian | Cabbage rolls simmered in tomato sauce. | `TT-0246.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0307 | Pampushky | Ukrainian | Soft garlic rolls served with borscht. | `TT-0307.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0402 | Kutia | Ukrainian | Sweet grain pudding for Christmas Eve. | `TT-0402.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0436 | Kasha with Mushrooms | Ukrainian | Toasted buckwheat with fried mushrooms and onions. | `TT-0436.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0355 | Kyiv Cake | Ukrainian | Airy hazelnut meringue layers with buttercream. | `TT-0355.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0189 | Svíčková | Czech | Marinated beef in a velvety root-vegetable cream sauce. | `TT-0189.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0160 | Vepřo Knedlo Zelo | Czech | Roast pork with bread dumplings and sauerkraut. | `TT-0160.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0247 | Smažený Sýr | Czech | Fried cheese in breadcrumbs, a pub favorite. | `TT-0247.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0483 | Kulajda | Czech | Creamy dill soup with mushrooms and a poached egg. | `TT-0483.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0403 | Koláče | Czech | Round sweet pastries with fruit or curd filling. | `TT-0403.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0404 | Švestkové Knedlíky | Czech | Potato dumplings stuffed with whole plums. | `TT-0404.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0248 | Tafelspitz | Austrian | Boiled beef served with apple-horseradish. | `TT-0248.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0127 | Sachertorte | Austrian | Dense chocolate cake with apricot jam. | `TT-0127.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0095 | Apfelstrudel | Austrian | Paper-thin pastry rolled around spiced apples. | `TT-0095.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0249 | Käsespätzle | Austrian | Egg noodles baked with melted cheese and crisp onions. | `TT-0249.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0509 | Hirschgulasch | Austrian | Venison goulash with juniper and red wine. | `TT-0509.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0190 | Kaiserschmarrn | Austrian | Shredded fluffy pancake with plum compote. | `TT-0190.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0308 | Wiener Melange | Austrian | The coffee-house classic, espresso with steamed milk. | `TT-0308.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0061 | Cheese Fondue | Swiss | Bubbling melted cheese for dipping bread. | `TT-0061.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0161 | Raclette | Swiss | Scraped molten cheese over potatoes and pickles. | `TT-0161.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0191 | Rösti | Swiss | Crisp grated-potato cake. | `TT-0191.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0250 | Birchermüesli | Swiss | Soaked oats with grated apple and nuts. | `TT-0250.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0524 | Basler Läckerli | Swiss | Spiced honey-nut biscuits from Basel. | `TT-0524.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0484 | Älplermagronen | Swiss | Alpine macaroni with potatoes, cheese and apple sauce. | `TT-0484.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0096 | Stroopwafel | Dutch | Two thin waffles glued with warm caramel. | `TT-0096.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0405 | Haring | Dutch | Raw herring with onions, eaten by the tail. | `TT-0405.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0356 | Erwtensoep | Dutch | Thick split-pea soup you can stand a spoon in. | `TT-0356.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0309 | Stamppot | Dutch | Mashed potatoes and kale with smoked sausage. | `TT-0309.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0463 | Kaassoufflé | Dutch | Deep-fried cheese pastry from the snack bar. | `TT-0463.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0283 | Poffertjes | Dutch | Tiny fluffy pancakes dusted with sugar. | `TT-0283.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0062 | Moules-Frites | Belgian | Mussels and fries, the national dish. | `TT-0062.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0162 | Carbonnade Flamande | Belgian | Beef stewed in beer with mustard-coated bread. | `TT-0162.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0379 | Waterzooi | Belgian | Ghent’s creamy chicken and vegetable stew. | `TT-0379.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ✅ created | TT-0028 | Belgian Waffles | Belgian | Light, deep-pocketed yeast waffles. | `TT-0028.webp` | WebP | 1024 × 1024 px | 150–300 KB | 166 KB |
| ⬜ to create | TT-0217 | Pralines | Belgian | Filled chocolates invented in Brussels. | `TT-0217.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0485 | Asperges à la Flamande | Belgian | White asparagus with chopped egg and butter. | `TT-0485.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0310 | Fårikål | Norwegian | Layers of lamb and cabbage simmered for hours. | `TT-0310.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0311 | Smørbrød | Norwegian | Open-faced sandwich with smoked salmon. | `TT-0311.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0437 | Bergensk Fiskesuppe | Norwegian | Creamy fish soup from Bergen. | `TT-0437.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0486 | Pinnekjøtt | Norwegian | Steamed salted lamb ribs for Christmas. | `TT-0486.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0312 | Kjøttkaker | Norwegian | Meat cakes in brown gravy with lingonberries. | `TT-0312.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0284 | Vafler | Norwegian | Heart-shaped waffles with sour cream and jam. | `TT-0284.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0218 | Lohikeitto | Finnish | Creamy salmon soup. | `TT-0218.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0313 | Karjalanpiirakka | Finnish | Rye pasties filled with rice porridge. | `TT-0313.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0406 | Mustikkapiirakka | Finnish | Blueberry pie from the forest. | `TT-0406.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0487 | Poronkäristys | Finnish | Sautéed reindeer with mashed potatoes and lingonberries. | `TT-0487.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0535 | Leipäjuusto | Finnish | Squeaky baked “bread cheese” with berry jam. | `TT-0535.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0536 | Lanttulaatikko | Finnish | Sweet baked rutabaga casserole for Christmas. | `TT-0536.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0251 | Dolma | Armenian | Grape leaves stuffed with rice and lamb. | `TT-0251.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0285 | Khorovats | Armenian | Open-fire barbecue shared outdoors. | `TT-0285.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0314 | Lavash | Armenian | Thin flatbread baked on tandoor walls. | `TT-0314.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0438 | Ghapama | Armenian | Pumpkin baked with sweet rice and dried fruit. | `TT-0438.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0510 | Spas | Armenian | Warm yogurt soup with mint. | `TT-0510.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0511 | Basturma | Armenian | Air-cured spiced beef sliced thin. | `TT-0511.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0542 | Smørrebrød | Danish | Open-faced rye sandwiches piled with toppings. | `TT-0542.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0545 | Frikadeller | Danish | Pan-fried Danish meatballs, served with potatoes. | `TT-0545.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0561 | Stegt Flæsk med Persillesovs | Danish | Crisp fried pork belly with parsley sauce, a national favourite. | `TT-0561.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0540 | Wienerbrød | Danish | The flaky laminated pastry the world calls Danish. | `TT-0540.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0609 | Rødgrød med Fløde | Danish | Red berry pudding poured over with cold cream. | `TT-0609.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0566 | Æbleskiver | Danish | Spherical pancake puffs dusted with sugar. | `TT-0566.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0618 | Leverpostej | Danish | Warm liver pâté spread on rye bread. | `TT-0618.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0546 | Sarmale | Romanian | Cabbage rolls simmered slowly, served with sour cream. | `TT-0546.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0562 | Mămăligă | Romanian | Golden cornmeal porridge, the Romanian staple. | `TT-0562.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0555 | Mici | Romanian | Skinless grilled sausages served with mustard. | `TT-0555.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0583 | Ciorbă de Perișoare | Romanian | Sour meatball soup finished with sour cream. | `TT-0583.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0567 | Papanași | Romanian | Fried cheese doughnuts topped with sour cream and jam. | `TT-0567.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0595 | Zacuscă | Romanian | A smoky roasted vegetable spread, jarred for winter. | `TT-0595.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0584 | Cozonac | Romanian | Sweet braided bread swirled with walnuts and cocoa. | `TT-0584.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0547 | Ćevapi | Croatian | Small grilled minced-meat sausages in flatbread. | `TT-0547.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0596 | Peka | Croatian | Meat and vegetables slow-baked under an iron bell. | `TT-0596.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0597 | Crni Rižot | Croatian | Black risotto coloured with squid ink. | `TT-0597.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0610 | Brudet | Croatian | Adriatic fish stew with tomatoes and wine. | `TT-0610.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0611 | Štrukli | Croatian | Rolled dough filled with fresh cheese, baked or boiled. | `TT-0611.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0619 | Fritule | Croatian | Small fried doughnuts scented with citrus. | `TT-0619.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0620 | Pašticada | Croatian | Wine-marinated beef stew from Dalmatia. | `TT-0620.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0612 | Plokkfiskur | Icelandic | Creamy mashed fish and potato stew. | `TT-0612.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0592 | Kjötsúpa | Icelandic | Hearty lamb and root-vegetable soup. | `TT-0592.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0585 | Skyr with Berries | Icelandic | Thick cultured dairy served with berries and cream. | `TT-0585.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0575 | Pylsur | Icelandic | Iceland’s beloved hot dog with crispy onions. | `TT-0575.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0632 | Rúgbrauð | Icelandic | Dense sweet rye bread traditionally baked in the ground. | `TT-0632.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0642 | Kleinur | Icelandic | Twisted fried doughnuts, a coffee-time treat. | `TT-0642.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0646 | Harðfiskur | Icelandic | Wind-dried fish eaten with butter. | `TT-0646.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0598 | Prosciutto e Fichi | Italian | Salty cured ham with sweet ripe figs. | `TT-0598.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0633 | Honeyed Figs with Yogurt | Greek | Ripe figs drizzled with honey over thick yogurt. | `TT-0633.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0693 | Banitsa | Bulgarian | Flaky filo pastry layered with eggs and brined cheese. | `TT-0693.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0709 | Shopska Salad | Bulgarian | Chopped salad snowed under with grated white cheese. | `TT-0709.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0737 | Tarator | Bulgarian | Cold yogurt and cucumber soup for hot days. | `TT-0737.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0773 | Kavarma | Bulgarian | Slow-cooked pork stew, often served in a clay pot. | `TT-0773.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0764 | Kyufte | Bulgarian | Spiced grilled meatballs. | `TT-0764.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0765 | Lyutenitsa | Bulgarian | A sweet roasted pepper and tomato relish. | `TT-0765.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0800 | Mekitsi | Bulgarian | Pillowy fried dough, eaten with jam or cheese. | `TT-0800.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0700 | Pljeskavica | Serbian | A large spiced grilled meat patty. | `TT-0700.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0732 | Ajvar | Serbian | Roasted red pepper spread made every autumn. | `TT-0732.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0733 | Sarma | Serbian | Sour cabbage rolls simmered for hours. | `TT-0733.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0774 | Karađorđeva Šnicla | Serbian | A rolled cutlet filled with cream, crumbed and fried. | `TT-0774.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0766 | Gibanica | Serbian | Cheese and egg pie in crisp pastry. | `TT-0766.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0785 | Prebranac | Serbian | Oven-baked beans with paprika and onions. | `TT-0785.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0808 | Proja | Serbian | A rustic cornbread with cheese. | `TT-0808.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0718 | Cepelinai | Lithuanian | Giant potato dumplings stuffed with meat. | `TT-0718.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0726 | Šaltibarščiai | Lithuanian | Bright pink cold beet soup. | `TT-0726.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0775 | Kibinai | Lithuanian | Crescent pastries filled with seasoned meat. | `TT-0775.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0767 | Kugelis | Lithuanian | Baked grated potato pudding. | `TT-0767.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0801 | Šakotis | Lithuanian | Spit-baked tree cake with spiky branches. | `TT-0801.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0786 | Balandėliai | Lithuanian | Little cabbage “doves” in tomato sauce. | `TT-0786.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0802 | Juoda Duona | Lithuanian | Dark sour rye bread. | `TT-0802.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0676 | Bruschetta | Italian | Grilled bread rubbed with garlic and piled with tomato. | `TT-0676.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0661 | Gnocchi | Italian | Soft potato dumplings in sage butter. | `TT-0661.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0686 | Focaccia | Italian | Dimpled olive-oil flatbread. | `TT-0686.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0659 | Gelato | Italian | Dense, slow-churned Italian ice cream. | `TT-0659.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0727 | Pasta alla Norma | Italian | Sicilian pasta with fried eggplant and salted ricotta. | `TT-0727.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0749 | Panzanella | Italian | Tuscan bread and tomato salad. | `TT-0749.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0738 | Affogato | Italian | Espresso poured over a scoop of ice cream. | `TT-0738.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0687 | Croque Monsieur | French | Grilled ham and cheese with a béchamel crown. | `TT-0687.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0671 | Macarons | French | Delicate almond meringue sandwiches. | `TT-0671.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0710 | Tarte Tatin | French | The famous upside-down caramelised apple tart. | `TT-0710.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0677 | Steak Frites | French | Pan-seared steak with crisp fries. | `TT-0677.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0776 | Pisto | Spanish | Slow-cooked vegetable stew, the Spanish ratatouille. | `TT-0776.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0728 | Albóndigas | Spanish | Meatballs in tomato sauce, a tapas staple. | `TT-0728.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0662 | Gyros | Greek | Spit-roasted meat in pita with tzatziki. | `TT-0662.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0719 | Dolmades | Greek | Vine leaves stuffed with herbed rice. | `TT-0719.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0739 | Loukoumades | Greek | Honey-drenched fried dough balls. | `TT-0739.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0688 | Currywurst | German | Sliced sausage under curried ketchup. | `TT-0688.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0694 | Pretzel | German | A chewy, lye-glazed knot of bread. | `TT-0694.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0740 | Rouladen | German | Beef rolled around bacon and pickle, then braised. | `TT-0740.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0741 | Scotch Egg | British | A boiled egg wrapped in sausage and crumbs. | `TT-0741.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0711 | Bangers and Mash | British | Sausages on mash with onion gravy. | `TT-0711.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0729 | Yorkshire Pudding | British | Puffed batter baked in hot fat. | `TT-0729.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0742 | Trifle | British | Layered sponge, custard, fruit and cream. | `TT-0742.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ✅ created | TT-0011 | Tacos al Pastor | Mexican | Spit-roasted pork, born from Lebanese shawarma. | `TT-0011.webp` | WebP | 1024 × 1024 px | 150–300 KB | 150 KB |
| ✅ created | TT-0018 | Guacamole | Mexican | Aztec-era avocado sauce. | `TT-0018.webp` | WebP | 1024 × 1024 px | 150–300 KB | 167 KB |
| ⬜ to create | TT-0219 | Mole Poblano | Mexican | Dozens of ingredients ground into a dark, rich sauce. | `TT-0219.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0063 | Enchiladas | Mexican | Rolled tortillas bathed in chili sauce. | `TT-0063.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0315 | Pozole | Mexican | Hominy stew served for celebrations. | `TT-0315.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0488 | Chiles en Nogada | Mexican | Stuffed poblanos in walnut sauce. | `TT-0488.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0163 | Chilaquiles | Mexican | Tortilla chips simmered in salsa for breakfast. | `TT-0163.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0097 | Elote | Mexican | Street corn slathered and dusted with chili. | `TT-0097.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0078 | Caesar Salad | Mexican | Born in Tijuana in 1924 and adopted by the world. | `TT-0078.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0316 | Huevos con Chorizo | Mexican | Scrambled eggs with spicy sausage and warm tortillas. | `TT-0316.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0357 | Agua de Jamaica | Mexican | Tart hibiscus agua fresca. | `TT-0357.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ✅ created | TT-0003 | Hamburger | American | The world’s favourite sandwich. | `TT-0003.webp` | WebP | 1024 × 1024 px | 150–300 KB | 153 KB |
| ⬜ to create | TT-0098 | BBQ Ribs | American | Low-and-slow smoked ribs. | `TT-0098.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ✅ created | TT-0029 | Mac and Cheese | American | Comfort food baked until golden. | `TT-0029.webp` | WebP | 1024 × 1024 px | 150–300 KB | 155 KB |
| ✅ created | TT-0016 | Fried Chicken | American | Buttermilk-brined, crisp-fried. | `TT-0016.webp` | WebP | 1024 × 1024 px | 150–300 KB | 159 KB |
| ✅ created | TT-0045 | Apple Pie | American | As American as… | `TT-0045.webp` | WebP | 1024 × 1024 px | 150–300 KB | 177 KB |
| ⬜ to create | TT-0277 | Clam Chowder | American | New England’s creamy clam soup. | `TT-0277.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ✅ created | TT-0022 | Pancakes | American | Fluffy stacks under maple syrup. | `TT-0022.webp` | WebP | 1024 × 1024 px | 150–300 KB | 156 KB |
| ⬜ to create | TT-0128 | Pecan Pie | American | Southern holiday pie with a gooey heart. | `TT-0128.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0146 | Lobster Roll | American | New England summer in a toasted bun. | `TT-0146.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0220 | Crab Cakes | American | Chesapeake Bay classics, light on filler. | `TT-0220.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0407 | Cioppino | American | San Francisco’s seafood stew. | `TT-0407.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0129 | Roast Turkey | American | Thanksgiving centerpiece with herb stuffing. | `TT-0129.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0252 | Turkey Club Sandwich | American | Triple-decker deli classic. | `TT-0252.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0130 | Chili con Carne | American | Texas-style bowl of red with beans. | `TT-0130.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0317 | Tuna Salad Sandwich | American | Lunch-counter staple. | `TT-0317.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0192 | Loaded Baked Potato | American | Steakhouse side with all the toppings. | `TT-0192.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0064 | Buffalo Wings | American | Fried wings tossed in hot sauce. | `TT-0064.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0113 | Pumpkin Pie | American | Thanksgiving’s spiced custard pie. | `TT-0113.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0439 | Cranberry Sauce | American | Tart sauce for the holiday table. | `TT-0439.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0131 | Reuben Sandwich | American | Grilled corned beef with sauerkraut and Swiss. | `TT-0131.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0164 | Lox and Bagel | American | Smoked salmon on a bagel with all the trimmings. | `TT-0164.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0318 | Shrimp Cocktail | American | Chilled shrimp with a horseradish sauce. | `TT-0318.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0380 | Beef and Barley Soup | American | Homey winter soup. | `TT-0380.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0319 | Oatmeal | American | Warm bowl of oats. | `TT-0319.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0320 | Beet and Goat Cheese Salad | American | Roasted beets with tangy goat cheese. | `TT-0320.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0440 | Pecan Pralines | American | New Orleans candy of toasted pecans and caramel. | `TT-0440.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ✅ created | TT-0037 | Ceviche | Peruvian | Raw fish cured in tiger’s milk. | `TT-0037.webp` | WebP | 1024 × 1024 px | 150–300 KB | 158 KB |
| ⬜ to create | TT-0193 | Lomo Saltado | Peruvian | Chifa stir-fry of beef and fries. | `TT-0193.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0419 | Ají de Gallina | Peruvian | Shredded chicken in a creamy yellow-pepper sauce. | `TT-0419.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0441 | Causa Limeña | Peruvian | Layered terrine of chili-spiked potato. | `TT-0441.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0489 | Solterito | Peruvian | Arequipa’s bright bean and cheese salad. | `TT-0489.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0442 | Quinoa Soup | Peruvian | Andean comfort in a bowl. | `TT-0442.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0490 | Quinoa Chaufa | Peruvian | Peruvian-Chinese fried grain made with quinoa. | `TT-0490.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0165 | Feijoada | Brazilian | Black bean and pork stew. | `TT-0165.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0221 | Pão de Queijo | Brazilian | Chewy cheese bread from Minas Gerais. | `TT-0221.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0358 | Moqueca | Brazilian | Bahian fish stew with dendê oil. | `TT-0358.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0194 | Brigadeiro | Brazilian | Fudgy chocolate truffles for every party. | `TT-0194.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0132 | Coxinha | Brazilian | Teardrop fritters of shredded chicken. | `TT-0132.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0408 | Acarajé | Brazilian | Bahian black-eyed pea fritters fried in dendê oil. | `TT-0408.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0099 | Churrasco | Brazilian | Grilled meats carved at the table. | `TT-0099.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0443 | Farofa | Brazilian | Toasted cassava flour with bacon and egg. | `TT-0443.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ✅ created | TT-0030 | Jerk Chicken | Jamaican | Smoky, fiery and fragrant with pimento. | `TT-0030.webp` | WebP | 1024 × 1024 px | 150–300 KB | 199 KB |
| ⬜ to create | TT-0321 | Ackee and Saltfish | Jamaican | Jamaica’s national breakfast. | `TT-0321.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0195 | Rice and Peas | Jamaican | Kidney beans and rice in coconut milk. | `TT-0195.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0253 | Curry Goat | Jamaican | Sunday curry, slow and rich. | `TT-0253.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0222 | Fried Plantain | Jamaican | Sweet, caramel-edged ripe plantain. | `TT-0222.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0491 | Escovitch Fish | Jamaican | Fried fish under spicy pickled vegetables. | `TT-0491.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0525 | Ackee Patty | Jamaican | Golden pastry stuffed with seasoned ackee. | `TT-0525.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0065 | Asado | Argentine | The ritual of the grill, with chimichurri. | `TT-0065.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ✅ created | TT-0038 | Empanadas | Argentine | Hand pies, crimped by region. | `TT-0038.webp` | WebP | 1024 × 1024 px | 150–300 KB | 175 KB |
| ⬜ to create | TT-0147 | Milanesa | Argentine | Breaded cutlet, an Italian import. | `TT-0147.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0133 | Alfajores | Argentine | Sandwich cookies filled with dulce de leche. | `TT-0133.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0444 | Provoleta | Argentine | Grilled cheese with oregano, crisp at the edges. | `TT-0444.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0409 | Locro | Argentine | Hearty national stew of corn, beans and pumpkin. | `TT-0409.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0322 | Chimichurri | Argentine | The herb sauce that goes on everything off the grill. | `TT-0322.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0166 | Choripán | Argentine | Grilled chorizo in a roll with chimichurri. | `TT-0166.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0286 | Flan con Dulce de Leche | Argentine | Custard flan served with a spoon of dulce de leche. | `TT-0286.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0100 | Cubano | Cuban | Pressed sandwich born between Havana and Tampa. | `TT-0100.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0148 | Ropa Vieja | Cuban | "Old clothes" — shredded braised beef. | `TT-0148.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0323 | Moros y Cristianos | Cuban | Black beans and white rice cooked together. | `TT-0323.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0254 | Lechón Asado | Cuban | Roast pork in sour-orange mojo. | `TT-0254.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0324 | Picadillo | Cuban | Sweet-savory beef hash with olives and raisins. | `TT-0324.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0287 | Tostones | Cuban | Twice-fried green plantain slices. | `TT-0287.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0359 | Flan de Leche | Cuban | Silky baked custard under liquid caramel. | `TT-0359.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0288 | Arroz con Pollo | Cuban | Chicken and rice cooked in beer and sofrito. | `TT-0288.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0196 | Bandeja Paisa | Colombian | A platter big enough for a mule driver. | `TT-0196.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0066 | Arepas | Colombian | Griddled corn cakes, split and filled. | `TT-0066.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0289 | Ajiaco | Colombian | Bogotá’s three-potato chicken soup. | `TT-0289.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0325 | Sancocho | Colombian | Hearty Sunday stew. | `TT-0325.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0326 | Empanadas Colombianas | Colombian | Golden corn-flour turnovers with beef and potato. | `TT-0326.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0526 | Changua | Colombian | Andean breakfast soup of milk and poached egg. | `TT-0526.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0381 | Buñuelos | Colombian | Crisp-shelled cheese fritters, a Christmas staple. | `TT-0381.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0360 | Tamal Colombiano | Colombian | Corn dough steamed in banana leaves with meat and vegetables. | `TT-0360.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ✅ created | TT-0046 | Poutine | Canadian | Fries, squeaky curds and gravy. | `TT-0046.webp` | WebP | 1024 × 1024 px | 150–300 KB | 161 KB |
| ⬜ to create | TT-0223 | Butter Tarts | Canadian | Runny, buttery and fiercely debated. | `TT-0223.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0361 | Tourtière | Canadian | Québécois spiced meat pie for Christmas Eve. | `TT-0361.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0290 | Nanaimo Bars | Canadian | No-bake three-layer bars. | `TT-0290.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0255 | Maple-Glazed Salmon | Canadian | West-coast salmon with a sweet glaze. | `TT-0255.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0327 | Blueberry Pie | Canadian | Wild Maritime blueberries under a lattice. | `TT-0327.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0224 | Pastel de Choclo | Chilean | Sweet-corn crust over a spiced filling. | `TT-0224.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0328 | Cazuela | Chilean | A clear soup with a bit of everything. | `TT-0328.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0197 | Empanadas de Pino | Chilean | Baked turnovers for Fiestas Patrias. | `TT-0197.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0362 | Sopaipillas | Chilean | Pumpkin fritters for rainy days. | `TT-0362.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0291 | Completo | Chilean | A hot dog buried in avocado. | `TT-0291.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0492 | Mote con Huesillo | Chilean | Summer drink of peaches and wheat berries. | `TT-0492.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0198 | Reina Pepiada | Venezuelan | Arepa stuffed with chicken-avocado salad. | `TT-0198.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0256 | Pabellón Criollo | Venezuelan | National plate of shredded beef, beans and rice. | `TT-0256.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0445 | Hallacas | Venezuelan | Christmas tamales wrapped in banana leaves. | `TT-0445.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0167 | Tequeños | Venezuelan | Cheese sticks wrapped in dough and fried. | `TT-0167.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0363 | Cachapas | Venezuelan | Sweet corn pancakes folded over cheese. | `TT-0363.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0329 | Pan de Jamón | Venezuelan | Christmas bread rolled around ham, olives and raisins. | `TT-0329.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0199 | Mofongo | Puerto Rican | Mashed fried plantain with garlic. | `TT-0199.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0200 | Arroz con Gandules | Puerto Rican | Rice with pigeon peas and sofrito. | `TT-0200.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0225 | Pernil | Puerto Rican | Slow-roasted pork shoulder with crackling. | `TT-0225.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0512 | Pasteles | Puerto Rican | Holiday plantain parcels steamed in leaves. | `TT-0512.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0410 | Coquito | Puerto Rican | Creamy coconut holiday drink. | `TT-0410.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0493 | Tembleque | Puerto Rican | Wobbly coconut pudding dusted with cinnamon. | `TT-0493.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0551 | Ceviche de Camarón | Ecuadorian | Shrimp cured in citrus, served with plantain chips. | `TT-0551.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0568 | Locro de Papa | Ecuadorian | Creamy Andean potato and cheese soup. | `TT-0568.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0576 | Encebollado | Ecuadorian | A fish soup eaten as a morning cure. | `TT-0576.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0599 | Llapingachos | Ecuadorian | Cheese-stuffed potato patties with peanut sauce. | `TT-0599.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0631 | Fanesca | Ecuadorian | Easter soup of grains, beans and salt cod. | `TT-0631.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0621 | Hornado | Ecuadorian | Slow-roasted pork with crackling. | `TT-0621.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0613 | Bolón de Verde | Ecuadorian | Mashed green plantain balls stuffed with cheese or pork. | `TT-0613.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0556 | Griot | Haitian | Marinated pork braised then fried crisp. | `TT-0556.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0614 | Diri ak Djon Djon | Haitian | Rice cooked in black mushroom broth. | `TT-0614.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0553 | Soup Joumou | Haitian | Pumpkin soup eaten on New Year’s Day for independence. | `TT-0553.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0600 | Pikliz | Haitian | Fiery pickled slaw served with fried foods. | `TT-0600.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0634 | Legim | Haitian | A thick stewed vegetable dish with meat. | `TT-0634.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0601 | Bannann Peze | Haitian | Twice-fried green plantain discs. | `TT-0601.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0647 | Akasan | Haitian | A warm, thick, spiced corn drink. | `TT-0647.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0543 | Doubles | Trinidadian | Soft fried flatbreads holding spiced chickpeas. | `TT-0543.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0557 | Curry Chicken Roti | Trinidadian | Curry wrapped in a soft roti. | `TT-0557.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0577 | Pelau | Trinidadian | One-pot caramelised chicken and rice. | `TT-0577.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0569 | Callaloo | Trinidadian | A velvety green leaf and okra soup. | `TT-0569.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0602 | Bake and Shark | Trinidadian | Fried shark in a fluffy bake with tropical sauces. | `TT-0602.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0622 | Pholourie | Trinidadian | Fried split-pea balls with tamarind chutney. | `TT-0622.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0623 | Macaroni Pie | Trinidadian | Baked macaroni and cheese cut into squares. | `TT-0623.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0635 | Sorrel Drink | Trinidadian | A ruby-red spiced hibiscus drink for Christmas. | `TT-0635.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0570 | Cobb Salad | American | Chopped salad laid out in neat rows. | `TT-0570.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0701 | Salteñas | Bolivian | Juicy baked pastries with a sweet-spicy stew inside. | `TT-0701.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0743 | Silpancho | Bolivian | Breaded pounded steak over rice and potatoes with an egg. | `TT-0743.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0768 | Pique Macho | Bolivian | A heap of beef, sausage and fries with peppers. | `TT-0768.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0761 | Sopa de Maní | Bolivian | Peanut soup with fries on top. | `TT-0761.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0809 | Api Morado | Bolivian | A warm purple corn drink. | `TT-0809.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0803 | Chairo | Bolivian | Highland soup of meat, chuño-style potatoes and corn. | `TT-0803.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0787 | Cuñapé | Bolivian | Chewy cheese bread rolls. | `TT-0787.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0734 | Pepián | Guatemalan | A roasted spice and seed stew, the national dish. | `TT-0734.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0788 | Kak’ik | Guatemalan | Mayan turkey soup in a deep red broth. | `TT-0788.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0804 | Jocón | Guatemalan | Chicken in a green herb and sesame sauce. | `TT-0804.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0762 | Tamales Colorados | Guatemalan | Red masa tamales with pork and olives. | `TT-0762.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0777 | Rellenitos | Guatemalan | Fried plantain dumplings stuffed with sweet beans. | `TT-0777.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0810 | Fiambre | Guatemalan | An elaborate cold salad for All Saints’ Day. | `TT-0810.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0816 | Plátanos en Mole | Guatemalan | Fried plantains in a chocolate and chili sauce. | `TT-0816.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0652 | Pupusas | Salvadoran | Thick griddled masa cakes with a savory filling. | `TT-0652.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0789 | Curtido | Salvadoran | Lightly fermented slaw served with pupusas. | `TT-0789.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0769 | Yuca Frita con Chicharrón | Salvadoran | Fried cassava with crisp pork and slaw. | `TT-0769.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0805 | Pastelitos Salvadoreños | Salvadoran | Fried turnovers with a savory filling. | `TT-0805.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0790 | Panes con Pavo | Salvadoran | A warm turkey sandwich in a sauce of roasted spices. | `TT-0790.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0820 | Horchata de Morro | Salvadoran | A nutty, cinnamon seed drink. | `TT-0820.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0825 | Nuégados | Salvadoran | Fried yuca rings in spiced syrup. | `TT-0825.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0720 | La Bandera | Dominican | The “flag”: rice, beans and stewed meat. | `TT-0720.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0735 | Mangú | Dominican | Mashed boiled plantain with pickled onions. | `TT-0735.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0730 | Sancocho Dominicano | Dominican | A seven-meat root-vegetable stew for celebrations. | `TT-0730.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0791 | Chicharrones de Pollo | Dominican | Crunchy fried chicken pieces with garlic and lime. | `TT-0791.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0778 | Habichuelas Guisadas | Dominican | Stewed red beans served over white rice. | `TT-0778.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0817 | Habichuelas con Dulce | Dominican | A sweet bean cream for Lent. | `TT-0817.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0792 | Pastelón | Dominican | Sweet plantain “lasagna” layered with spiced beef. | `TT-0792.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0702 | Chivito | Uruguayan | Uruguay’s towering steak sandwich. | `TT-0702.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0721 | Asado Uruguayo | Uruguayan | Beef and sausage grilled over embers with chimichurri. | `TT-0721.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0770 | Milanesa Napolitana | Uruguayan | Breaded steak topped with sauce, ham and cheese. | `TT-0770.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0793 | Olímpico | Uruguayan | A triple-decker club sandwich. | `TT-0793.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0811 | Torta Frita | Uruguayan | Rainy-day fried bread rounds. | `TT-0811.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0806 | Pasta Frola | Uruguayan | A lattice-topped jam tart. | `TT-0806.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0794 | Chajá | Uruguayan | Sponge cake layered with cream, dulce de leche and meringue. | `TT-0794.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0650 | Birria Tacos | Mexican | Jalisco’s chili-braised beef in crisp cheesy tortillas, served with consommé for dipping. | `TT-0650.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0656 | Tamales | Mexican | Steamed masa parcels with savory fillings. | `TT-0656.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0678 | Cochinita Pibil | Mexican | Yucatán pork marinated in citrus and slow-roasted. | `TT-0678.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0663 | Carnitas | Mexican | Pork simmered in its own fat until crisp at the edges. | `TT-0663.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0672 | Enchiladas Rojas | Mexican | Tortillas dipped in red chili sauce and baked. | `TT-0672.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0703 | Tacos de Pescado | Mexican | Baja-style battered fish tacos. | `TT-0703.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0664 | Quesadilla | Mexican | Folded griddled tortillas with melted cheese. | `TT-0664.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0704 | Horchata | Mexican | A chilled, creamy rice and cinnamon drink. | `TT-0704.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0653 | Philly Cheesesteak | American | Thin-sliced steak and melted cheese on a roll. | `TT-0653.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0712 | Biscuits and Gravy | American | Fluffy biscuits under peppery sausage gravy. | `TT-0712.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0654 | Brownies | American | Fudgy chocolate squares. | `TT-0654.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0713 | Chicken and Waffles | American | Fried chicken with waffles and syrup. | `TT-0713.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0714 | Meatloaf | American | Baked ground beef with a glossy glaze. | `TT-0714.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0722 | Corn Dog | American | A battered sausage on a stick. | `TT-0722.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0695 | Anticuchos | Peruvian | Grilled skewers marinated in chili and vinegar. | `TT-0695.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0731 | Causa | Peruvian | Cold layered potato terrine with a creamy filling. | `TT-0731.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ✅ created | TT-0002 | Sushi | Japanese | Vinegared rice with the freshest fish. | `TT-0002.webp` | WebP | 1024 × 1024 px | 150–300 KB | 162 KB |
| ✅ created | TT-0005 | Ramen | Japanese | Noodles in a deep, slow-simmered broth. | `TT-0005.webp` | WebP | 1024 × 1024 px | 150–300 KB | 168 KB |
| ⬜ to create | TT-0101 | Tempura | Japanese | Feather-light battered fritters. | `TT-0101.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0055 | Miso Soup | Japanese | Everyday soup of dashi and miso. | `TT-0055.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0079 | Teriyaki Chicken | Japanese | Glossy, sweet-savoury glaze. | `TT-0079.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0420 | Okonomiyaki | Japanese | Savory pancake, "grilled as you like it". | `TT-0420.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0102 | Tonkatsu | Japanese | Panko-crusted pork cutlet. | `TT-0102.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0080 | Yakitori | Japanese | Charcoal-grilled chicken skewers. | `TT-0080.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0103 | Sashimi | Japanese | Fresh-sliced raw fish with wasabi and soy. | `TT-0103.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0134 | Takoyaki | Japanese | Osaka’s crisp octopus balls. | `TT-0134.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0168 | Zaru Soba | Japanese | Chilled buckwheat noodles with dipping sauce. | `TT-0168.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ✅ created | TT-0031 | Kung Pao Chicken | Chinese | Sichuan stir-fry with numbing heat. | `TT-0031.webp` | WebP | 1024 × 1024 px | 150–300 KB | 154 KB |
| ⬜ to create | TT-0114 | Mapo Tofu | Chinese | Silken tofu in fiery bean sauce. | `TT-0114.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0056 | Peking Duck | Chinese | Lacquered roast duck in thin pancakes. | `TT-0056.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ✅ created | TT-0012 | Jiaozi Dumplings | Chinese | Folded for Lunar New Year. | `TT-0012.webp` | WebP | 1024 × 1024 px | 150–300 KB | 157 KB |
| ✅ created | TT-0019 | Fried Rice | Chinese | Day-old rice, wok-tossed. | `TT-0019.webp` | WebP | 1024 × 1024 px | 150–300 KB | 155 KB |
| ⬜ to create | TT-0278 | Hot and Sour Soup | Chinese | Peppery, tangy and warming. | `TT-0278.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0081 | Char Siu | Chinese | Cantonese barbecued pork. | `TT-0081.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0364 | Salt and Pepper Squid | Chinese | Crisp wok-tossed squid with chili and garlic. | `TT-0364.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0382 | Garlic Bok Choy | Chinese | Quick stir-fry of crisp greens. | `TT-0382.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0135 | Wonton Soup | Chinese | Delicate dumplings in clear broth. | `TT-0135.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ✅ created | TT-0047 | Kimchi | Korean | Fermented napa cabbage. | `TT-0047.webp` | WebP | 1024 × 1024 px | 150–300 KB | 291 KB |
| ✅ created | TT-0039 | Bibimbap | Korean | Mixed rice in a sizzling stone bowl. | `TT-0039.webp` | WebP | 1024 × 1024 px | 150–300 KB | 213 KB |
| ⬜ to create | TT-0067 | Bulgogi | Korean | "Fire meat" — marinated grilled beef. | `TT-0067.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0201 | Tteokbokki | Korean | Chewy rice cakes in red chili sauce. | `TT-0201.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0149 | Japchae | Korean | Glass noodles stir-fried with vegetables. | `TT-0149.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0104 | Samgyeopsal | Korean | Grilled pork belly wrapped in lettuce. | `TT-0104.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0494 | Ojingeo Bokkeum | Korean | Fiery stir-fried squid. | `TT-0494.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ✅ created | TT-0006 | Pad Thai | Thai | Stir-fried rice noodles, sweet-sour-salty. | `TT-0006.webp` | WebP | 1024 × 1024 px | 150–300 KB | 188 KB |
| ✅ created | TT-0032 | Green Curry | Thai | Fragrant curry of fresh green chilies. | `TT-0032.webp` | WebP | 1024 × 1024 px | 150–300 KB | 159 KB |
| ⬜ to create | TT-0068 | Tom Yum | Thai | Hot and sour shrimp soup. | `TT-0068.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0226 | Som Tam | Thai | Pounded green papaya salad. | `TT-0226.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0105 | Mango Sticky Rice | Thai | Sweet coconut rice with ripe mango. | `TT-0105.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ✅ created | TT-0048 | Massaman Curry | Thai | A Persian-influenced, gently spiced curry. | `TT-0048.webp` | WebP | 1024 × 1024 px | 150–300 KB | 153 KB |
| ✅ created | TT-0013 | Pho | Vietnamese | Aromatic beef noodle soup. | `TT-0013.webp` | WebP | 1024 × 1024 px | 150–300 KB | 169 KB |
| ✅ created | TT-0033 | Bánh Mì | Vietnamese | French baguette, Vietnamese fillings. | `TT-0033.webp` | WebP | 1024 × 1024 px | 150–300 KB | 204 KB |
| ⬜ to create | TT-0150 | Gỏi Cuốn | Vietnamese | Fresh summer rolls in rice paper. | `TT-0150.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0169 | Bún Chả | Vietnamese | Grilled pork with noodles and herbs, Hanoi style. | `TT-0169.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0170 | Bánh Xèo | Vietnamese | Sizzling turmeric crêpes wrapped in lettuce and herbs. | `TT-0170.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0151 | Cà Phê Sữa Đá | Vietnamese | Strong drip coffee over sweet condensed milk and ice. | `TT-0151.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0330 | Cơm Tấm | Vietnamese | Broken rice with grilled pork, egg and pickles. | `TT-0330.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0411 | Canh Chua | Vietnamese | Sweet-and-sour fish soup of the Mekong Delta. | `TT-0411.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ✅ created | TT-0009 | Butter Chicken | Indian | Murgh makhani, born in Delhi. | `TT-0009.webp` | WebP | 1024 × 1024 px | 150–300 KB | 154 KB |
| ✅ created | TT-0014 | Biryani | Indian | Layered, perfumed rice. | `TT-0014.webp` | WebP | 1024 × 1024 px | 150–300 KB | 214 KB |
| ⬜ to create | TT-0082 | Chana Masala | Indian | Spiced chickpea curry. | `TT-0082.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0106 | Palak Paneer | Indian | Fresh cheese in spinach gravy. | `TT-0106.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0057 | Dal Tadka | Indian | Lentils finished with sizzling spices. | `TT-0057.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ✅ created | TT-0025 | Samosa | Indian | Crisp pastry pockets of spiced potato. | `TT-0025.webp` | WebP | 1024 × 1024 px | 150–300 KB | 153 KB |
| ⬜ to create | TT-0115 | Masala Dosa | Indian | Crisp fermented crêpe from the South. | `TT-0115.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0107 | Rogan Josh | Indian | Kashmiri lamb in a deep red gravy. | `TT-0107.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0069 | Gulab Jamun | Indian | Milk dumplings soaked in fragrant syrup. | `TT-0069.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ✅ created | TT-0034 | Masala Chai | Indian | Spiced milky tea from every street corner. | `TT-0034.webp` | WebP | 1024 × 1024 px | 150–300 KB | 157 KB |
| ⬜ to create | TT-0108 | Paneer Tikka | Indian | Tandoori-charred paneer and peppers. | `TT-0108.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0083 | Mango Lassi | Indian | Cooling mango and yogurt drink. | `TT-0083.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0171 | Rajma | Indian | Punjabi kidney bean curry, eaten with rice. | `TT-0171.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ✅ created | TT-0035 | Nasi Goreng | Indonesian | Sweet-soy fried rice. | `TT-0035.webp` | WebP | 1024 × 1024 px | 150–300 KB | 215 KB |
| ✅ created | TT-0040 | Rendang | Indonesian | Beef slow-cooked until the coconut caramelises. | `TT-0040.webp` | WebP | 1024 × 1024 px | 150–300 KB | 170 KB |
| ✅ created | TT-0049 | Satay | Indonesian | Skewers with peanut sauce. | `TT-0049.webp` | WebP | 1024 × 1024 px | 150–300 KB | 176 KB |
| ⬜ to create | TT-0292 | Gado-Gado | Indonesian | Vegetable salad in peanut dressing. | `TT-0292.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0227 | Soto Ayam | Indonesian | Golden turmeric chicken soup. | `TT-0227.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0172 | Mie Goreng | Indonesian | Sweet, smoky fried noodles. | `TT-0172.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0365 | Sambal Terasi | Indonesian | Fiery chili relish pounded with fermented shrimp paste. | `TT-0365.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0383 | Martabak Manis | Indonesian | Thick street pancake stuffed with chocolate and peanuts. | `TT-0383.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0070 | Chicken Adobo | Filipino | Braised in vinegar and soy — the national dish. | `TT-0070.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0257 | Sinigang | Filipino | Sour tamarind soup. | `TT-0257.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0173 | Lumpia | Filipino | Crisp, slender spring rolls. | `TT-0173.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0228 | Pancit | Filipino | Birthday noodles for long life. | `TT-0228.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0202 | Lechon | Filipino | Whole spit-roasted pig. | `TT-0202.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0513 | Atchara | Filipino | Pickled green papaya, the Filipino table’s tangy side. | `TT-0513.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0258 | Halo-Halo | Filipino | Shaved ice layered with sweet beans, fruit and milk. | `TT-0258.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ✅ created | TT-0050 | Nasi Lemak | Malaysian | Coconut rice with sambal — the national breakfast. | `TT-0050.webp` | WebP | 1024 × 1024 px | 150–300 KB | 155 KB |
| ✅ created | TT-0041 | Laksa | Malaysian | Spicy coconut noodle soup. | `TT-0041.webp` | WebP | 1024 × 1024 px | 150–300 KB | 185 KB |
| ⬜ to create | TT-0116 | Roti Canai | Malaysian | Flaky griddled flatbread with curry. | `TT-0116.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0136 | Char Kway Teow | Malaysian | Smoky wok-fried flat noodles. | `TT-0136.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0293 | Kaya Toast | Malaysian | Coconut jam toast with soft eggs. | `TT-0293.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0259 | Chili Crab | Malaysian | Messy, glorious crab in sweet chili-tomato sauce. | `TT-0259.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0229 | Hoppers | Sri Lankan | Bowl-shaped crêpes with crisp lacy edges. | `TT-0229.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0174 | Kottu Roti | Sri Lankan | Chopped flatbread stir-fry, clattered on a griddle. | `TT-0174.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0446 | Fish Ambul Thiyal | Sri Lankan | Sour, peppery fish curry. | `TT-0446.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0331 | Parippu | Sri Lankan | Creamy coconut dhal. | `TT-0331.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0384 | Pol Sambol | Sri Lankan | Fresh coconut relish. | `TT-0384.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0412 | Pumpkin Curry | Sri Lankan | Golden pumpkin simmered in coconut. | `TT-0412.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0495 | Polos Curry | Sri Lankan | Young jackfruit curry. | `TT-0495.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0051 | Poke | Hawaiian | Cubed raw fish, dressed simply. | `TT-0051.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0260 | Loco Moco | Hawaiian | Rice, burger patty, fried egg and gravy. | `TT-0260.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0332 | Kalua Pig | Hawaiian | Whole pig steamed in an underground imu. | `TT-0332.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0230 | Spam Musubi | Hawaiian | Glazed luncheon meat on rice, wrapped in nori. | `TT-0230.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0294 | Huli Huli Chicken | Hawaiian | Turned-and-turned teriyaki-style grilled chicken. | `TT-0294.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0366 | Banana Macadamia Bread | Hawaiian | Island banana bread with buttery nuts. | `TT-0366.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0084 | Plov | Uzbek | Rice cooked in a vast kazan for weddings. | `TT-0084.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0231 | Samsa | Uzbek | Tandoor-baked meat pastries. | `TT-0231.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0261 | Lagman | Uzbek | Hand-pulled noodles with a rich stew. | `TT-0261.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0203 | Shashlik | Uzbek | Silk Road skewers over vine-wood coals. | `TT-0203.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0367 | Manti | Uzbek | Steamed lamb dumplings topped with yogurt. | `TT-0367.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0447 | Shurpa | Uzbek | Fragrant lamb and vegetable soup. | `TT-0447.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0333 | Non | Uzbek | Round tandoor bread stamped with a pattern. | `TT-0333.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0527 | Achichuk | Uzbek | Razor-thin tomato and onion salad served with plov. | `TT-0527.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0204 | Mohinga | Burmese | Fish and rice-noodle soup, the national breakfast. | `TT-0204.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0295 | Lahpet Thoke | Burmese | Fermented tea leaf salad with crunchy beans. | `TT-0295.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0368 | Shan Noodles | Burmese | Sticky rice noodles in a tomato-chicken sauce. | `TT-0368.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0385 | Ohn No Khao Swè | Burmese | Coconut chicken noodle soup. | `TT-0385.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0496 | Nan Gyi Thoke | Burmese | Thick rice noodles tossed with chicken curry and chickpea powder. | `TT-0496.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0528 | Samusa Thoke | Burmese | Crushed samosas dressed as a salad. | `TT-0528.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0537 | Shwe Yin Aye | Burmese | Cooling coconut dessert with tapioca pearls and jackfruit. | `TT-0537.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0448 | Wetthar Hin | Burmese | Slow-cooked Burmese pork curry. | `TT-0448.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0085 | Momo | Nepali | Pleated dumplings with a fiery tomato achar. | `TT-0085.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0137 | Dal Bhat | Nepali | "Dal bhat power, 24 hour." | `TT-0137.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0413 | Sel Roti | Nepali | Ring-shaped festival bread. | `TT-0413.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0296 | Thukpa | Nepali | Himalayan noodle soup. | `TT-0296.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0514 | Choila | Nepali | Newari spiced grilled meat salad. | `TT-0514.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0497 | Aloo Tama | Nepali | Sour bamboo shoot and potato curry. | `TT-0497.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0529 | Yomari | Nepali | Steamed rice-flour dumplings filled with sesame and molasses. | `TT-0529.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0515 | Chatamari | Nepali | Newari rice-flour crêpe, the “Nepali pizza”. | `TT-0515.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0052 | Hainanese Chicken Rice | Singaporean | Poached chicken with fragrant rice and chili sauce. | `TT-0052.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0262 | Bak Kut Teh | Singaporean | Peppery pork-rib soup, eaten at breakfast. | `TT-0262.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0369 | Chai Tow Kway | Singaporean | Pan-fried radish cake, known as “carrot cake”. | `TT-0369.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0334 | Kopi | Singaporean | Kopitiam coffee, thick and sweet. | `TT-0334.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0449 | Ice Kachang | Singaporean | Shaved-ice mountain with beans, corn and syrup. | `TT-0449.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0335 | Pandan Chiffon Cake | Singaporean | Airy green cake perfumed with pandan. | `TT-0335.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0263 | Fish Amok | Cambodian | Steamed fish curry mousse in banana leaf. | `TT-0263.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0336 | Lok Lak | Cambodian | Stir-fried beef with lime-pepper dipping sauce. | `TT-0336.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0450 | Nom Banh Chok | Cambodian | Khmer noodles in green fish curry. | `TT-0450.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0498 | Kuy Teav | Cambodian | Phnom Penh breakfast noodle soup. | `TT-0498.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0414 | Bai Sach Chrouk | Cambodian | Grilled pork and rice for breakfast. | `TT-0414.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0530 | Samlor Machu Trey | Cambodian | Sweet-and-sour Cambodian fish soup. | `TT-0530.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0086 | Beef Noodle Soup | Taiwanese | Taiwan’s national bowl of braised beef. | `TT-0086.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0138 | Gua Bao | Taiwanese | Steamed bun folded around braised pork belly. | `TT-0138.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0152 | Scallion Pancake | Taiwanese | Flaky, chewy griddled flatbread. | `TT-0152.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0053 | Bubble Tea | Taiwanese | Milk tea with chewy tapioca pearls. | `TT-0053.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0205 | Lu Rou Fan | Taiwanese | Braised pork rice, Taiwan’s comfort food. | `TT-0205.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0206 | Popcorn Chicken | Taiwanese | Crisp bites of fried chicken with fried basil. | `TT-0206.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0337 | Nihari | Pakistani | Slow-cooked beef stew for breakfast. | `TT-0337.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0207 | Chicken Karahi | Pakistani | Chicken cooked fast in a wok-like pan. | `TT-0207.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0232 | Seekh Kebab | Pakistani | Spiced minced lamb grilled on skewers. | `TT-0232.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0415 | Haleem | Pakistani | Hours-long porridge of grains, lentils and meat. | `TT-0415.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0264 | Kheer | Pakistani | Creamy rice pudding scented with cardamom. | `TT-0264.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0451 | Chapli Kebab | Pakistani | Flat spiced patties fried to a crisp. | `TT-0451.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0139 | Meat Pie | Australian | The footy-night hand pie. | `TT-0139.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0175 | Lamington | Australian | Sponge squares dipped in chocolate and coconut. | `TT-0175.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0117 | Pavlova | Australian | Crisp meringue shell with cream and fruit. | `TT-0117.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0452 | Barramundi | Australian | Pan-seared barramundi with lemon butter. | `TT-0452.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0297 | Anzac Biscuits | Australian | Chewy oat and coconut biscuits. | `TT-0297.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0386 | Macadamia Cookies | Australian | Buttery cookies with native Australian nuts. | `TT-0386.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0550 | Kacchi Biryani | Bangladeshi | Raw marinated meat layered with rice and cooked sealed. | `TT-0550.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0571 | Bhuna Khichuri | Bangladeshi | Rice and lentils cooked with spices, a rainy-day comfort. | `TT-0571.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0558 | Shorshe Ilish | Bangladeshi | Hilsa fish in a sharp mustard sauce. | `TT-0558.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0563 | Beef Bhuna | Bangladeshi | A dry, deeply browned beef curry. | `TT-0563.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0578 | Fuchka | Bangladeshi | Crisp shells stuffed with spiced potato and tamarind water. | `TT-0578.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0586 | Mishti Doi | Bangladeshi | Caramelised sweet set yogurt. | `TT-0586.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0579 | Chingri Malai Curry | Bangladeshi | Prawns in a gentle spiced coconut gravy. | `TT-0579.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0552 | Buuz | Mongolian | Steamed dumplings eaten at Tsagaan Sar. | `TT-0552.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0572 | Khuushuur | Mongolian | Large fried meat turnovers. | `TT-0572.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0593 | Tsuivan | Mongolian | Hand-cut noodles stir-fried with meat and vegetables. | `TT-0593.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0603 | Suutei Tsai | Mongolian | Salted milk tea, drunk all day. | `TT-0603.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0643 | Khorkhog | Mongolian | Lamb cooked with hot stones in a sealed pot. | `TT-0643.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0649 | Aaruul | Mongolian | Sun-dried milk curds, hard, sour and long lasting. | `TT-0649.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0648 | Boortsog | Mongolian | Fried dough biscuits served with milk tea. | `TT-0648.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0548 | Larb | Laotian | Minced meat salad with toasted rice and herbs. | `TT-0548.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0564 | Tam Mak Hoong | Laotian | Pounded green papaya salad. | `TT-0564.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0587 | Sai Oua | Laotian | Herby grilled sausage from Luang Prabang. | `TT-0587.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0594 | Khao Poon | Laotian | Spicy coconut noodle soup. | `TT-0594.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0636 | Mok Pa | Laotian | Fish steamed in a banana-leaf parcel. | `TT-0636.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0615 | Khao Jee Baguette | Laotian | A legacy of French rule: baguettes with pâté and pickles. | `TT-0615.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0624 | Nam Khao | Laotian | Crispy rice salad with sour pork. | `TT-0624.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0549 | Kabuli Pulao | Afghan | Afghanistan’s national dish with sweet carrots and raisins. | `TT-0549.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0573 | Mantu | Afghan | Steamed dumplings in tomato and yogurt sauce. | `TT-0573.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0625 | Ashak | Afghan | Leek-filled dumplings under meat sauce and yogurt. | `TT-0625.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0588 | Bolani | Afghan | Thin stuffed flatbreads fried until crisp. | `TT-0588.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0626 | Qorma-e-Sabzi | Afghan | A green herb and meat stew. | `TT-0626.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0604 | Naan-e-Afghani | Afghan | Long oval flatbread baked on tandoor walls. | `TT-0604.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0637 | Firni | Afghan | Cardamom milk pudding set in small bowls. | `TT-0637.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0605 | Chawanmushi | Japanese | Silky savoury steamed egg custard. | `TT-0605.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0544 | Chole Bhature | Indian | Spicy chickpeas with puffy fried bread. | `TT-0544.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0539 | Tom Yum Goong | Thai | Hot and sour shrimp soup. | `TT-0539.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0541 | Kimchi Jjigae | Korean | Bubbling stew of aged kimchi and pork. | `TT-0541.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0574 | Ube Halaya | Filipino | Purple yam jam, rich and sweet. | `TT-0574.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0715 | Beshbarmak | Kazakh | “Five fingers”: boiled meat over wide noodles in broth. | `TT-0715.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0744 | Baursak | Kazakh | Puffy fried dough balls served at every feast. | `TT-0744.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0812 | Kuyrdak | Kazakh | Fried liver and offal with onions and potatoes. | `TT-0812.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0750 | Kazakh Manti | Kazakh | Large steamed dumplings filled with lamb and pumpkin. | `TT-0750.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0751 | Kazakh Palau | Kazakh | Lamb and carrot pilaf. | `TT-0751.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0795 | Sorpa | Kazakh | A clear lamb broth with vegetables. | `TT-0795.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0779 | Naryn | Kazakh | Hand-cut noodles tossed with boiled meat and onion. | `TT-0779.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0665 | Udon | Japanese | Thick, chewy wheat noodles in hot broth. | `TT-0665.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0673 | Onigiri | Japanese | Hand-formed rice balls wrapped in nori. | `TT-0673.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0689 | Mochi | Japanese | Soft, stretchy rice cakes. | `TT-0689.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0679 | Katsu Curry | Japanese | Crumbed cutlet under mild Japanese curry. | `TT-0679.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0705 | Gyudon | Japanese | Thinly sliced simmered beef over rice. | `TT-0705.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0696 | Soba | Japanese | Cool buckwheat noodles with dipping sauce. | `TT-0696.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0752 | Dorayaki | Japanese | Pancake sandwiches filled with sweet red bean paste. | `TT-0752.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0666 | Dan Dan Noodles | Chinese | Sichuan noodles in a numbing, nutty sauce. | `TT-0666.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0657 | Xiaolongbao | Chinese | Soup dumplings from Shanghai. | `TT-0657.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0690 | Congee | Chinese | Smooth rice porridge with savoury toppings. | `TT-0690.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0680 | Har Gow | Chinese | Translucent shrimp dumplings. | `TT-0680.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0667 | Sweet and Sour Pork | Chinese | Crisp pork in a bright sweet-sour glaze. | `TT-0667.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0697 | Egg Tart | Chinese | Flaky pastry cups with a silky custard. | `TT-0697.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0668 | Chow Mein | Chinese | Stir-fried noodles with vegetables. | `TT-0668.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0691 | Scallion Pancakes | Chinese | Flaky pan-fried flatbreads layered with scallions. | `TT-0691.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0681 | Idli | Indian | Steamed rice and lentil cakes. | `TT-0681.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0674 | Dal Makhani | Indian | Slow-cooked black lentils in butter and cream. | `TT-0674.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0692 | Pav Bhaji | Indian | Mashed spiced vegetables with buttered rolls. | `TT-0692.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0716 | Rasmalai | Indian | Cheese dumplings soaked in cardamom milk. | `TT-0716.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0698 | Lassi | Indian | A chilled yogurt drink, sweet or salty. | `TT-0698.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0651 | Chicken Tikka Masala | Indian | Grilled chicken in a creamy spiced tomato sauce. | `TT-0651.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0655 | Pad Kra Pao | Thai | Fiery stir-fry with holy basil over rice. | `TT-0655.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0660 | Tom Kha Gai | Thai | Coconut and galangal chicken soup. | `TT-0660.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0682 | Khao Soi | Thai | Northern curry noodle soup with crispy noodles on top. | `TT-0682.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0683 | Pad See Ew | Thai | Wide rice noodles stir-fried in sweet soy. | `TT-0683.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0684 | Panang Curry | Thai | A thick, nutty, mildly sweet red curry. | `TT-0684.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0658 | Korean Fried Chicken | Korean | Twice-fried chicken with a sticky glaze. | `TT-0658.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0699 | Sundubu Jjigae | Korean | Bubbling soft tofu stew. | `TT-0699.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0675 | Kimbap | Korean | Seaweed rice rolls with colourful fillings. | `TT-0675.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0723 | Bingsu | Korean | Shaved milk ice with sweet toppings. | `TT-0723.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0706 | Bò Lúc Lắc | Vietnamese | “Shaking” stir-fried beef cubes. | `TT-0706.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0685 | Chả Giò | Vietnamese | Crispy fried spring rolls. | `TT-0685.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0753 | Chè | Vietnamese | A sweet dessert soup. | `TT-0753.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0763 | Tsebhi Dorho | Eritrean | Spicy chicken stew with a boiled egg. | `TT-0763.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0754 | Hāngī | New Zealander | Food steamed in an earth oven over hot stones. | `TT-0754.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0724 | Kiwi Meat Pie | New Zealander | A handheld minced-beef pie. | `TT-0724.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0796 | Whitebait Fritters | New Zealander | Tiny fish folded into batter. | `TT-0796.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0755 | Roast Lamb with Mint Sauce | New Zealander | A Sunday roast. | `TT-0755.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0771 | Hokey Pokey Ice Cream | New Zealander | Vanilla ice cream with honeycomb toffee. | `TT-0771.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0821 | Pāua Fritters | New Zealander | Fritters of local sea snail. | `TT-0821.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0826 | Rēwena Bread | New Zealander | Māori sourdough made with a potato starter. | `TT-0826.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ✅ created | TT-0015 | Hummus | Levantine | Creamy chickpea and sesame purée. | `TT-0015.webp` | WebP | 1024 × 1024 px | 150–300 KB | 158 KB |
| ✅ created | TT-0026 | Falafel | Levantine | Herb-flecked chickpea fritters. | `TT-0026.webp` | WebP | 1024 × 1024 px | 150–300 KB | 163 KB |
| ✅ created | TT-0020 | Shawarma | Levantine | Spit-roasted meat shaved thin. | `TT-0020.webp` | WebP | 1024 × 1024 px | 150–300 KB | 160 KB |
| ⬜ to create | TT-0208 | Tabbouleh | Levantine | A parsley salad, not a grain salad. | `TT-0208.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0071 | Baklava | Levantine | Honeyed layers of nuts and phyllo. | `TT-0071.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ✅ created | TT-0042 | Shakshuka | Levantine | Eggs poached in spiced tomato. | `TT-0042.webp` | WebP | 1024 × 1024 px | 150–300 KB | 170 KB |
| ⬜ to create | TT-0176 | Kibbeh | Levantine | Torpedo-shaped bulgur shells stuffed with spiced lamb. | `TT-0176.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0140 | Lamb Tagine | Moroccan | Slow-cooked under a conical lid. | `TT-0140.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0177 | Vegetable Couscous | Moroccan | Friday couscous with seven vegetables. | `TT-0177.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0421 | Harira | Moroccan | Soup that breaks the Ramadan fast. | `TT-0421.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0453 | Chicken Pastilla | Moroccan | Sweet-savoury pie dusted with cinnamon sugar. | `TT-0453.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0416 | Zaalouk | Moroccan | Smoky eggplant and tomato salad. | `TT-0416.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0265 | Kefta Tagine | Moroccan | Meatballs and eggs in tomato sauce. | `TT-0265.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0464 | Sardine Chermoula | Moroccan | Sardines stuffed with chermoula, grilled or fried. | `TT-0464.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0370 | Doro Wat | Ethiopian | Slow-simmered chicken in berbere. | `TT-0370.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0422 | Misir Wat | Ethiopian | Spiced red lentil stew. | `TT-0422.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0465 | Shiro | Ethiopian | Silky ground-chickpea stew. | `TT-0465.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0499 | Kitfo | Ethiopian | Minced beef warmed in spiced butter. | `TT-0499.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0338 | Tibs | Ethiopian | Sizzling sautéed beef, served to honour guests. | `TT-0338.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0516 | Gomen | Ethiopian | Collard-style greens in spiced butter. | `TT-0516.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0109 | Adana Kebab | Turkish | Hand-minced lamb on wide skewers. | `TT-0109.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0266 | Menemen | Turkish | Soft-scrambled eggs with peppers and tomato. | `TT-0266.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0387 | İmam Bayıldı | Turkish | "The imam fainted" — olive-oil braised eggplant. | `TT-0387.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0178 | Lahmacun | Turkish | Thin flatbread with spiced lamb. | `TT-0178.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0233 | Turkish Coffee | Turkish | Unfiltered and thick, read from the grounds. | `TT-0233.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0179 | Köfte | Turkish | Grilled spiced meatballs. | `TT-0179.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0234 | Simit | Turkish | Sesame-crusted bread ring. | `TT-0234.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0267 | Mercimek Çorbası | Turkish | Red lentil soup with lemon. | `TT-0267.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0268 | Ghormeh Sabzi | Persian | Iran’s beloved herb stew. | `TT-0268.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0388 | Fesenjan | Persian | Walnut and pomegranate braise. | `TT-0388.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0298 | Tahdig | Persian | The prized golden crust of the rice pot. | `TT-0298.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0500 | Kuku Sabzi | Persian | A frittata that is mostly herbs. | `TT-0500.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0339 | Joojeh Kabab | Persian | Saffron chicken skewers. | `TT-0339.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0454 | Ash Reshteh | Persian | Herb and noodle soup for Nowruz. | `TT-0454.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ✅ created | TT-0043 | Jollof Rice | West African | Party rice — and the subject of friendly rivalry. | `TT-0043.webp` | WebP | 1024 × 1024 px | 150–300 KB | 171 KB |
| ⬜ to create | TT-0371 | Egusi Soup | West African | Leafy soup thickened with melon seeds. | `TT-0371.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0180 | Suya | West African | Spice-crusted grilled skewers. | `TT-0180.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0299 | Puff-Puff | West African | Pillowy fried dough balls. | `TT-0299.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0417 | Akara | West African | Bean fritters for breakfast. | `TT-0417.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0389 | Fufu and Okra Soup | West African | Pounded cassava with silky okra soup. | `TT-0389.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0141 | Koshari | Egyptian | Cairo’s carb-on-carb street feast. | `TT-0141.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0181 | Ful Medames | Egyptian | Slow-stewed fava beans for breakfast. | `TT-0181.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0455 | Molokhia | Egyptian | Silky green soup of jute leaves. | `TT-0455.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0269 | Ta’ameya | Egyptian | Egypt’s green fava-bean falafel. | `TT-0269.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0466 | Fattah | Egyptian | Feast-day layers of bread, rice and meat. | `TT-0466.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0456 | Karkade | Egyptian | Chilled hibiscus tea. | `TT-0456.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0372 | Basbousa | Egyptian | Semolina cake soaked in syrup. | `TT-0372.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0457 | Hawawshi | Egyptian | Baked bread stuffed with spiced meat. | `TT-0457.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0235 | Bobotie | South African | Spiced mince baked under a savoury custard. | `TT-0235.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0209 | Bunny Chow | South African | Durban curry served in a hollowed loaf. | `TT-0209.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0270 | Boerewors | South African | Coiled farmer’s sausage for the braai. | `TT-0270.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0390 | Chakalaka | South African | Spicy township relish. | `TT-0390.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0340 | Malva Pudding | South African | Sticky apricot sponge with hot cream sauce. | `TT-0340.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0236 | Biltong | South African | Air-dried, spice-cured beef. | `TT-0236.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0271 | Sabich | Israeli | Pita stuffed with fried eggplant, egg and amba. | `TT-0271.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0182 | Israeli Salad | Israeli | Finely diced vegetables dressed with lemon. | `TT-0182.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0517 | Chopped Liver | Israeli | Silky liver spread with caramelized onions. | `TT-0517.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0518 | Cholent | Israeli | Sabbath stew that cooks overnight. | `TT-0518.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0341 | Rugelach | Israeli | Crescent pastries rolled with nuts and cinnamon. | `TT-0341.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0210 | Matzo Ball Soup | Israeli | Chicken soup with fluffy dumplings. | `TT-0210.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0272 | Brik | Tunisian | Crisp pastry with a runny egg inside. | `TT-0272.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0458 | Lablabi | Tunisian | Chickpea soup ladled over torn bread. | `TT-0458.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0391 | Ojja | Tunisian | Eggs poached in spicy tomato with sausage. | `TT-0391.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0467 | Salade Méchouia | Tunisian | Grilled pepper and tomato salad. | `TT-0467.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0501 | Makroud | Tunisian | Diamond-shaped semolina pastries soaked in honey. | `TT-0501.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0502 | Fricassé | Tunisian | Fried bread rolls stuffed with tuna and harissa. | `TT-0502.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0110 | Thieboudienne | Senegalese | Senegal’s national dish of fish and tomato rice. | `TT-0110.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0183 | Yassa Poulet | Senegalese | Chicken in tangy caramelized onions. | `TT-0183.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0300 | Mafé | Senegalese | Rich peanut stew. | `TT-0300.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0418 | Bissap | Senegalese | Ruby hibiscus cooler. | `TT-0418.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0531 | Thiakry | Senegalese | Sweet millet pudding with yogurt. | `TT-0531.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0459 | Fataya | Senegalese | Crescent-shaped fish pastries. | `TT-0459.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0273 | Nyama Choma | Kenyan | Grilled meat shared with friends. | `TT-0273.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0342 | Ugali | Kenyan | Firm maize porridge eaten with the hands. | `TT-0342.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0373 | Sukuma Wiki | Kenyan | Sautéed greens, “stretch the week”. | `TT-0373.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0503 | Githeri | Kenyan | Corn and bean stew. | `TT-0503.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0274 | Mandazi | Kenyan | Lightly sweet fried dough. | `TT-0274.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0343 | Pilau | Kenyan | Spiced rice of the Swahili coast. | `TT-0343.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0559 | Waakye | Ghanaian | Rice and beans cooked with sorghum leaves, a breakfast stall favourite. | `TT-0559.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0580 | Banku with Tilapia | Ghanaian | Fermented dough balls with grilled tilapia and pepper sauce. | `TT-0580.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0565 | Fufu with Light Soup | Ghanaian | Pounded cassava and plantain with a peppery broth. | `TT-0565.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0560 | Kelewele | Ghanaian | Spiced fried plantain cubes. | `TT-0560.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0589 | Groundnut Soup | Ghanaian | Rich peanut soup served with rice balls. | `TT-0589.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0581 | Red Red | Ghanaian | Bean stew in palm oil with fried plantain. | `TT-0581.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0644 | Shito | Ghanaian | A dark, spicy pepper relish. | `TT-0644.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0627 | Ampesi | Ghanaian | Boiled yam and plantain with pepper stew. | `TT-0627.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0606 | Yam Porridge | West African | Soft yam simmered in a spicy palm oil sauce. | `TT-0606.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0628 | Chakhchoukha | Algerian | Torn flatbread soaked in spicy lamb stew. | `TT-0628.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0638 | Rechta | Algerian | Fine noodles in a white sauce with chicken. | `TT-0638.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0607 | Chorba Frik | Algerian | Ramadan soup with cracked green wheat and herbs. | `TT-0607.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0629 | Mhajeb | Algerian | Stuffed folded crêpes with tomato and onion. | `TT-0629.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0630 | Tajine Zitoune | Algerian | Chicken stewed with olives and preserved lemon. | `TT-0630.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0639 | Garantita | Algerian | Baked chickpea flan served in a sandwich. | `TT-0639.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0582 | Masgouf | Iraqi | River carp split and grilled upright beside fire. | `TT-0582.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0590 | Iraqi Kubba | Iraqi | Crisp rice shells filled with spiced meat. | `TT-0590.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0616 | Tashreeb | Iraqi | Torn bread soaked in a lamb and tomato broth. | `TT-0616.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0608 | Kleicha | Iraqi | Iraq’s national cookie, filled with dates. | `TT-0608.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0640 | Tepsi Baytinijan | Iraqi | Layered baked eggplant and meat casserole. | `TT-0640.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0641 | Samoon | Iraqi | Diamond-shaped bread with a crisp crust. | `TT-0641.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0617 | Timman Bagilla | Iraqi | Dill rice cooked with broad beans and ghee. | `TT-0617.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0645 | Incir Tatlısı | Turkish | Stewed figs stuffed with walnuts and served with cream. | `TT-0645.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0554 | İskender Kebap | Turkish | Sliced doner on bread with tomato sauce and browned butter. | `TT-0554.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0591 | Maamoul | Levantine | Buttery semolina cookies filled with dates or nuts. | `TT-0591.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0669 | Injera | Ethiopian | The spongy sour pancake that is plate and spoon. | `TT-0669.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0807 | Genfo | Ethiopian | A thick porridge with a well of spiced butter. | `TT-0807.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0745 | Zigni | Eritrean | Spicy beef stew eaten with injera. | `TT-0745.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0780 | Injera Firfir | Eritrean | Torn injera tossed in spicy sauce. | `TT-0780.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0813 | Eritrean Ful | Eritrean | Mashed fava beans with eggs and chili. | `TT-0813.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0822 | Hilbet | Eritrean | A creamy bean and lentil dip. | `TT-0822.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0823 | Kitcha Fit-Fit | Eritrean | Shredded flatbread in spiced butter. | `TT-0823.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0707 | Bariis Iskukaris | Somali | Spiced rice with lamb and raisins. | `TT-0707.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0756 | Canjeero | Somali | Thin spongy pancakes for breakfast. | `TT-0756.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0746 | Suqaar | Somali | Cubes of beef quickly stir-fried. | `TT-0746.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0708 | Sambusa | Somali | Crisp triangular pastries, a Ramadan must. | `TT-0708.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0781 | Maraq | Somali | A fragrant meat and vegetable broth. | `TT-0781.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0797 | Xalwo | Somali | A glossy, chewy sweet. | `TT-0797.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0757 | Shaah | Somali | Spiced milk tea. | `TT-0757.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0758 | Zanzibar Pizza | Tanzanian | A folded, griddled street “pizza”. | `TT-0758.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0736 | Zanzibari Pilau | Tanzanian | Fragrant spiced rice. | `TT-0736.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0798 | Mchicha | Tanzanian | Greens in coconut and peanut sauce. | `TT-0798.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0782 | Maharage ya Nazi | Tanzanian | Beans simmered in coconut milk. | `TT-0782.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0747 | Mishkaki | Tanzanian | Marinated beef skewers. | `TT-0747.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0818 | Urojo | Tanzanian | Zanzibar mix soup with crispy toppings. | `TT-0818.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0670 | Kabsa | Saudi | Spiced rice and meat, the Arabian national dish. | `TT-0670.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0799 | Jareesh | Saudi | Cracked wheat porridge with yogurt. | `TT-0799.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0759 | Mutabbaq | Saudi | Stuffed pan-fried pastry. | `TT-0759.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0783 | Saleeg | Saudi | Creamy rice cooked in milk. | `TT-0783.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0814 | Hanini | Saudi | A warm date and flour sweet. | `TT-0814.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0725 | Saudi Coffee | Saudi | Pale, spiced Arabic coffee served in small cups. | `TT-0725.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0815 | Margoog | Saudi | Stew with thin dough sheets. | `TT-0815.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0748 | Saltah | Yemeni | Frothy fenugreek stew in a hot stone pot. | `TT-0748.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0717 | Mandi | Yemeni | Meat and rice cooked in an underground oven. | `TT-0717.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0784 | Fahsa | Yemeni | Shredded beef stew. | `TT-0784.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0760 | Malawach | Yemeni | Flaky layered flatbread. | `TT-0760.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0819 | Aseed | Yemeni | Dough porridge eaten by hand. | `TT-0819.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0824 | Shafout | Yemeni | Flatbread in herbed yogurt, a Ramadan dish. | `TT-0824.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TT-0772 | Bint al-Sahn | Yemeni | The “daughter of the plate”: layered honey bread. | `TT-0772.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
