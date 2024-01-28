const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const sBtn = document.querySelector('.stuart-btn');
const kBtn = document.querySelector('.kevin-btn');
const bBtn = document.querySelector('.bob-btn');
const wrapperRect = wrapper.getBoundingClientRect();
var sound = new Audio("heheheha.mp3");
sBtn.addEventListener('click', () => {
    sBtn.style.display = "none";
    sound = new Audio("editstuart.mp3");
    sound.play();
});
kBtn.addEventListener('click', () => {
    kBtn.style.display = "none";
    sound = new Audio("editkevin.mp3");
    sound.play();
});
bBtn.addEventListener('click', () => {
    bBtn.style.display = "none";
    sound = new Audio("editbob.mp3");
    sound.play();
});
