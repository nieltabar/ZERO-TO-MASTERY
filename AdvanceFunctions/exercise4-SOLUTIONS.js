//Solve these problems:

// the child scope always has access to the parent scope

//#1 Create a one line function that adds adds two parameters
const sum = (a, b) => a + b

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3) // returns 13

const first =() =>{
	const greet= "Hi";
	const second = ()=>{
		alert(greet);
	}
	return second;
}
const newFunc = first();
newFunc();
// closures = a function run, the function executed , it's never going to execute again
// but it's going to remember that there are references to those variables
// so the child scope always has access to the parent scope
// children always has acces to the parent scope but parent doesn't have access to the children scope

// Currying means changing a functions to only accept one parameter at a time
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a*b;
curriedMultiply(3);

// Compose is the act of putting two functions together to form a third function

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1) // 31


//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12) // 17

//Composing: What does the last line return?

// a is 10 then run the inner function which is g in our case add1 and add5
const compose = (f, g) => (a) => f(g(a));
// const add1 = (10) => 10 + 1;//11
const add1 = (num) => num + 1;
// const add1 = (10) => 10 + 5;//15
const add5 = (num) => num + 5;
compose(add1, add5)(10) // 16

//What are the two elements of a pure function?
1. Deterministic --> always produces the same results given the same inputs
2. No Side Effects -->  It does not depend on any state, or data, change during a program’s execution. It must only depend on its input elements.