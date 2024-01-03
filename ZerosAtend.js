let input = [0,1,0,3,12];

for(i in input){
    if(input[i]===0){
        input.push(input[i]);
        input.splice(i,1);
    }
}

console.log("Zeros at end of an array", input);