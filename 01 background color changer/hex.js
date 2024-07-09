const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const colorElement = document.querySelector(".color");

btn.addEventListener("click", () => {
    function randomIndex() {
        return Math.floor(Math.random() * hex.length)
    }

    let color = "#";

    for(i=0; i<6; i++) {
        const randomDigit = hex[randomIndex()];
        color += randomDigit;
    }

    document.body.style.backgroundColor = color;
    colorElement.innerHTML = color;
})