
// SELECT ELEMENTS
const inputBox = document.getElementById("productInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("productList");

let currentEdit = null;

// Add New Product
addBtn.addEventListener("click", () => {
    let value = inputBox.value.trim();
    if (!value) return;

    let li = document.createElement("li");
    li.innerHTML = `
        <span class="text">${value}</span>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
    `;
    list.appendChild(li);
    inputBox.value = "";
});

// Event Delegation for Edit/Delete
list.addEventListener("click", (event) => {
    let target = event.target;
    let li = target.closest("li");

    // DELETE PRODUCT
    if (target.classList.contains("delete")) {
        li.remove();
    }

    // EDIT PRODUCT
    if (target.classList.contains("edit")) {
        // If another item is being edited, save it first
        saveCurrentEdit();

        currentEdit = li;

        let span = li.querySelector(".text");
        let oldValue = span.innerText;

        // Convert span to input
        span.outerHTML = `<input type="text" class="editBox" value="${oldValue}">`;
        target.innerText = "Save";
        target.classList.add("saveMode");
    }

    // SAVE after clicking Save button  
    if (target.classList.contains("saveMode")) {
        saveEdit(li);
    }
});

// Save current edit when clicking outside
document.addEventListener("click", (event) => {
    if (currentEdit && !currentEdit.contains(event.target)) {
        saveEdit(currentEdit);
    }
});

// Save Edit Function
function saveEdit(li) {
    if (!li) return;

    let input = li.querySelector(".editBox");
    if (!input) return;

    let newVal = input.value.trim() || "Unnamed";

    // Replace input with span
    input.outerHTML = `<span class="text">${newVal}</span>`;

    // Reset button
    let editBtn = li.querySelector(".saveMode");
    editBtn.innerText = "Edit";
    editBtn.classList.remove("saveMode");

    currentEdit = null;
}

// Save previous editing item before editing another
function saveCurrentEdit() {
    if (currentEdit) {
        saveEdit(currentEdit);
    }
}
