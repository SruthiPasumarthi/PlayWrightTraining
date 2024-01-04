//String Functions
let originalString = "Welcome to 2024";
let stringLength = originalString.length;
console.log("string length",stringLength);
let atString = originalString.at(-3); //at methods allows the use of negative indexes while charAt() do not
console.log("atString",atString);
let stringAt = originalString.charAt(13);
console.log("String at",stringAt);
let stringCode = originalString.charCodeAt(0);
console.log("string code",stringCode); // charCodeAt() method returns the UTF-16 code of the character at a specified index in a string
let sliceString = originalString.slice(3,-3);
console.log("slice string",sliceString); //slice() extracts a part of a string and returns the extracted part in a new string
let subString = originalString.substring(3,-3) //The difference is that start and end values less than 0 are treated as 0 in substring()
console.log("subString",subString);
let padedString = originalString.padStart(20,"p");
console.log("paddedString",padedString); //It pads a string with another string (multiple times) until it reaches a given length
let repeatString = originalString.repeat(3);
console.log("repeatString",repeatString);//The repeat() method returns a string with a number of copies of a string
console.log("original string",repeatString);