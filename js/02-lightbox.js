import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const img = galleryItems
.map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
        <img 
        class="gallery__image" 
        src="${preview}" 
        alt="${description}"
         />
        </a>`
        )
  .join("");
galleryList.insertAdjacentHTML("beforeend", img);

let lightbox = new SimpleLightbox(" .gallery a",
{captionsData: "alt", captionsDelay:"250"});