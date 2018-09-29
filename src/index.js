module.exports = function count(s, pairs) {
    let N = 1;
    const getValue = (i, pair) => {
        for (let j = 0; j < pair.length; j++) {
            if (i % pair[j][0] == 0){
              return 0;
            }    
          }
        return 1;
    }

    for(let i = 0; i < pairs.length; i++){
      N *= pairs[i][0] ** pairs[i][1];
    }
  
    if (N > 100000000) return 0;
  
    let count = 0;
  
    for (let i = 0; i < N; i++){
      for (let j = 0; j < s.length; j++) {
        if (getValue(i + j, pairs) != s[j]){        
          break;
        }
        if(j === s.length - 1){
          count++;
        }
      } 
    }

    return count % 1000000007;
  }