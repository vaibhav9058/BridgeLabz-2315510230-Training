
// Promise-based version
function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const apiFailed = Math.random() < 0.2; // 20% chance of failure

            if (!apiFailed) {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            } else {
                reject("Error: Failed to fetch bugs from server");
            }
        }, 1000);
    });
}

// Using the Promise
getBugs()
    .then((bugs) => {
        console.log("Fetched Bugs:");
        console.table(bugs);   // clean tabular format
    })
    .catch((err) => {
        console.log(err);
    });
