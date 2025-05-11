function template(func,n,ques,ques2){
	const readline = require('readline');
	const rl = readline.createInterface({
		input : process.stdin,
		output : process.stdout
	});
	
	if(n===2){
		rl.question(ques, (answer)=>{
			const input = answer.split(',').map(Number);
			rl.question(ques2, (answer)=>{
				const input2 = Number(answer);
				console.log(func(input,input2));
				rl.close();
			})
		})
	}
	else{
		rl.question(ques, (answer)=>{
			const input = answer.split(',').map(Number);
			console.log(func(input));
			rl.close();
		})
	}
}


module.exports = template;
