
console.log("Start");

// Macrotask → added to the macrotask queue
setTimeout(() => {
    console.log("Macrotask: setTimeout");
}, 0);

// Microtask → added to the microtask queue
Promise.resolve().then(() => {
    console.log("Microtask: Promise.then");
});

console.log("Synchronous Log");

console.log("End");