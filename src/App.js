import './App.css';
import Menu from "../src/Component/Menu";
import Home from "../src/Home/Index";
import Error from './Component/Error';
import {  Routes, Route } from "react-router-dom";
import Footer from './Component/Footer';
import Contact from "../src/Contact/Index";
import About from "../src/About/Index";
import CinmaticVideo from './Category/CinmaticVideo/CinmaticVideo';
import Cinmaticv from "./Category/CinmaticVideo/Cinmaticv";

function App() {
  return (
    <div>
      
      <Menu/>
      <Routes>
        <Route path="*" element={<Error/>} />
        <Route path="/" exact element={<Home/>} />
        <Route path="/contact-us" element={<Contact/>} />
        <Route path="/about-us" element={<About/>} />
        <Route path="/cinmatic-video" element={<CinmaticVideo/>} />
        <Route path="cinmaticv/:id" element={<Cinmaticv/>} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
