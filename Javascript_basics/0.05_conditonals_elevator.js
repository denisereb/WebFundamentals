

var elevatorUp= true;
var elevatorDown= true;
var elevatorBroken= true;
var elevatorIsStuckWhileWeAreOnIt= true;
var elevatorNumber= 13;

if(elevatorUp === true){
	console.log("Going Up!");
} else {
	console.log("Going Down!");
} 

if(elevatorBroken === true){
	console.log("Elevator Unavailable");
} else {
	console.log("Choose Floor");
}

if(elevatorIsStuckWhileWeAreOnIt)
	console.log("Oh no! We are stuck!")
if(elevatorBroken || elevatorDown){
	console.log("Oh no!");
}

if (elevatorNumber === 13 && elevatorIsStuckWhileWeAreOnIt ) {
	console.log("You are having bad luck!");
}