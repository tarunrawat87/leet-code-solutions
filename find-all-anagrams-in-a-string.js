/**
* @param {string} s
* @param {string} p
* @return {number[]}
*/
/**
Reference : https://medium.com/leetcode-patterns/leetcode-pattern-2-sliding-windows-for-strings-e19af105316b

 */
var findAnagrams = function (s, p) {
    /**
    Solving Tip:
    
    It is solved via sliding window

    Algorithm :
    The idea is to 
     1. First create a char map for "p".
     2. Iterate over "s" , create a sliding window 
        a. Stop the sliding window when you 
            x. FOund all the char the you need in window
            y. If the window has char that is not part of p 
            z. Or if a character is occuring more then required in string.   

    Keep a var k , that keep track of all necessary char that are there in string

    Eg of charmap : lets say p is abcc ,then char map would be {"a":1,"b":1,"c":2}

    Alogrithm .

    ITerate over string "s" ,

    1. if char does't exist within the p , then stop iterating and mark this end of window. Why ?
    this in anagram , characters in anagrams are same. You need to squeeze the window here. Will explain in detail below*

    2. If the char exist in "p" , then decrement the char count in p. 

    3. Now if in char map count , if a char count is zero , that means it is occuring more than required , then we need to squeeze the window :

    Squeeze the window means : Decreasing the window size till remove the character that is unnecessary. 
    

     */
    const getCharMap = (str) => {
        const map = {};
        let index = 0;
        while (index < str.length) {
            let char = str.charAt(index);
            if (map[char] === undefined) map[char] = 1;
            else map[char]++;
            index++;
        }
        return map;
    }
    
    const charMap = getCharMap(p);
    const getNewCharMap = () => JSON.parse(JSON.stringify(charMap));

    let k = p.length;
    let startIndex = 0, endIndex = 0;
    let currMap = getNewCharMap();
    let result = [];


    while (endIndex < s.length) {

        let char = s.charAt(endIndex);
        
        /**
        If the char that you read :
       Case 1:  Doesn't exist in "p" 
       Case 2:  it is already sufficiently present in window, then
        shrink the window and more unesscary character ,

        In first case, it would shrinking the whole size of window
        Eg s = abdabc p = "abc", here if we read d that , it is not required. 

        In second case , s = abbabc p = "abc", since on 2nd index , we already have 1 b , so don't need second b ,hence we can't procced further.
        
         */

        if (currMap[char] === undefined || currMap[char] === 0) {

            while (startIndex <= endIndex) {
                let c = s.charAt(startIndex);
                if (s.charAt(startIndex) === char) {
                    startIndex++;
                    break;
                }
                if (currMap[c] !== undefined) {
                    currMap[c]++;
                    k++;
                }

                startIndex++;
            }

        } else {
            // if the char exist , decremeent the char count in map
            currMap[char]--;
            //whenever you decrement the count also decrement the k
            

            k--;

            //Whenever k becomes zero it means we have all the chars that is requied in the 
            // window    
            if (k === 0) {
                result.push(startIndex);
                // Now start shrinking the widow again ,
                // Hint: we don't need to iterate whole , we can just remove one char from 
                //startIndex     
                while (startIndex <= endIndex) {
                    let c = s.charAt(startIndex);

                    if (currMap[c] !== undefined) {
                        currMap[c]++;
                        k++;
                        startIndex++;
                        break;
                    }

                    startIndex++;
                }


            }
        }

        endIndex++;
    }
    return result;
};
