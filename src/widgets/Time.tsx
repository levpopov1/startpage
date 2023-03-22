import Card from '../components/Card';
import T from '../components/Time';

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

function Time({ location, size }: WidgetProps) {
  return (
    <Card location={location} size={size}>
      <T />
    </Card>
  );
}

export default Time;
