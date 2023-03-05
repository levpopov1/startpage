import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import NotFound from './views/NotFound';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
