import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import WhatWeOffer from "./components/WhatWeOffer";
import Classes from "./components/Classes";
import Location from "./components/Location";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutUs />
      <WhatWeOffer />
      <Classes />
      <Location />
    </div>
  );
}

export default App;
