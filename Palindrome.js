let input = -121;
let Quotient = input;
var temp= 0;

if(input > 0){

    while(Quotient>0){
        remainder = Quotient%10; 
        Quotient = Math.trunc(Quotient/10);
        temp = temp*10 + remainder;
    }
}else{
    input = -1*input;
    Quotient = input;
    while(Quotient>0){
        remainder = Quotient%10; 
        Quotient = Math.trunc(Quotient/10);
        temp = temp*10 + remainder;
    }

}

console.log(temp==input?"The given number is Palindrome":"The given number is not a Palindrome");