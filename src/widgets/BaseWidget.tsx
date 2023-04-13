import { useMemo } from 'react';
import { UserWidget, Widget } from './types';
import WidgetContext from './WidgetContext';
import availableWidgets from './availableWidgets';

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
