async function runKnapsack(weights, values, W, update) {
    let n = weights.length;
    let dp = Array(n + 1).fill().map(() => Array(W + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= W; w++) {
            update(dp, i, w, true);
            await sleep(300);

            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(
                    dp[i - 1][w],
                    values[i - 1] + dp[i - 1][w - weights[i - 1]]
                );
            } else {
                dp[i][w] = dp[i - 1][w];
            }

            update(dp, i, w);
            await sleep(300);
        }
    }
}