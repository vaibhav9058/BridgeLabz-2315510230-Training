
// Callback function
function showEndMessage() {
    console.log("Welcome to the course!");
}

// Function that accepts a callback
function greetUser(name, callback) {
    console.log("Hello " + name);

    // Calling the callback
    callback();
}

// Calling the function with callback
greetUser("Deepak", showEndMessage);
