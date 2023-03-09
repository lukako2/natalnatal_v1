const cont = document.getElementById("row");

let albums = [
  {
    name: "Natali",
    photo: ["./imgs/DSC05069.JPG"],
    link: ["./html/natali.html"],
  },

  {
    name: "Natal and luk",
    photo: ["./imgs/DSC05801.JPG"],
    link: ["./html/natalNdLuk.html"],
  },

  {
    name: "Beautiful",
    photo: ["./imgs/DSC05231.JPG"],
    link: ["./html/btfl.html"],
  },
];

let imgs = [
  {
    photo: ["./imgs/DSC05069.JPG"],
    link: ["./html/natali.html"],
  },

  {
    photo: ["./imgs/DSC05801.JPG"],
    link: ["./html/natalNdLuk.html"],
  },

  {
    photo: ["./imgs/DSC05231.JPG"],
    link: ["./html/btfl.html"],
  },

  {
    photo: ["./imgs/DSC05072.JPG"],
    link: ["./html/natali.html"],
  },

  {
    photo: ["./imgs/DSC05075.JPG"],
    link: ["./html/natali.html"],
  },

  {
    photo: ["./imgs/DSC05362.JPG"],
    link: ["./html/btfl.html"],
  },

  {
    photo: ["./imgs/DSC05363.JPG"],
    link: ["./html/natali.html"],
  },
  {
    photo: ["./imgs/DSC05711.JPG"],
    link: ["./html/natali.html"],
  },

  {
    photo: ["./imgs/DSC05808.JPG"],
    link: ["./html/natlNdLuk.html"],
  },

  {
    photo: ["./imgs/DSC05811.JPG"],
    link: ["./html/natlNdLuk.html"],
  },

  {
    photo: ["./imgs/DSC05812.JPG"],
    link: ["./html/natlNdLuk.html"],
  },

  {
    photo: ["./imgs/DSC05813.JPG"],
    link: ["./html/natlNdLuk.html"],
  },
];

imgs.forEach((element) => {
  let card = `
    <a style="cursor:default;" href="${element.link}"><img  style="padding:2rem; cursor:pointer;" src="${element.photo}"></a>
  `;
  cont.innerHTML += card;
});

const albm_div = document.getElementById("row-a");

albums.forEach((element) => {
  let card = `
        <div class="card cardB" style="width: 30rem;">
    <img src="${element.photo}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${element.name}</h5>
        <p class="card-text">i lov my tatalia so much we lov lovlov <span><img style="width:4%;" src="./imgs/icon/ghost_1f47b.gif"></span></p>
        <a href="${element.link}" class="btn btn-primary">View full album</a>
    </div>
    </div>
  `;
  albm_div.innerHTML += card;
});

function scrollToDiv() {
  const div = document.getElementById("div-2");
  const divPosition = div.offsetTop;
  window.scrollTo({ top: divPosition, behavior: "smooth" });
}
