const card = document.getElementById("cardWrap");

window.addEventListener("mousemove", (e) => {
  let x = e.pageX - innerWidth / 2;
  let y = e.pageY - innerHeight / 2;
  card.style.transform = `translate(${x / 40}px, ${y / 40}px)`;
});
