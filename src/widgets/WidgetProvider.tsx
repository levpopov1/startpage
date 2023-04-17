import { createContext, useContext, useReducer } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Widget, Widgets } from './types';
import { getUserWidgets } from '../lib/api/queries';
// import { useQuery } from '@tanstack/react-query';

type Props = {
  children: React.ReactNode;
};

type Action = {
  type: string;
  payload: Widget;
};

// type CTX = {
//   state: Widget[];
//   dispatch: React.Dispatch<Action>;
// };

const initialState: Widgets = [];

const WidgetContext = createContext<Widgets>(initialState);
const WidgetDispatch = createContext<React.Dispatch<Action>>(() => null);

function widgetsReducer(widgets: Widgets, action: Action) {
  switch (action.type) {
    case 'ADD': {
      return [...widgets, action.payload];
    }
    case 'UPDATE': {
      return widgets.map((w) =>
        w.id === action.payload.id ? action.payload : w
      );
    }
    case 'DELETE': {
      return widgets.filter((w) => w.id !== action.payload.id);
    }
    default:
      throw Error(`Unknown action: ${action.type}`);
  }
}

export function WidgetProvider({ children }: Props) {
  const { data } = useQuery({
    queryKey: ['userWidgets'],
    queryFn: () => getUserWidgets('1'),
  });

  const [state, dispatch] = useReducer(
    widgetsReducer,
    initialState,
    () => data?.widgets || initialState
  );

  return (
    <WidgetContext.Provider value={state}>
      <WidgetDispatch.Provider value={dispatch}>
        {children}
      </WidgetDispatch.Provider>
    </WidgetContext.Provider>
  );
}

export function useWidgetContext() {
  const context = useContext(WidgetContext);

  if (!context) {
    throw new Error(
      'Widget.* component must be rendered as a child of Widget component'
    );
  }

  return context;
}

// export default WidgetContext;
