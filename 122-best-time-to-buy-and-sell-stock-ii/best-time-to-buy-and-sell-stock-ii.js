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
    let sum = 0;
    let noPush = true;
    let lastOperationPop = false;
    while (index < prices.length) {
        console.log(prices[index],sum)
        if (stack.empty()) {
            stack.push(prices[index])
            min = prices[index];
            diff = Number.MIN_SAFE_INTEGER;
            index++;
           lastOperationPop = false;
        } else if (stack.top() <= prices[index]) {
            stack.push(prices[index]);
            noPush = false;
            if(lastOperationPop){
                diff =  Number.MIN_SAFE_INTEGER;
                min = prices[index];
            };
            diff = Math.max(prices[index] - min, diff);
            lastOperationPop = false;
            index++;
        } else {

            if(diff !== Number.MIN_SAFE_INTEGER){
                console.log(sum,diff,prices[index])
                sum+= diff
            };

            while (!stack.empty() && prices[index] < stack.top()) {
                stack.pop();
            }
            lastOperationPop = true;
        }
    }
    if(noPush && diff === Number.MIN_SAFE_INTEGER) return 0; 
    if(!lastOperationPop && diff !== Number.MIN_SAFE_INTEGER) sum+=  diff;  
   
    return sum;
};