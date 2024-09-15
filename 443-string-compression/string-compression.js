/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let str = "";
  let index = 0;
  let charMap = {};
  let lastChar = "";
  let count = 0;
  let fP = 0;
  let sP = 0;

  const insertNumberInArr = (numersStr, chars, si) => { 
    numersStr.forEach((num) => (chars[si++] = num));
  };
  const deleteRemainChars = (chars,si,count)=>{
        chars.splice(si,count);
  };
  while (sP < chars.length) {
   
    if (chars[fP] !== chars[sP]) {

      if(count === 1){
        fP = sP;
        sP++;
        continue;
      }

      let numersStr = String(count).split("");
      insertNumberInArr(numersStr, chars, fP+1);
      let indexForDeletion = fP + numersStr.length + 1;
      deleteRemainChars(chars,indexForDeletion,sP - indexForDeletion);
      sP = fP + numersStr.length + 1;  
     
      fP = sP;
      count = 1;
     
    } else {
         count++;       
    }

    sP++;
  }
    
   if(count!==1){
       let numersStr = String(count).split(""); 
       insertNumberInArr(numersStr, chars, fP+1);
       let indexForDeletion = fP + numersStr.length + 1; 
       deleteRemainChars(chars,indexForDeletion,sP - indexForDeletion);
   }
  return chars.length;
};
