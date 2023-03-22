import { useQuery } from '@tanstack/react-query';

function Image() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['imageOfTheDay'],
    queryFn: () => Promise.resolve('/src/assets/images/horizontal.jpg'),
  });

  return (
    <img
      src={data}
      alt="of the day"
      className="rounded h-full w-full object-cover"
    />
  );
}

export default Image;
