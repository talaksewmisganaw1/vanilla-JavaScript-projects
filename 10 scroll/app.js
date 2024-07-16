//make dynamic date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

//small screen make dynamic navigation bar height
const toggleBtn = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
const nav = document.querySelector("#nav");

toggleBtn.addEventListener("click", () => {
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if(linksContainerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
})



//after scrolling some px make the nav bar fixed
//after scrolling some px make the top link button visible
const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    const navHeight = nav.getBoundingClientRect().height;
    if (scroll > navHeight) {
        nav.classList.add("fixed-nav");
    } else {
        nav.classList.remove("fixed-nav");
    }
    
    if(scroll > 550) {
        topLink.classList.add("show-link");
    } else {
        topLink.classList.remove("show-link");
    }
});

// scroll soothly to specific area(regardless of the obstacles)
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        let position = element.offsetTop;
        const fixedNav = nav.classList.contains("fixed-nav");
        const navHeight = nav.getBoundingClientRect().height;
        const linksContainerHeight = linksContainer.getBoundingClientRect().height;
        position = position - navHeight;
        
        if(!fixedNav) {
            position = position - navHeight;
        }
        
        if (linksContainerHeight > 27) {
            position = position + linksContainerHeight;
        }

        scrollTo({
           top: position,
           left: 0 
        });

        linksContainer.style.height = 0;
    })
})