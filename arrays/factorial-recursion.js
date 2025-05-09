const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

class factor{
    constructor(){
        this.memo={};
    }
    myFactorial(num){
        if(num===0 || num===1) return 1;
        else{
            return num*this.myFactorial(num-1);
        }
    }
    sumTo(num){
        if(num===0 || num===1) return 1;
        else{
            return num+this.sumTo(num-1);
        }
    }
    fibonnaci(num){
        if (num === 0) return 0;
        if (num === 1 || num === 2) return 1;

        // check if result already exists
        if (this.memo[num]) return this.memo[num];

        // compute and store result
        this.memo[num] = this.fibonnaci(num - 1) + this.fibonnaci(num - 2);
        return this.memo[num];
    }
}

const factorial = new factor();
console.log(factorial.fibonnaci(6));

rl.question('Enter the calculative function you would like to use\nAvailable Ones are:- myFactorial(1),sumTo(2),fibonnaci(3)\nEnter their number or name--->', (answer)=>{
    let func;
    if(answer=='myFactorial' || answer=='1'){
        func='myFactorial';
    }
    else if(answer=='sumTo' || answer=='2'){
        func='sumTo';
    }
    else if(answer=='fibonnaci' || answer=='3'){
        func='fibonnaci';
    }
	 rl.question(`Enter number you want to run ${answer} on\n`, (answer)=>{
                const input1 = Number(answer);
                const userFunction = new factor();
                console.log(userFunction[func](input1));
                rl.close();
	});
});