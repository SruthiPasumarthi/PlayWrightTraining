let exp = ")([{]})))"

let array1 = exp.split("");
let array2 = exp.split("");
console.log(array1);

let temp ="";

for (ele of array1){
    //console.log(ele);
    if( ele == "("){
        temp = ")";
    }else if( ele == "["){
        temp = "]";
    }else if( ele == "{"){
        temp = "}";
    }
    let indexArr = array2.indexOf(ele);
    //console.log(indexArr);
    for(i = 0;i < array2.length;i++){
        if(temp == array2[i]){
            console.log(i);
            array2.splice(i,1);
            console.log(i-1);
            array2.splice(indexArr,1);
            

        }
    }
}

if(array2.length === 0){
    console.log("Balanced");
}else{
    console.log("Unbalanced" , array2);
}