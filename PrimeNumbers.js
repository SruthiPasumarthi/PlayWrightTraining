let numbers = (a,b) => {
    let arr = [];
    if(a<b){
        for(i=a+1;i<b;i++){
            sum =0;
            for(j=2;j<i;j++){
                if(i%j == 0){
                    sum += 1;
                }
            }
            if(sum == 0){
                arr.push(i);
            }
        }
        return arr;
    }else if(b<a){
        for(i=b+1;i<a;i++){
            sum =0;
            for(j=2;j<i;j++){
                if(i%j == 0){
                    sum += 1;
                }
            }
            if(sum == 0){
                arr.push(i);
            }
        }
        return arr;
    }
    else{
        return ("No prime Numbers are there between given two numbers");
    }
    
}


let output = numbers(5,15);
//output = output.flat();
(output.length === 0) ? (console.log("No prime Numbers are there between given two numbers")):(console.log("Prime numbers\
between given numbers are: ", output));