import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


import { renderMarcup } from "./js/render-functions.js";
import { getImages } from "./js/pixabay-api.js";

const lightbox = new SimpleLightbox('.gallery a', {
    nav: true,
    captions: true,
    captionsData: 'alt',
    captionDelay: 150,
  });

  const form = document.querySelector('.form');
  const gallery = document.querySelector('.gallery');
  const loader = document.querySelector('.loader');

  function showMessageError(textMes) {
    iziToast.error({
        iconUrl: iconError,
        message: textMes,
        maxWidth: '432px',
        position: 'topRight',
        messageSize: 16,
        backgroundColor: '#ef4040',
        titleColor: '#FFFFFF',
        messageColor: '#FFFFFF',
        theme: 'dark',
    }); 
}

  // let searchWord = '';


  // form.addEventListener('submit', workSub);

  // function workSub(event) {
  //   event.preventDefault();
    
  //   gallery.innerHTML = '';
  //   searchWord = form.elements.searchWord.value.trim();
    
  //   getImages(searchWord)
  //   .then(data => {
  //     const marcup = renderMarcup(data);
  //     gallery.insertAdjacentHTML('beforeend', marcup);

  //     lightbox.refresh();
  //   })
  //   .catch(error => {
  //     console.error('Error:', error);
  //   });
  // form.reset();
  // }
function showGallery (searchWord) {
  if (searchWord) {
    form.reset();
    gallery.innerHTML = '';
    loader.style.display = 'block';
    getImages(searchWord)
         .then(data => {
          console.log(data);
            //  const arrayImages = data.hits;
             
            //  if (arrayImages.length) {
            //      gallery.innerHTML = renderMarcup(arrayImages);
            //      lightbox.refresh();
            //  } else {
            //      showMessageError(
            //          'Sorry, there are no images matching your search query. Please try again!');
            //  }
         })
         .catch((error) => showMessageError(error))
         .finally(() => loader.style.display = 'none');
 } 
}


  form.addEventListener('submit', workSub);

  function workSub(event) {
    event.preventDefault();
    const sarchWord = event.target.elements.searchWord.value;
    showGallery (sarchWord);

  }
   
  










//   .then(data => {

//     // loader.style.display = 'none'; /-------исчез----/

//     if (data.hits.length === 0) {
//         iziToast.error({
//           message:
//             'Sorry, there are no images matching your search query. Please try again!',
//             backgroundColor: '#ef4040',  
//             titleColor: '#FFFFFF',
//             messageColor: '#FFFFFF',
//             theme: 'dark',
//         });
//     }
//     return data;
// })
// .catch(error => {
//     console.log(error);
// });