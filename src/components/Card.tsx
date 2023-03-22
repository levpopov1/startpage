import { ReactNode } from 'react';
// import { useWidgetContext } from '../widgets/WidgetContext';

type Props = {
  location: {
    column: number;
    row: number;
  };
  size: {
    width: number;
    height: number;
  };
  children: ReactNode;
};

function Card({ location, size, children }: Props) {
  // const rowStart = `row-start-${location.row}`;
  // const rowSpan = `row-span-${size.height}`;
  // const colStart = `col-start-${location.column}`;
  // const colSpan = `col-span-${size.width}`;

  const position = `row-start-${location.row} row-span-${size.height} col-start-${location.column} col-span-${size.width}`;
  return <div className={position}>{children}</div>;
}

export default Card;
