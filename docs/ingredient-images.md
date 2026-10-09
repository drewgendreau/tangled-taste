# Ingredient image reference guide

> Generated file: it is rebuilt automatically (`pnpm art:build`, which `pnpm dev` and `pnpm build` run). Do not edit it by hand.

**0 of 230 ingredient pictures are created. 230 still to create.**

One picture per ingredient. Placeholders in the prompt template: `{{name}}` = Ingredient, `{{category}}` = Family (lower case), `{{description}}` = Description. Ingredients have no cuisine; the Family column says what kind of ingredient it is. Pictures are shown small on the site, so keep the subject simple and bold.

## What every picture must be

| | |
|---|---|
| File format | WebP (.webp) |
| Pixel size | 1024 × 1024 px (square) |
| Target file size | 150–300 KB (hard limit 400 KB) |
| Saved in | `tangled-taste/art/ingredients/` |
| Output by Gemini to Google Drive in the folder | `04 Food/Tangled Taste/Ingredients` |
| File name | the item's permanent ID plus `.webp` (see the "Expected file name" column) |

## Required prompt wording

Always use this wording for the picture prompt (fill in the two bracketed parts):

```text
A delicate, refined watercolor food illustration of [DISH NAME AND KEY INGREDIENTS], viewed from a 45-degree angle looking down and slightly to the side. Soft fluid watercolor washes, visible cold-press paper grain texture, and subtle organic pigment bleeding on the food and dish. Rendered in a unique [VESSEL / SERVING DISH TYPE] with minimal, clean watercolor shading and no heavy blotches or mottled stains. Isolated on a completely clean, solid pure white background with no puddle splatters, background splotches, or external marks. Studio lighting, appetizing, high detail.
```

- **[DISH NAME AND KEY INGREDIENTS]**: for an ingredient picture, use the ingredient's name from the Ingredient column (and its Description if it helps), for example "Yam: a starchy brown tuber, one whole and one cut to show the pale flesh".
- **[VESSEL / SERVING DISH TYPE]**: how the ingredient is presented: a small bowl, a wooden board, a jar, a bunch tied with string, a scoop or spoon, or simply on its own without a vessel if it is naturally a whole item. Vary this across the set.

### Prompt template (additional detail)

This longer template adds composition and background details. Use it together with the required wording above, filling the `{{…}}` placeholders from the item's row (details under each list). Leave `{{extra}}` empty unless told otherwise.

```text
A polished, richly colored, hand-illustrated food illustration of {{name}} ({{category}}): {{description}} Show it the way it is usually bought or prepared, with a cut piece or half showing the inside if that helps it read clearly.

Composition: a single ingredient (or one small natural group of it), centered, seen in three-quarter view from slightly above. Square 1:1 image. It fills about 75% of the frame with at least 10% clear margin on every side; nothing touches or crosses an edge.

Background: pure white (#FFFFFF), flat and even, with no gradient, vignette, table, scene or props apart from a soft contact shadow directly under it.

Style: a hand-painted watercolor food illustration: soft translucent washes, delicate ink linework, gentle shading, rich natural color, soft light from the upper left. The same look for every picture in the set. No text, no letters, no logos, no hands, no people.

{{extra}}
```

## Still to create (230)

