const btns = document.querySelectorAll(".btn");
const number = document.getElementById("value");
var count = 0;

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const elementClass = e.currentTarget.classList;

        if(elementClass.contains("increase")) {
            count++;
        } else if(elementClass.contains("decrease")) {
            count--;
        } else if (elementClass.contains("reset")) {
            count = 0;
        }
                
                
        if(count > 0) {
            number.style.color = "green";
        } else if(count < 0) {
            number.style.color = "red";
        } else {
            number.style.color = "inherit";
        }
        
        number.innerHTML = count;
    });
})
        
