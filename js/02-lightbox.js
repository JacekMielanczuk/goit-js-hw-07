import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const imageMarkup = createItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", imageMarkup);

function createItemsMarkup(image) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<ul class="gallery">
<li>
<a class="gallery__item" href="${original}">
<img 
class="gallery__image"
src="${preview}"
alt="${description}"
/>
</a>
</li>
</ul>`;
    })
    .join("");
}
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionType: "alt",
});
