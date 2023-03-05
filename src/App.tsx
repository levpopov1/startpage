import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import NotFound from './views/NotFound';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
