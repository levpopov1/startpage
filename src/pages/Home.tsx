import { useQuery } from '@tanstack/react-query';
import availableWidgets from '../widgets';

type UserWidgets = {
  userWidgets: UserWidget[];
};

type UserWidget = {
  id: string;
  name: string;
  column: number;
  row: number;
  width: number;
  height: number;
};

function Home() {
  const { isLoading, error, data } = useQuery<UserWidgets>({
    queryKey: ['userWidgets'],
    queryFn: () =>
      fetch('http://localhost:5000/widget').then((response) => response.json()),
  });

  if (isLoading) return <p>Loadign...</p>;
  if (error) return <p>error...</p>;

  console.log(data);

  const items = data?.userWidgets.map((widget, index) => {
    const Widget = availableWidgets[widget.name];
    return (
      <Widget
        key={widget.id + index.toString()}
        name={widget.name}
        location={{ column: widget.column, row: widget.row }}
        size={{ height: widget.height, width: widget.width }}
      />
    );
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
