import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import BasicShapes from './pages/BasicShapes';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/basic-shapes" element={<BasicShapes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
