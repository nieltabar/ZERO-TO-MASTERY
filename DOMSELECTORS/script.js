// // listen button
// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function(){
// 	console.log("Clicked!!");

// })

// listen input append using mouse
var button = document.getElementById("enter");
var input = document.getElementById("input");
var ul = document.querySelector("ul")

button.addEventListener("click", function(){
	// lets you input a value and saves it to append
	// create element
	// condition to not append something on the list if you haven't inputted something
	if(input.value.length > 0){
	var li = document.createElement("li");
	// append to insert li
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li)
	}
	
})
// input using enter
// event is used to accessed keyCodes
input.addEventListener("keypress", function(event){
	// lets you input a value and saves it to append
	// create element
	// condition to not append something on the list if you haven't inputted something
	// enter = 13 as javascript keyCode
	if(input.value.length > 0 && event.keyCode===13){
	var li = document.createElement("li");
	// append to insert li
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li)
	}
	
})

