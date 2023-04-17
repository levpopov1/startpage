import axios from 'axios';
import { BASE_URL, WidgetResponse, WidgetsResponse } from './index';

export async function getUserWidgets(id: string): Promise<WidgetsResponse> {
  const response = await axios.get(`${BASE_URL}/users/${id}/widgets`);
  return response.data;
}

export async function getWidgetById(id: string): Promise<WidgetResponse> {
  const response = await axios.get(`${BASE_URL}/widgets/${id}`);
  return response.data;
}
