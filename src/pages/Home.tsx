import { useQuery } from '@tanstack/react-query';
import { WidgetsResponse } from '../lib/api/index';
import Widget from '../widgets';

function Home() {
  const { isLoading, error, data } = useQuery<WidgetsResponse>({
    queryKey: ['userWidgets'],
    queryFn: () =>
      fetch('http://localhost:5000/users/1/widgets').then((response) =>
        response.json()
      ),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>error...</p>;

  const items = data?.widgets.map((widget) => {
    return <Widget key={widget.id} widget={widget} />;
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
