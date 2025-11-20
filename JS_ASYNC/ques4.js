
// Server A → responds in 2 seconds
function serverA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fail = Math.random() < 0.2; // 20% failure chance
            if (!fail) {
                resolve("Server A finished deployment");
            } else {
                reject("Server A failed during deployment");
            }
        }, 2000);
    });
}

// Server B → responds in 3 seconds
function serverB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fail = Math.random() < 0.2;
            if (!fail) {
                resolve("Server B finished deployment");
            } else {
                reject("Server B failed during deployment");
            }
        }, 3000);
    });
}

// Promise.all → wait for both
Promise.all([serverA(), serverB()])
    .then((msg) => {
        console.log("Deployment completed for all servers");
        console.log(msg);
    })
    .catch((err) => {
        console.log("Deployment error:", err);
    });

// Promise.race → whoever finishes first
Promise.race([serverA(), serverB()])
    .then((fastest) => {
        console.log("Fastest response:", fastest);
    })
    .catch((err) => {
        console.log("Fastest check failed:", err);
    });
