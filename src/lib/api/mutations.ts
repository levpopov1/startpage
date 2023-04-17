import axios from 'axios';
import { Widget } from '../../widgets/types';
import { BASE_URL, WidgetResponse } from './index';

type Update = {
  id: string;
  widget: Partial<Widget>;
};

type Create = {
  widget: Partial<Widget>;
};

export async function createWidget({
  widget,
}: Create): Promise<WidgetResponse> {
  const response = await axios.post(`${BASE_URL}/widgets`, widget);
  return response.data;
}

export async function updateWidget({
  id,
  widget,
}: Update): Promise<WidgetResponse> {
  const response = await axios.post(`${BASE_URL}/widgets/${id}`, widget);
  return response.data;
}
