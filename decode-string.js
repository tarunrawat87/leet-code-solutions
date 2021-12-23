/**
 * @param {string} s
 * @return {string}
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
function multi(str,times){
 let newPattern='';   
times=Number(times)
while(times--){
    newPattern+=str;
}
return newPattern;
}
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

