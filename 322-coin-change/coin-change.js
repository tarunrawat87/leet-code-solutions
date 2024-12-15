/**
* @param {number[]} coins
* @param {number} amount
* @return {number}
*/
var coinChange = function (coins, amount) {

    let cointCount = Number.MAX_VALUE;


    const coinChangeUtil = (target) => {
        let dp = [];
        dp[0] = 0;

        let initTarget = 1;

        while (initTarget <= target) {

            let coinIndex = 0;
           // console.log('*********', initTarget, '**************')
            while (coinIndex < coins.length) {

                if (dp[initTarget] === undefined) dp[initTarget] = Number.MAX_VALUE;

                if (initTarget >= coins[coinIndex]) {

                    if (initTarget === coins[coinIndex]) dp[initTarget] = 1;
                    else
                        dp[initTarget] = Math.min(dp[initTarget], 1 + dp[initTarget - coins[coinIndex]]);
                }

                coinIndex++;
            }
           // console.log('*********', '**************')

            initTarget++;
        }

       let result = dp[target];

    if (result === Number.MAX_VALUE) return -1;
    else return dp[target];

    }
    return coinChangeUtil(amount);
    
};
