import { useWidgetContext } from './WidgetContext';
import Card from '../components/Card';
import Image from '../components/Image';

function ImageOfTheDay() {
  const { location, size } = useWidgetContext();
  return (
    <Card location={location} size={size}>
      <Image />
    </Card>
  );
}

export default ImageOfTheDay;
