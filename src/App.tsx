import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import NotFound from './views/NotFound';
import Home from './pages/Home';
import Settings from './pages/Settings';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
