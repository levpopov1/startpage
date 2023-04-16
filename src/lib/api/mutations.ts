import axios from 'axios';
import { Widget } from '../../widgets/types';

const BASE_URL = 'http://localhost:5000';

type Update = {
  id: string;
  widget: Partial<Widget>;
};

type Create = {
  widget: Partial<Widget>;
};

// type EditableWidgetProps = Pick<Widget, 'row' | 'column' | 'width' | 'height'>;

// function pick<T extends object, K extends keyof T>(obj: T, keys: K[]) {
//   return Object.fromEntries(keys.map((key) => [key, obj[key]]));
// }

export async function createWidget({ widget }: Create) {
  const response = await axios.post(`${BASE_URL}/widgets`, widget);
  return response.data;
}

export async function updateWidget({ id, widget }: Update) {
  const response = await axios.post(`${BASE_URL}/widgets/${id}`, widget);
  return response.data;
}
