import { Outlet } from 'react-router-dom';
import GridOverlay from '../components/GridOverlay';

function Main() {
  return (
    <div id="main" className="min-h-screen rainbow-gradient relative">
      <Outlet />
      <GridOverlay />
    </div>
  );
}

export default Main;
