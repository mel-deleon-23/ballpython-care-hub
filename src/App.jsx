import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/Home';
import About from './pages/About';
import CareGuides from './pages/CareGuides';
import FirstTimeOwners from './components/FirstTimeOwners';
import ExperiencedOwners from './components/ExperiencedOwners';
import Resources from './pages/Resources';
import Substrates from './components/Substrates';
import Enclosures from './components/Enclosures';
import Feeding from './components/Feeding';
import Heating from './components/Heating';
import Breeding from './components/Breeding';
import Shedding from './components/Shedding';
import BallPythons from './pages/BallPythons';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import EditContent from './pages/EditContent';
import PostDetails from './components/PostDetails';
import CreateContent from './components/CreateContent';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careguides" element={<CareGuides />} />
          <Route path="/first-time-owners" element={<FirstTimeOwners />} />
          <Route path="/experienced-owners" element={<ExperiencedOwners />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/enclosures" element={<Enclosures />} />
          <Route path="/feeding" element={<Feeding />} />
          <Route path="/heating" element={<Heating />} />
          <Route path="/substrates" element={<Substrates />} />
          <Route path="/shedding" element={<Shedding />} />
          <Route path="/breeding" element={<Breeding />} />
          <Route path="/ballpythons" element={<BallPythons />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/edit/:id" element={<EditContent />} />
          <Route path="/post/:id" element={<PostDetails />} />
          <Route path="/create-content" element={<CreateContent />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
