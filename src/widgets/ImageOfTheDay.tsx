import Card from '../components/Card';
import Image from '../components/Image';
// import WidgetContext, { WidgetProps } from './WidgetContext';

type WidgetProps = {
  location: {
    column: number;
    row: number;
  };
  size: {
    width: number;
    height: number;
  };
};

function ImageOfTheDay({ location, size }: WidgetProps) {
  return (
    <Card location={location} size={size}>
      <Image />
    </Card>
  );
}

export default ImageOfTheDay;
