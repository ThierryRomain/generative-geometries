import { useEffect } from 'react';
import BasicShapesHand from '../sketches/BasicShapesHand';
import BasicShapesSketch from '../sketches/BasicShapesSketch';
import SketchWrapper from '../sketches/SketchWrapper';

const BasicShapes: React.FC = () => {
  useEffect(() => {
    console.log('');
  }, []);

  return (
    <div>
      <h1>Formes de base</h1>
      <SketchWrapper sketch={BasicShapesSketch} />
      <SketchWrapper sketch={BasicShapesHand} />
    </div>
  );
};
export default BasicShapes;
