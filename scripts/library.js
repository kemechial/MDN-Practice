/**
 var carLike=function(obj,loc){
	obj.loc=loc;
	obj.move=move;
	return obj;
};
var move=function(){
	this.loc++;
};
 */


//class
var Car=function(loc){
	//obj={loc:loc};
	/*
	obj.move=function(){
		obj.loc++;
	};
	*/
	//var obj=Object.create(Car.methods);
	//obj.move=move;
	//var obj=Object.create(Car.prototype);
	//obj.loc=loc;
	//return obj;
	this.loc=loc;
};

Car.prototype.move=function(){
	this.loc++;
};
/*
Car.methods={
		move:function(){
			this.loc++;
		}
};
*/

var Van=function(loc){
	Car.call(this,loc);
};

Van.prototype=Object.create(Car.prototype);
Van.prototype.constructor=Van;
