import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery")

const img = galleryItems
.map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
  )
  .join("");
  galleryContainer.insertAdjacentHTML("beforeend", img);

  galleryContainer.addEventListener("click", zoomPhoto)

  function zoomPhoto(event) {
    event.preventDefault();


    const imgUrl = event.target.src;

    //Відкриття

    if (event.target.nodeName !== "IMG") {
        return;
      }

    const instance = basicLightbox.create(`
    <img src="${imgUrl}" width="800" height="600">`);
    instance.show();

    galleryContainer.addEventListener("keydown", photoClose)

    function photoClose(event) {
        if(event.key === "Escape") {
            instance.close();
        }
    };

  }