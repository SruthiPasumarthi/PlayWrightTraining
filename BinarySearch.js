let array1 = [1, 5, 8, 2, 10, -9,] ;
let sortedArray = array1.sort(function(a,b){
    return a-b;
});
console.log(sortedArray);
 
function binarySearch(array, target){
    for(i of array){
        if(i == target){
            return array.indexOf(i);
           
        }
    }
}

let index = binarySearch(sortedArray, 11);
//console.log(index);
if(index >= 0){
    console.log("target index value is:", index);
}else{
    console.log("target is not present:", -1);
}
