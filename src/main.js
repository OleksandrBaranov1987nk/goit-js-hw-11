import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

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
  let searchWord = '';


  
  form.addEventListener('submit', workSub);



