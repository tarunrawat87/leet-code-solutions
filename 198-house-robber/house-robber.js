/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {

    let results = [];

    function robUtil(index) {
        console.log(index)
        if (index >= nums.length) return 0;

        if (index === (nums.length - 1)) return nums[nums.length - 1];
        // if (index === (nums.length -2)) return Math.max(nums[nums.length - 2], robUtil(index + 1, 0))

        if(results[index] !== undefined) return results[index];
        let included = nums[index] + robUtil(index+2);
        let notIncluded = 0 + robUtil(index+1);
    


        results[index] = Math.max(included,notIncluded)

        return  results[index];
    }
   
    let amount = robUtil(0);
     console.log(results)
  //  console.log(amount);
    return amount;

};