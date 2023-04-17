import { useMemo, useState } from 'react';
import { Widget } from './types';
import WidgetContext from './WidgetContext';
import availableWidgets from './availableWidgets';

type Props = {
  widget: Widget;
};

function BaseWidget({ widget }: Props) {
  const ActiveWidget = availableWidgets[widget.name];
  const [currentWidget, setCurrentWidget] = useState(widget);

  function editWidget(update: Partial<Widget>) {
    return setCurrentWidget((prev) => ({ ...prev, ...update }));
  }

  const contextValue = useMemo(
    () => ({
      widget: currentWidget,
      editWidget,
    }),
    [currentWidget]
  );

  return (
    <WidgetContext.Provider value={contextValue}>
      <ActiveWidget />
    </WidgetContext.Provider>
  );
}

export default BaseWidget;
