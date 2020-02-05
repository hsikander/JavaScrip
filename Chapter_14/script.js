// Break and Continue :-

const num = [1,2,3,4,5,6,7,8,9,0,100,101,102,103,104,105,106,107,108,109,110];

for(let i = 0; i < num.length; i++){
    // console.log(num[i])

    if(num[i] === 0){
        continue;
    }
            console.log(num[i])

    if(num[i] === 100){
        break;
    }

}
