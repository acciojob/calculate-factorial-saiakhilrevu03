//your JS code here. If required.

function factorial(n){
	let fact=1;
	for(let i=n;i>=1;i--){
		fact=fact*i;
	}
	return `The factorial of ${n} is ${fact}`;
}
const n = parseInt(prompt("enter a number"));
if(!isNaN(n) && n>=0){
	alert(factorial(n));
}