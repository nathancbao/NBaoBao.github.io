const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const nBtn = document.querySelector('.next-btn');
const nBtnID = document.getElementById('next');
const wrapperRect = wrapper.getBoundingClientRect();
const image = document.getElementById('imagee');
const circle = document.querySelector('.circle');

var count = 1;
var pageCount = 1;
var sound = new Audio("heheheha.mp3");
function contin() {
    count++;
    if(count == 1) {
        sound.play();
        nBtn.innerHTML="Next"
    }
    else {
        nBtn.innerHTML="Play"
        count = 0;
        sound.pause();
        switch(pageCount) {
            case 1:
                question.innerHTML="Do You Remember This?";
                pageCount++;
                image.src = "hotMan.jpg";
                sound = new Audio("fire.mp3");
                break;
            case 2:
                pageCount++;
                image.src = "beddingTim.jpg";
                sound = new Audio("timgoingcrazy.mp3");
                break;
            case 3:
                pageCount++;
                image.src = "howtorizzNathan101.jpg";
                sound = new Audio("popper.mp3");
                break;
            case 4:
                pageCount++;
                image.src = "phat.jpg";
                sound = new Audio("chunk.mp3");
                break;
            case 5:
                pageCount++;
                image.src = "pinkwhite.jpg";
                sound = new Audio("taichi.mp3");
                break;
            case 6:
                pageCount++;
                image.src = "kickmaster.png";
                image.rad
                sound = new Audio("hyah.mp3");
                break;
            case 7:
                pageCount++;
                image.src = "renagade.jpg";
                circle.style.borderRadius = "100%";
                circle.style.outline = "3px solid transparent";
                circle.style.overflow = "visible";
                image.style.width = "400px";
                image.style.height = "200px";
                sound = new Audio("dance.mp3");
                break;
            case 8:
                pageCount++;
                image.src = "elGoblino.jpg";
                circle.style.borderRadius = "50%";
                circle.style.outline = "3px solid #7d2ae8";
                circle.style.overflow = "hidden";
                image.style.width = "200px";
                sound = new Audio("goblin.mp3");
                break;
            case 9:
                pageCount++;
                image.src = "kbbq.JPG";
                sound = new Audio("sizzle.mp3");
                break;
            case 10:
                pageCount++;
                image.src = "cocochanel.jpg";
                sound = new Audio("meow.mp3");
                break;
            case 11:
                pageCount++;
                image.src = "dynamite.jpg";
                sound = new Audio("dynamiteSong.mp3");
                break;
            case 12:
                pageCount++;
                image.src = "sadgeTae.jpg";
                image.style.height = "300px";
                sound = new Audio("china.mp3");
                break;
            case 13:
                sound = new Audio("butterfly.mp3");
                sound.play();
                image.src = "tae.jpg_large";
                nBtnID.style.display = "none";
                setTimeout("next()", 30000); //103000
                break;
        }
    }
};
function next() {
    window.location.href = "second.html";
};
nBtn.addEventListener('click', () => {
    contin();
});
