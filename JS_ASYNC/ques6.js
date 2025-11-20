
function loadProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fail = Math.random() < 0.3; 
            if (!fail) resolve("Profile Loaded");
            else reject("Profile Load Failed");
        }, 2000);
    });
}

function loadPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fail = Math.random() < 0.3;
            if (!fail) resolve("Posts Loaded");
            else reject("Posts Load Failed");
        }, 1500);
    });
}

function loadMessages() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fail = Math.random() < 0.3;
            if (!fail) resolve("Messages Loaded");
            else reject("Messages Load Failed");
        }, 1000);
    });
}

const start = Date.now();

Promise.allSettled([loadProfile(), loadPosts(), loadMessages()])
    .then((results) => {
        console.log("=== Module Load Results ===");

        results.forEach((res, index) => {
            if (res.status === "fulfilled") {
                console.log(`Success: ${res.value}`);
            } else {
                console.log(`Failed: ${res.reason}`);
            }
        });

        const total = (Date.now() - start) / 1000;
        console.log(`Total Time Taken: ${total} seconds`);
    });
