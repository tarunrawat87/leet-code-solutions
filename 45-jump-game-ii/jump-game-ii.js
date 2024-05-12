
/**
 * @param {number[]} nums
 * @return {number}
 */

const jump = (nums) => {
   
    if(nums.length === 1) return 0;

    let stepsMap = {};
    let currentStep = 0;
    stepsMap[0] = [0];
    let visited = new Set();
    visited.add(0);

    const checkAndUpdateSteps = (nextStep ,possibleJumps)=>{

      let index = 0;
      while(index < possibleJumps.length){

        let jumpStrength = 1;
        let totalJumps = nums[possibleJumps[index]];
        
        while(jumpStrength <= totalJumps){
            let nextJumpIndex = possibleJumps[index] + jumpStrength;

            if(nextJumpIndex >= (nums.length - 1)) return 0;

            if(!visited.has(nextJumpIndex)){
                if(!Array.isArray(stepsMap[currentStep])){
                      stepsMap[currentStep] = [];
                }  
                stepsMap[currentStep].push(nextJumpIndex);
                visited.add(nextJumpIndex)      
            }
            jumpStrength++;
        }
        index++;
      } 
     return -1;
    }

    while (true) {

    let possibleJumps = stepsMap[currentStep];
    let found = checkAndUpdateSteps(++currentStep, possibleJumps);
        if(found === 0) return currentStep;
    }


}

