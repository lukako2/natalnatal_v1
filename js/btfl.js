// const btfl_div = document.getElementById("row-btfl");

let btfl_pics = [
  {
    url: ["../imgs/places/DSC05086.jpg"],
    active: ["active"],
  },

  {
    url: ["../imgs/places/DSC05094.jpg"],
  },

  {
    url: ["../imgs/places/DSC05097.jpg"],
  },

  {
    url: ["../imgs/places/DSC05100.jpg"],
  },

  {
    url: ["../imgs/places/DSC05102.jpg"],
  },

  {
    url: ["../imgs/places/DSC05714.jpg"],
  },

  {
    url: ["../imgs/places/DSC05715.jpg"],
  },

  {
    url: ["../imgs/places/DSC05779.jpg"],
  },

  {
    url: ["../imgs/places/DSC05800.jpg"],
  },

  {
    url: ["../imgs/places/DSC05103.jpg"],
  },
];

const carousel = document.getElementById("carousel-inner");

btfl_pics.forEach((element) => {
  let card = `
    <div class="carousel-item ${element.active}">
      <img src="${element.url}" class="d-block w-100" alt="...">
    `;
  carousel.innerHTML += card;
});
