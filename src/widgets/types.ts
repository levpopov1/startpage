export interface WidgetsResponse {
  statusCode: number;
  widgets: Widgets;
}

export type Widgets = Widget[];

export type Widget = {
  id: string;
  name: string;
  location: {
    column: number;
    row: number;
  };
  size: {
    width: number;
    height: number;
  };
  attributes: {
    image: string;
    url: string;
    description: string;
  };
};
