function create1D(n) {
    const grid = document.getElementById("grid");
    grid.innerHTML = "";

    let row = document.createElement("div");
    row.classList.add("row");

    for (let i = 0; i <= n; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.id = `c-${i}`;
        row.appendChild(cell);
    }

    grid.appendChild(row);
}

function create2D(r, c) {
    const grid = document.getElementById("grid");
    grid.innerHTML = "";

    for (let i = 0; i <= r; i++) {
        let row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j <= c; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.id = `c-${i}-${j}`;
            row.appendChild(cell);
        }

        grid.appendChild(row);
    }
}

function update1D(dp, idx, active=false) {
    for (let i = 0; i < dp.length; i++) {
        let cell = document.getElementById(`c-${i}`);
        cell.innerText = dp[i];

        cell.classList.remove("active");

        if (i === idx && active) cell.classList.add("active");
        else if (dp[i] !== 0 || i === 0) cell.classList.add("done");
    }
}

function update2D(dp, i, j, active=false) {
    for (let x = 0; x < dp.length; x++) {
        for (let y = 0; y < dp[0].length; y++) {
            let cell = document.getElementById(`c-${x}-${y}`);
            cell.innerText = dp[x][y];
            cell.classList.remove("active");

            if (x === i && y === j && active) {
                cell.classList.add("active");
            }
        }
    }
}

async function start() {
    let algo = document.getElementById("algo").value;
    let i1 = document.getElementById("input1").value;
    let i2 = document.getElementById("input2").value;
    let i3 = document.getElementById("input3").value;

    if (algo === "fib") {
        let n = parseInt(i1);
        create1D(n);
        await runFibonacci(n, update1D);
    }

    else if (algo === "knapsack") {
        let weights = i1.split(",").map(Number);
        let values = i2.split(",").map(Number);
        let W = parseInt(i3);

        create2D(weights.length, W);
        await runKnapsack(weights, values, W, update2D);
    }

    else if (algo === "lcs") {
        create2D(i1.length, i2.length);
        await runLCS(i1, i2, update2D);
    }
}