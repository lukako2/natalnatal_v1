

let btfl_pics = [
    {
      url: ["../imgs/toghether/DSC05802.JPG"],
      active: ["active"],
    },
  
    {
      url: ["../imgs/DSC05803.JPG"],
    },
  
    {
      url: ["../imgs/DSC05811.JPG"],
    },
  
    {
      url: ["../imgs/DSC05812.JPG"],
    },
  
    {
      url: ["../imgs/DSC05813.JPG"],
    },
  
    
  ];
  
  const carousel = document.getElementById("carsl-inner");
  
  btfl_pics.forEach((element) => {
    let card = `
      <div class="carousel-item ${element.active}">
        <img src="${element.url}" class="d-block w-100" alt="...">
      `;
    carousel.innerHTML += card;
  });
  