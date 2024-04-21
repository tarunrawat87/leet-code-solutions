/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let stack = []
    let map = {}
    Array.prototype.top = function () {
        if (this.length === 0) return -1
        return this[this.length - 1]
    }
    Array.prototype.empty = function () {
        return this.length === 0
    }
    //2 4 3
    // [1,3,4,2]
    let index = nums2.length - 1

    while (index >= 0) {

        if (stack.empty()) {
            stack.push(nums2[index])
            index--;
        } else {
            if (nums2[index] <= stack.top()) {

                map[nums2[index]] = stack.top();
                stack.push(nums2[index]);
                index--;
            } else {

                while (!stack.empty() && stack.top() <= nums2[index]) stack.pop();
            }
        }

    }

    let result = nums1.reduce((obj, currEle) => {

        let nextLargest = map[currEle];

        if (nextLargest === undefined) obj.push(-1);
        else
            obj.push(nextLargest)

        return obj;

    }, [])

    return result;
}

console.log(nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]))
// 2 4
//2 --> 4

// 1 , 3 , 4 ,2 :
// 2 3 

// 7 1 2