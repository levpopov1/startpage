export interface UserWidgetsResponse {
  statusCode: number;
  userWidgets: UserWidgets;
}

export type UserWidgets = UserWidget[];

export type UserWidget = {
  id: string;
  name: string;
  column: number;
  row: number;
  width: number;
  height: number;
};

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
  attributes?: {
    imgae: string;
  };
};
