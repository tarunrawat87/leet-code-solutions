/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {

    Array.prototype.top = function () {
        if (this.length === 0) return -1;
        return this[this.length - 1];
    }

    Array.prototype.empty = function () {
        return (this.length === 0);
    }
    let stack = [];
    let index = nums.length - 1;
    let diff = -1;
    let jEle;
    while (index >= 0) {
        let top = stack.top();
        let elementFromArr = nums[index];

        if (stack.empty()) {
            stack.push(elementFromArr);
            jEle = elementFromArr;
            index--;
        } else if (top >= elementFromArr) {
            stack.push(elementFromArr);
            iEle = elementFromArr;
            diff = Math.max(jEle - iEle, diff);
            index--;
        } else {
            let top = stack.top();

            while (!stack.empty() && elementFromArr >= top) {
                stack.pop();
                top = stack.top();
            }
        }


    }
    console.log('Hii')
    let stackSize = stack.length;
    if (!stack.empty() && stackSize > 1) {
        let iEle = stack.top();
        let poppedEle;
        let jEle;
        while (!stack.empty()) {
            poppedEle = stack.pop();
            if (poppedEle !== -1) {
                jEle = poppedEle;
            }
        }
        diff = Math.max(jEle - iEle, diff)
    }

    return diff === 0 ? -1 : diff;
};

// 7