import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const loader = document.querySelector('.loader');
const KEY = '43440045-443c1624e1412379947e54b30';
const BASE_URL = 'https://pixabay.com/api/';




 export function getImages(QUERY) {
    const LINK = `${BASE_URL}?key=${KEY}&q=${QUERY}&image_type=photo&orientation=horizontal&safesearch=true`;
    return fetch(LINK)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    })
    .then(data => {
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

