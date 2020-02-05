// Variables and Block Scope :-

let num = 10;

if(true){
    let num = 20;
    let names = "HammadS";
    console.log(`1st Inside block number :`, num, names);

    if(true){
    let name = "Haris";
    console.log(`2nd Inside block number :`, name);

    }
}

console.log(`Outside the block number :`, num);

// {"let" , "const"}-------["Global" as well as "Block"] //