| ID | Ingredient | Family | Description | Expected file name |
|---|---|---|---|---|
| TI-0001 | onion | Vegetables | A pungent bulb that turns sweet and mellow when cooked; the quiet foundation of most savory dishes. | `TI-0001.webp` |
| TI-0002 | garlic | Vegetables | A sharp, aromatic bulb whose cloves add depth to almost every cuisine, raw or slowly cooked. | `TI-0002.webp` |
| TI-0003 | egg | Dairy & Eggs | A versatile staple that binds, enriches and thickens, as well as standing on its own. | `TI-0003.webp` |
| TI-0004 | flour | Grains & Starches | Ground grain that forms the backbone of bread, pasta, pastry and sauces. | `TI-0004.webp` |
| TI-0005 | butter | Dairy & Eggs | Churned cream that adds richness and nutty flavor to sauces and pastries. | `TI-0005.webp` |
| TI-0006 | sugar | Sauces, Oils & Pantry | A sweetener that also browns, preserves and balances sour or salty flavors. | `TI-0006.webp` |
| TI-0007 | chili | Spices & Chilies | A fiery fruit available fresh or dried, supplying heat and fruity depth worldwide. | `TI-0007.webp` |
| TI-0008 | tomato | Vegetables | A juicy, sweet-tart fruit treated as a vegetable; the base of countless sauces, stews and salads. | `TI-0008.webp` |
| TI-0009 | salt | Sauces, Oils & Pantry | The essential seasoning that sharpens and balances every other flavor. | `TI-0009.webp` |
| TI-0010 | potato | Vegetables | A starchy tuber from the Andes that is boiled, fried, mashed or baked on nearly every continent. | `TI-0010.webp` |
| TI-0011 | beef | Meat & Poultry | Rich, savory red meat that is grilled, braised, ground or slowly stewed. | `TI-0011.webp` |
| TI-0012 | milk | Dairy & Eggs | A gentle liquid used in sauces, batters, desserts and as a base for dairy. | `TI-0012.webp` |
| TI-0013 | vegetable oil | Sauces, Oils & Pantry | A neutral cooking oil used for frying and baking. | `TI-0013.webp` |
| TI-0014 | pork | Meat & Poultry | A versatile, mildly sweet meat roasted, cured, braised or turned into sausage. | `TI-0014.webp` |
| TI-0015 | rice | Grains & Starches | A staple grain feeding half the world, steamed, fried, simmered or turned into noodles. | `TI-0015.webp` |
| TI-0016 | cumin | Spices & Chilies | An earthy, warm seed essential to Indian, Middle Eastern and Mexican cooking. | `TI-0016.webp` |
| TI-0017 | chicken | Meat & Poultry | A mild, adaptable poultry that takes on the flavors of almost any dish. | `TI-0017.webp` |
| TI-0018 | cilantro | Herbs & Greens | A bright, citrusy herb (coriander leaf) that finishes dishes from Mexico to India to Vietnam. | `TI-0018.webp` |
| TI-0019 | ginger | Spices & Chilies | A zesty, warming root that brightens savory dishes, sweets and teas. | `TI-0019.webp` |
| TI-0020 | bread | Grains & Starches | Baked dough that serves as a base, side or scoop for many dishes. | `TI-0020.webp` |
| TI-0021 | olive oil | Sauces, Oils & Pantry | Pressed olive fruit, fruity and peppery, the foundation of Mediterranean cooking. | `TI-0021.webp` |
| TI-0022 | cinnamon | Spices & Chilies | Sweet, warm bark used in both desserts and savory stews, curries and rice. | `TI-0022.webp` |
| TI-0023 | carrot | Vegetables | A sweet, crunchy orange root eaten raw, roasted or simmered into stocks and stews. | `TI-0023.webp` |
| TI-0024 | lime | Fruits | A tart, aromatic citrus that gives sparkle to dishes from Mexico to Southeast Asia. | `TI-0024.webp` |
| TI-0025 | vinegar | Sauces, Oils & Pantry | A sour, fermented liquid used to pickle, dress and brighten. | `TI-0025.webp` |
| TI-0026 | cream | Dairy & Eggs | A rich dairy that enriches soups, sauces and desserts. | `TI-0026.webp` |
| TI-0027 | parsley | Herbs & Greens | A fresh, clean-tasting herb used as both a garnish and a main ingredient in many salads and sauces. | `TI-0027.webp` |
| TI-0028 | black pepper | Spices & Chilies | The world’s most traded spice, warm and pungent, used to finish almost any savory dish. | `TI-0028.webp` |
| TI-0029 | lemon | Fruits | A sharp, fragrant citrus whose juice and zest brighten savory dishes and sweets. | `TI-0029.webp` |
| TI-0030 | soy sauce | Legumes & Soy | A salty, fermented soybean seasoning that adds umami across East Asian cooking. | `TI-0030.webp` |
| TI-0031 | scallion | Vegetables | A mild, grassy young onion, used raw as a garnish or briefly cooked for fragrance. | `TI-0031.webp` |
| TI-0032 | bell pepper | Vegetables | A sweet, crisp pepper without the heat, eaten raw, roasted or stuffed. | `TI-0032.webp` |
| TI-0033 | lamb | Meat & Poultry | A tender, distinctly flavored meat favored for roasts, kebabs and stews. | `TI-0033.webp` |
| TI-0034 | corn | Grains & Starches | A sweet, starchy grain eaten fresh or ground into masa, polenta and tortillas. | `TI-0034.webp` |
| TI-0035 | yeast | Grains & Starches | A living leavener that makes bread rise and gives baked goods their flavor. | `TI-0035.webp` |
| TI-0036 | stock | Sauces, Oils & Pantry | A simmered broth of bones or vegetables that is the base of soups and sauces. | `TI-0036.webp` |
| TI-0037 | cabbage | Vegetables | A sturdy leafy vegetable that is shredded raw, braised, fermented or stuffed. | `TI-0037.webp` |
| TI-0038 | turmeric | Spices & Chilies | A golden, earthy root that colors and lightly flavors curries and rice. | `TI-0038.webp` |
| TI-0039 | cardamom | Spices & Chilies | A fragrant, floral pod used in sweets, coffee, tea and rice dishes. | `TI-0039.webp` |
| TI-0040 | paprika | Spices & Chilies | A sweet to smoky ground pepper that colors and flavors Hungarian and Spanish dishes. | `TI-0040.webp` |
| TI-0041 | fish | Seafood | A broad group of fresh and saltwater fish, cooked simply to keep their delicate flavor. | `TI-0041.webp` |
| TI-0042 | yogurt | Dairy & Eggs | A tangy fermented milk used in marinades, sauces, drinks and desserts. | `TI-0042.webp` |
| TI-0043 | thyme | Herbs & Greens | A small-leafed herb with an earthy, lemony aroma that anchors stews, roasts and stocks. | `TI-0043.webp` |
| TI-0044 | coconut milk | Sauces, Oils & Pantry | Creamy, sweet liquid pressed from coconut, the base of many Southeast Asian curries. | `TI-0044.webp` |
| TI-0045 | dill | Herbs & Greens | A feathery herb with a grassy, anise-like flavor, loved with fish, pickles and yogurt. | `TI-0045.webp` |
| TI-0046 | noodles | Grains & Starches | Strands of wheat, rice or other dough, served in soups, stir-fries and salads. | `TI-0046.webp` |
| TI-0047 | raisins | Fruits | Sun-dried grapes that add concentrated sweetness to rice dishes, stews and baking. | `TI-0047.webp` |
| TI-0048 | vanilla | Spices & Chilies | A sweet, perfumed bean that lends warmth to desserts and custards. | `TI-0048.webp` |
| TI-0049 | sausage | Meat & Poultry | Seasoned ground meat in a casing, grilled, simmered or sliced into stews. | `TI-0049.webp` |
| TI-0050 | honey | Sauces, Oils & Pantry | A floral, golden sweetener produced by bees, used in glazes, desserts and drinks. | `TI-0050.webp` |
| TI-0051 | sour cream | Dairy & Eggs | A tangy, thick cream that cools spicy dishes and enriches soups and bakes. | `TI-0051.webp` |
| TI-0052 | cloves | Spices & Chilies | Intensely aromatic dried flower buds used in spice blends, braises and sweets. | `TI-0052.webp` |
| TI-0053 | white wine | Sauces, Oils & Pantry | A crisp, acidic wine used to deglaze pans and build light sauces. | `TI-0053.webp` |
| TI-0054 | bay leaf | Herbs & Greens | A dried leaf that lends a subtle, savory depth to slow-cooked dishes; removed before eating. | `TI-0054.webp` |
| TI-0055 | fish sauce | Sauces, Oils & Pantry | A salty, fermented fish liquid giving Southeast Asian dishes their savory kick. | `TI-0055.webp` |
| TI-0056 | beans | Legumes & Soy | Hearty dried legumes simmered into stews, soups and sides worldwide. | `TI-0056.webp` |
| TI-0057 | mayonnaise | Sauces, Oils & Pantry | A creamy emulsion of egg and oil used as a spread and a base for sauces. | `TI-0057.webp` |
| TI-0058 | olive | Vegetables | A salty, bitter-fruity fruit cured for eating and pressed for oil across the Mediterranean. | `TI-0058.webp` |
| TI-0059 | shrimp | Seafood | Sweet, quick-cooking shellfish served grilled, fried or simmered in sauces. | `TI-0059.webp` |
| TI-0060 | walnut | Nuts & Seeds | A rich, slightly bitter nut that adds crunch and depth to sauces and baking. | `TI-0060.webp` |
| TI-0061 | bacon | Meat & Poultry | Cured, smoked pork belly that adds salty, smoky richness. | `TI-0061.webp` |
| TI-0062 | oregano | Herbs & Greens | A robust, peppery herb central to Mediterranean and Mexican cooking. | `TI-0062.webp` |
| TI-0063 | peanut | Nuts & Seeds | A rich, earthy legume that is roasted, ground into sauces and scattered over dishes. | `TI-0063.webp` |
| TI-0064 | mint | Herbs & Greens | A cooling, sweet herb used in teas, sauces, salads and desserts. | `TI-0064.webp` |
| TI-0065 | chickpeas | Legumes & Soy | Nutty, creamy legumes used in hummus, stews and falafel. | `TI-0065.webp` |
| TI-0066 | cucumber | Vegetables | A cool, watery, refreshing vegetable used in salads, pickles and yogurt sauces. | `TI-0066.webp` |
| TI-0067 | sesame | Nuts & Seeds | Tiny, nutty seeds sprinkled over breads, noodles and sweets or pressed into oil. | `TI-0067.webp` |
| TI-0068 | mustard | Sauces, Oils & Pantry | A tangy, pungent condiment of ground seeds, used in dressings and sauces. | `TI-0068.webp` |
| TI-0069 | celery | Vegetables | A crisp, savory-bitter stalk that gives stocks, soups and braises their green background note. | `TI-0069.webp` |
| TI-0070 | mushroom | Vegetables | A fungus with an earthy, savory depth that stands in for meat or deepens a broth. | `TI-0070.webp` |
| TI-0071 | nutmeg | Spices & Chilies | A warm, sweet-spicy seed grated over cream sauces, pastries and drinks. | `TI-0071.webp` |
| TI-0072 | queso fresco | Dairy & Eggs | A mild, crumbly Mexican cheese sprinkled over tacos and beans. | `TI-0072.webp` |
| TI-0073 | sesame oil | Sauces, Oils & Pantry | A deep, toasty oil used as a finishing drizzle in East Asian dishes. | `TI-0073.webp` |
| TI-0074 | coriander | Spices & Chilies | Citrusy, nutty seeds ground into spice blends and curries. | `TI-0074.webp` |
| TI-0075 | plantain | Fruits | A starchy cousin of the banana, fried, boiled or mashed when ripe or green. | `TI-0075.webp` |
| TI-0076 | lettuce | Vegetables | Crisp, mild leaves that form the base of salads and wrap many hand-held dishes. | `TI-0076.webp` |
| TI-0077 | shallot | Vegetables | A refined, slightly sweet cousin of the onion, favored in sauces and dressings. | `TI-0077.webp` |
| TI-0078 | ghee | Dairy & Eggs | Clarified butter with a nutty aroma, used for frying and finishing in South Asian cooking. | `TI-0078.webp` |
| TI-0079 | lentils | Legumes & Soy | Quick-cooking legumes that turn earthy and creamy in soups and dals. | `TI-0079.webp` |
| TI-0080 | spinach | Vegetables | A tender, iron-rich green that wilts quickly into soups, curries, pies and pastas. | `TI-0080.webp` |
| TI-0081 | lemongrass | Herbs & Greens | A citrusy, fragrant grass stalk that flavors Southeast Asian soups, curries and marinades. | `TI-0081.webp` |
| TI-0082 | peas | Vegetables | Small, sweet green seeds eaten fresh, frozen or dried in soups, rice and curries. | `TI-0082.webp` |
| TI-0083 | pumpkin | Vegetables | A sweet, golden-fleshed squash used in soups, stews, curries and desserts. | `TI-0083.webp` |
| TI-0084 | almond | Nuts & Seeds | A sweet, delicate nut used whole, sliced or ground in sauces and pastries. | `TI-0084.webp` |
| TI-0085 | eggplant | Vegetables | A spongy, mild fruit that soaks up oil and spices and turns silky when cooked. | `TI-0085.webp` |
| TI-0086 | garam masala | Spices & Chilies | A warm Indian spice blend added toward the end of cooking for fragrance. | `TI-0086.webp` |
| TI-0087 | pasta | Grains & Starches | Italian dough shaped and boiled, served with sauces, in soups or baked. | `TI-0087.webp` |
| TI-0088 | pickle | Vegetables | Vegetables preserved in brine or vinegar, adding tang and crunch alongside rich food. | `TI-0088.webp` |
| TI-0089 | saffron | Spices & Chilies | The world’s costliest spice, hand-picked crocus threads that give a golden color and honeyed flavor. | `TI-0089.webp` |
| TI-0090 | basil | Herbs & Greens | A sweet, peppery herb that perfumes Mediterranean and Southeast Asian dishes. | `TI-0090.webp` |
| TI-0091 | bean sprouts | Vegetables | Crisp, fresh sprouted beans that add crunch to stir-fries, noodles and soups. | `TI-0091.webp` |
| TI-0092 | chocolate | Sauces, Oils & Pantry | Sweet, rich cacao used in desserts and, in places, savory sauces. | `TI-0092.webp` |
| TI-0093 | ham | Meat & Poultry | Cured, often smoked pork leg, served sliced or diced into other dishes. | `TI-0093.webp` |
| TI-0094 | tamarind | Fruits | A sticky pod with a sweet-sour pulp that gives tang to curries, sauces and drinks. | `TI-0094.webp` |
| TI-0095 | allspice | Spices & Chilies | A berry tasting of cinnamon, nutmeg and clove, vital to Caribbean jerk and baking. | `TI-0095.webp` |
| TI-0096 | parmesan | Dairy & Eggs | A hard, nutty Italian cheese grated over pasta, risotto and soups. | `TI-0096.webp` |
| TI-0097 | seaweed | Vegetables | Sea vegetables that bring a savory, mineral umami to broths, rice and snacks. | `TI-0097.webp` |
| TI-0098 | cassava | Vegetables | A starchy tropical root that is boiled, fried or ground into flour and tapioca. | `TI-0098.webp` |
| TI-0099 | coconut | Fruits | A tropical fruit whose flesh, milk and oil bring richness and sweetness across the tropics. | `TI-0099.webp` |
| TI-0100 | leek | Vegetables | A mild, sweet member of the onion family, used in soups, tarts and braises. | `TI-0100.webp` |
| TI-0101 | mozzarella | Dairy & Eggs | A mild, stretchy fresh cheese that melts beautifully on pizza and pasta. | `TI-0101.webp` |
| TI-0102 | red wine | Sauces, Oils & Pantry | A tannic, fruity wine that lends depth to braises and sauces. | `TI-0102.webp` |
| TI-0103 | cheddar | Dairy & Eggs | A firm, tangy cheese that melts well and adds sharp flavor to sauces and bakes. | `TI-0103.webp` |
| TI-0104 | orange | Fruits | A sweet, juicy citrus whose juice and peel flavor sauces, desserts and braises. | `TI-0104.webp` |
| TI-0105 | radish | Vegetables | A peppery, crunchy root that adds bite and color to salads, pickles and soups. | `TI-0105.webp` |
| TI-0106 | apple | Fruits | A crisp, sweet-tart fruit eaten raw, baked into desserts or cooked with pork. | `TI-0106.webp` |
| TI-0107 | avocado | Vegetables | A rich, buttery fruit that adds creaminess to salads, sauces and spreads. | `TI-0107.webp` |
| TI-0108 | berbere | Spices & Chilies | An Ethiopian blend of chili and warm spices that anchors stews. | `TI-0108.webp` |
| TI-0109 | fenugreek | Spices & Chilies | A bittersweet, maple-scented seed or leaf used in curries and spice blends. | `TI-0109.webp` |
| TI-0110 | galangal | Spices & Chilies | A peppery, piney cousin of ginger central to Thai and Indonesian pastes and soups. | `TI-0110.webp` |
| TI-0111 | palm oil | Sauces, Oils & Pantry | A rich, reddish oil used for frying and stewing in West Africa and Southeast Asia. | `TI-0111.webp` |
| TI-0112 | beer | Sauces, Oils & Pantry | A fermented grain drink used in batters, braises and stews. | `TI-0112.webp` |
| TI-0113 | feta | Dairy & Eggs | A tangy, crumbly brined cheese from Greece, used in salads and pastries. | `TI-0113.webp` |
| TI-0114 | green beans | Vegetables | Slender, snappy pods that are blanched, sautéed or simmered until tender. | `TI-0114.webp` |
| TI-0115 | mirin | Sauces, Oils & Pantry | A sweet Japanese rice wine that balances soy in glazes and sauces. | `TI-0115.webp` |
| TI-0116 | rose water | Sauces, Oils & Pantry | A fragrant floral water used in Middle Eastern and South Asian sweets and drinks. | `TI-0116.webp` |
| TI-0117 | tofu | Legumes & Soy | Pressed soy curd with a mild flavor that takes on whatever it cooks with. | `TI-0117.webp` |
| TI-0118 | buttermilk | Dairy & Eggs | A tangy cultured milk that tenderizes batters, biscuits and fried chicken. | `TI-0118.webp` |
| TI-0119 | coffee | Sauces, Oils & Pantry | A roasted bean brewed into a bitter, aromatic drink that also flavors desserts. | `TI-0119.webp` |
| TI-0120 | curry leaves | Herbs & Greens | Aromatic leaves with a nutty, citrusy scent, fried in oil to start South Indian dishes. | `TI-0120.webp` |
| TI-0121 | fava beans | Legumes & Soy | Large, creamy beans mashed, stewed or fried in Mediterranean and Middle Eastern dishes. | `TI-0121.webp` |
| TI-0122 | gruyère | Dairy & Eggs | A nutty, melting Swiss cheese used in fondue, gratins and onion soup. | `TI-0122.webp` |
| TI-0123 | mustard seed | Spices & Chilies | Tiny, pungent seeds that pop in hot oil or are ground into mustard. | `TI-0123.webp` |
| TI-0124 | strawberry | Fruits | A fragrant, sweet red berry, mostly used in desserts and fresh preparations. | `TI-0124.webp` |
| TI-0125 | tapioca | Grains & Starches | A starch from cassava that thickens puddings and makes chewy pearls. | `TI-0125.webp` |
| TI-0126 | tea | Sauces, Oils & Pantry | Dried leaves steeped into a fragrant drink that also flavors desserts and dishes. | `TI-0126.webp` |
| TI-0127 | tuna | Seafood | A meaty, deep-flavored fish eaten raw, seared or preserved in oil. | `TI-0127.webp` |
| TI-0128 | apricot | Fruits | A tangy-sweet stone fruit, used fresh or dried in tagines, jams and pastries. | `TI-0128.webp` |
| TI-0129 | barley | Grains & Starches | A chewy, mild grain simmered in soups and stews. | `TI-0129.webp` |
| TI-0130 | beet | Vegetables | A deep-red root that is earthy and sweet, roasted, pickled or simmered into borscht. | `TI-0130.webp` |
| TI-0131 | capers | Sauces, Oils & Pantry | Tiny, salty, tangy flower buds that brighten sauces, fish and salads. | `TI-0131.webp` |
| TI-0132 | caraway | Spices & Chilies | A nutty, anise-like seed used in breads, cabbage dishes and sausages. | `TI-0132.webp` |
| TI-0133 | cocoa | Sauces, Oils & Pantry | Ground roasted cacao, bitter and deep, the base of chocolate and mole. | `TI-0133.webp` |
| TI-0134 | cod | Seafood | A mild, flaky white fish, fresh or salted, found in northern Atlantic cuisines. | `TI-0134.webp` |
| TI-0135 | flatbread | Grains & Starches | Unleavened or lightly leavened bread cooked quickly on a hot surface and used to scoop and wrap. | `TI-0135.webp` |
| TI-0136 | kale | Vegetables | A hardy, slightly bitter leafy green that holds up to long braising or raw massaging. | `TI-0136.webp` |
| TI-0137 | liver | Meat & Poultry | A rich, mineral-tasting organ meat, pan-fried or blended into pâté. | `TI-0137.webp` |
| TI-0138 | mango | Fruits | A lush, fragrant tropical fruit eaten ripe or green, sweet or sour, in many cuisines. | `TI-0138.webp` |
| TI-0139 | pistachio | Nuts & Seeds | A vivid green nut with a sweet, subtle flavor used in desserts and stuffings. | `TI-0139.webp` |
| TI-0140 | plum | Fruits | A juicy, sweet-tart stone fruit used in desserts, sauces and preserves. | `TI-0140.webp` |
| TI-0141 | ricotta | Dairy & Eggs | A soft, mildly sweet fresh cheese used in pasta, pastries and desserts. | `TI-0141.webp` |
| TI-0142 | rosemary | Herbs & Greens | A resinous, piney herb that pairs with lamb, potatoes and bread. | `TI-0142.webp` |
| TI-0143 | rye | Grains & Starches | A dark, earthy grain used in dense breads and crackers. | `TI-0143.webp` |
| TI-0144 | turnip | Vegetables | A peppery-sweet root vegetable, roasted, mashed or pickled. | `TI-0144.webp` |
| TI-0145 | banana | Fruits | A soft, sweet tropical fruit eaten ripe, fried or used in baking. | `TI-0145.webp` |
| TI-0146 | goat | Meat & Poultry | A lean, flavorful meat slowly cooked in curries and stews across the world. | `TI-0146.webp` |
| TI-0147 | gochujang | Sauces, Oils & Pantry | A sweet, spicy, fermented Korean chili paste. | `TI-0147.webp` |
| TI-0148 | harissa | Sauces, Oils & Pantry | A fiery North African chili paste with garlic and spices. | `TI-0148.webp` |
| TI-0149 | kidney beans | Legumes & Soy | Firm, red beans that hold up in chili, rice and long-simmered stews. | `TI-0149.webp` |
| TI-0150 | maple syrup | Sauces, Oils & Pantry | A woodsy, sweet syrup boiled from maple sap. | `TI-0150.webp` |
| TI-0151 | oats | Grains & Starches | A hearty grain used in porridge, baking and savory dishes. | `TI-0151.webp` |
| TI-0152 | pine nuts | Nuts & Seeds | Small, buttery, resinous seeds blended into pesto and scattered over rice. | `TI-0152.webp` |
| TI-0153 | pineapple | Fruits | A tangy-sweet tropical fruit that tenderizes meat and brightens sweet and savory dishes. | `TI-0153.webp` |
| TI-0154 | sage | Herbs & Greens | A soft, musky herb that flavors browned butter, poultry and stuffings. | `TI-0154.webp` |
| TI-0155 | salmon | Seafood | A rich, oily pink fish roasted, cured or grilled. | `TI-0155.webp` |
| TI-0156 | sauerkraut | Vegetables | Fermented shredded cabbage with a bright sour tang, served with rich meats and sausages. | `TI-0156.webp` |
| TI-0157 | star anise | Spices & Chilies | A star-shaped pod with a licorice sweetness, key to broths, braises and five-spice. | `TI-0157.webp` |
| TI-0158 | sweet potato | Vegetables | A sweet, creamy-fleshed root, roasted, mashed or simmered in savory and sweet dishes alike. | `TI-0158.webp` |
| TI-0159 | veal | Meat & Poultry | Pale, delicate young beef, often pounded thin and pan-fried or braised. | `TI-0159.webp` |
| TI-0160 | white beans | Legumes & Soy | Creamy, mild beans that thicken soups and stews. | `TI-0160.webp` |
| TI-0161 | zucchini | Vegetables | A tender summer squash with a delicate flavor, grilled, sautéed or baked. | `TI-0161.webp` |
| TI-0162 | anchovy | Seafood | A salty, intensely savory little fish that melts into sauces to add depth. | `TI-0162.webp` |
| TI-0163 | blue cheese | Dairy & Eggs | A pungent, creamy cheese veined with mold that stands out in dressings and sauces. | `TI-0163.webp` |
| TI-0164 | buckwheat | Grains & Starches | A nutty, earthy seed ground into soba noodles, crêpes and porridge. | `TI-0164.webp` |
| TI-0165 | bulgur | Grains & Starches | Cracked, parboiled wheat with a nutty chew, used in salads and pilafs. | `TI-0165.webp` |
| TI-0166 | cheese curds | Dairy & Eggs | Fresh, squeaky curds eaten on their own or used in poutine. | `TI-0166.webp` |
| TI-0167 | chives | Herbs & Greens | A delicate, mild onion-flavored herb snipped over eggs, potatoes and soups. | `TI-0167.webp` |
| TI-0168 | couscous | Grains & Starches | Tiny steamed semolina pearls that soak up stews and sauces. | `TI-0168.webp` |
| TI-0169 | crab | Seafood | Sweet, delicate shellfish served in cakes, soups and curries. | `TI-0169.webp` |
| TI-0170 | cranberry | Fruits | A sharp, tart red berry cooked into sauces and baked goods. | `TI-0170.webp` |
| TI-0171 | emmental | Dairy & Eggs | A mild, nutty Swiss cheese with large holes, melted into fondue and gratins. | `TI-0171.webp` |
| TI-0172 | five-spice | Spices & Chilies | A Chinese blend of sweet and warm spices used on roast meats and braises. | `TI-0172.webp` |
| TI-0173 | hazelnut | Nuts & Seeds | A sweet, toasty nut that pairs with chocolate and baked goods. | `TI-0173.webp` |
| TI-0174 | herring | Seafood | An oily fish pickled or cured, beloved across northern Europe. | `TI-0174.webp` |
| TI-0175 | hibiscus | Herbs & Greens | Tart, deep-red flower petals steeped into refreshing drinks and sauces. | `TI-0175.webp` |
| TI-0176 | jackfruit | Fruits | A giant tropical fruit with a stringy texture when green that mimics shredded meat. | `TI-0176.webp` |
| TI-0177 | juniper | Spices & Chilies | A piney, resinous berry used to season game, sauerkraut and gin. | `TI-0177.webp` |
| TI-0178 | lingonberry | Fruits | A tart Nordic berry served as a sauce or jam with meats. | `TI-0178.webp` |
| TI-0179 | mussels | Seafood | Briny, tender shellfish steamed in wine or tomato broth. | `TI-0179.webp` |
| TI-0180 | pecorino | Dairy & Eggs | A sharp, salty sheep’s milk cheese grated over pasta. | `TI-0180.webp` |
| TI-0181 | pomegranate | Fruits | A jewel-like fruit whose tart-sweet seeds and juice lift stews, salads and sauces. | `TI-0181.webp` |
| TI-0182 | prosciutto | Meat & Poultry | Delicate, salt-cured Italian ham sliced paper-thin. | `TI-0182.webp` |
| TI-0183 | shellfish | Seafood | Clams, oysters and kin that give broths and stews a briny sea flavor. | `TI-0183.webp` |
| TI-0184 | shrimp paste | Sauces, Oils & Pantry | A pungent, fermented shrimp seasoning that adds savory depth to Southeast Asian pastes. | `TI-0184.webp` |
| TI-0185 | squid | Seafood | A tender-chewy mollusk that is quickly fried or grilled, or slowly stewed. | `TI-0185.webp` |
| TI-0186 | turkey | Meat & Poultry | A large, lean poultry associated with festive roasts in the Americas and beyond. | `TI-0186.webp` |
| TI-0187 | wasabi | Spices & Chilies | A sharp, nose-clearing Japanese root served with raw fish and noodles. | `TI-0187.webp` |
| TI-0188 | yam | Vegetables | A starchy, earthy tuber with rough brown skin that is boiled, pounded or mashed across West Africa and the Pacific. | `TI-0188.webp` |
| TI-0189 | asparagus | Vegetables | A tender spring shoot with a grassy, delicate flavor, steamed, roasted or grilled. | `TI-0189.webp` |
| TI-0190 | bamboo shoot | Vegetables | The tender young shoot of bamboo, mildly sweet and crunchy, common in East and Southeast Asian cooking. | `TI-0190.webp` |
| TI-0191 | black-eyed peas | Legumes & Soy | Creamy, earthy beans used in stews and fritters across Africa and the American South. | `TI-0191.webp` |
| TI-0192 | blueberry | Fruits | A small, sweet-tart berry baked into pastries and cooked into sauces and jams. | `TI-0192.webp` |
| TI-0193 | bok choy | Vegetables | A mild Chinese cabbage with crisp stems and tender leaves, quick to stir-fry or steam. | `TI-0193.webp` |
| TI-0194 | cherry | Fruits | A small, sweet-tart stone fruit used in pies, sauces and preserves. | `TI-0194.webp` |
| TI-0195 | chorizo | Meat & Poultry | A paprika-red cured pork sausage that flavors Spanish and Latin American dishes. | `TI-0195.webp` |
| TI-0196 | dates | Fruits | Sticky-sweet, caramel-flavored fruit of the date palm, eaten whole or baked into sweets across the Middle East and North Africa. | `TI-0196.webp` |
| TI-0197 | duck | Meat & Poultry | A rich, fatty poultry with crisp skin when roasted or confited. | `TI-0197.webp` |
| TI-0198 | dulce de leche | Sauces, Oils & Pantry | A thick, caramelized milk jam beloved across Latin America. | `TI-0198.webp` |
| TI-0199 | fig | Fruits | A soft, honey-sweet fruit full of tiny seeds, eaten fresh or dried with cheese, cured meats and desserts. | `TI-0199.webp` |
| TI-0200 | goat cheese | Dairy & Eggs | A tangy, creamy cheese that brightens salads, tarts and pastas. | `TI-0200.webp` |
| TI-0201 | hoisin | Sauces, Oils & Pantry | A sweet, salty Chinese soybean sauce used for glazes and dipping. | `TI-0201.webp` |
| TI-0202 | horseradish | Spices & Chilies | A sharp, sinus-clearing root grated fresh with roast beef, fish and beets. | `TI-0202.webp` |
| TI-0203 | octopus | Seafood | A chewy mollusk that becomes tender when slowly simmered or grilled. | `TI-0203.webp` |
| TI-0204 | okra | Vegetables | A green pod that thickens stews and gumbos and turns crisp when fried. | `TI-0204.webp` |
| TI-0205 | pandan | Herbs & Greens | A fragrant tropical leaf with a vanilla-like aroma, used in Southeast Asian sweets and rice. | `TI-0205.webp` |
| TI-0206 | papaya | Fruits | A soft, sweet tropical fruit, also used green and shredded in tangy salads. | `TI-0206.webp` |
| TI-0207 | pear | Fruits | A soft, floral fruit poached in wine, baked in desserts or paired with cheese. | `TI-0207.webp` |
| TI-0208 | poppy seeds | Nuts & Seeds | Tiny, nutty blue-black seeds used in breads, pastries and curries. | `TI-0208.webp` |
| TI-0209 | rabbit | Meat & Poultry | A lean, delicate meat braised or stewed in rustic European cooking. | `TI-0209.webp` |
| TI-0210 | sardine | Seafood | A small, oily fish grilled fresh or tinned for a bold, savory flavor. | `TI-0210.webp` |
| TI-0211 | sichuan pepper | Spices & Chilies | A citrusy, tingling spice that gives Sichuan food its numbing heat. | `TI-0211.webp` |
| TI-0212 | tahini | Nuts & Seeds | A creamy, nutty paste of ground sesame seeds, the base of hummus and many sauces. | `TI-0212.webp` |
| TI-0213 | tarragon | Herbs & Greens | A sweet, anise-scented herb central to classic French sauces. | `TI-0213.webp` |
| TI-0214 | teff | Grains & Starches | A tiny, nutty Ethiopian and Eritrean grain, fermented and griddled into injera or cooked into porridge. | `TI-0214.webp` |
| TI-0215 | venison | Meat & Poultry | Lean, gamey deer meat, braised or roasted with fruit and juniper. | `TI-0215.webp` |
| TI-0216 | ackee | Fruits | A Jamaican fruit with a creamy, scrambled-egg texture, cooked with salt fish. | `TI-0216.webp` |
| TI-0217 | chili bean paste | Sauces, Oils & Pantry | A fiery, salty fermented broad-bean paste at the heart of Sichuan cooking. | `TI-0217.webp` |
| TI-0218 | fennel | Vegetables | A bulb with a gentle anise flavor, eaten raw and crisp or cooked until sweet. | `TI-0218.webp` |
| TI-0219 | gouda | Dairy & Eggs | A smooth, mellow Dutch cheese that turns caramel-sweet with age. | `TI-0219.webp` |
| TI-0220 | grape | Fruits | A juicy fruit eaten fresh, dried into raisins or pressed into wine and vinegar. | `TI-0220.webp` |
| TI-0221 | guanciale | Meat & Poultry | Cured pork cheek, richer than bacon and essential to Roman pasta. | `TI-0221.webp` |
| TI-0222 | lobster | Seafood | A luxurious, sweet shellfish steamed, grilled or folded into rich sauces. | `TI-0222.webp` |
| TI-0223 | macadamia | Nuts & Seeds | A buttery, rich nut grown in Australia and Hawaii. | `TI-0223.webp` |
| TI-0224 | mascarpone | Dairy & Eggs | A silky, sweet cream cheese central to tiramisu. | `TI-0224.webp` |
| TI-0225 | miso | Legumes & Soy | A fermented soybean paste that gives soups and glazes a deep, salty umami. | `TI-0225.webp` |
| TI-0226 | paneer | Dairy & Eggs | A fresh, mild Indian cheese that holds its shape in curries. | `TI-0226.webp` |
| TI-0227 | pecan | Nuts & Seeds | A sweet, buttery nut that stars in southern pies and pralines. | `TI-0227.webp` |
| TI-0228 | quinoa | Grains & Starches | A protein-rich Andean seed cooked like a grain, with a light, nutty flavor. | `TI-0228.webp` |
| TI-0229 | smoked salmon | Seafood | Salmon cured and smoked into silky, savory slices. | `TI-0229.webp` |
| TI-0230 | sumac | Spices & Chilies | A tangy, lemony crimson spice sprinkled over Middle Eastern grilled meats and salads. | `TI-0230.webp` |

