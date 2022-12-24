$(document).ready(function () {
  let data = [
    {
      item: "CSS ANIMATION CIRCLE",
      url: "./css_animation_circle/index.html",
    },
    {
      item: "CSS ANIMATION LOADING",
      url: "./css_animation_loading/index.html",
    },
    {
      item: "CSS ARCHITECTING",
      url: "./css_architecting/index.html",
    },
    {
      item: "CSS NEOMORFISMO LOGIN",
      url: "./css_neomorfismo_login/index.html",
    },
    {
      item: "CSS NEOMORFISMO PLAYLIST",
      url: "./css_neomorfismo_playlist/index.html",
    },
    {
      item: "CSS NEOMORFISMO PRINCIPIOS",
      url: "./css_neomorfismo_principios/index.html",
    },
    {
      item: "CSS NOTES",
      url: "./css_notes/index.html",
    },
    {
      item: "JS POO",
      url: "./js_poo/index.html",
    },
    {
      item: "JS TIMEOUT",
      url: "./js_timeout/index.html",
    },
    {
      item: "PORTAFOLIO 1",
      url: "./portafolio1/index.html",
    },
    {
      item: "WEBSITE FRUITOPIA",
      url: "./website_fruitopia/index.html",
    },
  ];
  
  var target = document.getElementById("content");

  data.map((dat, index) => {
    target.innerHTML += `
        <div id="item-${index}">
            <a href="${dat.url}">${index + 1}.- ${dat.item}</a>
        </div>
        `;
  });
});
