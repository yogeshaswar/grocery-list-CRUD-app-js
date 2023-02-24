let input = document.querySelector(".input");

let btnAdd = document.querySelector(".btn-add");

let error = document.querySelector(".error");

const itemsData = [];

let showList = document.querySelector(".show-list");

btnAdd.addEventListener("click", () => {
    checkValidItem();
});

const checkValidItem = () => {
    if(input.value === "") {
        error.textContent = "Invalid Grocery Item!";
    } else {
        error.textContent = "";
        //add to data
        addItem();
        //display-item
        displayItem();
    }
}

const addItem = () => {
    itemsData["item"] = input.value;
    input.value = "";
}

const displayItem = () => {
    showList.innerHTML += `
    <div class="items-list">
        <p>${itemsData.item}</p>
        <button class="action-btn-edit" onclick="editItem(this)">Edit</button>
        <button class="action-btn-delete" onclick="deleteItem(this)">X</button>
    </div>`
}

const editItem = (e) => {
    input.value = e.previousElementSibling.textContent;
    e.parentElement.remove();
}

const deleteItem = (e) => {
    // console.log(e.parentElement);
    e.parentElement.remove();
}