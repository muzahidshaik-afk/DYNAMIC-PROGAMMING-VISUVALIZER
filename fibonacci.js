async function runFibonacci(n, update) {
    let dp = Array(n + 1).fill(0);
    if (n > 0) dp[1] = 1;

    for (let i = 0; i <= n; i++) {
        if (i >= 2) {
            update(dp, i, true);
            await sleep(500);

            dp[i] = dp[i - 1] + dp[i - 2];
        }

        update(dp, i);
        await sleep(500);
    }
}