import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useWidgetContext } from '../WidgetContext';
import TextInput from './forms/TextInput';
import { updateWidget } from '../../lib/api/mutations';
import { Widget } from '../types';

function Settings() {
  const { id, row, column, width, height } = useWidgetContext();

  const [widget, setWidget] = useState({
    row,
    column,
    width,
    height,
  });

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: updateWidget,
    onSuccess: (response) => {
      queryClient.refetchQueries(['userWidgets']);
      queryClient.setQueryData(['userWidgets', id], response.widget);
    },
  });

  const editWidget = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({
      id,
      widget,
    });
  };

  const updateWidgetProps = (
    e: React.ChangeEvent<HTMLInputElement>,
    prop: keyof Widget
  ) => {
    return setWidget((prev) => ({ ...prev, [prop]: Number(e.target.value) }));
  };

  return (
    <div className="max-w-sm absolute right-0 top-0 p-4 rounded m-4 bg-slate-300">
      <form onSubmit={editWidget}>
        <div className="flex flex-row justify-between mb-4">
          <div className="flex flex-col justify-between">
            <h4 className="mt-2 text-lg leading-8 text-gray-600">Size</h4>
            <TextInput
              id="width"
              title="Width"
              value={widget.width}
              onChange={updateWidgetProps}
            />
            <TextInput
              id="height"
              title="Height"
              value={widget.height}
              onChange={updateWidgetProps}
            />
          </div>
          <div className="flex flex-col justify-between">
            <h4 className="mt-2 text-lg leading-8 text-gray-600">Location</h4>
            <TextInput
              id="row"
              title="Row"
              value={widget.row}
              onChange={updateWidgetProps}
            />
            <TextInput
              id="column"
              title="Column"
              value={widget.column}
              onChange={updateWidgetProps}
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Settings;
