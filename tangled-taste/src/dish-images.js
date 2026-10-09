// The dish pictures (art/dishes/*.webp -> public/dish-art, made by scripts/build-dish-art.mjs), keyed by dish ID.
import { makeArtSet } from './art-set.js';

const set = makeArtSet('dish-art');
export const loadDishArt = set.load;
export const onDishArt = set.onUpdate;
export const dishArtReady = set.ready;
export const hasDishImage = set.has;
export const dishPreviewUrl = set.previewUrl;
export const dishThumbTexture = set.thumbTexture;
export const dishThumbHTML = set.thumbHTML;
