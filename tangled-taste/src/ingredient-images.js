// The ingredient pictures (art/ingredients/*.webp -> public/ingredient-art), keyed by the ingredient's slug.
// An ingredient without a picture keeps its painting made in code.
import { makeArtSet } from './art-set.js';

const set = makeArtSet('ingredient-art');
export const loadIngredientArt = set.load;
export const onIngredientArt = set.onUpdate;
export const hasIngredientImage = set.has;
export const ingredientThumbTexture = set.thumbTexture;
export const ingredientThumbCanvas = set.thumbCanvas;
