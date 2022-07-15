/**
 * @param {number[]} amount
 * @return {number}
 */
/**
Question link : https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/

**/
var fillCups = function(amount) {
    amount= amount.sort((a,b)=>b-a);
    let allFilled=false;
    
  let seconds=0;
    
    while(!allFilled){
      
        let indexes=findNextIndex(amount);
      //  console.log(amount,seconds);
        if(indexes.length===2){
            amount[indexes[0]]--;
            amount[indexes[1]]--;
            
        }else{
            
            if(indexes.length===1){
                  amount[indexes[0]]--; 
            }else{
                allFilled=true;
                break;
            }
            
        }
        amount= amount.sort((a,b)=>b-a);
        seconds++;
    }
    
    return seconds;
    
};


function findNextIndex(amount){
let result=[];
    
if(amount[0]>0)result.push(0);
if(amount[1]>0)result.push(1);
    if(result.length===2)return result;
if(amount[2]>0)result.push(2);
    
return result;    
}
