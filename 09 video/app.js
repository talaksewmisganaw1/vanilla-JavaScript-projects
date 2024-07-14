const video = document.querySelector(".video-container");
const btn = document.querySelector(".switch-btn");
const preloader = document.querySelector(".preloader");

btn.addEventListener("click", () => {
    if (btn.classList.contains("slide")) {
        btn.classList.remove("slide");
        video.play();
    } else {
        btn.classList.add("slide");
        video.pause();
    }
});

window.addEventListener("load", () => {
    preloader.classList.add("hide-preloader");
})