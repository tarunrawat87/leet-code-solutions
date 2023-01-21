/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function(number, digit) {
     
    String.prototype.removeChar = function(index){
        return this.slice(0,index)+this.slice(index+1);
    }

    let index = 0;
    let found = false;
    let lastIndex = -1
    while(index < number.length){

        let char = number.charAt(index);
          /**
          If char meets the digit
          
          */
        if(char === digit){
          
          //if a char is greater than digit , remove that char

        if( index!==(number.length-1) && char<number.charAt(index+1)){
            number = number.removeChar(index);
            found = true;
            break;
        }
        /** 
        this is the case when all the digits have smaller next digit
        for eg. 4565656 digit =5
        
        in this remove the last occurence of the digit
         
         **/
        lastIndex = index;

        }



        index++;
    }

    // if no digit is found when next char is more then the digit, remove last occurence
    if(found === false){
       number = number.removeChar(lastIndex);  
    }
    console.log(number);

    return number;
};
