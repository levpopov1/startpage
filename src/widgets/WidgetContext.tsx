import { createContext, useContext } from 'react';
import { Widget } from './types';

type Ctx = {
  widget: Widget;
  editWidget: (update: Partial<Widget>) => void;
};

const WidgetContext = createContext<Ctx>({
  widget: {} as Widget,
  editWidget: () => null,
});

export function useWidgetContext() {
  const context = useContext(WidgetContext);

  if (!context) {
    throw new Error(
      'Widget.* component must be rendered as a child of Widget component'
    );
  }

  return context;
}

export default WidgetContext;
