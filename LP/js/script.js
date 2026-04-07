const menuItens = document.getElementById("menuItens");

function menucelular() {
    menuItens.classList.toggle("ativo");
}

// CARROSSEL
let index = 0;

const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-track img');
const totalSlides = slides.length;

function mudarSlide() {
    index++;

    if (index >= totalSlides) {
        index = 0;
    }

    track.style.transform = `translateX(-${index * 100}%)`;
}

const tempoParado = 5000; // 5s parado
const tempoAnimacao = 1000; // 1s animação

setInterval(mudarSlide, tempoParado);


const menuItens = document.getElementById("menuItens");

function menucelular() {
    menuItens.classList.toggle("ativo");
}