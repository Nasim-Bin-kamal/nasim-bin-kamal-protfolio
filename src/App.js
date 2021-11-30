import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import SingleProject from './pages/SingleProject/SingleProject';
import "aos/dist/aos.css";

function App() {
  return (
    <div className="App">
      <Home />
      <Router>
        <Routes>
          <Route path="/projects/:projectId" element={<SingleProject />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
