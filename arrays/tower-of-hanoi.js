const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function toh(n,source,aux,dest){
    if(n===1){
        console.log(`Move disk 1 from ${source} to ${dest}`);
        return;
    }

    toh(n-1,source,dest,aux);

    console.log(`Move disk ${n} from ${source} to ${dest}`);

    toh(n-1, aux, source, dest);
}

rl.question(`Enter the disks there are and name of source, auxilliary and destination i.e. 3,A,B,C\n`, (answer)=>{
                const [disks, source,aux,dest] = answer.split(',');
                toh(Number(disks), source, aux, dest);
                rl.close();
});