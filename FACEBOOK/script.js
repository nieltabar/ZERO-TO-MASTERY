var database = [
{
	username: "niel",
	password: "secret"
},
{
	username: "niel2",
	password: "secret2"
},
{
	username: "niel3",
	password: "secret3"
}
];
var newsFeed =[
{
	username: "Bobby",
	timeline: "HUHU"

},
{
	username: "Niel",
	timeline: "Java"

}
];

// checks if username is within database
function isUserValid(username, password){
for (var i=0; i< database.length; i++){
		if(database[i].username === username && 
			database[i].password === password){
			return true;
		}
	}
	return false;
}
// transfer is userValid to a consoleLog
function signIn(username, password){
	// console.log(isUserValid(username, password));
	
	 	if(isUserValid(username, password)){
	 		console.log(newsFeed);
	 	}else{
	 		alert("Wrong username and password try again");
	 	}
}
var userName = prompt("What's your username?");
var passWord = prompt("What's your password?");
signIn(userName, passWord);