// Argument and Parameter //

const word = function(one = "Mr", two = "Hammad" ){
    console.log(`Nice to meet you ${one} ${two}`);
}

word();
word("Mrs" , "Script" );

const secondWord  = function(third = "Yoyo" , forth = "code"){
    console.log(`I hate you ${third} ${forth}`);
}

secondWord("but" , "why?");