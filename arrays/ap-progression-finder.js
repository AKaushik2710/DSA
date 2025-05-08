const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function findMissing(arr) {
    if(arr[1]>arr[0]){
        const diff = arr[1]-arr[0];
        for(let i=2; i<arr.length;i++){
            const temp = arr[i]-arr[i-1];
            if(temp<diff){
                return arr[i-2]+temp;
            }
            else if(temp > diff){
                return arr[i-1]+diff;
            }
        }
        return arr[arr.length-1]+diff;
    }
    else{
        const diff = arr[1]-arr[0];
    
    for(let i=2;i<arr.length;i++){
        const temp = arr[i]-arr[i-1];
        if(temp*-1>diff*-1){
            return arr[i-1]+diff;
        }
        else if(temp*-1 < diff*-1){
            return arr[i-2]+temp;
        }
    }
    return arr[arr.length-1]+diff;
    }
}

rl.question('Enter the array elements separated by comma(,) like --> e.g. 1,2,3,4\n', (answer)=>{
	const input = answer.split(',').map(Number);
	console.log(findMissing(input));
                rl.close();
});