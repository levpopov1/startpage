import { useState } from 'react';

type ToggleProps = {
  toggleOverlay: () => void;
};

function GridToggle({ toggleOverlay }: ToggleProps) {
  return (
    <div className="overlayToggle">
      <button
        type="button"
        className="absolute bottom-0 right-0 m-8"
        onClick={toggleOverlay}
      >
        toggle overlay
      </button>
    </div>
  );
}

function GridItem() {
  return (
    <div className="bg-blue-200 bg-opacity-50 outline-dashed outline-3 outline-blue-700" />
  );
}

function GridOverlay() {
  const [showGridOverlay, setShowGridOverlay] = useState(false);

  const toggleOverlay = () => {
    setShowGridOverlay((prev) => !prev);
  };

  const gridItems = showGridOverlay
    ? Array.from<JSX.Element>({ length: 144 }).fill(<GridItem />)
    : [];

  return (
    <>
      {showGridOverlay && (
        <div className="absolute top-0 left-0 right-0 grid grid-cols-12 grid-rows-12 gap-4 mx-4 py-4 h-screen">
          {gridItems}
        </div>
      )}

      <GridToggle toggleOverlay={toggleOverlay} />
    </>
  );
}

export default GridOverlay;
