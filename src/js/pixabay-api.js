import axios from 'axios';

const API_KEY = '49366539-6fd412d088ca04dcc1c9b4bd7';

export const fetchImages = (searchText) => {
  return axios.get('https://pixabay.com/api/', {
    params: {
      key: API_KEY,
      q: searchText,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    }
  });
};
