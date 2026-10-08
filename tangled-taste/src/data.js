// Aggregates the curated dataset in src/data/. Popularity values (0–100) are
// illustrative estimates of worldwide recognition, not measured statistics.
import { CATEGORIES } from './data/categories.js';
import { CUISINES } from './data/cuisines.js';
import { INGREDIENTS } from './data/ingredients.js';
import { DISH_TYPES } from './data/dish-types.js';
import { INGREDIENT_NOTES } from './data/ingredient-notes.js';
import europe from './data/dishes/europe.js';
import americas from './data/dishes/americas.js';
import asiaPacific from './data/dishes/asia-pacific.js';
import africaMiddleEast from './data/dishes/africa-middle-east.js';

export { CATEGORIES, CUISINES, INGREDIENTS, DISH_TYPES, INGREDIENT_NOTES };

export const INGREDIENT_CATEGORY = Object.fromEntries(
  Object.entries(INGREDIENTS).flatMap(([category, names]) => names.map((n) => [n, category])),
);

export const DISHES = [...europe, ...americas, ...asiaPacific, ...africaMiddleEast].map(
  ([name, cuisine, popularity, ingredients, note, type = 'main'], id) => ({
    id,
    name,
    cuisine,
    popularity,
    note,
    type,
    ingredients: ingredients.split(',').map((s) => s.trim()),
  }),
);
