import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const loader = document.querySelector('.loader');
const KEY = '43440045-443c1624e1412379947e54b30';
const BASE_URL = 'https://pixabay.com/api/';



 export function getImages(searchWord) {

    const searchParamObj = {
        key: KEY,
        q: searchWord,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      };
    const LINK = `${BASE_URL}?${searchParamObj}`;

    loader.style.display = 'block'; /-------появился----/

    return fetch(LINK)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    })
    .then(data => {

        loader.style.display = 'none'; /-------исчез----/

        if (data.hits.length === 0) {
            iziToast.error({
              message:
                'Sorry, there are no images matching your search query. Please try again!',
                backgroundColor: '#ef4040',  
                titleColor: '#FFFFFF',
                messageColor: '#FFFFFF',
                theme: 'dark',
            });
        }
        return data;
    })
    .catch(error => {
        console.log(error);
    });
}
