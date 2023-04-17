import { ReactNode } from 'react';
import { useWidgetContext } from '../WidgetContext';

type Props = {
  children: ReactNode;
};

function Card({ children }: Props) {
  const { widget } = useWidgetContext();
  const rowStart = `row-start-${widget.row}`;
  const rowSpan = `row-span-${widget.height}`;
  const colStart = `col-start-${widget.column}`;
  const colSpan = `col-span-${widget.width}`;
  const position = `${rowStart} ${rowSpan} ${colStart} ${colSpan}`;

  return (
    <div className={`${position} relative bg-white rounded-md p-4`}>
      {children}
    </div>
  );
}

export default Card;
