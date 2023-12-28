function pascals(numRows) {
	for (let i = 1; i <= numRows; i++) { 
        let temp = 1; 
		let rowstring ='';
        for (let j = 1; j <= i; j++) { 
            rowstring = rowstring +' '+ temp;
            temp = temp * (i - j) / j; 
        } 
        console.log(rowstring.trim()); 
    } 
	
}

pascals(3);