## All ingredients

| Status | ID | Ingredient | Family | Description | Used in | Expected file name | Format | Pixel size | Target file size | Current size |
|---|---|---|---|---|---|---|---|---|---|---|
| ⬜ to create | TI-0001 | onion | Vegetables | A pungent bulb that turns sweet and mellow when cooked; the quiet foundation of most savory dishes. | 353 dishes | `TI-0001.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0002 | garlic | Vegetables | A sharp, aromatic bulb whose cloves add depth to almost every cuisine, raw or slowly cooked. | 257 dishes | `TI-0002.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0003 | egg | Dairy & Eggs | A versatile staple that binds, enriches and thickens, as well as standing on its own. | 231 dishes | `TI-0003.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0004 | flour | Grains & Starches | Ground grain that forms the backbone of bread, pasta, pastry and sauces. | 225 dishes | `TI-0004.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0005 | butter | Dairy & Eggs | Churned cream that adds richness and nutty flavor to sauces and pastries. | 215 dishes | `TI-0005.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0006 | sugar | Sauces, Oils & Pantry | A sweetener that also browns, preserves and balances sour or salty flavors. | 194 dishes | `TI-0006.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0007 | chili | Spices & Chilies | A fiery fruit available fresh or dried, supplying heat and fruity depth worldwide. | 182 dishes | `TI-0007.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0008 | tomato | Vegetables | A juicy, sweet-tart fruit treated as a vegetable; the base of countless sauces, stews and salads. | 181 dishes | `TI-0008.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0009 | salt | Sauces, Oils & Pantry | The essential seasoning that sharpens and balances every other flavor. | 135 dishes | `TI-0009.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0010 | potato | Vegetables | A starchy tuber from the Andes that is boiled, fried, mashed or baked on nearly every continent. | 119 dishes | `TI-0010.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0011 | beef | Meat & Poultry | Rich, savory red meat that is grilled, braised, ground or slowly stewed. | 116 dishes | `TI-0011.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0012 | milk | Dairy & Eggs | A gentle liquid used in sauces, batters, desserts and as a base for dairy. | 108 dishes | `TI-0012.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0013 | vegetable oil | Sauces, Oils & Pantry | A neutral cooking oil used for frying and baking. | 108 dishes | `TI-0013.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0014 | pork | Meat & Poultry | A versatile, mildly sweet meat roasted, cured, braised or turned into sausage. | 94 dishes | `TI-0014.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0015 | rice | Grains & Starches | A staple grain feeding half the world, steamed, fried, simmered or turned into noodles. | 93 dishes | `TI-0015.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0016 | cumin | Spices & Chilies | An earthy, warm seed essential to Indian, Middle Eastern and Mexican cooking. | 89 dishes | `TI-0016.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0017 | chicken | Meat & Poultry | A mild, adaptable poultry that takes on the flavors of almost any dish. | 85 dishes | `TI-0017.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0018 | cilantro | Herbs & Greens | A bright, citrusy herb (coriander leaf) that finishes dishes from Mexico to India to Vietnam. | 82 dishes | `TI-0018.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0019 | ginger | Spices & Chilies | A zesty, warming root that brightens savory dishes, sweets and teas. | 79 dishes | `TI-0019.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0020 | bread | Grains & Starches | Baked dough that serves as a base, side or scoop for many dishes. | 78 dishes | `TI-0020.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0021 | olive oil | Sauces, Oils & Pantry | Pressed olive fruit, fruity and peppery, the foundation of Mediterranean cooking. | 77 dishes | `TI-0021.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0022 | cinnamon | Spices & Chilies | Sweet, warm bark used in both desserts and savory stews, curries and rice. | 71 dishes | `TI-0022.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0023 | carrot | Vegetables | A sweet, crunchy orange root eaten raw, roasted or simmered into stocks and stews. | 69 dishes | `TI-0023.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0024 | lime | Fruits | A tart, aromatic citrus that gives sparkle to dishes from Mexico to Southeast Asia. | 63 dishes | `TI-0024.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0025 | vinegar | Sauces, Oils & Pantry | A sour, fermented liquid used to pickle, dress and brighten. | 60 dishes | `TI-0025.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0026 | cream | Dairy & Eggs | A rich dairy that enriches soups, sauces and desserts. | 58 dishes | `TI-0026.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0027 | parsley | Herbs & Greens | A fresh, clean-tasting herb used as both a garnish and a main ingredient in many salads and sauces. | 58 dishes | `TI-0027.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0028 | black pepper | Spices & Chilies | The world’s most traded spice, warm and pungent, used to finish almost any savory dish. | 57 dishes | `TI-0028.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0029 | lemon | Fruits | A sharp, fragrant citrus whose juice and zest brighten savory dishes and sweets. | 56 dishes | `TI-0029.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0030 | soy sauce | Legumes & Soy | A salty, fermented soybean seasoning that adds umami across East Asian cooking. | 55 dishes | `TI-0030.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0031 | scallion | Vegetables | A mild, grassy young onion, used raw as a garnish or briefly cooked for fragrance. | 52 dishes | `TI-0031.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0032 | bell pepper | Vegetables | A sweet, crisp pepper without the heat, eaten raw, roasted or stuffed. | 49 dishes | `TI-0032.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0033 | lamb | Meat & Poultry | A tender, distinctly flavored meat favored for roasts, kebabs and stews. | 47 dishes | `TI-0033.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0034 | corn | Grains & Starches | A sweet, starchy grain eaten fresh or ground into masa, polenta and tortillas. | 45 dishes | `TI-0034.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0035 | yeast | Grains & Starches | A living leavener that makes bread rise and gives baked goods their flavor. | 45 dishes | `TI-0035.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0036 | stock | Sauces, Oils & Pantry | A simmered broth of bones or vegetables that is the base of soups and sauces. | 44 dishes | `TI-0036.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0037 | cabbage | Vegetables | A sturdy leafy vegetable that is shredded raw, braised, fermented or stuffed. | 42 dishes | `TI-0037.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0038 | turmeric | Spices & Chilies | A golden, earthy root that colors and lightly flavors curries and rice. | 41 dishes | `TI-0038.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0039 | cardamom | Spices & Chilies | A fragrant, floral pod used in sweets, coffee, tea and rice dishes. | 40 dishes | `TI-0039.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0040 | paprika | Spices & Chilies | A sweet to smoky ground pepper that colors and flavors Hungarian and Spanish dishes. | 40 dishes | `TI-0040.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0041 | fish | Seafood | A broad group of fresh and saltwater fish, cooked simply to keep their delicate flavor. | 39 dishes | `TI-0041.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0042 | yogurt | Dairy & Eggs | A tangy fermented milk used in marinades, sauces, drinks and desserts. | 38 dishes | `TI-0042.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0043 | thyme | Herbs & Greens | A small-leafed herb with an earthy, lemony aroma that anchors stews, roasts and stocks. | 36 dishes | `TI-0043.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0044 | coconut milk | Sauces, Oils & Pantry | Creamy, sweet liquid pressed from coconut, the base of many Southeast Asian curries. | 35 dishes | `TI-0044.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0045 | dill | Herbs & Greens | A feathery herb with a grassy, anise-like flavor, loved with fish, pickles and yogurt. | 35 dishes | `TI-0045.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0046 | noodles | Grains & Starches | Strands of wheat, rice or other dough, served in soups, stir-fries and salads. | 35 dishes | `TI-0046.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0047 | raisins | Fruits | Sun-dried grapes that add concentrated sweetness to rice dishes, stews and baking. | 35 dishes | `TI-0047.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0048 | vanilla | Spices & Chilies | A sweet, perfumed bean that lends warmth to desserts and custards. | 33 dishes | `TI-0048.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0049 | sausage | Meat & Poultry | Seasoned ground meat in a casing, grilled, simmered or sliced into stews. | 31 dishes | `TI-0049.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0050 | honey | Sauces, Oils & Pantry | A floral, golden sweetener produced by bees, used in glazes, desserts and drinks. | 30 dishes | `TI-0050.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0051 | sour cream | Dairy & Eggs | A tangy, thick cream that cools spicy dishes and enriches soups and bakes. | 29 dishes | `TI-0051.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0052 | cloves | Spices & Chilies | Intensely aromatic dried flower buds used in spice blends, braises and sweets. | 28 dishes | `TI-0052.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0053 | white wine | Sauces, Oils & Pantry | A crisp, acidic wine used to deglaze pans and build light sauces. | 28 dishes | `TI-0053.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0054 | bay leaf | Herbs & Greens | A dried leaf that lends a subtle, savory depth to slow-cooked dishes; removed before eating. | 27 dishes | `TI-0054.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0055 | fish sauce | Sauces, Oils & Pantry | A salty, fermented fish liquid giving Southeast Asian dishes their savory kick. | 27 dishes | `TI-0055.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0056 | beans | Legumes & Soy | Hearty dried legumes simmered into stews, soups and sides worldwide. | 26 dishes | `TI-0056.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0057 | mayonnaise | Sauces, Oils & Pantry | A creamy emulsion of egg and oil used as a spread and a base for sauces. | 26 dishes | `TI-0057.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0058 | olive | Vegetables | A salty, bitter-fruity fruit cured for eating and pressed for oil across the Mediterranean. | 26 dishes | `TI-0058.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0059 | shrimp | Seafood | Sweet, quick-cooking shellfish served grilled, fried or simmered in sauces. | 26 dishes | `TI-0059.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0060 | walnut | Nuts & Seeds | A rich, slightly bitter nut that adds crunch and depth to sauces and baking. | 25 dishes | `TI-0060.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0061 | bacon | Meat & Poultry | Cured, smoked pork belly that adds salty, smoky richness. | 24 dishes | `TI-0061.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0062 | oregano | Herbs & Greens | A robust, peppery herb central to Mediterranean and Mexican cooking. | 24 dishes | `TI-0062.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0063 | peanut | Nuts & Seeds | A rich, earthy legume that is roasted, ground into sauces and scattered over dishes. | 24 dishes | `TI-0063.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0064 | mint | Herbs & Greens | A cooling, sweet herb used in teas, sauces, salads and desserts. | 23 dishes | `TI-0064.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0065 | chickpeas | Legumes & Soy | Nutty, creamy legumes used in hummus, stews and falafel. | 22 dishes | `TI-0065.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0066 | cucumber | Vegetables | A cool, watery, refreshing vegetable used in salads, pickles and yogurt sauces. | 22 dishes | `TI-0066.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0067 | sesame | Nuts & Seeds | Tiny, nutty seeds sprinkled over breads, noodles and sweets or pressed into oil. | 22 dishes | `TI-0067.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0068 | mustard | Sauces, Oils & Pantry | A tangy, pungent condiment of ground seeds, used in dressings and sauces. | 21 dishes | `TI-0068.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0069 | celery | Vegetables | A crisp, savory-bitter stalk that gives stocks, soups and braises their green background note. | 20 dishes | `TI-0069.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0070 | mushroom | Vegetables | A fungus with an earthy, savory depth that stands in for meat or deepens a broth. | 20 dishes | `TI-0070.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0071 | nutmeg | Spices & Chilies | A warm, sweet-spicy seed grated over cream sauces, pastries and drinks. | 20 dishes | `TI-0071.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0072 | queso fresco | Dairy & Eggs | A mild, crumbly Mexican cheese sprinkled over tacos and beans. | 20 dishes | `TI-0072.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0073 | sesame oil | Sauces, Oils & Pantry | A deep, toasty oil used as a finishing drizzle in East Asian dishes. | 20 dishes | `TI-0073.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0074 | coriander | Spices & Chilies | Citrusy, nutty seeds ground into spice blends and curries. | 19 dishes | `TI-0074.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0075 | plantain | Fruits | A starchy cousin of the banana, fried, boiled or mashed when ripe or green. | 19 dishes | `TI-0075.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0076 | lettuce | Vegetables | Crisp, mild leaves that form the base of salads and wrap many hand-held dishes. | 18 dishes | `TI-0076.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0077 | shallot | Vegetables | A refined, slightly sweet cousin of the onion, favored in sauces and dressings. | 18 dishes | `TI-0077.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0078 | ghee | Dairy & Eggs | Clarified butter with a nutty aroma, used for frying and finishing in South Asian cooking. | 17 dishes | `TI-0078.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0079 | lentils | Legumes & Soy | Quick-cooking legumes that turn earthy and creamy in soups and dals. | 17 dishes | `TI-0079.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0080 | spinach | Vegetables | A tender, iron-rich green that wilts quickly into soups, curries, pies and pastas. | 17 dishes | `TI-0080.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0081 | lemongrass | Herbs & Greens | A citrusy, fragrant grass stalk that flavors Southeast Asian soups, curries and marinades. | 16 dishes | `TI-0081.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0082 | peas | Vegetables | Small, sweet green seeds eaten fresh, frozen or dried in soups, rice and curries. | 16 dishes | `TI-0082.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0083 | pumpkin | Vegetables | A sweet, golden-fleshed squash used in soups, stews, curries and desserts. | 16 dishes | `TI-0083.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0084 | almond | Nuts & Seeds | A sweet, delicate nut used whole, sliced or ground in sauces and pastries. | 15 dishes | `TI-0084.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0085 | eggplant | Vegetables | A spongy, mild fruit that soaks up oil and spices and turns silky when cooked. | 15 dishes | `TI-0085.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0086 | garam masala | Spices & Chilies | A warm Indian spice blend added toward the end of cooking for fragrance. | 15 dishes | `TI-0086.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0087 | pasta | Grains & Starches | Italian dough shaped and boiled, served with sauces, in soups or baked. | 15 dishes | `TI-0087.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0088 | pickle | Vegetables | Vegetables preserved in brine or vinegar, adding tang and crunch alongside rich food. | 15 dishes | `TI-0088.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0089 | saffron | Spices & Chilies | The world’s costliest spice, hand-picked crocus threads that give a golden color and honeyed flavor. | 15 dishes | `TI-0089.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0090 | basil | Herbs & Greens | A sweet, peppery herb that perfumes Mediterranean and Southeast Asian dishes. | 14 dishes | `TI-0090.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0091 | bean sprouts | Vegetables | Crisp, fresh sprouted beans that add crunch to stir-fries, noodles and soups. | 14 dishes | `TI-0091.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0092 | chocolate | Sauces, Oils & Pantry | Sweet, rich cacao used in desserts and, in places, savory sauces. | 14 dishes | `TI-0092.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0093 | ham | Meat & Poultry | Cured, often smoked pork leg, served sliced or diced into other dishes. | 14 dishes | `TI-0093.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0094 | tamarind | Fruits | A sticky pod with a sweet-sour pulp that gives tang to curries, sauces and drinks. | 13 dishes | `TI-0094.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0095 | allspice | Spices & Chilies | A berry tasting of cinnamon, nutmeg and clove, vital to Caribbean jerk and baking. | 12 dishes | `TI-0095.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0096 | parmesan | Dairy & Eggs | A hard, nutty Italian cheese grated over pasta, risotto and soups. | 12 dishes | `TI-0096.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0097 | seaweed | Vegetables | Sea vegetables that bring a savory, mineral umami to broths, rice and snacks. | 12 dishes | `TI-0097.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0098 | cassava | Vegetables | A starchy tropical root that is boiled, fried or ground into flour and tapioca. | 11 dishes | `TI-0098.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0099 | coconut | Fruits | A tropical fruit whose flesh, milk and oil bring richness and sweetness across the tropics. | 11 dishes | `TI-0099.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0100 | leek | Vegetables | A mild, sweet member of the onion family, used in soups, tarts and braises. | 11 dishes | `TI-0100.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0101 | mozzarella | Dairy & Eggs | A mild, stretchy fresh cheese that melts beautifully on pizza and pasta. | 11 dishes | `TI-0101.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0102 | red wine | Sauces, Oils & Pantry | A tannic, fruity wine that lends depth to braises and sauces. | 11 dishes | `TI-0102.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0103 | cheddar | Dairy & Eggs | A firm, tangy cheese that melts well and adds sharp flavor to sauces and bakes. | 10 dishes | `TI-0103.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0104 | orange | Fruits | A sweet, juicy citrus whose juice and peel flavor sauces, desserts and braises. | 10 dishes | `TI-0104.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0105 | radish | Vegetables | A peppery, crunchy root that adds bite and color to salads, pickles and soups. | 10 dishes | `TI-0105.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0106 | apple | Fruits | A crisp, sweet-tart fruit eaten raw, baked into desserts or cooked with pork. | 9 dishes | `TI-0106.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0107 | avocado | Vegetables | A rich, buttery fruit that adds creaminess to salads, sauces and spreads. | 9 dishes | `TI-0107.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0108 | berbere | Spices & Chilies | An Ethiopian blend of chili and warm spices that anchors stews. | 9 dishes | `TI-0108.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0109 | fenugreek | Spices & Chilies | A bittersweet, maple-scented seed or leaf used in curries and spice blends. | 9 dishes | `TI-0109.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0110 | galangal | Spices & Chilies | A peppery, piney cousin of ginger central to Thai and Indonesian pastes and soups. | 9 dishes | `TI-0110.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0111 | palm oil | Sauces, Oils & Pantry | A rich, reddish oil used for frying and stewing in West Africa and Southeast Asia. | 9 dishes | `TI-0111.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0112 | beer | Sauces, Oils & Pantry | A fermented grain drink used in batters, braises and stews. | 8 dishes | `TI-0112.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0113 | feta | Dairy & Eggs | A tangy, crumbly brined cheese from Greece, used in salads and pastries. | 8 dishes | `TI-0113.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0114 | green beans | Vegetables | Slender, snappy pods that are blanched, sautéed or simmered until tender. | 8 dishes | `TI-0114.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0115 | mirin | Sauces, Oils & Pantry | A sweet Japanese rice wine that balances soy in glazes and sauces. | 8 dishes | `TI-0115.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0116 | rose water | Sauces, Oils & Pantry | A fragrant floral water used in Middle Eastern and South Asian sweets and drinks. | 8 dishes | `TI-0116.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0117 | tofu | Legumes & Soy | Pressed soy curd with a mild flavor that takes on whatever it cooks with. | 8 dishes | `TI-0117.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0118 | buttermilk | Dairy & Eggs | A tangy cultured milk that tenderizes batters, biscuits and fried chicken. | 7 dishes | `TI-0118.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0119 | coffee | Sauces, Oils & Pantry | A roasted bean brewed into a bitter, aromatic drink that also flavors desserts. | 7 dishes | `TI-0119.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0120 | curry leaves | Herbs & Greens | Aromatic leaves with a nutty, citrusy scent, fried in oil to start South Indian dishes. | 7 dishes | `TI-0120.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0121 | fava beans | Legumes & Soy | Large, creamy beans mashed, stewed or fried in Mediterranean and Middle Eastern dishes. | 7 dishes | `TI-0121.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0122 | gruyère | Dairy & Eggs | A nutty, melting Swiss cheese used in fondue, gratins and onion soup. | 7 dishes | `TI-0122.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0123 | mustard seed | Spices & Chilies | Tiny, pungent seeds that pop in hot oil or are ground into mustard. | 7 dishes | `TI-0123.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0124 | strawberry | Fruits | A fragrant, sweet red berry, mostly used in desserts and fresh preparations. | 7 dishes | `TI-0124.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0125 | tapioca | Grains & Starches | A starch from cassava that thickens puddings and makes chewy pearls. | 7 dishes | `TI-0125.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0126 | tea | Sauces, Oils & Pantry | Dried leaves steeped into a fragrant drink that also flavors desserts and dishes. | 7 dishes | `TI-0126.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0127 | tuna | Seafood | A meaty, deep-flavored fish eaten raw, seared or preserved in oil. | 7 dishes | `TI-0127.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0128 | apricot | Fruits | A tangy-sweet stone fruit, used fresh or dried in tagines, jams and pastries. | 6 dishes | `TI-0128.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0129 | barley | Grains & Starches | A chewy, mild grain simmered in soups and stews. | 6 dishes | `TI-0129.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0130 | beet | Vegetables | A deep-red root that is earthy and sweet, roasted, pickled or simmered into borscht. | 6 dishes | `TI-0130.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0131 | capers | Sauces, Oils & Pantry | Tiny, salty, tangy flower buds that brighten sauces, fish and salads. | 6 dishes | `TI-0131.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0132 | caraway | Spices & Chilies | A nutty, anise-like seed used in breads, cabbage dishes and sausages. | 6 dishes | `TI-0132.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0133 | cocoa | Sauces, Oils & Pantry | Ground roasted cacao, bitter and deep, the base of chocolate and mole. | 6 dishes | `TI-0133.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0134 | cod | Seafood | A mild, flaky white fish, fresh or salted, found in northern Atlantic cuisines. | 6 dishes | `TI-0134.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0135 | flatbread | Grains & Starches | Unleavened or lightly leavened bread cooked quickly on a hot surface and used to scoop and wrap. | 6 dishes | `TI-0135.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0136 | kale | Vegetables | A hardy, slightly bitter leafy green that holds up to long braising or raw massaging. | 6 dishes | `TI-0136.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0137 | liver | Meat & Poultry | A rich, mineral-tasting organ meat, pan-fried or blended into pâté. | 6 dishes | `TI-0137.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0138 | mango | Fruits | A lush, fragrant tropical fruit eaten ripe or green, sweet or sour, in many cuisines. | 6 dishes | `TI-0138.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0139 | pistachio | Nuts & Seeds | A vivid green nut with a sweet, subtle flavor used in desserts and stuffings. | 6 dishes | `TI-0139.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0140 | plum | Fruits | A juicy, sweet-tart stone fruit used in desserts, sauces and preserves. | 6 dishes | `TI-0140.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0141 | ricotta | Dairy & Eggs | A soft, mildly sweet fresh cheese used in pasta, pastries and desserts. | 6 dishes | `TI-0141.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0142 | rosemary | Herbs & Greens | A resinous, piney herb that pairs with lamb, potatoes and bread. | 6 dishes | `TI-0142.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0143 | rye | Grains & Starches | A dark, earthy grain used in dense breads and crackers. | 6 dishes | `TI-0143.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0144 | turnip | Vegetables | A peppery-sweet root vegetable, roasted, mashed or pickled. | 6 dishes | `TI-0144.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0145 | banana | Fruits | A soft, sweet tropical fruit eaten ripe, fried or used in baking. | 5 dishes | `TI-0145.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0146 | goat | Meat & Poultry | A lean, flavorful meat slowly cooked in curries and stews across the world. | 5 dishes | `TI-0146.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0147 | gochujang | Sauces, Oils & Pantry | A sweet, spicy, fermented Korean chili paste. | 5 dishes | `TI-0147.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0148 | harissa | Sauces, Oils & Pantry | A fiery North African chili paste with garlic and spices. | 5 dishes | `TI-0148.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0149 | kidney beans | Legumes & Soy | Firm, red beans that hold up in chili, rice and long-simmered stews. | 5 dishes | `TI-0149.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0150 | maple syrup | Sauces, Oils & Pantry | A woodsy, sweet syrup boiled from maple sap. | 5 dishes | `TI-0150.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0151 | oats | Grains & Starches | A hearty grain used in porridge, baking and savory dishes. | 5 dishes | `TI-0151.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0152 | pine nuts | Nuts & Seeds | Small, buttery, resinous seeds blended into pesto and scattered over rice. | 5 dishes | `TI-0152.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0153 | pineapple | Fruits | A tangy-sweet tropical fruit that tenderizes meat and brightens sweet and savory dishes. | 5 dishes | `TI-0153.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0154 | sage | Herbs & Greens | A soft, musky herb that flavors browned butter, poultry and stuffings. | 5 dishes | `TI-0154.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0155 | salmon | Seafood | A rich, oily pink fish roasted, cured or grilled. | 5 dishes | `TI-0155.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0156 | sauerkraut | Vegetables | Fermented shredded cabbage with a bright sour tang, served with rich meats and sausages. | 5 dishes | `TI-0156.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0157 | star anise | Spices & Chilies | A star-shaped pod with a licorice sweetness, key to broths, braises and five-spice. | 5 dishes | `TI-0157.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0158 | sweet potato | Vegetables | A sweet, creamy-fleshed root, roasted, mashed or simmered in savory and sweet dishes alike. | 5 dishes | `TI-0158.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0159 | veal | Meat & Poultry | Pale, delicate young beef, often pounded thin and pan-fried or braised. | 5 dishes | `TI-0159.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0160 | white beans | Legumes & Soy | Creamy, mild beans that thicken soups and stews. | 5 dishes | `TI-0160.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0161 | zucchini | Vegetables | A tender summer squash with a delicate flavor, grilled, sautéed or baked. | 5 dishes | `TI-0161.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0162 | anchovy | Seafood | A salty, intensely savory little fish that melts into sauces to add depth. | 4 dishes | `TI-0162.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0163 | blue cheese | Dairy & Eggs | A pungent, creamy cheese veined with mold that stands out in dressings and sauces. | 4 dishes | `TI-0163.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0164 | buckwheat | Grains & Starches | A nutty, earthy seed ground into soba noodles, crêpes and porridge. | 4 dishes | `TI-0164.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0165 | bulgur | Grains & Starches | Cracked, parboiled wheat with a nutty chew, used in salads and pilafs. | 4 dishes | `TI-0165.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0166 | cheese curds | Dairy & Eggs | Fresh, squeaky curds eaten on their own or used in poutine. | 4 dishes | `TI-0166.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0167 | chives | Herbs & Greens | A delicate, mild onion-flavored herb snipped over eggs, potatoes and soups. | 4 dishes | `TI-0167.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0168 | couscous | Grains & Starches | Tiny steamed semolina pearls that soak up stews and sauces. | 4 dishes | `TI-0168.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0169 | crab | Seafood | Sweet, delicate shellfish served in cakes, soups and curries. | 4 dishes | `TI-0169.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0170 | cranberry | Fruits | A sharp, tart red berry cooked into sauces and baked goods. | 4 dishes | `TI-0170.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0171 | emmental | Dairy & Eggs | A mild, nutty Swiss cheese with large holes, melted into fondue and gratins. | 4 dishes | `TI-0171.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0172 | five-spice | Spices & Chilies | A Chinese blend of sweet and warm spices used on roast meats and braises. | 4 dishes | `TI-0172.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0173 | hazelnut | Nuts & Seeds | A sweet, toasty nut that pairs with chocolate and baked goods. | 4 dishes | `TI-0173.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0174 | herring | Seafood | An oily fish pickled or cured, beloved across northern Europe. | 4 dishes | `TI-0174.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0175 | hibiscus | Herbs & Greens | Tart, deep-red flower petals steeped into refreshing drinks and sauces. | 4 dishes | `TI-0175.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0176 | jackfruit | Fruits | A giant tropical fruit with a stringy texture when green that mimics shredded meat. | 4 dishes | `TI-0176.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0177 | juniper | Spices & Chilies | A piney, resinous berry used to season game, sauerkraut and gin. | 4 dishes | `TI-0177.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0178 | lingonberry | Fruits | A tart Nordic berry served as a sauce or jam with meats. | 4 dishes | `TI-0178.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0179 | mussels | Seafood | Briny, tender shellfish steamed in wine or tomato broth. | 4 dishes | `TI-0179.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0180 | pecorino | Dairy & Eggs | A sharp, salty sheep’s milk cheese grated over pasta. | 4 dishes | `TI-0180.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0181 | pomegranate | Fruits | A jewel-like fruit whose tart-sweet seeds and juice lift stews, salads and sauces. | 4 dishes | `TI-0181.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0182 | prosciutto | Meat & Poultry | Delicate, salt-cured Italian ham sliced paper-thin. | 4 dishes | `TI-0182.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0183 | shellfish | Seafood | Clams, oysters and kin that give broths and stews a briny sea flavor. | 4 dishes | `TI-0183.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0184 | shrimp paste | Sauces, Oils & Pantry | A pungent, fermented shrimp seasoning that adds savory depth to Southeast Asian pastes. | 4 dishes | `TI-0184.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0185 | squid | Seafood | A tender-chewy mollusk that is quickly fried or grilled, or slowly stewed. | 4 dishes | `TI-0185.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0186 | turkey | Meat & Poultry | A large, lean poultry associated with festive roasts in the Americas and beyond. | 4 dishes | `TI-0186.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0187 | wasabi | Spices & Chilies | A sharp, nose-clearing Japanese root served with raw fish and noodles. | 4 dishes | `TI-0187.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0188 | yam | Vegetables | A starchy, earthy tuber with rough brown skin that is boiled, pounded or mashed across West Africa and the Pacific. | 4 dishes | `TI-0188.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0189 | asparagus | Vegetables | A tender spring shoot with a grassy, delicate flavor, steamed, roasted or grilled. | 3 dishes | `TI-0189.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0190 | bamboo shoot | Vegetables | The tender young shoot of bamboo, mildly sweet and crunchy, common in East and Southeast Asian cooking. | 3 dishes | `TI-0190.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0191 | black-eyed peas | Legumes & Soy | Creamy, earthy beans used in stews and fritters across Africa and the American South. | 3 dishes | `TI-0191.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0192 | blueberry | Fruits | A small, sweet-tart berry baked into pastries and cooked into sauces and jams. | 3 dishes | `TI-0192.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0193 | bok choy | Vegetables | A mild Chinese cabbage with crisp stems and tender leaves, quick to stir-fry or steam. | 3 dishes | `TI-0193.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0194 | cherry | Fruits | A small, sweet-tart stone fruit used in pies, sauces and preserves. | 3 dishes | `TI-0194.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0195 | chorizo | Meat & Poultry | A paprika-red cured pork sausage that flavors Spanish and Latin American dishes. | 3 dishes | `TI-0195.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0196 | dates | Fruits | Sticky-sweet, caramel-flavored fruit of the date palm, eaten whole or baked into sweets across the Middle East and North Africa. | 3 dishes | `TI-0196.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0197 | duck | Meat & Poultry | A rich, fatty poultry with crisp skin when roasted or confited. | 3 dishes | `TI-0197.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0198 | dulce de leche | Sauces, Oils & Pantry | A thick, caramelized milk jam beloved across Latin America. | 3 dishes | `TI-0198.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0199 | fig | Fruits | A soft, honey-sweet fruit full of tiny seeds, eaten fresh or dried with cheese, cured meats and desserts. | 3 dishes | `TI-0199.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0200 | goat cheese | Dairy & Eggs | A tangy, creamy cheese that brightens salads, tarts and pastas. | 3 dishes | `TI-0200.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0201 | hoisin | Sauces, Oils & Pantry | A sweet, salty Chinese soybean sauce used for glazes and dipping. | 3 dishes | `TI-0201.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0202 | horseradish | Spices & Chilies | A sharp, sinus-clearing root grated fresh with roast beef, fish and beets. | 3 dishes | `TI-0202.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0203 | octopus | Seafood | A chewy mollusk that becomes tender when slowly simmered or grilled. | 3 dishes | `TI-0203.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0204 | okra | Vegetables | A green pod that thickens stews and gumbos and turns crisp when fried. | 3 dishes | `TI-0204.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0205 | pandan | Herbs & Greens | A fragrant tropical leaf with a vanilla-like aroma, used in Southeast Asian sweets and rice. | 3 dishes | `TI-0205.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0206 | papaya | Fruits | A soft, sweet tropical fruit, also used green and shredded in tangy salads. | 3 dishes | `TI-0206.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0207 | pear | Fruits | A soft, floral fruit poached in wine, baked in desserts or paired with cheese. | 3 dishes | `TI-0207.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0208 | poppy seeds | Nuts & Seeds | Tiny, nutty blue-black seeds used in breads, pastries and curries. | 3 dishes | `TI-0208.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0209 | rabbit | Meat & Poultry | A lean, delicate meat braised or stewed in rustic European cooking. | 3 dishes | `TI-0209.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0210 | sardine | Seafood | A small, oily fish grilled fresh or tinned for a bold, savory flavor. | 3 dishes | `TI-0210.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0211 | sichuan pepper | Spices & Chilies | A citrusy, tingling spice that gives Sichuan food its numbing heat. | 3 dishes | `TI-0211.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0212 | tahini | Nuts & Seeds | A creamy, nutty paste of ground sesame seeds, the base of hummus and many sauces. | 3 dishes | `TI-0212.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0213 | tarragon | Herbs & Greens | A sweet, anise-scented herb central to classic French sauces. | 3 dishes | `TI-0213.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0214 | teff | Grains & Starches | A tiny, nutty Ethiopian and Eritrean grain, fermented and griddled into injera or cooked into porridge. | 3 dishes | `TI-0214.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0215 | venison | Meat & Poultry | Lean, gamey deer meat, braised or roasted with fruit and juniper. | 3 dishes | `TI-0215.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0216 | ackee | Fruits | A Jamaican fruit with a creamy, scrambled-egg texture, cooked with salt fish. | 2 dishes | `TI-0216.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0217 | chili bean paste | Sauces, Oils & Pantry | A fiery, salty fermented broad-bean paste at the heart of Sichuan cooking. | 2 dishes | `TI-0217.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0218 | fennel | Vegetables | A bulb with a gentle anise flavor, eaten raw and crisp or cooked until sweet. | 2 dishes | `TI-0218.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0219 | gouda | Dairy & Eggs | A smooth, mellow Dutch cheese that turns caramel-sweet with age. | 2 dishes | `TI-0219.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0220 | grape | Fruits | A juicy fruit eaten fresh, dried into raisins or pressed into wine and vinegar. | 2 dishes | `TI-0220.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0221 | guanciale | Meat & Poultry | Cured pork cheek, richer than bacon and essential to Roman pasta. | 2 dishes | `TI-0221.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0222 | lobster | Seafood | A luxurious, sweet shellfish steamed, grilled or folded into rich sauces. | 2 dishes | `TI-0222.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0223 | macadamia | Nuts & Seeds | A buttery, rich nut grown in Australia and Hawaii. | 2 dishes | `TI-0223.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0224 | mascarpone | Dairy & Eggs | A silky, sweet cream cheese central to tiramisu. | 2 dishes | `TI-0224.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0225 | miso | Legumes & Soy | A fermented soybean paste that gives soups and glazes a deep, salty umami. | 2 dishes | `TI-0225.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0226 | paneer | Dairy & Eggs | A fresh, mild Indian cheese that holds its shape in curries. | 2 dishes | `TI-0226.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0227 | pecan | Nuts & Seeds | A sweet, buttery nut that stars in southern pies and pralines. | 2 dishes | `TI-0227.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0228 | quinoa | Grains & Starches | A protein-rich Andean seed cooked like a grain, with a light, nutty flavor. | 2 dishes | `TI-0228.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0229 | smoked salmon | Seafood | Salmon cured and smoked into silky, savory slices. | 2 dishes | `TI-0229.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
| ⬜ to create | TI-0230 | sumac | Spices & Chilies | A tangy, lemony crimson spice sprinkled over Middle Eastern grilled meats and salads. | 2 dishes | `TI-0230.webp` | WebP | 1024 × 1024 px | 150–300 KB | — |
