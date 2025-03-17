import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from "axios";
axios({
  method: 'get',
  url: 'https://jsonplaceholder.typicode.com/users'
})
    .then(response => console.log(response))
	.catch(error => console.log(error));

const form = document.querySelector('.form');
const API_KEY = '49366539-6fd412d088ca04dcc1c9b4bd7'; 
form.addEventListener('submit', function (event) {
    event.preventDefault(); 
    const searchText = form.querySelector('input[name="search-text"]').value.trim();
  if (!searchText) {
    iziToast.error({
      title: 'Error',
      message: 'Please, enter the text for search!',
    });
    return;
  }

  // Якщо галерея вже існує, очищаємо її перед новим пошуком
  let gallery = document.querySelector('.gallery');
  if (gallery) {
    gallery.innerHTML = ''; // очищаємо старі результати
  } else {
    // Якщо галереї ще немає, додаємо її
    gallery = document.createElement('ul');
    gallery.classList.add('gallery');
    document.body.appendChild(gallery); // додаємо галерею до тіла документа
  }

  // Запит до API Pixabay
  axios.get('https://pixabay.com/api/', {
    params: {
      key: API_KEY,
      q: searchText,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    }
  })
  .then(response => {
    const images = response.data.hits;

    if (images.length === 0) {
      iziToast.warning({
        title: 'Caution',
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    // Додавання зображень до галереї
    images.forEach(image => {
      const galleryItem = document.createElement('li');
      galleryItem.classList.add('gallery-item');
      
      galleryItem.innerHTML = `
        <img src="${image.webformatURL}" alt="${image.tags}">
        <div class="info">
          <p><b>Likes</b><br>${image.likes}</p>
          <p><b>Views</b><br>${image.views}</p>
          <p><b>Comments</b><br>${image.comments}</p>
          <p><b>Downloads</b><br>${image.downloads} </p>
        </div>
      `;
      
      gallery.appendChild(galleryItem);
    });
  })
  .catch(error => {
    iziToast.error({
      title: 'Error',
      message: 'Illegal operation.',
    });
    console.error(error);
  });
});