import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleries = document.querySelector(".gallery");
let galleryImage = "";
for (const item of galleryItems) {
  galleryImage += 
  `<li class="gallery__item">
     <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}"
       />
     </a>
  </li>`
}
galleries.insertAdjacentHTML( 'afterbegin', galleryImage );

console.log(galleries);


let gallery = new SimpleLightbox('.gallery a', { captionsData:'alt', captionDelay: 250 });





