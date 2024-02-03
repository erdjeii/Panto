let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".gallery-pagination",
    clickable: true,
    type: "fraction"
    },
  navigation: {
    nextEl: ".gallery__btn-next",
    prevEl: ".gallery__btn-prev"
    },
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1446: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});


const btn = document.querySelectorAll(".btn")
const num = document.querySelector(".num")

num.innerText = ""
let i = 0

btn.forEach((el) => {
  el.addEventListener("click", () =>{
    i++
    num.innerText = i
    console.log(i)
  })
})

let burger = document.querySelector('.nav')
let btnClose = document.querySelector('.burger')

let toggle = ()=>{
    burger.classList.toggle('actived')
    btnClose.classList.toggle('actived')
}