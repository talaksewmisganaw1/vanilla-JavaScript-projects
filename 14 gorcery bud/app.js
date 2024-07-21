//peviousElementSibling


const form = document.querySelector(".grocery-form");
const input = document.getElementById("grocery");
const groceryContainer = document.querySelector(".grocery-container");
const groceryList = document.querySelector(".grocery-list");
const submitBtn = document.querySelector(".submit-btn");
const clearBtn = document.querySelector(".clear-btn");
const alert = document.querySelector(".alert");

let editElement;
let editFlag = false;
let editId = "";


//**************EVENT LISTENERS*****************//
form.addEventListener("submit", addItem);

window.addEventListener("DOMContentLoaded", setupItems);

clearBtn.addEventListener("click", clearItems);


// **********FUNCTIONS**********//
function addItem(e) {
    e.preventDefault();
    const value = input.value;
    const id = new Date().getTime().toString();

    if (!editFlag && value) {
        createElement(id, value);

        groceryContainer.classList.add("show-container");

        displayAlert("item added successfully", "success");
        //add to local storage
        addToLocalStorage(id, value);

        backToDefault();
    } else if (editFlag && value) {
        const item = editElement.querySelector(".title");
        item.innerHTML = value;
        displayAlert("successfully edited", "success");
        //edit local storage
        editLocalStorage(editId, value);
        backToDefault();

    } else {
        displayAlert("Please Enter Text", "danger");
    }
}

function createElement(id, value) {
    const article = document.createElement("article");
    article.classList.add("grocery-item");
    const attr = document.createAttribute("data-id");
    attr.value = id;
    article.setAttributeNode(attr);
    article.innerHTML = `
    <p class="title">${value}</p>
    <div class="btn-container">
      <button type="button" class="edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <button type="button" class="delete-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>
    `;

    const editBtn = article.querySelector(".edit-btn");
    const deleteBtn = article.querySelector(".delete-btn");

    editBtn.addEventListener("click", editItem);
    deleteBtn.addEventListener("click", deleteItem);

    groceryList.appendChild(article);
}


function displayAlert(text, action) {
    alert.innerHTML = text;
    alert.classList.add(`alert-${action}`);

    setTimeout(() => {
        alert.innerHTML = "";
        alert.classList.remove(`alert-${action}`);
    }, 1000)
};

function backToDefault() {
    input.value = "";
    submitBtn.innerHTML = "Submit";
    editFlag = false;
    editId = "";
}

function clearItems() {
    const groceryItems = document.querySelectorAll(".grocery-item");
    if(groceryItems) {
        groceryItems.forEach((item) => {
            groceryList.removeChild(item)
        })
    };

    groceryContainer.classList.remove("show-container");
    localStorage.removeItem("grocery-items");
    displayAlert("all items cleared", "danger")
    backToDefault();
}

// **************LOCAL STORAGE FUNCTIONS************//
function getLocalStorage() {
    return localStorage.getItem("grocery-items")?JSON.parse(localStorage.getItem("grocery-items")):[];
}

function addToLocalStorage(id, value) {
    const item = {id, value};
    let items = getLocalStorage();
    items.push(item);
    localStorage.setItem("grocery-items", JSON.stringify(items));
}

function editLocalStorage(editId, value) {
    let items = getLocalStorage();
    items.forEach((item) => {
        if (item.id === editId) {
           return item.value = value;
        }
    });

    localStorage.setItem("grocery-items", JSON.stringify(items));
}

function removeFromLocalStorage(id) {
    let items = getLocalStorage();
    items = items.filter((item) => item.id !== id);
    localStorage.setItem("grocery-items", JSON.stringify(items));
}

//**************EDIT AND DELETE FUNCTIONS********/
function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    editId = element.dataset.id;
    editFlag = true;
    editElement = element;
    const item = e.currentTarget.parentElement.previousElementSibling;
    input.value = item.innerHTML;
    submitBtn.innerHTML = "Edit";
}

function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    groceryList.removeChild(element);

    //remove from local storage
    removeFromLocalStorage(element.dataset.id);

    if(!groceryList.children.length) {
        groceryContainer.classList.remove("show-container");
    };

    displayAlert("item deleted", "danger");
    backToDefault();
}

function setupItems() {
    let items = getLocalStorage();
    if(items.length > 0) {
        items.forEach(item => createElement(item.id, item.value));
        groceryContainer.classList.add("show-container");
    }
}