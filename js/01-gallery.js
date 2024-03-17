import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const list = document.querySelector('.js-gallery');

const markup = galleryItems.map(({original, preview, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('');

list.insertAdjacentHTML('beforeend', markup);

list.addEventListener('click', onClick);


function onClick(evt) {
  const { target } = evt;
  evt.preventDefault();

  if (target.nodeName !== 'IMG') {
    return
  } 


const instance = basicLightbox.create(`
    <img src="${target.dataset.source}" width="800" height="600">
`)

  instance.show();

  document.addEventListener('keydown', evt => evt.code === 'Escape' ? instance.close() : false);
  
}
