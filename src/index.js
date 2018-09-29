module.exports = function count(s, pairs) {
    let n = 1;
    let arr = [], arr2 = [];

    for (let i = 0; i < pairs.length; i++) {
        n *= Math.pow(pairs[i][0], pairs[i][1]);
        arr2.push(pairs[i][0]);
    }

    if (n > 100000000)  return 0;

    for (let i = 0; i < n; i++){
    if (arr2.some(elem => i % elem == 0)) arr.push(0);
     else arr.push(1);
    }

    //console.log(arr);
    let res = arr.join('').replace(new RegExp(s, 'g'), 'y').split('').filter((elem) => elem === 'y');
    //console.log(res);
    return res.length % 1000000007;
}