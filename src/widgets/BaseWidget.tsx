import { Widget } from './types';
import WidgetContext from './WidgetContext';
import availableWidgets from './availableWidgets';

type Props = {
  widget: Widget;
};

function BaseWidget({ widget }: Props) {
  const CurrentWidget = availableWidgets[widget.name];

  return (
    <WidgetContext.Provider value={widget}>
      <CurrentWidget />
    </WidgetContext.Provider>
  );
}

export default BaseWidget;
