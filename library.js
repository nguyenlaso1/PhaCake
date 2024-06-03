const arrowBtns = document.querySelectorAll(".thuvien .arrow");
const carousel = document.querySelector(".thuvien .carousel");
const cards = document.querySelectorAll(".thuvien .card");
const firstCardWidth = document.querySelector(".thuvien .card").offsetWidth;

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? - 170 : 170;
    })
})
