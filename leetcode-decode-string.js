/**
 * @param {string} s
 * @return {string}
 
 @Author: Tarun Rawat
 
 Logic : Basic idea is to use stack and push whole string to stack 
 
 1. if we encounter any ']' pop and create pattern string  till we encounter '[' then find the number ahead of it 
 2. Multiply pattern string no of times you encountered the number and then push string again to stack
 3. Atlast pop every thing from stack and create a string from it
 
 
 */
var decodeString = function(str) {

   

    return decode(str,0);
    
};

function decode(string){

   
   
let index=0;
let stack=[];
while(index<string.length){

    if(string.charAt(index)===']'){

    let pattern=''; 

    while(stack.length!==0){
        let char=stack.pop();
        if(char==='[')break;
        pattern=char+pattern;
    }
   
    let times=toNumber(stack);
    pattern=multi(pattern,times);
    stack.push(pattern);
    
    }else{
        stack.push(string.charAt(index));
    }


    index++;
}
let finalStr='';

while(stack.length!=0){

    finalStr=stack.pop()+finalStr;
}
 /*
 Multiply string 
 */  
   
function multi(str,times){
 let newPattern='';   
times=Number(times)
while(times--){
    newPattern+=str;
}
return newPattern;
}
   
 /**
   Create a number from string
 **/
 function toNumber(stack){
  let num=0;
  let power=0;
  while(stack.length!=0){
        let char=stack.pop();
    if(char>='0'&&char<='9'){
        char=Number(char);
        num=num+Math.pow(10,power)*char;
        power++;
    }else{
        stack.push(char);
        break;
    }

  }
  return num;
}  
    
    
    return finalStr;
}

