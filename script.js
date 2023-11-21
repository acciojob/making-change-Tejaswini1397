const makeChange = (c) => {
  // your name here
	let output=[];
	let units={q:25,d:10,n:5,p:1}
	for(let i in units){
		let curr=units;
		output[i]=ParseInt(num/curr);
		num=num-curr*output[i]
	}
	return output;
	
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
