/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (str, k) {
  console.log(str)
  let index = 0
  let stack = []
  Array.prototype.top = function () {
    return this[this.length - 1]
  }
  Array.prototype.empty = function () {
    return this.length === 0
  }
  //let count = 1
  while (index < str.length) {

    let currentChar = str.charAt(index);
    
    if (stack.empty()) {
      stack.push({char:currentChar,count:1});
    } else {
        let topOfStack = stack.top();
        if(topOfStack.char === currentChar) stack.push({char:currentChar,count:topOfStack.count+1});
        else 
        stack.push({char:currentChar,count:1});

        topOfStack = stack.top();

        if(topOfStack.count === k){

            while(!stack.empty() && stack.top().char === currentChar){
                stack.pop();
            }
            
        }

    }

    index++
  }
  let newStr = ''
  while(!stack.empty()){
    newStr += stack.top().char;
    stack.pop();
  }
 
  return newStr.split("").reverse().join("");
}