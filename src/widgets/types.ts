export type Widgets = Widget[];

export type Widget = {
  id: string;
  name: string;
  column: number;
  row: number;
  width: number;
  height: number;
  image?: string;
  url?: string;
  description?: string;
};
