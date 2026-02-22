// Selecting DOM elements
const userInput = document.getElementById("todoInput")
const listContainer = document.querySelector(".list")
const toggle = document.querySelector(".theme")

// adding functionality to button
const addTask = () => {
    if(userInput.value === ""){
        alert("Please write something to add")
    } else {
        let li = document.createElement("li")
        li.innerHTML = userInput.value
        listContainer.appendChild(li)

        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }

    userInput.value = "";
    saveList();
}

// checking and removing tasks logic
listContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("completed")
        saveList()
    } 
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveList()
    }
}, false)


// saving in localstorage
function saveList() {
    localStorage.setItem("task", listContainer.innerHTML)
}

// showing from localstorage
function showList() {
    listContainer.innerHTML = localStorage.getItem("task")
}

showList();

// theme mode toggle
toggle.addEventListener("click", () => {
    document.body.classList.toggle("light")
})