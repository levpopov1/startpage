import { useMemo } from 'react';
import ImageOfTheDay from './ImageOfTheDay';
import Search from './Search';
import Time from './Time';
import { UserWidget, Widget } from './types';
import UserProfile from './UserProfile';
import WidgetContext from './WidgetContext';

type AvailableWidgets = {
  [key: string]: () => JSX.Element;
};

const availableWidgets: AvailableWidgets = {
  imageOfTheDay: ImageOfTheDay,
  time: Time,
  search: Search,
  userProfile: UserProfile,
};

type Props = {
  userWidget: UserWidget;
};

function BaseWidget({ userWidget }: Props) {
  const CurrentWidget = availableWidgets[userWidget.name];
  const widget = useMemo(
    (): Widget => ({
      id: userWidget.id,
      name: userWidget.name,
      location: {
        row: userWidget.row,
        column: userWidget.column,
      },
      size: {
        width: userWidget.width,
        height: userWidget.height,
      },
    }),
    [userWidget]
  );
  return (
    <WidgetContext.Provider value={widget}>
      <CurrentWidget />
    </WidgetContext.Provider>
  );
}

export default BaseWidget;
