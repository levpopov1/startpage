import { useQuery } from '@tanstack/react-query';
import { UserWidgets } from '../widgets/types';
import BaseWidget from '../widgets';

function Home() {
  const { isLoading, error, data } = useQuery<UserWidgets>({
    queryKey: ['userWidgets'],
    queryFn: () =>
      fetch('http://localhost:5000/widget').then((response) => response.json()),
  });

  if (isLoading) return <p>Loadign...</p>;
  if (error) return <p>error...</p>;

  const items = data?.userWidgets.map((userWidget) => {
    return <BaseWidget key={userWidget.id} userWidget={userWidget} />;
  });

  return (
    <div
      id="home"
      className="grid grid-cols-12 grid-rows-12 gap-4 mx-4 py-4 h-screen"
    >
      {items}
    </div>
  );
}

export default Home;
