import { useWidgetContext } from './WidgetContext';
import Card from '../components/Card';
import T from '../components/Time';

function Time() {
  const { location, size } = useWidgetContext();
  return (
    <Card location={location} size={size}>
      <T />
    </Card>
  );
}

export default Time;
