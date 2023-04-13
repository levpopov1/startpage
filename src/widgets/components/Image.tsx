import { useWidgetContext } from '../WidgetContext';

function Image() {
  const { attributes } = useWidgetContext();
  return (
    <img
      src={attributes.image}
      alt={attributes.description}
      className="rounded h-full w-full object-cover"
    />
  );
}

export default Image;
