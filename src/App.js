import Home from "./component/Home/Home";
import Nav from "./component/Navbar/Nav";
import Contact from "./component/contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer/Footer";
import Product from "./component/Product/Product";
import ScrollArrow from "./component/scrollbutton/ScroolButton";
function App() {
  return (
    <div className="App_container">
      <BrowserRouter>
        <ScrollArrow />
        <div style={{ backgroundColor: "#101010" }}>
          <Nav />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/products" element={<Product />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
