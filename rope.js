class rope{
	constructor(bodyA, bodyB, pointA, pointB)
	{ var options ={
		bodyA: bodyA,
		bodyB: bodyB,
		pointB: {x:pointA, y:pointB}
	}
	this.pointA = pointA
	this.pointB = pointB
	this.rope = Constraint.create(options)
	World.add(world, this.rope)

	//create rope constraint here
 
	}


    //create display() here  
	display(){
		var pa = this.rope.bodyA.position
		var pb = this.rope.bodyB.position
		strokeWeight(2)
		line(pa.x, pa.y, pb.x+this.pointA, pb.y+this.pointB)
	}

}
