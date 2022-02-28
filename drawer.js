class Drawer{
    counter = 0;
    done = false;

    constructor(drawPos, drawSpeed, sides){
        this.drawPos = drawPos;
        this.drawSpeed = drawSpeed;
        this.sides = sides;
        this.angle = (180 - (((this.sides - 2) * 180)/this.sides)) / 2
    }

    step(){
        this.drawPos = this.calculateNewPos();

        if(this.counter == Math.floor((200 + (1.33 *this.sides ))/(this.drawSpeed * this.sides))){
            this.angle += 360 / this.sides;
            this.counter = 0;
        }
        this.counter++;

        if(this.angle >= 360){
            this.done = true;
        }
    }

    calculateNewPos(){
        let v = p5.Vector.fromAngle(radians(this.angle),this.drawSpeed);
        // v.add(p5.Vector.fromAngle(radians(random()*360)));6 
        return {
            x: this.drawPos.x + v.x,
            y: this.drawPos.y + v.y,
        }
    }

    isDone(){
        return this.done;
    }
}