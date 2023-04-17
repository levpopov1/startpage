import { Widget, Widgets } from '../../widgets/types';

export const BASE_URL = 'http://localhost:5000';

export interface WidgetResponse {
  widget: Widget;
}

export interface WidgetsResponse {
  widgets: Widgets;
}
