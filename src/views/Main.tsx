import { Outlet } from 'react-router-dom';

function Main() {
  return (
    <div id="main" className="min-h-screen rainbow-gradient relative">
      <Outlet />
    </div>
  );
}

export default Main;
