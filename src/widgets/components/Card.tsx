import { ReactNode } from 'react';
import { useWidgetContext } from '../WidgetContext';

type Props = {
  children: ReactNode;
};

function Card({ children }: Props) {
  const { location, size } = useWidgetContext();
  const rowStart = `row-start-${location.row}`;
  const rowSpan = `row-span-${size.height}`;
  const colStart = `col-start-${location.column}`;
  const colSpan = `col-span-${size.width}`;
  const position = `${rowStart} ${rowSpan} ${colStart} ${colSpan}`;

  return <div className={position}>{children}</div>;
}

export default Card;
