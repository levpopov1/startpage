import { useQuery } from '@tanstack/react-query';
import Card from '../components/Card';
import Settings from '../components/Settings';
import { useWidgetContext } from '../WidgetContext';

function ImageOfTheDay() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['imageOfTheDay'],
    queryFn: () => Promise.resolve('/src/assets/images/horizontal.jpg'),
  });
  return (
    <Card>
      <Settings />
      <img
        src={data}
        alt="of the day"
        className="rounded h-full w-full object-cover"
      />
    </Card>
  );
}

export default ImageOfTheDay;
