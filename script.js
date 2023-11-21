const makeChange = (c) => {
  // your name here
	let output=[];
	 // let num = parseInt(c); // Corrected ParseInt to parseInt
  let units = { q: 25, d: 10, n: 5, p: 1 };
	for(let i in units){
		let curr=units[i];
		output[i]=parseInt(num/curr);
		num=num-curr*output[i]
	}
	return output;

	
};

// Do not the change the code below
// const c = prompt("Enter c: ");
// alert(JSON.stringify(makeChange(c)));
