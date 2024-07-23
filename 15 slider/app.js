const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

let counter = 0;

prevBtn.style.display = `none`;

prevBtn.addEventListener("click", () => {
    counter--;

  //we can use either scroller or hider function in order to scroll or to hide buttons when no more slide available either side. if we prefer to use hider don't forge to hide prev button from the beginning(it's done in line 11);
    // scroller();
    hider();
    slider();
});

nextBtn.addEventListener("click", () => {
    counter++;
    // scroller();
    hider();
    slider();
});

function slider() {
    console.log(counter);
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%`;
    });
};

function scroller() {
    if(counter === slides.length) {
        counter = 0;
    } else if (counter < 0) {
        counter = slides.length - 1;
    }
};

function hider() {
    if (counter === 0) {
        prevBtn.style.display = `none`;
    } else if(counter === slides.length -1 ) {
        nextBtn.style.display = `none`;
    } else {
        prevBtn.style.display = `block`;
        nextBtn.style.display = `block`;
    }
};



