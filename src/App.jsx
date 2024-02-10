import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import FeedBacks from "./components/Feedbacks";
import Loader from "./components/Loader";
import Stars from "./components/canvas/Stars";
import Tech from "./components/Tech";
import Works from "./components/Works";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <FeedBacks />
      </div>
      <div className="relative z-0">
        <Contact />
        <Stars />
      </div>
    </BrowserRouter>
  );
}

export default App;
