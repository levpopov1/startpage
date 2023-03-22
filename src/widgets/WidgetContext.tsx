import { createContext, useContext } from 'react';

export type WidgetProps = {
  location: {
    column: number;
    row: number;
  };
  size: {
    width: number;
    height: number;
  };
};

const WidgetContext = createContext<WidgetProps | null>(null);

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
