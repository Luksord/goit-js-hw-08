import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryList = document.querySelector('.gallery');

const galleryItem = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
<a href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`
  )
  .join('');

galleryList.insertAdjacentHTML('beforeend', galleryItem);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});

console.log(galleryItems);

/*

import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

const galleryItem = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
<a href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`
  )
  .join("");

galleryList.insertAdjacentHTML("beforeend", galleryItem);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});

console.log(galleryItems);


*/
