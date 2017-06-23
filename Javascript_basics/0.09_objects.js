
//object literal
var player = {
	name: "",
	life: 100,
	damage: 0, //attackPoints
	hassword:true,
	haspistol:true,
	hasSniperRifle: true, 
	healthbonus: 0,
	rank: ["soldier", "mage","spartan", "barbarian"],

	//methods
challenge :function(){
		console.log("sir, would you care to battle");
},
fightme :function(){
console.log("would you care to fight" + this.name + "?");
		// body...
},
attack :function(target){
	console.log(this + " attacks" + target + "for" + this.damage + "damage");
	target.life -= this.damage;
},
healthbonus : function(player){
	var extralife= 10;
	console.log(this + " picked up" + extralife +"life from a health pack." );
	player.life +=extralife;
},
tostring: function() {
	return "player";
},
swatwithsword: function(){
	var damage= 25*this.damage;
	console.log(this + "did" + damage + "damage to " + target + " with sword.")
	target.life -=damage;
},
pickedupsword  :function(){
	if(this.hassword==True){
		console.log(this.name + " picked up the sword")
	}
}, 
snipe: function(target){
		var damage = 20*this.damage;
		console.log(this.name + ' did ' + damage + " damage to " + this.target + " with the sniper rifle.");
		target.life -= damage;
	},	

gameOver : function(player) {
		var lifeLevel = player.life;
		if (lifeLevel === 0) {
			console.log(this + ' has ' + lifeLevel + " life. The game is over.");
		} 
	},

snipe: function(target){
		var damage = 20*this.damage;
		console.log(this.name + ' did ' + damage + " damage to " + this.target + " with the sniper rifle.");
		target.life -= damage;
	},	

	gameOver : function(player) {
		var lifeLevel = player.life;
		if (lifeLevel === 0) {
			console.log(this + ' has ' + lifeLevel + " life. The game is over.");
		} 
	},

	rankBonus : function(player) {
		var rankLevel = player.rank;
		if (rankLevel === "Captain") {
			console.log(this + " is a " + rankLevel + " and is 10% stronger.");
		} else if (rankLevel = "Soldier"){
			console.log(this + " is a " + rankLevel + " and hit power is normal.");
		} else {
			console.log("He is not alive.");
		}

	}

};




var saul = Object.create(player);
saul.name = "Saul";
saul.life=120;
saul.damage=20;
saul.hasSniperRifle=true;
saul.hassword=true;
saul.rank="spartan";


console.log(saul.name);
console.log(saul.life);
saul.challenge();
saul.fightme();
saul.attack();



var denise = Object.create(player);
denise.name= "Denise";
denise.life="121";
denise.damage="21";
denise.hasSniperRifle =true;
denise.rank="barbarian";
denise.fightme();
denise.attack();

console.log(denise.name);
console.log(denise.life);

saul.attack(denise);



