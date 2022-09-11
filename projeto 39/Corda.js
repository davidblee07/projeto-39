class Corda {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 1.2,
      length: 450,
    };

    this.pointB = pointB;
    this.corda = Constraint.create(options);
    World.add(world, this.corda);
  }
  attach(body) {
    this.corda.bodyA = body;
  }

  fly() {
    this.corda.bodyA = null;
  }

  display() {
    if (this.corda.bodyA) {
      var pointA = this.corda.bodyA.position;
      var pointB = this.pointB;
      push();

      stroke(48, 22, 8);
      strokeWeight(0);

      line(pointB.x, pointB.y, pointA.x, pointA.y);

      pop();
    }
  }
}
