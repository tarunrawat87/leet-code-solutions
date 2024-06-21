/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

    Array.prototype.empty = function () {
        return this.length === 0;
    }

    Array.prototype.top = function () {
        return this[this.length - 1];
    }

    let index = 0;
    let stack = [];
    let min = -1;
    let diff = Number.MIN_SAFE_INTEGER;

    while (index < prices.length) {
        console.log(stack.empty())
        if (stack.empty()) {
            stack.push(prices[index])
            min = prices[index];
            index++;
        } else if (stack.top() <= prices[index]) {
            stack.push(prices[index]);
            diff = Math.max(prices[index] - min, diff);
           // console.log(prices[index], min, diff);
             index++;
        } else {
            while (!stack.empty() && prices[index] < stack.top()) {
                stack.pop();
            }
        }


       
    }
   // console.log(stack)
    return diff === Number.MIN_SAFE_INTEGER ? 0: diff;
};