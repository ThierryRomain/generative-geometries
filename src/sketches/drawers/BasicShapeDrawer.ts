import p5 from 'p5';

export default class BasicShapeDrawer {
  counter = 0;

  done = false;

  sizeFactor = 200;

  drawPos: any;

  drawSpeed: number;

  sides: number;

  angle: number;

  s: p5;

  handDrawnForce: number;

  constructor(s:p5, drawPos:any, drawSpeed:number, sides:number, handDrawnForce = 0) {
    this.drawPos = drawPos;
    this.drawSpeed = drawSpeed;
    this.sides = sides;
    this.angle = (180 - (((this.sides - 2) * 180) / this.sides)) / 2;
    this.s = s;
    this.handDrawnForce = handDrawnForce;
  }

  step() {
    this.drawPos = this.calculateNewPos();

    if (
      this.counter === Math.floor(
        (this.sizeFactor + (1.33 * this.sides)) / (this.drawSpeed * this.sides),
      )
    ) {
      this.angle += 360 / this.sides;
      this.counter = 0;
    }
    this.counter += 1;

    if (
      (this.angle >= 360)
          || (this.sides === 2 && this.counter > this.sizeFactor * 0.15)
    ) {
      this.done = true;
    }
  }

  calculateNewPos() {
    const v = p5.Vector.fromAngle(this.s.radians(this.angle), this.drawSpeed);
    v.add(p5.Vector.fromAngle(this.s.radians(this.s.random() * 360)).mult(this.handDrawnForce));
    return {
      x: this.drawPos.x + v.x,
      y: this.drawPos.y + v.y,
    };
  }

  isDone() {
    return this.done;
  }
}
