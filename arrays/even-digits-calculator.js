const readline = require('readline');

const rl = readline.createInterface({
	input : process.stdin,
	output : process.stdout
});

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let counter=0;
    
    const floor = (num,c=0)=>{
        let x = Math.floor(num/10);
        let count=c;
        if(x===0){
            return count;
        }
        else{
            count++;
            return floor(x, c+1);
        }
    }
    for(let x of nums){
        const count = floor(x);
        count%2!==0 ? ++counter : null;
    }
    return counter;
};

rl.question('Enter array you would like to find the number of elements having even digits e.g.12,123,1234\n', (answer)=>{
	const input = answer.split(',').map(Number);
	const elements = findNumbers(input);

	console.log(`The number of even elements in given array is : ${elements}`)

	rl.close();
})
