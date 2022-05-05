import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SignUp from './pages/SignUp';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
