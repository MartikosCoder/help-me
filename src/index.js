module.exports = function count(s, pairs) {
  let result = 0;
  let N = 1;
  s = s.split('');
  const gcd = (x, y) => {
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }

  for (let i = 0; i < pairs.length; i++){
    N += (pairs[i][0] ** (pairs[i][1]));
  }

  console.log("k j gcd res");
  
  for (let k = 1; k <= N; k++){
    for (let j = 0; j < s.length; j++){
      if(s[j] == 1 && k + j !== N){
        if(gcd(k + j, N) === 1){
          console.log(k + ' ' + j + ' ' + gcd(k + j, N) + ' ' + ++result);
        }

        /*if(N / k + j === N || !(N / k + j).toString().includes('.5') && (N / k + j).toString().includes('.')) {
          
        }*/
      } else if(s[j] == 0){
        if(gcd(k + j, N) !== 1){
          console.log(k + ' ' + j + ' ' + gcd(k + j, N) + ' ' + ++result);
        }

        /*if(!(N / k + j === N || !(N / k + j).toString().includes('.5') && (N / k + j).toString().includes('.'))) {
        
        }*/
      }
    }
  }

  return result % 1000000007;
}
