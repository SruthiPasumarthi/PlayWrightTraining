let originalArray = [1, 2, 3, 4, 5, 6, 7]
let reveresArray = []
arrayLength = originalArray.length - 1;
for(i=arrayLength;i>=0;i--){
    reveresArray.push(originalArray[i]);
}
console.log("original array ", originalArray);
console.log("reverse array ", reveresArray);

let originalString = "Sruthi";
let reverseSTring = "";
for(i=originalString.length;i>=0;i--){
    reverseSTring += originalString.charAt(i);
}
console.log("Original String", originalString);
console.log("Reverse String", reverseSTring);