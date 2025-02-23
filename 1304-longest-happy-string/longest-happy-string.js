var longestDiverseString = function (a, b, c) {
  const map = {
    a,
    b,
    c
  }
  let lastChar = '';
  const findNextLargest = (charToIgnore = '') => {
    let count = 0
    let result = ''
    Object.keys(map).forEach(char => {
      if (char === charToIgnore) return
      let curr_count = map[char]

      if (curr_count > count) {
        result = char
        count = curr_count
      }
    })
    return result
  }

  let result = ''
  let continueItr = true
  let lastCharCount = 0
  while (continueItr) {
    let char = ''

    if (result === '') {
      char = findNextLargest();
      lastCharCount = 1
      lastChar = char  
    } else {
        char = findNextLargest( lastCharCount === 2 ?lastChar:'');    
        if(char === '') break; 
        if(lastChar === char) lastCharCount++;
        else
        lastCharCount = 1;
        lastChar = char;
    }
    map[lastChar]--;
  
    console.log(map,result,lastChar,char)
    if (map[lastChar] === 0) {
      delete map[lastChar];
      if (Object.keys(map).length === 0) continueItr = false
    }
       result += char
  }

  return result
}
