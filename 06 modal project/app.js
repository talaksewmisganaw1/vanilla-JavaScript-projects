const modal = document.querySelector(".modal-overlay");
const openBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");

openBtn.addEventListener("click", () => {
    // console.log(modal);
    modal.classList.add("open-modal");
})

closeBtn.addEventListener("click", () => {
    modal.classList.remove("open-modal");
})