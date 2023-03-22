import ImageOfTheDay from './ImageOfTheDay';
import Search from './Search';
import Time from './Time';

type WidgetProps = {
  name: string;
  location: {
    column: number;
    row: number;
  };
  size: {
    width: number;
    height: number;
  };
};

type AvailableWidgets = {
  [key: string]: (widgetProps: WidgetProps) => JSX.Element;
};

const availableWidgets: AvailableWidgets = {
  imageOfTheDay: ImageOfTheDay,
  time: Time,
  search: Search,
};

export default availableWidgets;
