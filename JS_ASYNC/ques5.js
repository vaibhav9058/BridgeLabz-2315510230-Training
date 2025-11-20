
function design() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("1. Design complete");
            resolve();
        }, 1000);
    });
}

function build() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("2. Build complete");
            resolve();
        }, 1000);
    });
}

function test() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("3. Testing complete");
            resolve();
        }, 1000);
    });
}

function deploy() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("4. Deployment complete");
            resolve();
        }, 1000);
    });
}

function celebrate() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("5. Celebration started 🎉");
            resolve();
        }, 1000);
    });
}

async function runPipeline() {
    await design();
    await build();
    await test();
    await deploy();
    await celebrate();
    console.log("Pipeline finished!");
}

runPipeline();
