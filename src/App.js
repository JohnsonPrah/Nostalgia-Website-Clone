
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Shop from "./components/Shop"
import Nostalgia from "./components/Nostalgia"
import Ruby from "./components/Ruby"
import Cto from "./components/Cto"
import Reviews from "./components/Reviews"
import Login from "./components/Login"
import About from "./components/About"
import Contact from "./components/Contact"
import Subscribe from "./components/Subscribe"
import { Route,Routes } from "react-router-dom"


function App() {
  return (
    <div className="bg-black ">
      <p className="text-white hidden md:block bg-colprm text-center py-1 font-bold">FREE SHIPPING AUSTRALIA.WIDE ON ORDERS $49.95</p>
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/ruby" element={<Ruby />} />
          <Route exact path="/reviews" element={<Reviews />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/nostalgia" element={<Nostalgia /> } />
          <Route exact path="/subscribe" element={<Subscribe /> } />
          <Route exact path="/login" element={<Login /> } /> 
          <Route exact path="/contact" element={<Contact /> } /> 
      </Routes>
      <Cto /> 
      <Footer />
    </div>
  );
};

export default App;
