export const showLoader = () => {
  const loader = document.createElement('div');
  loader.classList.add('loader');
  document.body.appendChild(loader);
};

export const hideLoader = () => {
  const loader = document.querySelector('.loader');
  if (loader) {
    document.body.removeChild(loader);
  }
};

export const clearGallery = () => {
  let gallery = document.querySelector('.gallery');
  if (gallery) {
    gallery.innerHTML = '';
  }
};

export const createGallery = () => {
  let gallery = document.createElement('ul');
  gallery.classList.add('gallery');
  document.body.appendChild(gallery);
  return gallery;
};

export const renderImages = (images, gallery) => {
  images.forEach(image => {
    const galleryItem = document.createElement('li');
    galleryItem.classList.add('gallery-item');
    galleryItem.innerHTML = `
      <a href="${image.webformatURL}"><img src="${image.webformatURL}" alt="${image.tags}"></a>
      <div class="info">
        <p><b>Likes</b><br>${image.likes}</p>
        <p><b>Views</b><br>${image.views}</p>
        <p><b>Comments</b><br>${image.comments}</p>
        <p><b>Downloads</b><br>${image.downloads} </p>
      </div>
    `;
    gallery.appendChild(galleryItem);
  });
};