import { createContext, useContext } from 'react';
import { Widget } from './types';

const WidgetContext = createContext<Widget | null>(null);

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
