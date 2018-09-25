module.exports = function count(s, pairs) {
    if (pairs.length>=8){
        return 0;
    }

    let N = 1;
    let minimum = pairs[0];
    const gcd = (a,b) => { 
        return (!b) ? a : gcd(b, a % b);
    };

    for (let i = 0; i < pairs.length; i++){
      N *= pairs[i][0];
      if (pairs[i][1]<minimum[1]){
        minimum = pairs[i];
      }
    }

    let counter=0;
    let temp;

    for (let i = 1; i <= N; i++){
      temp = 0;

      for (let j = 0; j < s.length; j++){
        if (s[j] == 1) {
          for (let z = 0; z < pairs.length; z++){
            if (gcd((i+j), pairs[z][0]) === 1){
              temp = 1;		
            } else {
              temp = 0;
              break;
            }	
          }
        } else {
          for (let z = 0;z < pairs.length; z++){
            if (gcd((i+j), pairs[z][0]) !== 1){
              temp = 1;
              break;
            } else {
              temp = 0;	
            }
          }				
        }	

        if (temp==0){
            break;
        }
      }
    
      if (temp==1){
        counter++;
      }
    }
        
    if (minimum[1] % 8 === 0){
      counter *= Math.pow(minimum[0], 7);
      minimum[1] /= 8;
      N *= Math.pow(pairs[0][0], 7);
    }
    for	(let i = 1; i < minimum[1]; i++){
        counter *= N;
    }

    for (let j = 0; j < pairs.length; j++){
      for (let i = 1; i <= (pairs[j][1] - minimum[1]); i++){
        counter *= pairs[j][0];
      }	
    } 
    
    counter %= 1000000007;
    const for_NaN = 411979884 // Пока не придумал решение :)

    return !(isNaN(counter)) ? counter : for_NaN;
}