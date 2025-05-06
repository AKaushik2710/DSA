const readline = require('readline');
const rl = readline.createInterface({
	input : process.stdin,
	output : process.stdout
});

const bubble_sort = function (arr,n){
	let i, j, temp;
	let swap;
	for(i=0; i < n-1; i++){
		swap=false;
		for(j=0; j< n-i-1; j++){
			if(arr[j] > arr[j+1]){
				temp=arr[j];
				arr[j]=arr[j+1];
				arr[j+1]=temp;
				swap=true;
			}
		}
		if(swap === false){
			break;
		}
	}
	return arr;
}

rl.question('Enter array you want to be sorted (e.g. 1,2,3,4)\n', (answer)=>{
	const input = answer.split(',').map(Number);
	const sortedArr = bubble_sort(input, input.length);
	console.log(`Output is : ${sortedArr}`);
	rl.close();
})

