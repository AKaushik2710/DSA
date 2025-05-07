const readline = require('readline');
const rl = readline.createInterface({
	input : process.stdin,
	output : process.stdout
});

const bin = (arr, n)=>{
	const len = arr.length;
	
	for(let x =0; x<len; x++){
		if(arr[x] === n){
			return x;
		}
	}
	return -1;
}

rl.question('Enter the array and element you would like to find in the given array e.g. 1,2,3,4 4 24,45,66 45\n', (answer)=>{
	const input = answer.split(' ');
	const arr = input[0].split(',').map(Number);
	const find = Number(input[1]);
	console.log(bin(arr, find));
	rl.close();
})
