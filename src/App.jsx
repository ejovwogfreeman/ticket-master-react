import Header from "./components/Header";
import FeaturedEvents from "./components/FeaturedEvents";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Categories />
      <FeaturedEvents />
      <Footer />
    </div>
  );
}

export default App;
