import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import SingleProject from './pages/SingleProject/SingleProject';
import "aos/dist/aos.css";
import Blogs from './pages/Blogs/Blogs';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects/:projectId" element={<SingleProject />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
