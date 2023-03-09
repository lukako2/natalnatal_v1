const carousel = document.getElementById("carsl-inner");

let carsl_imgs = [
  {
    url: [`../imgs/natl/DSC04988.JPG`],
  },

  {
    url: [`../imgs/natl/DSC05058.JPG`],
  },

  {
    url: [`../imgs/natl/DSC05069.JPG`],
  },
  {
    url: [`../imgs/natl/DSC05073.JPG`],
    active: ["active"],
  },
  {
    url: [`../imgs/natl/DSC05092.JPG`],
  },
  {
    url: [`../imgs/natl/DSC05095.JPG`],
  },
  {
    url: [`../imgs/natl/DSC05116.JPG`],
  },
  {
    url: [`../imgs/natl/DSC05225.JPG`],
  },
  {
    url: [`../imgs/natl/DSC05322.JPG`],
  },
  {
    url: [`../imgs/natl/DSC05360.JPG`],
  },
  {
    url: [`../imgs/natl/DSC05361.JPG`],
  },
  {
    url: [`../imgs/natl/DSC05713.JPG`],
  },

  {
    url: [`../imgs/natl/DSC05712.JPG`],
  },
  {
    url: [`../imgs/natl/DSC05805.JPG`],
  },
];

carsl_imgs.forEach((element) => {
  let card = `
    <div class="carousel-item ${element.active}">
    <img src="${element.url}" class="d-block w-100" alt="..." data-bs-interval="0.1">
  </div>
    `;
  carousel.innerHTML += card;
});
