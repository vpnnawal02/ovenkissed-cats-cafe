import { useState } from 'react'
import Header from '../components/Header'
import About from '../components/About'
import MenuPreview from '../components/Menu_section'
import Reviews from '../components/Reviews'
import Navbar from '../components/Navbar'
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cats from "../pages/Cats";
import Footer from '../components/Footer'
import BookTable from '../pages/BookTable'
import Menu from '../pages/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cats" element={<Cats />} />
        <Route path="/booktable" element={<BookTable />} />
        <Route path="/menu" element={<Menu />} />
        {/* You can add more later: /menu, /contact, etc. */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
