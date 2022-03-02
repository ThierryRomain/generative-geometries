import BasicShapeDrawer from './drawers/BasicShapeDrawer';

const BasicShapesSketch = (sketchArgs:any) => (p:any) => {
  const sides = [0, 2, 3, 4, 5, 6, 7, 8, 16];
  const drawers : BasicShapeDrawer[] = [];
  const padding = 40;
  const spacing = 90;
  let counter = 0;

  // eslint-disable-next-line no-param-reassign
  p.setup = () => {
    p.createCanvas(sketchArgs.width, sketchArgs.height);
    p.strokeWeight(2);
    p.stroke('#393232');

    for (let i = 0; i < (sketchArgs.width - (2 * padding)); i += spacing) {
      for (let j = 0; j < (sketchArgs.height - (2 * padding)); j += spacing) {
        const dSides = sides[Math.floor(p.random(0, sides.length))];
        drawers.push(new BasicShapeDrawer(
          p,
          {
            x: padding + j,
            y: padding + i,
          },
          2,
          dSides,
        ));
      }
    }
  };

  // eslint-disable-next-line no-param-reassign
  p.draw = () => {
    let isDone = true;

    drawers.forEach((drawer) => {
      const oldPos = { ...drawer.drawPos };
      if (!drawer.isDone()) {
        drawer.step();
        isDone = false;
        if (counter !== 0) {
          p.line(oldPos.x, oldPos.y, drawer.drawPos.x, drawer.drawPos.y);
        }
      }
    });
    if (isDone) {
      console.log('Done!');
      p.noLoop();
    }
    counter += 1;
  };
};

export default BasicShapesSketch;
