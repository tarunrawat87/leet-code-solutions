/*
Map of char and their weight.
*/
let map = {
    "A": 1,
    "B": 2,
    "C": 3,
    "D": 4,
    "E": 5,
    "F": 6,
    "G": 7,
    "H": 8,
    "I": 9,
    "J": 10,
    "K": 11,
    "L": 12,
    "M": 13,
    "N": 14,
    "O": 15,
    "P": 16,
    "Q": 17,
    "R": 18,
    "S": 19,
    "T": 20,
    "U": 21,
    "V": 22,
    "W": 23,
    "X": 24,
    "Y": 25,
    "Z": 26
};


function titleToNumber(columnTitle) {


    let lastIndex = columnTitle.length - 1;
    let pow = 0;
    let titleNum = 0;
    /*
    Start from the end of char.
    */
  //Formula is weight*(26^0)+weight*(26^1)+weight*(26^2)+weight*(26^3).....
    while (lastIndex >= 0) {
        let char = columnTitle.charAt(lastIndex);
        //
        titleNum += (Math.pow(26, pow) * map[char]);
        pow++;
        lastIndex--;
    }
    console.log(titleNum);
    return titleNum;
}

titleToNumber("AB");
