const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const contents = document.querySelectorAll(".content");

about.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if(id) {
        btns.forEach(btn => {
            btn.classList.remove("active");
            e.target.classList.add("active")
        });
        // contents.forEach(content => {
        //     if (content.id === e.target.dataset.id) {
        //         content.classList.add("active");
        //     } else {
        //         content.classList.remove("active");
        //     }
        // })
        
        const element = document.getElementById(id);
        contents.forEach(content => {
            content.classList.remove("active");
        })
        element.classList.add("active");
    }
})