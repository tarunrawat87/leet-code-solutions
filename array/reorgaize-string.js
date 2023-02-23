/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
/**
Idea is very simple : 

1.Create a char map : map with char frequency
2.Form a string using this char map : Take the char which is not equal to adjacent character and has largest occurence. Initally since there will no 
adjacent char, you have to take char with largest frequency:

Basic idea is : choose a char every time from map with highest frequency and not equal to adjacent char.

Eg : aaabbc,

map would be a:3 , b:2 . c:1

string would be : initially : a
then pick largest occuring char not equal to a which is b , str =ab map = {a:2,b:1,c:1}, again pick a char wih largest occuring char not equal to b which 
is a str = "aba" map = {a:1,b:1,c:1}



*/
  // create a char map
 const createMap = ()=>{
     let map = {};
     let index = 0;   
     while(index<s.length){
         if(map[s.charAt(index)] === undefined) map[s.charAt(index)] = 1;
         else map[s.charAt(index)]++;
         index++;
     }
     
    return map;
 }

 let charMap = createMap();

  // finding next char which is not equal to adajacent and has most occurence
  const findNextChar = (adjacentChr)=>{
      let char ="";
      let _value = 1;
     for (const [key, value] of Object.entries(charMap)) {
            
        if((adjacentChr === "" || key!=adjacentChr) &&
            charMap[key]!==0 && _value <= value){
                _value = value;
                char = key;
            }
    }  
    charMap[char]--;
    if(charMap[char]===0)delete charMap[char]; //if char occurence become zero , remove it 
    return char;
  }

 let newStr = "";
  // keep doing it till length  is not equal to current string
 while(newStr.length !== s.length){
   let newChar =   findNextChar(newStr.charAt(newStr.length - 1)); //keep concating new chars
   if(newChar === "")return "";
   newStr+=  newChar;

 }   
    
return newStr;
};
//taarun

//aabca

