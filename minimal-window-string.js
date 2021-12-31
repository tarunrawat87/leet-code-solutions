/*
Link : https://leetcode.com/problems/minimum-window-substring/submissions/
This question is really brain f**ker.
Took me 7 days to solve this question ,i know i suck :/

*Required Substing = substring that is required in main string.

Anyway logic is simple and i borrowed some of it from some random youtube video.
Logic:

Create two maps ,
required_map -- > Contains map of required substring with  required chars with their frequency 
current_map. --> Contains map of current substring between start and end indexex

Keep a variable count,this would be intially equal to length of required substring length. Any substring you find would have length more  or equal to requied substring. 

Steps :
 Keep iteraition on basis of end index. 
 
 Keep updating frequency of current map by char you encounter with riding on end index
 
 if for a character,count of current_map and required_map becomes same ,means you have covered that char in current substring,decrement the count by 1
 
 if count becomes zero, now you have a substring which has all the char with matched frequency your need.
  
 Now you need to shrink the substring till your count becomes 1 and you find next char
 


Have two pointers aka indexes start and end..




*/

var minWindow = function (s, t) {
    let required_map = strToMap(t);
    let start = 0;
    let count = t.length;
    let end = 0;
    let min_width = s.length;
    let current_map={};
    let min_start,min_end;
    while (end < s.length) {
        let char = s.charAt(end);
          //Keep updation current_map
         if(current_map[char]===undefined)current_map[char]=1;
         else
         current_map[char]++;   
         
        //if current_map value for char is less than equal to required_map for that char decrement count value 
        if(current_map[char]<=required_map[char])count--; 

        //if count become zero
        // we need to shrink the substring
      
        if (count === 0) {
          /*
          Now this is most confusing part. Pay attention.
          
          There are two objectives that we need to acomplish here
          
          1. Shrink the substring with start index so as to get minimal required string 
          2. Keep shrinking the substring till you make count as 1 
          
          
          */    
            while (start <= end && start < s.length) {
                 let c= s.charAt(start);  
                 
                  /*
                  MIMP Point: 
                  
                  If count has become and current char is part of required_map i.e mena
                  
                  */
                  
            
                 if(count==1&&required_map[c]!=undefined)break;
                 
                 if(required_map[c]==current_map[c]){
                    /*
                    At this stage we have the minimal string with all char that we require.
                    */
           
                    if(count===0){
                        let width = end - start+1;
                        if (width <= min_width) {
                            min_start = start;
                            min_end = end;
                            min_width = width;
                        }
                    }
                    count++;
                  }
                 current_map[c]--; 
                start++;
            }
        

        } 
        end++;
    }
     
    return s.substring(min_start,min_end+1);
    /*
    As name suggestes ,it covert string to frequency map
    */
    function strToMap(t) {
        let map = {};
        let index = 0;
        while (index < t.length) {
            let char = t.charAt(index);
            if (map[char] != undefined) map[char]++;
            else
                map[char] = 1;
            index++;
        }
        return map;
    }

};

console.log(minWindow("aaflslflsldkalskaaa","aaa"));


"aaflslflsldkalskaaa"
"aaa"
