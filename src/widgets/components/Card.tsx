import { ReactNode } from 'react';
import { useWidgetContext } from '../WidgetContext';

type Props = {
  children: ReactNode;
};

function Card({ children }: Props) {
  const { row, column, width, height } = useWidgetContext();
  const rowStart = `row-start-${row}`;
  const rowSpan = `row-span-${height}`;
  const colStart = `col-start-${column}`;
  const colSpan = `col-span-${width}`;
  const position = `${rowStart} ${rowSpan} ${colStart} ${colSpan}`;

  return (
    <div className={`${position} relative bg-white rounded-md p-4`}>
      {children}
    </div>
  );
}

export default Card;
