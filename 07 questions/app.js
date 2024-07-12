//**********BY SELECTING THE ARTICLE ELEMENTS AND ADDING THE CLASS TO EACH OF THEM BY USING THE BUTTONS IN THEM ********//
/*
* select the questions as node list
* then for each question select the button inside it
* add event listener for each button in order to add the "show-text" class for the question which the clicked button belongs to
* use the selected questions node list and for those which doesn't match with the question(which is the parent of the clicked button) remove the "show-text" class
*/


const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
    const btn = question.querySelector(".question-btn");

    btn.addEventListener("click", () => {
        question.classList.toggle("show-text");

        questions.forEach((item) => {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        })
    })
});


//********* TRAVERSING THE DOM **********//

/*
* select all the buttons
* select the parent of the parent element of the clicked button and add the "show-text" class
* then select all questions as node list and for each question(item), if it doesn't match the parent of the clicked buttons parent, remove the "show-text" class from it
*/

// const buttons = document.querySelectorAll(".question-btn");
// const questions = document.querySelectorAll(".question")

// buttons.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.add("show-text");

//         questions.forEach((item) => {
//             if(item !== question) {
//                 item.classList.remove("show-text")
//             }
//         })
//     })
// })