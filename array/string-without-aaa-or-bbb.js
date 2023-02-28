var strWithout3a3b = function(a, b) {
     let length = a + b;
     let str = "";
     const notATriplet = (char)=>{
        if(str.length<2)return false;
       return str.substring(str.length-2,str.length).includes(char+char);
     }
    while(str.length < length){
        if(b >= a){ // if b has more char count
            if(!notATriplet('b')){ //check if there is not triplet formaing
                str+='b'; // add b
                b--; // // decrement the count
            }else{
                str+='a'; //else add a
                a--;
            }
        }else{
            if(!notATriplet('a')){ // check if there is not triplet forming 
                str+='a'; //add a
                a--; // decrement the count
            }else{
                str+='b';
                b--; 
            }
        }
    } 
 
    return str; 
 };
 
