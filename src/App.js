import "./App.css";
import Header from "../src/components/Header";
import Hero from "./components/Hero";
import Slider from "./components/Slider/Slider";
import Virtual from "./components/Virtual/Virtual";
import Products from "./components/Products/Products";
import Testinomials from "./components/Testimonials/Testimonials";
import Reviews from "./components/Reviews/Reviews";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products />
      <Testinomials />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
