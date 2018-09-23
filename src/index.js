module.exports = function count(s, pairs) {
  if (pairs.length>=8){
    return 0;
  }
    let N=1;
    let min=pairs[0];
    for (let i=0;i<pairs.length;i++){
      N*=pairs[i][0];
      if (pairs[i][1]<min[1]){
        min=pairs[i];
      }
    }
    let counter=0;
    let tmp;
    for (let i =1;i<=N;i++){
      tmp=0;
      for (let j=0;j<s.length;j++){
        if (s[j]==1){
          for (let z=0;z<pairs.length;z++){
            if ((i+j)%pairs[z][0]!=0){
              tmp=1;		
            } else {
              tmp=0;
              break;
            }	
          }
        }else{
          for (let z=0;z<pairs.length;z++){
            if ((i+j)%pairs[z][0]==0){
              tmp=1;
              break;
            } else {
              tmp=0;	
            }
          }				
        }	
          if (tmp==0){
            break;
          }
      }
        if (tmp==1){
          counter++;
        }
    }
        
    if (min[1]%8==0){
      counter*=Math.pow(min[0],7);
      min[1]/=8;
      N*=Math.pow(pairs[0][0],7);
    }
    for	(let i=1;i<min[1];i++){
        counter*=N;
        counter=counter%1000000007;
      }
    for (let j=0;j<pairs.length;j++){
      for	(let i=1;i<=(pairs[j][1]-min[1]);i++){
        counter*=pairs[j][0];
        counter=counter%1000000007;
      }	
    } 
    return counter;
  }