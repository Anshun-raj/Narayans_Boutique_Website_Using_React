import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Product from "./Routes/Product";
import Review from "./Routes/Review";
import Contact from "./Routes/Contact";

function App() {
  return (
    <div>
        <Navbar title="Narayans Yard"/>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/about" element={<About/>} exact/>
          <Route path="/product" element={<Product/>} exact/>
          <Route path="/review" element={<Review/>} exact/>
          <Route path="/contact" element={<Contact/>} exact/>
        </Routes>
    </div>
  );
}

export default App;
