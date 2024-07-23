import Menu from "./components/Menu";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Vehicles from "./components/Vehicles";
import Services from "./components/Services";
import Contact from "./components/Contact";
import AddVehicle from "./components/addVehicals";

import {Route,Routes} from "react-router-dom";

function App() {
  return (
    <>
    <Menu/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/Vehicles" element={<Vehicles/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/Contact" element={<Contact />}/>
      <Route path="/addVechicals" element={<AddVehicle/>}/>
    
    </Routes>
    <Footer/>
    </>

  );
}

export default App;
