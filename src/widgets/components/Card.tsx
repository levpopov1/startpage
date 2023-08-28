import { ReactNode, useState } from 'react';
import { useWidgetContext } from '../WidgetContext';

type Props = {
  children: ReactNode;
};

function Card({ children }: Props) {
  const { widget, editWidget } = useWidgetContext();
  const rowStart = `row-start-${widget.row}`;
  const rowSpan = `row-span-${widget.height}`;
  const colStart = `col-start-${widget.column}`;
  const colSpan = `col-span-${widget.width}`;
  const position = `${rowStart} ${rowSpan} ${colStart} ${colSpan}`;

  const [cursorStart, setCursorStart] = useState({ x: 0, y: 0 });

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('Drag start');
    e.currentTarget.classList.add('absolute');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setDragImage(new Image(), 0, 0);

    setCursorStart({ x: e.clientX, y: e.clientY });
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('Drag end');
    e.currentTarget.classList.remove('absolute');
    e.currentTarget.removeAttribute('style');

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const quardantWidth = (windowWidth - 13 * 16) / 12;
    const quardantHeight = (windowHeight - 13 * 16) / 12;

    const itemX = e.clientX;
    const itemY = e.clientY;

    const nearestRow = Math.floor(itemY / quardantHeight);
    const nearestCol = Math.floor(itemX / quardantWidth);

    const nearestRowInBounds =
      nearestRow > 12 ? 12 : nearestRow < 1 ? 1 : nearestRow;
    const nearestColInBounds =
      nearestCol > 12 ? 12 : nearestCol < 1 ? 1 : nearestCol;

    console.log('Row: ', nearestRow);
    console.log('Col: ', nearestCol);

    console.log('cursorStart', cursorStart);

    editWidget({ row: nearestRowInBounds, column: nearestColInBounds });
    setCursorStart({ x: 0, y: 0 });
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    // e.preventDefault();
    if (e.clientX > window.innerWidth) return;
    if (e.clientY > window.innerHeight) return;

    console.log('X', e.clientX);
    console.log('Y', e.clientY);

    if (e.clientX !== 0 && e.clientY !== 0) {
      e.currentTarget.style.top = `${e.clientY - cursorStart.y}px`;
      e.currentTarget.style.left = `${e.clientX - cursorStart.x}px`;
    }
  };

  return (
    <div
      className={`${position} relative bg-white rounded-md p-4`}
      // style={{ resize: 'both', overflow: 'auto' }}
      onDrag={handleDrag}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      draggable
    >
      {children}
    </div>
  );
}

export default Card;
