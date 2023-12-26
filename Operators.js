var a = 2 || 3;
console.log("if both the values are false then return false other wise true in logical or " + a); // if both the value are false then return false other wise true
var a = 0 || 2;
console.log("if both the values are false then return false other wise true in logical or " + a);
var a = 2 || 0;
console.log("if both the values are false then return false other wise true in logical or " + a);
var a = 0 || 0;
console.log("if both the values are false then return false other wise true in logical or " + a);
var a = 0 && 2; // if both the value are then return true other wise false
console.log("if both the values are true then return true other wise false " + a);
var a = 2 && 3;
console.log("if both the values are true then return true other wise false " + a);
var a = 2 && 0;
console.log("if both the values are true then return true other wise false " + a);
var a = ~(5);
console.log("Binary value of 5 is 0100 and it's bitwise not is 1010 = −(1×2^3) + (0×2^2) + (1×2^1) + (0×2^0) = 1×−8 + 0 + 1×2 + 0 = −6 so output is " + a);