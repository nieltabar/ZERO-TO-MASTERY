var _ = require('loadash');

var array = [1,2,3,4];
console.log('answer', _.without(array, 3));
function moveFunction(){
    var i = 0;
for(;i <= 10 && i >= -9;){
    var position = prompt("enter a number");
switch(position){
            case "up":
               console.log(i++);
                break;
            case "down":
               console.log(i-=1);
                break;
             default:
             console.log("invalid");
             	break;
}
}
}
moveFunction(); 
