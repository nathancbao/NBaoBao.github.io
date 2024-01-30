const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const image = document.getElementById('imagee');
const wrapperRect = wrapper.getBoundingClientRect();
const yesBtnRect = yesBtn.getBoundingClientRect();

noBtn.addEventListener('click', () => {
    question.innerHTML = "He Doesn't Love You Either :)";
    image.src = "critae.jpg";
    var sound = new Audio("heheheha.mp3");
    sound.play();
    setTimeout("next()", 1033000); //103000
});
yesBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - yesBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - yesBtnRect.height)) + 1;
    yesBtn.style.left = i + 'px';
    yesBtn.style.top = j + 'px';
});
function next() {
    window.location.href = "thanks.html";
};
