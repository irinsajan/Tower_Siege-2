class Polygon{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        World.add(world, this.polygon);
        this.polygon = loadImage("polygon.png");
    }

    fly(){
        this.polygon.bodyA = null;
    }

    display(){
        image(this.polygon,170,20);

        if(this.polygon.bodyA){
            var pointA = this.polygon.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(4);

            if (pointA.x<190) {
                line(pointA.x-20, pointA.y, pointB.x+30, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x-20, pointB.y);
                image(this.polygon, pointA.x-25, pointA.y-10, 7, 20);
            } else {
                line(pointA.x+20, pointA.y, pointB.x+30, pointB.y);
                line(pointA.x+20, pointA.y, pointB.x-20, pointB.y);
                image(this.polygon, pointA.x+20, pointA.y-10, 7, 20);
            }

            pop();
        }
    }
    
}