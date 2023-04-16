import { createContext, useContext, useReducer } from 'react';
import { Widget, WidgetsResponse } from './types';
// import { useQuery } from '@tanstack/react-query';

// type Props = {
//   children: React.ReactNode;
// };

// type Action = {
//   type: string;
//   id: string;
//   value: any;
// };

const WidgetContext = createContext<Widget | null>(null);
// const WidgetDispatch = createContext(null);

// async function getUserWidgets() {
//   return fetch('http://localhost:5000/widget').then((response) =>
//     response.json()
//   );
// }

// function widgetsReducer(widgets: Widget[], action: Action) {
//   switch (action.type) {
//     case 'add': {
//       return [
//         ...widgets,
//         {
//           id: action.id,
//           ...action.value,
//         },
//       ];
//     }
//     case 'update': {
//       return widgets.map((w) => (w.id === action.id ? action.value : w));
//     }
//     case 'delete': {
//       return widgets.filter((w) => w.id !== action.id);
//     }
//     default:
//       throw Error(`Unknown action: ${action.type}`);
//   }
// }

// export function WidgetProvider({ children }: Props) {
//   const { isLoading, error, data } = useQuery<WidgetsResponse>({
//     queryKey: ['userWidgets'],
//     queryFn: getUserWidgets,
//   });

//   const [state, dispatch] = useReducer(widgetsReducer, data?.widgets);

//   return (
//     <WidgetContext.Provider value={}>
//       <WidgetDispatch.Provider value={}>{children}</WidgetDispatch.Provider>
//     </WidgetContext.Provider>
//   );
// }

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
