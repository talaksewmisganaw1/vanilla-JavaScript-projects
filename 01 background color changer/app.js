const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const colorElement = document.querySelector(".color")

btn.addEventListener("click", () => {
    function randomIndex() {
        return Math.floor(Math.random() * colors.length)
    }
    
    const color = colors[randomIndex()];

    document.body.style.backgroundColor = color;
    colorElement.innerHTML = color;
})

