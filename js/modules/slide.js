export default function initSlider(){
const containerSlides = document.querySelector('.container-slides')
const btnPrevious = document.querySelector('.previous')
const btnNext = document.querySelector('.next')

let images = [
    {'id': '0', 'url': '././assets/espaco01.jpg'},
    {'id': '1', 'url': '././assets/espaco02.jpg'},
    {'id': '2', 'url': '././assets/espaco03.jpg'},
    {'id': '3', 'url': '././assets/espaco04.jpg'},
    {'id': '4', 'url': '././assets/espaco05.jpg'},
    {'id': '5', 'url': '././assets/espaco06.jpg'},
]
const loadImages = (container, images) =>{
    images.forEach(img => {
        container.innerHTML += `
        <div class="slide">
          <img src="${img.url}" class="slide__img">
        </div>
        `
    });
}
loadImages(containerSlides, images)
let slides = document.querySelectorAll('.slide')

btnNext.addEventListener("click", ()=>{
    containerSlides.append(slides[0])
    slides = document.querySelectorAll('.slide')
})
btnPrevious.addEventListener("click", ()=>{
    containerSlides.insertBefore(slides[slides.length - 1], slides[0])
    slides = document.querySelectorAll('.slide')
}) 
} 
