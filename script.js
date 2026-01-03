/* =========================
   SHOP POPUP (shop.html)
========================= */

const products = document.querySelectorAll('.product');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popup-image');
const productName = document.getElementById('product-name');
const productPrice = document.getElementById('product-price');

if (products.length && popup) {
  products.forEach(product => {
    product.addEventListener('click', () => {
      popupImage.src = product.dataset.image;
      popupImage.style.display = 'block';

      productName.textContent = product.dataset.name;
      productPrice.textContent = product.dataset.price;

      popup.style.display = 'flex';
    });
  });
}

function closePopup() {
  if (popup) popup.style.display = 'none';
}


/* =========================
   HOME FULLSCREEN IMAGES
   (home.html only)
========================= */

const homeImages = document.querySelectorAll('.home-image');
const homeLightbox = document.getElementById('lightbox');
const homeLightboxImg = document.getElementById('lightbox-img');
const homeLightboxClose = document.querySelector('.lightbox-close');

if (homeImages.length && homeLightbox) {
  homeImages.forEach(img => {
    img.addEventListener('click', () => {
      homeLightboxImg.src = img.src;
      homeLightbox.style.display = 'flex';
    });
  });

  homeLightboxClose.addEventListener('click', () => {
    homeLightbox.style.display = 'none';
  });

  homeLightbox.addEventListener('click', (e) => {
    if (e.target !== homeLightboxImg) {
      homeLightbox.style.display = 'none';
    }
  });
}


/* =========================
   GALLERY FULLSCREEN
   (gallery.html)
========================= */

const galleryItems = document.querySelectorAll('.gallery-item');
const galleryLightbox = document.getElementById('gallery-lightbox');
const galleryContent = document.querySelector('.lightbox-content');
const galleryClose = document.querySelector('.lightbox-close');

if (galleryItems.length && galleryLightbox) {
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      galleryContent.innerHTML = '';

      if (item.tagName === 'VIDEO') {
        const video = document.createElement('video');
        video.src = item.querySelector('source').src;
        video.controls = true;
        video.autoplay = true;
        galleryContent.appendChild(video);
      } else {
        const img = document.createElement('img');
        img.src = item.src;
        galleryContent.appendChild(img);
      }

      galleryLightbox.style.display = 'flex';
    });
  });

  galleryClose.addEventListener('click', () => {
    galleryLightbox.style.display = 'none';
    galleryContent.innerHTML = '';
  });

  galleryLightbox.addEventListener('click', (e) => {
    if (e.target === galleryLightbox) {
      galleryLightbox.style.display = 'none';
      galleryContent.innerHTML = '';
    }
  });
}
