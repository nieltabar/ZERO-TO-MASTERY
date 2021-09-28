4+3;

if (4+3 ===7){
	alert("Your smart!");
}
console.log("Hello");
// function declaration
function sayHello(){
	console.log("Hello");
}
sayHello();

// function expression
var sayBye = function(){
	// anonymous function since the function doesn't have a name
	console.log("Bye");
}
sayBye();

// adding arguments
function sing(song){
	console.log(song);
}
sing("laa dee daa");
sing("hello");
sing("woahhhhh");

// returning a value
// function multiply(a,b){
// 	return a*b;
// }
// multiply(5,10);

// using alert using variables

function multiply(a,b){
	if (a>10 || b>10){
		return "lisod ra kaayo na";
	}  else{
		return a*b;
	}
	return a*b;
}
var total = multiply(5,10) 
alert(total);

// arrays

var list =["tiger", "cat", "bear", "bird"];
// accessing an array
console.log(list[1]);

// array within an array 

var list =
["tiger", "cat", "bear", "bird"];

