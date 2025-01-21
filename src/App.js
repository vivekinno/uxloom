
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import { Services } from './pages/Services';
import { AboutUs } from './pages/AboutUs';
import Portfolio from './pages/Portfolio';
import {Contact} from './pages/Contact'
import Footer from './components/common/Footer';
import { CommonIcons } from './components/common/CommonIcons';

function App() {
  
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <CommonIcons className="hidden lg:block" />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
