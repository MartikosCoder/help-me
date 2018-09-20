module.exports = function count(s, pairs) {
    let N = 1;

    for (let i = 0; i < pairs.length / 2; i++){
        N *= (pairs[i][0] ** pairs[i][1]);
    }

    return N;
}
