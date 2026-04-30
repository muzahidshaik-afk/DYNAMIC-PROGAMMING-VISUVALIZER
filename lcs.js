async function runLCS(a, b, update) {
    let n = a.length;
    let m = b.length;

    let dp = Array(n + 1).fill().map(() => Array(m + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {

            update(dp, i, j, true);
            await sleep(300);

            if (a[i - 1] === b[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }

            update(dp, i, j);
            await sleep(300);
        }
    }
}