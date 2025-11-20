
// Step 1: Boil Water
function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.9) {    // 10% chance failure
                console.log("1. Water boiled");
                resolve();
            } else {
                reject("Failed to boil water");
            }
        }, 1000);
    });
}

// Step 2: Brew Coffee
function brewCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.9) {
                console.log("2. Coffee brewed");
                resolve();
            } else {
                reject("Failed to brew coffee");
            }
        }, 1500);
    });
}

// Step 3: Pour into Cup
function pourCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.9) {
                console.log("3. Coffee poured into the cup");
                resolve();
            } else {
                reject("Failed to pour coffee");
            }
        }, 1200);
    });
}

// Promise chaining
boilWater()
    .then(brewCoffee)
    .then(pourCoffee)
    .then(() => {
        console.log("Coffee ready for the team!");
    })
    .catch((err) => {
        console.log("Process failed:", err);
    });
