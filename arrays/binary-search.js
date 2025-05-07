const readline = require('readline');
const rl = readline.createInterface({
	input : process.stdin,
	output : process.stdout
});

const binarySearch = (arr, n)=>{
	let left = 0;
	let right = arr.length-1;
	if(arr.length===1){
		return arr[0]===n ? 0 : -1;
	}

	const desc = ()=>{
		while(left <= right){
                	const mid = Math.floor((left+right)/2);
                	if(arr[mid]===n) return mid;
                	else if(arr[mid]<n) right = mid-1;
                	else left=mid+1;
        	}
        	return -1;
	}

	const asc = ()=>{
		while(left <= right){
			const mid = Math.floor((left+right)/2);
			if(arr[mid]===n) return mid;
			else if(arr[mid]<n) left = mid+1;
			else right=mid-1;
		}
		return -1;
	}
	
	switch((arr[0]-arr[1])>0){
                case true : return desc();
                case false : return asc();
        }
}

rl.question('Enter the array elements separated by comma(,) like --> e.g. 1,2,3,4\n', (answer)=>{
	const input = answer.split(',').map(Number);
	
	 rl.question(`Enter number you want to find in [${input}]\n`, (answer)=>{
                const input1 = Number(answer);
                console.log(binarySearch(input, input1));
                rl.close();
	});
});
