import { useEffect, useRef } from 'react';
import p5 from 'p5';

type SketchWrapperProps = {
  sketch: any,
}

const SketchWrapper: React.FC<SketchWrapperProps> = ({ sketch, ...props }) => {
  const myRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    let cleanup = () => {};
    if (myRef.current) {
      // eslint-disable-next-line new-cap
      const myP5 : any = new p5(
        sketch({
          width: myRef.current.clientWidth,
          height: myRef.current.clientHeight,
        }),
        myRef.current,
      );
      cleanup = myP5.remove;
    }

    return cleanup;
  }, [sketch]);

  return (
    <div style={{
      height: 800,
      width: 800,
      margin: 'auto',
    }}
    ref={myRef}>
    </div>
  );
};
export default SketchWrapper;
