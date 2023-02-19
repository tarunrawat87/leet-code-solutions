/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {

  num += "";
  // Swap the chars in a string
  const swapStr = (str, pos1, pos2) => {

    let char1 = str.charAt(pos1);
    let char2 = str.charAt(pos2);

    // replace the characters using substrings
    if (pos1 < pos2) {
      str = str.substring(0, pos1) + char2 + str.substring(pos1 + 1, pos2) + char1 + str.substring(pos2 + 1);
    } else if (pos1 > pos2) {
      str = str.substring(0, pos2) + char1 + str.substring(pos2 + 1, pos1) + char2 + str.substring(pos1 + 1);
    }
    return str;
  }

  /**
  
  Idea is very simple , you just sort the string , and compare the sorted string with original string and whenever
  there is a difference , swap the indexes which is different.
  
  for e.g : 2736 
  Steps:
  1. Sort it : 7632
  2. Compare the oringal string and check where is differ: at first index
  3. Now we know which char to pick but wait.. if there are multiple instances of the char , so we have to pick in char in such a way that
  swapping it yields lowest result, so idea is to this char from lowest most decimal point i.e start looking it from right.
  
  That is it
  
  **/
  finding occurence of char from right to minimize it
  const findAndReplace = (charToReplace, index) => {

    let indexInOrgStr = num.lastIndexOf(charToReplace);
    console.log(indexInOrgStr, index, num)

    return swapStr(num, indexInOrgStr, index);
  }

  let sortedSequence = num.split("").sort((a, b) => b - a);
  let index = 0;
  while (index < sortedSequence.length) {

    if (sortedSequence[index] !== num[index]) {
      return findAndReplace(sortedSequence[index], index);
    }

    index++;
  }



  return num;
};
