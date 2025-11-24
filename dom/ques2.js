
// SELECT ELEMENTS
const textarea = document.getElementById("textBox");
const counter = document.getElementById("counter");
const resetBtn = document.getElementById("resetBtn");

const MAX = 100;

// Update Character Count
textarea.addEventListener("input", () => {
    let text = textarea.value;

    // Limit text if exceeded (backup safety)
    if (text.length > MAX) {
        textarea.value = text.substring(0, MAX);
    }

    updateCounter();
});

// Prevent typing once limit reached
textarea.addEventListener("keydown", (event) => {
    if (textarea.value.length >= MAX && event.key !== "Backspace") {
        event.preventDefault();
    }
});

// Update counter function
function updateCounter() {
    let remaining = MAX - textarea.value.length;

    counter.innerText = `Remaining: ${remaining}`;

    // Color changes
    if (remaining <= 0) {
        counter.style.color = "red";
    } 
    else if (remaining <= 20) {
        counter.style.color = "orange";
    } 
    else {
        counter.style.color = "black";
    }
}

// Reset button
resetBtn.addEventListener("click", () => {
    textarea.value = "";
    counter.innerText = `Remaining: ${MAX}`;
    counter.style.color = "black";
});
