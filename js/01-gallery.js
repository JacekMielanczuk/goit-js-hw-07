import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const imageMarkup = createItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", imageMarkup);

function createItemsMarkup(image) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original.value}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </div>`;
    })
    .join("");
}

const clickContainer = (e) => {
  e.preventDefault();

  if (e.target.classList.contains("gallery")) return;
  const source = e.target.dataset.source;

  const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${source}"width="800" height="600">
        
    </div>
`);

  instance.show();
};

galleryContainer.addEventListener("click", clickContainer);
