$(document).ready(function () {
  let data = [
    {
      item: "CSS ANALOG CLOCK",
      url: "./css_analog_clock/index.html",
    },
    {
      item: "CSS ANIMATION",
      url: "./css_animation/index.html",
    },
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
      item: "CSS EMOJI EFECTS",
      url: "./css_emoji_efects/index.html",
    },
    {
      item: "CSS GLASSMORPHISM CARD",
      url: "./css_glassmorphism_card/index.html",
    },
    {
      item: "CSS GLASSMORPHISM CARD 1",
      url: "./css_glassmorphism_card1/index.html",
    },
    {
      item: "CSS HOVER EFECTS",
      url: "./css_hover_effects/index.html",
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
      item: "CSS PEN",
      url: "./css_pen/index.html",
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
      item: "WEBAPP CALCULATOR",
      url: "./webapp_calculator/index.html",
    },
    {
      item: "WEBAPP LOGIN DOUBLE SLIDER",
      url: "./webapp_login_double_slider/index.html",
    },
    {
      item: "WEBSITE PROGRESSFORM",
      url: "./webapp_progressform/index.html",
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
