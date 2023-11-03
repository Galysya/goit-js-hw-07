import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// function (galleryItems) {

// }



const galleries = document.querySelector(".gallery");
let galleryImage = "";
for (const item of galleryItems) {
  galleryImage += `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`
}
galleries.insertAdjacentHTML( 'afterbegin', galleryImage );

console.log(galleries);

// 2

galleries.addEventListener('click', onGalleryClick)

function onGalleryClick(e) {
    e.preventDefault()
    const url = e.target.dataset.source;


// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `)

// instance.show()


const instance = basicLightbox.create(`
    <img src="${url}" width="800" height="600">
`)

instance.show()
}

