import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import WhatWeOffer from "./components/WhatWeOffer";
import Classes from "./components/Classes";
import Location from "./components/Location";
import Gallery from "./components/Gallery";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutUs />
      <WhatWeOffer />
      <Classes />
      <Gallery />
      <Location />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
