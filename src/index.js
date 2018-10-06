module.exports = function count(s, pairs) {
	let counter;
	const pairs_len = pairs.length,
		s_len = s.length;

	if (s === '1'){
		counter = 1;

		for (let i = 0; i < pairs_len; i++){
			counter *= (pairs[i][0] - s_len);
		}
		return counter;
	}

	if (pairs_len >= 8){
		return 0;
	}

	counter = 0;
	let N = 1;
	let min = pairs[0];

	for (let i = 0; i < pairs_len; i++){
		N *= pairs[i][0];
		if (pairs[i][1] < min[1]){
			min = pairs[i];
		}
	}
	
	for (let i = 1; i <= N; i++){
		let tmp = 0;
		for (let j = 0; j < s_len; j++){
			if (s[j] == 1){
				for (let z = 0; z < pairs_len; z++){
					if ((i+j) % pairs[z][0] !== 0){
						tmp = 1;		
					} else {
						tmp = 0;
						break;
					}	
				}
			} else {
				for (let z = 0; z < pairs_len; z++){
					if ((i+j) % pairs[z][0] === 0){
						tmp = 1;
						break;
					} else {
						tmp = 0;	
					}
				}				
			}	
				if (tmp === 0) break;
		}
			
		if (tmp === 1) counter++;
	}
				
	if (min[1] % 8 === 0){
		counter *= Math.pow(min[0], 7);
		min[1] /= 8;
		N *= Math.pow(pairs[0][0], 7);
	}

	for	(let i = 1; i < min[1]; i++){
		counter = (counter * N) % 1000000007;
	}

	for (let col = 0; col < pairs_len; col++){
		const step = pairs[col][1]-min[1],
			cur_pair = pairs[col][0];

		for	(let iter = 1; iter <= step; iter++){
			counter = (counter * cur_pair) % 1000000007;
		}	
	} 

	return counter;
}