const ham = document.querySelector(".hamburger");
const nav = document.querySelector(".top-nav");

ham.addEventListener("click",()=>{
  ham.classList.toggle("ac");
  nav.classList.toggle("fe");
})


//campaigns
const update = document.getElementsByClassName("no-active");
const change = document.getElementsByClassName("active-content");
const previous = document.getElementsByClassName("left-arrow");
const nexts = document.getElementsByClassName("right-arrow");
let counter = 1;

previous[0].addEventListener("click", back);
nexts[0].addEventListener("click", nextMove);


function nextMove() {
    change[0].classList.remove("active-content");
    if (counter >= update.length) {
        counter = 0;
    }
    update[counter].classList.add("active-content");
    counter++;
}


function back() {
    if (counter != 0) {
        counter--;
    }
    else {
        counter = update.length - 1;
    }
    change[0].classList.remove("active-content");
    update[counter].classList.add("active-content");
}

//products
const movies = document.querySelector('.movies');
const gift = document.querySelector('.gift');
const winpins = document.querySelector('.winpins');
const alllists = document.querySelectorAll('.product-description');
const allTablist = Array.from(alllists);

movies.addEventListener('click', movie)
function movie() {
    allTablist.forEach(a => {
        a.classList.remove('content')
        if (!a.dataset.movies) {
            a.classList.toggle('content')
        }
    })
}

gift.addEventListener('click', gifts)
function gifts() {
    allTablist.forEach(a => { 
        a.classList.remove('content')
        if (!a.dataset.gift) {
            a.classList.toggle('content')
        }
    })
}

winpins.addEventListener('click', win)
function win() {
    allTablist.forEach(a => {
        a.classList.remove('content')
        if (!a.dataset.winpins) {
            a.classList.toggle('content')
        }
    })
}



//testimonial slider 


let hide = document.getElementsByClassName("hide");
let show = document.getElementsByClassName("show");
let left = document.getElementsByClassName("arrow-left");
let right = document.getElementsByClassName("arrow-right");
let count = 1;

left[0].addEventListener("click", backone);
right[0].addEventListener("click", nextone);


function nextone() {
    show[0].classList.remove("show");
    if (count >= hide.length) {
        count = 0;
    }
    hide[count].classList.add("show");
    count++;
}


function backone() {
    if (count != 0) {
        count--;
    }
    else {
        count = hide.length - 1;
    }
    show[0].classList.remove("show");
    hide[count].classList.add("show");
}



//accordion

const accordion = document.getElementsByClassName('accordion-item');

for (let i=0; i<accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
      this.classList.toggle('active');
    })
  }


